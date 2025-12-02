import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function NewPassword() {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <View className="flex-1 bg-white items-center justify-center px-6 pt-16">

      {/* LOGO + NAME */}
      <View className="flex-row items-center mb-10">
        <Image
          source={require("../../assets/images/companylogo.png")}
          className="w-12 h-12 rounded-xl"
        />
        <Text className="text-[#3B6EF6] text-xl font-semibold ml-3">
          Company Name
        </Text>
      </View>

      {/* CARD */}
      <View className="w-full bg-white rounded-3xl p-6 shadow-lg shadow-neutral-200 items-center">

        <Text className="text-2xl font-bold text-[#0A0A0A] mb-6 text-center">
          New Password
        </Text>

        {/* NEW PASSWORD */}
        <Text className="text-gray-600 mb-2 w-full">Enter New Password</Text>
        <View className="flex-row items-center w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 mb-4">
          <TextInput
            secureTextEntry={!showNew}
            placeholder="••••••••"
            className="flex-1 text-base"
            value={newPass}
            onChangeText={setNewPass}
          />
          <TouchableOpacity onPress={() => setShowNew(!showNew)}>
            <Ionicons
              name={showNew ? "eye-off" : "eye"}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        {/* CONFIRM PASSWORD */}
        <Text className="text-gray-600 mb-2 w-full">Confirm Password</Text>
        <View className="flex-row items-center w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 mb-6">
          <TextInput
            secureTextEntry={!showConfirm}
            placeholder="••••••••"
            className="flex-1 text-base"
            value={confirmPass}
            onChangeText={setConfirmPass}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            <Ionicons
              name={showConfirm ? "eye-off" : "eye"}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        {/* UPDATE BUTTON */}
        <TouchableOpacity
          onPress={() => router.push("/auth/success")}
          className="bg-[#3B6EF6] w-full py-4 rounded-2xl shadow shadow-blue-300 items-center"
        >
          <Text className="text-white text-base font-semibold">
            Update Password
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
