import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { customFont } from "@/constants/fonts";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded] = useFonts(customFont);
    useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return<QueryClientProvider client={queryClient}>
   <Stack screenOptions={{headerShown:false}}/>
  </QueryClientProvider>

}
