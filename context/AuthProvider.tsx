import { createContext, PropsWithChildren, useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { LoginCredentials, LoginResponse, useLogin, useLogout } from "@/controller/authController";

type AuthContextType = {
  auth: LoginResponse["data"] | undefined;
  isLoggedIn: boolean;
  logIn: (credentials: LoginCredentials) => Promise<LoginResponse>;
  logOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const loginMutation = useLogin();
  const logoutMutation = useLogout();

 
  const auth = queryClient.getQueryData<LoginResponse["data"]>(["auth"]);
  const isLoggedIn = !!auth?.token;

  const logIn = async (credentials: LoginCredentials) => {
    const data = await loginMutation.mutateAsync(credentials);
    return data;
  };

  const logOut = async () => {
    try {
      await logoutMutation.mutateAsync();
    } finally {
      queryClient.removeQueries({ queryKey: ["auth"] });
      router.replace("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        isLoggedIn,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
