import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function RegisterSuccessScreen() {
  return (
    <View className="flex-1 bg-white items-center  px-6">


      <View className="flex-row items-center justify-center mt-36 mb-1">
        <Image
          source={require("../../assets/images/companylogo.png")}
          className="w-12 h-12 rounded-xl"
        />
          <Text className="text-[#3B6EF6] text-xl font-semibold ml-3">
            Company Name
          </Text>
      </View>

      <View className="flex-1 items-center mt-40">

        <Image
          source={require("../../assets/images/registration-successful-icon.png")}
          className="w-[218px] h-[152px] mb-6"
          resizeMode="contain"
        />

        <Text className="text-[18px] font-semibold text-black text-center mb-8">
          You are registered successfully.
        </Text>

        <TouchableOpacity 
          className="w-[145px] h-[48px] bg-[#3B82F6] rounded-2xl shadow-lg items-center justify-center"
          onPress={() => router.push("/tabs/home")}
        >
          <Text className="text-white text-lg font-semibold">
            Start →
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
