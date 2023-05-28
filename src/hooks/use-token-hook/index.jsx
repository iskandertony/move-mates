import React, { useState } from "react";

const useTokenHook = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    return tokenString ? tokenString : null
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useTokenHook;
