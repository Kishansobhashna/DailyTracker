import { Redirect } from "expo-router";
import { useFonts } from "expo-font";
import './global.css';


export default function Index() {

  const [fontsLoaded] = useFonts({
    NunitoSans: require("./assets/fonts/NunitoSans-VariableFont.ttf"),
  });

  if (!fontsLoaded) return null;

  return <Redirect href="/screen1" />;
} 