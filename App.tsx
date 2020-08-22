import React from "react";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const isLoaded = useCachedResources();

  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
