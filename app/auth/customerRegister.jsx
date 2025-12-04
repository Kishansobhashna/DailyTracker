import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function VendorRegisterForm() {

    const [remember, setRemember] = useState(false);
    
  return (
    <View className="w-full rounded-3xl p-7 items-center mt-[40px] ">
      <ScrollView showsVerticalScrollIndicator={false} className="w-full">

        {/* Logo + Company Name */}
              <View className="flex-row items-center justify-center mt-10 mb-10">
                <Image
                  source={require("../../assets/images/companylogo.png")}
                  className="w-12 h-12 rounded-xl"
                />
                <Text className="text-[#3B6EF6] text-xl font-semibold ml-3">
                  Company Name
                </Text>
              </View>
        

        {/* Title */}
        <Text className="text-center text-[22px] font-bold text-black">
          Customer
        </Text>
        <Text className="text-center text-[22px] font-bold text-black mb-8">
          Register Form
        </Text>

        {/* -------- Name -------- */}
        <Text className="text-gray-600 mb-2">Name</Text>

        <View className="flex-row justify-between mb-4">
          <TextInput
            placeholder="First Name"
            className="w-[48%] h-14 bg-[#f4f7fc] px-4 rounded-xl"
          />
          <TextInput
            placeholder="Last Name"
            className="w-[48%] h-14 bg-[#f4f7fc] px-4 rounded-xl"
          />
        </View>

        {/* -------- Phone -------- */}
        <Text className="text-gray-600 mb-2">Phone</Text>
        <TextInput
          placeholder="+91 00000 00000"
          keyboardType="phone-pad"
          className="h-14 bg-[#f4f7fc] px-4 rounded-xl mb-4"
        />

        {/* -------- Email -------- */}
        <Text className="text-gray-600 mb-2">Email Address</Text>
        <TextInput
          placeholder="youremail@gmail.com"
          className="h-14 bg-[#f4f7fc] px-4 rounded-xl mb-4"
        />

        {/* -------- Address -------- */}
        <Text className="text-gray-600 mb-2">Address</Text>

        <TextInput
          placeholder="Address Line 1"
          className="h-14 bg-[#f4f7fc] px-4 rounded-xl mb-3"
        />

        <TextInput
          placeholder="Address Line 2"
          className="h-14 bg-[#f4f7fc] px-4 rounded-xl mb-3"
        />

        {/* Area + Pincode */}
        <View className="flex-row gap-3 mb-3">
          <TextInput
            placeholder="Area"
            className="flex-1 h-14 bg-[#f4f7fc] px-4 rounded-xl"
          />
          <TextInput
            placeholder="Pincode"
            keyboardType="numeric"
            className="flex-1 h-14 bg-[#f4f7fc] px-4 rounded-xl"
          />
        </View>

        {/* City + State Dropdowns */}
        <View className="flex-row gap-3 mb-6">
          <View className="flex-1 h-14 bg-[#f4f7fc] px-4 rounded-xl flex-row justify-between items-center">
            <Text className="text-gray-500">City</Text>
            <Feather name="chevron-down" size={20} color="#444" />
          </View>

          <View className="flex-1 h-14 bg-[#f4f7fc] px-4 rounded-xl flex-row justify-between items-center">
            <Text className="text-gray-500">State</Text>
            <Feather name="chevron-down" size={20} color="#444" />
          </View>
        </View>

        {/* -------- Terms & Conditions -------- */}
        <View className="flex-row items-center mb-10">
                    <TouchableOpacity onPress={() => setRemember(!remember)}>
                      {remember ? (
                        <Ionicons name="checkbox-outline" size={22} color="#3B6EF6" />
                      ) : (
                        <Ionicons name="square-outline" size={22} color="#3B6EF6" />
                      )}
                    </TouchableOpacity>
        
                    <Text className="ml-2 text-gray-700">By creating an account you have to agree with our{" "}
                        <Text className="text-blue-500 underline">term & condition</Text>
                    </Text>
                  </View>

        {/* -------- Register Button -------- */}
        <TouchableOpacity 
            className="h-14 bg-[#3B82F6] rounded-2xl justify-center items-center mb-4"
            onPress={() => router.push("/auth/successfully")}
        >
          <Text className="text-white text-lg font-semibold">Register →</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text className="text-center text-gray-500 mb-10">
          Already have an account?{" "}
          <Text className="text-[#3B82F6]">Log In</Text>
        </Text>
      </ScrollView>
    </View>
  );
}
