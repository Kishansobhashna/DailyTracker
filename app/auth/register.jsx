import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

export default function RegisterPreference() {
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">

      {/* Logo + Company Name in one row */}
      <View className="flex-row items-center mb-10">
        <Image
          source={require("../../assets/images/companylogo.png")}
          className="w-12 h-12 rounded-xl"
        />
        <Text className="text-[#3B6EF6] text-xl font-semibold ml-3">
          Company Name
        </Text>
      </View>

      {/* Card */}
      <View className="w-full rounded-2xl p-6 items-center bg-[#eef5ff]">
        <Text className="text-[18px] font-semibold text-black mb-2 text-center">
          Select Your Register Preference
        </Text>

        <Text className="text-[14px] text-gray-600 mb-6 text-center">
          Register as
        </Text>

        {/* Vendor */}
        <TouchableOpacity
          className="w-full flex-row items-center justify-center px-5 py-4 bg-[#3B6EF6] rounded-3xl mb-4"
          onPress={() => router.push("/tabs/home")}
        >
         <View className="bg-white h-10 w-10 rounded-full mr-2 justify-center items-center">
          <Text className="text-[20px]">🏛️</Text>
         </View>         

          <Text className="text-white text-[17px] font-semibold">Vendor</Text>
        </TouchableOpacity>

        {/* Customer */}
        <TouchableOpacity
          className="w-full flex-row items-center justify-center px-5 py-4 bg-[#3B6EF6] rounded-3xl"
          onPress={() => router.push("/auth/customerRegister")}
        >
          <View className="bg-white h-10 w-10 rounded-full mr-2 justify-center items-center">
            <Text className="text-[20px]">👤</Text>
          </View>

          <Text className="text-white text-[17px] font-semibold">Customer</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom text */}
      <View className="mt-10 flex-row">
        <Text className="text-gray-600">Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text className="text-[#3B6EF6] font-medium">Log In</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
