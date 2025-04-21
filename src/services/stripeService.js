import axios from "axios";
import { validateFeedbackData } from "../utils/helper";

const StripeService = {
  async sendFeedback(feedbackData) {
    try {
      if (!import.meta.env.VITE_STRIPE_ENDPOINT) {
        throw new Error("Feedback endpoint is not configured");
      }

      if (!import.meta.env.VITE_STRIPE_API_KEY) {
        throw new Error("Stripe API key is not configured");
      }

      validateFeedbackData(feedbackData);

      const formattedData = {
        data: {
          fullname: feedbackData.fullname.trim(),
          phoneNumber: feedbackData.phoneNumber.trim(),
          email: feedbackData.email.trim().toLowerCase(),
          message: feedbackData.message.trim(),
          privacyPolicyConsent: feedbackData.privacyPolicyConsent,
        },
      };

      const baseEndpoint = import.meta.env.VITE_STRIPE_ENDPOINT.replace(
        /\/$/,
        ""
      );
      const endpoint = `${baseEndpoint}/feedback-requests`;

      const response = await axios.post(endpoint, formattedData, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRIPE_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      });

      if (!response.data) {
        throw new Error("No data received from server");
      }

      return response.data;
    } catch (error) {
      if (error.name === "ValidationError") {
        throw error;
      } else if (error.response) {
        throw new Error(
          `Server Error: ${
            error.response.data.message || error.response.status
          }`
        );
      } else if (error.request) {
        throw new Error(
          "No response received from server. Please check your connection."
        );
      } else {
        throw new Error(`Request Error: ${error.message}`);
      }
    }
  },

  async getArticleCategories() {
    try {
      if (!import.meta.env.VITE_STRIPE_ENDPOINT) {
        throw new Error("Stripe endpoint is not configured");
      }

      const baseEndpoint = import.meta.env.VITE_STRIPE_ENDPOINT.replace(
        /\/$/,
        ""
      );
      const endpoint = `${baseEndpoint}/articles?populate=*&sort=createdAt:desc`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRIPE_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      });

      if (!response.data) {
        throw new Error("No data received from server");
      }

      return response.data.data;
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.data?.error?.message ||
          error.response.data?.message ||
          `Server Error: ${error.response.status}`;
        throw new Error(errorMessage);
      } else if (error.request) {
        throw new Error(
          "No response received from server. Please check your connection."
        );
      } else {
        throw new Error(`Request Error: ${error.message}`);
      }
    }
  },

  async getArticleById(id) {
    try {
      if (!import.meta.env.VITE_STRIPE_ENDPOINT) {
        throw new Error("Stripe endpoint is not configured");
      }

      const baseEndpoint = import.meta.env.VITE_STRIPE_ENDPOINT.replace(
        /\/$/,
        ""
      );
      const endpoint = `${baseEndpoint}/articles/${id}?populate=*&sort=createdAt:desc`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRIPE_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      });

      return response.data.data;
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.data?.error?.message ||
          error.response.data?.message ||
          `Server Error: ${error.response.status}`;
        throw new Error(errorMessage);
      }
    }
  },
};

export default StripeService;
