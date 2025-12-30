
import { API_URL } from "@/constants/apiUrlConstants";
import { axiosPrivate } from "@/hooks/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface EmployeesResponse {
  success: boolean;
  employees: any[];
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

export interface AttendanceSession {
  _id: string;
  checkIn: string;
  checkOut?: string;
  duration?: number;
  checkIn_ist: string;
  checkOut_ist?: string;
}

export interface Attendance {
  _id: string;
  employee: string;
  date: string;
  sessions: AttendanceSession[];
}

export interface AttendanceResponse {
  success: boolean;
  attendance: Attendance;
}

export const useGetAttendanceController = () => {
  return useQuery({
    queryKey: ["attendance"],
    queryFn: async () => {
      try {
        const res = await axiosPrivate.get<AttendanceResponse>(API_URL.ATTENDANCE_URL);
        return res.data?.attendance; 
      } catch (err:any) {
        const message = err.response?.data?.error || err.response?.data?.message || "Failed to fetch Attendance";
        throw new Error(message); 
      }
    },
    initialData: null,
    retry: 1, 
  });
};

export const useGetRecentActivityController = () => {
  return useQuery({
    queryKey: ["recentActivity"],
    queryFn: async () => {
      try {
        const res = await axiosPrivate.get<AttendanceResponse>(API_URL.RECENTACTIVITY_URL);
        return res.data?.attendance; 
      } catch (err:any) {
        const message = err.response?.data?.error || err.response?.data?.message || "Failed to fetch Attendance";
        throw new Error(message); 
      }
    },
    initialData: null,
    retry: 1, 
  });
};
