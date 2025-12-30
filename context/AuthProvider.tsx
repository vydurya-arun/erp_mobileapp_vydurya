import { LoginCredentials, LoginResponse, useLogin } from "@/controller/authController";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";



type AuthContextType = {
  auth: any;
  isLoggedIn: boolean;
  isReady: boolean;
  logIn: (credentials: LoginCredentials) => Promise<LoginResponse>;
  logOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const storeAuthKey = "auth";
const storeAuthKeyData = "authData";
const storeAuthKeyToken = "authToken";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const loginMutation = useLogin();
  const [auth, setAuth] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [token, setToken] = useState("");
 
  const storeAuthState = async(newState:{isLoggedIn:boolean})=>{
    try {
      const jsonValue = JSON.stringify(newState);

      await AsyncStorage.setItem(storeAuthKey, jsonValue);
    } catch (error) {
      console.log("Saving Error",error)
    }
  }
  const storeAuthData = async(data:any)=>{
    try {
      const jsonValue = JSON.stringify(data);
   
      await AsyncStorage.setItem(storeAuthKeyData, jsonValue);
    } catch (error) {
      console.log("Saving Error",error)
    }
  }
  
  const storeAuthToken = async(token:string)=>{
    try {
      await AsyncStorage.setItem(storeAuthKeyToken, token);
    } catch (error) {
      console.log("Saving Error",error)
    }
  }
  
  const logIn = async (credentials: LoginCredentials) => {
    
    const data = await loginMutation.mutateAsync(credentials);
    const tokens = data.token;
    if(tokens){
      setIsLoggedIn(true);
      storeAuthState({isLoggedIn:!!tokens});
      storeAuthToken(tokens);
      setAuth(data?.data);
      storeAuthData(data?.data);
    }

    return data;
  };

  const logOut = async () => {
    try {
     
      setIsLoggedIn(false);
      storeAuthState({isLoggedIn:false});
      storeAuthData({});
      storeAuthToken("");
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

  useEffect(()=>{
    const getAuthData = async()=>{
      try {
        const value = await AsyncStorage.getItem(storeAuthKeyData);
        if(value){
          const parsedValue = JSON.parse(value);
          setAuth(parsedValue);
        }
      } catch (error) {
        console.log("Getting Error from Storage",error)
      }
    };

    getAuthData();
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
