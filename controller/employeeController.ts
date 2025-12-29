import { Employee } from "@/app/(root)/meeting/meetingList";
import { API_URL } from "@/constants/apiUrlConstants";
import { axiosPrivate } from "@/hooks/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface EmployeesResponse {
  success: boolean;
  employees: Employee[];
  total: number;
  page: number;
  totalPages: number;
}

export const useGetAllEmployees = () => {
  return useQuery({
    queryKey: ["employee"], // cache key
    queryFn: async () => {
      try {
        const res = await axiosPrivate.get<EmployeesResponse>(API_URL.EMPLOYEELIST_URL);
        return res.data?.employees;

      } catch (err:any) {
      
        const message = err.response?.data?.error || err.response?.data?.message || "Failed to fetch Employee";
        throw new Error(message); 
      }
    },
    initialData: [],
    retry: 1, 
  });
};

// Post product controller
export const useCheckInController = () => {
  const queryClient = useQueryClient();
  return useMutation({

    mutationFn: async () => {
      try {
        const res = await axiosPrivate.post(API_URL.CHECKIN_URL);
        return res.data; 
      } catch (err:any) {
      
        const message = err.response?.data?.error || err.response?.data?.message || "Failed to fetch Checkin";
        throw new Error(message); 
      }
    },
    onSuccess: (data) => {
      if (data.success) {
        // Invalidate and refetch the products query
        queryClient.invalidateQueries({ queryKey: ["check"] });
      }
    }
  });
};

export const useCheckOutController = () => {
  const queryClient = useQueryClient();
  return useMutation({

    mutationFn: async () => {
      try {
        const res = await axiosPrivate.post(API_URL.CHECKOUT_URL);
        return res.data; 
      } catch (err:any) {
      
        const message = err.response?.data?.error || err.response?.data?.message || "Failed to fetch Checkout";
        throw new Error(message); 
      }
    },
    onSuccess: (data) => {
      if (data.success) {
        // Invalidate and refetch the products query
        queryClient.invalidateQueries({ queryKey: ["check"] });
      }
    }
  });
};
