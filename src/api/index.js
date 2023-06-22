import axios from "axios";
import { BASE_API_URL } from "../helpers/api";

export const request = async (url, method, payload, formData, params) => {
  const token = sessionStorage.getItem("token");
  const api = BASE_API_URL;

  try {
    const res = await axios({
      url: `${api}${url}`,
      headers: {
        ...(formData && { "Content-Type": "multipart/form-data" }),
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      method,
      data: payload,
      params: params,
    });
    return res.data;
  } catch (error) {
    const href = window.location.href;
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      if (!href.includes("/login") && !href.includes("/auth")) {
        document.location.href = "/login";
      }
    }

    throw error;
  }
};


export async function login(data) {
  return request(`/auth/login`, "POST", data);
}

export async function getUser(role) {
  return request(`/api/${role}/me`, "GET");
}

export async function signUp(data, role) {
  return request(`/auth/${role}/create`, "POST", data);
}

export async function createAppointments(data) {
  return request(`/api/coaches/appointments`, "POST", data);
}

export async function getAppointments(filter) {
  return request(
    `/api/coaches/appointments/getUpcomming`,
    "GET",
    null,
    null,
    filter
  );
}

export async function getClient(id) {
  return request(`/api/coaches/clients/${id}`, "GET");
}

export async function getClientsList(filter) {
  return request(`/api/coaches/clients`, "GET", null, null, filter);
}
