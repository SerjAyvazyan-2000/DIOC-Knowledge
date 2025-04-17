export const TokenService = {
  ACCESS_TOKEN_KEY: "access_token",
  REFRESH_TOKEN_KEY: "refresh_token",

  getAccessToken() {
    try {
      return localStorage.getItem(this.ACCESS_TOKEN_KEY);
    } catch (error) {
      console.error("Error getting access token:", error);
      return null;
    }
  },

  getRefreshToken() {
    try {
      return localStorage.getItem(this.REFRESH_TOKEN_KEY);
    } catch (error) {
      console.error("Error getting refresh token:", error);
      return null;
    }
  },

  setTokens(accessToken, refreshToken) {
    try {
      if (!accessToken || !refreshToken) {
        throw new Error("Invalid tokens provided");
      }
      localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
      localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
      return true;
    } catch (error) {
      console.error("Error setting tokens:", error);
      return false;
    }
  },

  clearTokens() {
    try {
      localStorage.removeItem(this.ACCESS_TOKEN_KEY);
      localStorage.removeItem(this.REFRESH_TOKEN_KEY);
      return true;
    } catch (error) {
      console.error("Error clearing tokens:", error);
      return false;
    }
  },

  isAuthenticated() {
    return !!this.getAccessToken();
  },
};

export default TokenService;
