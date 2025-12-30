import { API_URL } from "@/constants/apiUrlConstants";
import { axiosPrivate, axiosPublic } from "@/hooks/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    employeeId: string;
    phone: string;
    status: string;
  };
  message: string;
}

export interface ProfileResponse {
  success: boolean;
  token: string;
  profile: {
    id: string;
    name: string;
    email: string;
    employeeId: string;
    phone: string;
    status: string;
    joinDate: string;
    address: string;
    salary: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
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

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        const res = await axiosPrivate.get<ProfileResponse>(API_URL.PROFILE_URL);
        return res.data?.profile;
      } catch (err: any) {
        const message =
          err.response?.data?.error ||
          err.response?.data?.message ||
          "Failed to fetch Employee";
        throw new Error(message);
      }
    },
    retry: 1,
  });
};
