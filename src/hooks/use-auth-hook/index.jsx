import axios from "axios";
import { useState } from "react";
import { BASE_API_URL } from "../../helpers/api";

export const useAuthHook = () => {
  const [user, setUser] = useState(null);

  const signUp = async (params, role) => {
    let url = `${BASE_API_URL}/auth/${role}/create`;
    try {
      const response = await axios.post(url, params);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  return {
    signUp,

    user,
    setUser,
  };
};
