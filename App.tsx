import React from "react";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation/Navigation";

export default function App() {
  const isLoaded = useCachedResources();

  if (!isLoaded) {
    return null;
  }
  return <Navigation />;
}
