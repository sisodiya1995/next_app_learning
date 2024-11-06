// components/AuthWrapper.tsx
"use client";
import { useEffect, useState } from "react";
import nookies from "nookies";

import Header from "./Header";
import NonAuthHeader from "./NonAuthHeader";

const AuthWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = nookies.get(null).token;
  // console.log(token ,"12")
  useEffect(() => {
    // Check for token in cookies when component mounts

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  return isAuthenticated ? <Header /> : <NonAuthHeader />;
};

export default AuthWrapper;
