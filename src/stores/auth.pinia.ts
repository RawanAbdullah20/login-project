import { defineStore } from "pinia";
import axiosInstance from "@/axios";

export const useAuthStore = defineStore("auth", () => {
  const login = async (data: { email: string; password: string }) => {
    await axiosInstance.post("/login", data);
    console.log("login", data);
    return data;
  };
  return { login };
});
