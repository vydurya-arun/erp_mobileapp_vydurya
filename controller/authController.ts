import { API_URL } from "@/constants/apiUrlConstants";
import { axiosPublic } from "@/hooks/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    type: string;
    token: string;
  };
  message: string;
}

// ✅ LOGIN
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: async (credentials) => {
      const res = await axiosPublic.post<LoginResponse>(
        API_URL.LOGIN_URL,
        credentials,
        { headers: { "Content-Type": "application/json" } }
      );
      return res.data;
    },

    onSuccess: (data) => {
      if (data.success) {
        queryClient.setQueryData(["auth"], data.data);
      }
    },
  });
};

// ✅ LOGOUT
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const res = await axiosPublic.post(API_URL.LOGOUT_URL);
      return res.data;
    },

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["auth"] });
    },
  });
};
