import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
          "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
          "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
          "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
          "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
