class SessionHelper {
  setToken(token) {
    if (typeof window !== 'undefined') {
      return localStorage.setItem("Token", token);

    }


  }
  getToken() {

    if (typeof window !== 'undefined') {
      return localStorage.getItem("Token");

    }

  }
  setUserDetails(userDetails) {
    if (typeof window !== 'undefined') {
      localStorage.setItem("UserDetails", JSON.stringify(userDetails));

    }


  }
  getUserDetails() {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem("UserDetails"));
    }


  }

  setEmail(email) {
    if (typeof window !== 'undefined') {
      return localStorage.setItem("Email", email);

    }


  }
  getEmail() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("Email");
    }


  }

  setOTP(OTP) {
    if (typeof window !== 'undefined') {
      return localStorage.setItem("OTP", OTP);
    }


  }
  getOTP() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("OTP");
    }


  }

  removeSession() {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      window.location.href = "/login";
    }


  }
}

export const {
  setToken,
  getToken,
  setUserDetails,
  getUserDetails,
  removeSession,
  setEmail,
  getEmail,
  setOTP,
  getOTP,
} = new SessionHelper();
