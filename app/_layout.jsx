import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {

  return (
    <Stack
      screenOptions={{
        headerShown: false,   // Hide header for clean onboarding design
      }}
    />
  );
}
