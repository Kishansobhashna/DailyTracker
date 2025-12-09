import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function RegisterSuccessScreen() {
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">

      {/* Logo + Company Name */}
      <View className="flex-row items-center justify-center  mb-10">
        <Image
          source={require("../../assets/images/companylogo.png")}
          className="w-12 h-12 rounded-xl"
        />
          <Text className="text-[#3B6EF6] text-xl font-semibold ml-3">
            Company Name
          </Text>
      </View>

      {/* ----- Center Success Icon ----- */}
      <Image
        source={require("../../assets/images/registration-successful-icon.png")}
        className="w-[218px] h-[152px] mt-16"
        resizeMode="contain"
      />


      {/* ----- Message ----- */}
      <Text className="text-[18px] font-semibold text-black text-center mt-6">
        You are registered successfully.
      </Text>

      {/* ----- Button ----- */}
      <TouchableOpacity 
        className="w-[145px] h-[48px] bg-[#3B82F6] px-10 py-4 rounded-2xl mt-8 shadow-lg"
        onPress={() => router.push("/tabs/home")}
      >
        <Text className="text-white text-lg items-center justify-center font-semibold">
          Start →
        </Text>
      </TouchableOpacity>
    </View>
  );
}
