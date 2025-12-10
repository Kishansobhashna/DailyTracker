import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <View className="flex-1 bg-white px-6 pt-16 items-center ">


      <View className="flex-row items-center mb-10 mt-36">
        <Image
          source={require("../../assets/images/companylogo.png")}
          className="w-12 h-12 rounded-xl"
        />
        <Text className="text-[#3B6EF6] text-xl font-semibold ml-3">
          Company Name
        </Text>
      </View>



      <View className="bg-white w-full rounded-3xl p-6 shadow-lg shadow-neutral-200">

        <Text className="text-xl font-bold text-center mb-6 text-[#0A0A0A]">
          Forgot Password
        </Text>


        <Text className="text-gray-500 mb-2 mt-16">Email Address</Text>


        <View className="bg-white border border-gray-200 rounded-2xl px-4 py-1 mb-6">
          <TextInput
            placeholder="youremail@gmail.com"
            placeholderTextColor="#A0AEC0"
            value={email}
            onChangeText={setEmail}
            className="text-base"
          />
        </View>


        <TouchableOpacity
          onPress={() => router.push("/auth/otp")}
          className="bg-[#3B6EF6] py-4 rounded-2xl flex-row items-center justify-center shadow shadow-blue-300"
        >
          <Text className="text-white text-base font-bold">Send</Text>
          <Ionicons name="arrow-forward" size={20} color="white" className="ml-2" />
        </TouchableOpacity>
      </View>


      <View className="w-full mt-6 flex-row justify-center items-center">
        <Text className="text-black">Already haave an account? </Text>
        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text className="text-[#3B6EF6] font-semibold">Log In</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
