import { API_URL } from "@/constants/apiUrlConstants";
import { axiosPublic } from "@/hooks/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  user: {
    id: string;
    email: string;
    name: string;
  };
  message: string;
}



export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: async (credentials: LoginCredentials) => {
      const res = await axiosPublic.post<LoginResponse>(
        API_URL.LOGIN_URL,
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    },

    onSuccess: (data) => {
      if (data.success) {
        queryClient.setQueryData(["auth"], data.user);
      }
    },
  });
};


export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation<{ success: boolean }, Error, void>({
    mutationFn: async () => {
      const res = await axiosPublic.post<{ success: boolean }>(
        API_URL.LOGOUT_URL
      );
      return res.data;
    },

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["auth"] });
    },
  });
};

