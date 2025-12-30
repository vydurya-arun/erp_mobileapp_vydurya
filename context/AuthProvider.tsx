import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { SplashScreen, useRouter } from "expo-router";
import { LoginCredentials, LoginResponse, useLogin, useLogout } from "@/controller/authController";
import AsyncStorage from '@react-native-async-storage/async-storage';



type AuthContextType = {
  auth: any;
  isLoggedIn: boolean;
  isReady: boolean;
  logIn: (credentials: LoginCredentials) => Promise<LoginResponse>;
  logOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const storeAuthKey = "auth";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const loginMutation = useLogin();
  const logoutMutation = useLogout();
  const [auth, setAuth] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
 
  const storeAuthState = async(newState:{isLoggedIn:boolean})=>{
    try {
      const jsonValue = JSON.stringify(newState);

      await AsyncStorage.setItem(storeAuthKey, jsonValue);
    } catch (error) {
      console.log("Saving Error",error)
    }
  }
 
  const logIn = async (credentials: LoginCredentials) => {
    
    const data = await loginMutation.mutateAsync(credentials);
    const tokens = data.data?.token;
    if(tokens){
      setAuth(data);
      storeAuthState({isLoggedIn:!!tokens});
    }

    return data;
  };

  const logOut = async () => {
    try {
      await logoutMutation.mutateAsync();
      setIsLoggedIn(false);
      storeAuthState({isLoggedIn:false});
    }catch(error){
      console.log("Logout Error",error)
    }
     finally {
      queryClient.removeQueries({ queryKey: ["auth"] });
      router.replace("/login");
    }
  };

  useEffect(()=>{
    const getAuthFormStorage = async()=>{
      try {
        const value = await AsyncStorage.getItem(storeAuthKey);
        if(value){
          const parsedValue = JSON.parse(value);
          setIsLoggedIn(parsedValue.isLoggedIn);
        }
      } catch (error) {
        console.log("Getting Error from Storage",error)
      }
      setIsReady(true);
    };

    getAuthFormStorage();
  },[])



  return (
    <AuthContext.Provider
      value={{
        auth,
        isLoggedIn,
        isReady,
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
