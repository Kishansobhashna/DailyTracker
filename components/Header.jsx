import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Header({
  onSearch = () => {},
  onNotifications = () => {},
  onMenu = () => {},
}) {
  return (
    <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">

      {/* White rounded header box */}
      <View
        className="bg-white rounded-3xl flex-row items-center justify-between px-4 "
        style={{
          width: 376,
          height: 77,
          alignSelf: "center",
        }}
      >

        {/* Left Logo */}
        <View className="h-12 w-12 bg-[#4c8dff] rounded-2xl justify-center items-center">
          <Image
            source={require("../assets/images/companylogo.png")}
            className="h-10 w-10"
            resizeMode="contain"
          />
        </View>

        {/* Right Icons */}
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={onSearch}>
            <Ionicons name="search" size={27} color="#0f172a" />
          </TouchableOpacity>

          <TouchableOpacity onPress={onNotifications}>
            <Feather name="bell" size={27} color="#0f172a" />
          </TouchableOpacity>

          <TouchableOpacity onPress={onMenu}>
            <Feather name="menu" size={27} color="#0f172a" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}


/* Usage

import Header from './components/HeaderComponent';

<Header
  logoSource={require('../assets/images/companylogo.png')}
  onSearch={() => console.log('search')}
/>

Notes:
- This file assumes you use NativeWind (className Tailwind in RN). If you don't, replace className with style props.
- Icons use @expo/vector-icons (Ionicons & Feather). Install with: expo install @expo/vector-icons
- Adjust padding/margins and shadow to match your pixel-perfect needs.
*/
