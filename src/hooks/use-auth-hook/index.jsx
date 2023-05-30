import axios from "axios";
import { BASE_API_URL } from "../../helpers/api";
export const useAuthHook = () => {
  const signUp = async (params, role) => {
    try {
      const response = await axios.post(
        `${BASE_API_URL}/auth/${role}/create`,
        params
      );
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  return {
    signUp,
  };
};
