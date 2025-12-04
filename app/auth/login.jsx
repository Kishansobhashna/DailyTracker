import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [selected, setSelected] = useState("vendor");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <View className="flex-1 bg-white items-center justify-center px-6">

      {/* Logo + Company Name */}
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
      <View className="w-full rounded-3xl px-6 py-8  items-center">

        {/* Title */}
        <Text className="text-[20px] font-bold text-black text-center mb-6">
          Login In as
        </Text>

        {/* Vendor / Customer Toggle */}
        <View className="flex-row w-full justify-between mb-6">
          
          {/* Vendor */}
          <TouchableOpacity
            onPress={() => setSelected("vendor")}
            className={`flex-1 flex-row items-center justify-center py-3 rounded-xl mr-3 ${
              selected === "vendor" ? "bg-[#3B6EF6]" : "bg-[#eef4ff]"
            }`}
          >
            {selected === "vendor" ? (
              <Ionicons name="checkbox" size={20} color="#fff" className="mr-2" />
            ) : (
              <Ionicons name="square-outline" size={20} color="#3B6EF6" className="mr-2" />
            )}
            <Text
              className={`text-[16px] font-semibold ${
                selected === "vendor" ? "text-white" : "text-[#3B6EF6]"
              }`}
            >
              Vendor
            </Text>
          </TouchableOpacity>

          {/* Customer */}
          <TouchableOpacity
            onPress={() => setSelected("customer")}
            className={`flex-1 flex-row items-center justify-center py-3 rounded-xl ${
              selected === "customer" ? "bg-[#3B6EF6]" : "bg-[#eef4ff]"
            }`}
          >
            {selected === "customer" ? (
              <Ionicons name="checkbox" size={20} color="#fff" className="mr-2" />
            ) : (
              <Ionicons name="square-outline" size={20} color="#3B6EF6" className="mr-2" />
            )}
            <Text
              className={`text-[16px] font-semibold ${
                selected === "customer" ? "text-white" : "text-[#3B6EF6]"
              }`}
            >
              Customer
            </Text>
          </TouchableOpacity>
        </View>

        {/* Email Input */}
        <View className="w-full mb-4">
          <Text className="text-[14px] text-gray-600 mb-1">Email Address</Text>
          <TextInput
            placeholder="youremail@gmail.com"
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3"
          />
        </View>

        {/* Password Input */}
        <View className="w-full mb-4">
          <Text className="text-[14px] text-gray-600 mb-1">Password</Text>
          <View className="w-full flex-row items-center bg-white border border-gray-300 rounded-xl px-4">
            <TextInput
              placeholder="********"
              secureTextEntry={!showPass}
              className="flex-1 py-3"
            />
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Ionicons name={showPass ? "eye-off" : "eye"} size={22} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Remember me + Forgot Password */}
        <View className="w-full flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => setRemember(!remember)}>
              {remember ? (
                <Ionicons name="checkbox-outline" size={22} color="#3B6EF6" />
              ) : (
                <Ionicons name="square-outline" size={22} color="#3B6EF6" />
              )}
            </TouchableOpacity>

            <Text className="ml-2 text-gray-700">Remember me</Text>
          </View>

          <TouchableOpacity onPress={() => router.push("/auth/forgetpassword")}>
            <Text className="text-[#3B6EF6] font-medium">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => router.push("/tabs/home")}
          className="w-full bg-[#3B6EF6] py-4 rounded-xl flex-row items-center justify-center"
        >
          <Text className="text-white text-[16px] font-semibold mr-2">Log In</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>

      </View>

      {/* Register now */}
      <TouchableOpacity
        className="mt-8"
        onPress={() => router.push("/auth/register")}
      >
        <Text className="text-gray-700">Register now</Text>
      </TouchableOpacity>
    </View>
  );
}
