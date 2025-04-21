import api from "../api";
import TokenService from "./tokenService";

const AuthService = {
  async login(credentials) {
    try {
      const response = await api.post("/users/login/", credentials);
      const { access, refresh } = response.data;

      if (!access || !refresh) {
        throw new Error("Invalid token data received");
      }

      const tokenSet = TokenService.setTokens(access, refresh);
      if (!tokenSet) {
        throw new Error("Failed to store tokens");
      }

      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  async register(userData) {
    try {
      const response = await api.post("/users/register/", userData);
      const { access, refresh } = response.data;

      if (!access || !refresh) {
        throw new Error("Invalid token data received");
      }

      const tokenSet = TokenService.setTokens(access, refresh);
      if (!tokenSet) {
        throw new Error("Failed to store tokens");
      }
      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  async requestOtp(email) {
    try {
      const response = await api.post("/users/request_otp/", { email });
      return response.data;
    } catch (error) {
      console.error("OTP request error:", error);
      throw error;
    }
  },

  logout() {
    TokenService.clearTokens();
  },
};

export default AuthService;
