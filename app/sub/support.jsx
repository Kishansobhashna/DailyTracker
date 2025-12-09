import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";
// import { SelectList } from "react-native-dropdown-select-list"; // If you use a dropdown pkg

export default function SupportScreen() {
  const [subject, setSubject] = useState("");

  const subjects = [
    { key: "1", value: "Technical difficulties" },
    { key: "2", value: "Billing issue" },
    { key: "3", value: "Login problem" },
    { key: "4", value: "General question" },
  ];

  return (
    <View className="flex-1 bg-[#e9f0ff]">

        <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">
            <View className="bg-white rounded-3xl flex-row items-center px-4 w-[376px] h-[77px] self-center">
                
                <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="chevron-back-outline" size={24} color="black" />
                </TouchableOpacity>
                
                <View className="absolute left-0 right-0 items-center">
                <Text className="text-[18px] font-semibold text-black">
                    Support
                </Text>
                </View>
            </View>
        </View>
      

        <View className="bg-white w-[374px] h-[650px] rounded-3xl mx-auto p-6 mt-3 shadow">

            <Text className="text-[18px] font-semibold text-gray-900 mt-2">Need some Help?</Text>

            <Text className="text-gray-600 text-[14px] mt-2 leading-5">
                Describe your question and our specialists{"\n"}
                will answer you within 24 hours.
            </Text>

            <Text className="text-gray-800 mt-6 mb-2 font-medium">Request Subject</Text>

            <View className="border border-gray-300 bg-[#f8fafc] rounded-xl px-3 py-3">
                <View className="flex-row justify-between items-center">
                    <Text className="text-gray-600">
                    {subject || "Technical difficulties"}
                    </Text>
                    <Feather name="chevron-down" size={20} color="#555" />
                </View>
            </View>

            <Text className="text-gray-800 mt-6 mb-2 font-medium">Description</Text>

            <TextInput
                multiline
                placeholder="Add same description of the request"
                textAlignVertical="top"
                className="border border-gray-300 bg-[#f8fafc] rounded-xl h-[120px] p-3 text-gray-700"
            />

            <TouchableOpacity className="bg-[#4f8bff] rounded-xl mt-8 py-4">
                <Text className="text-center text-white font-semibold text-[16px]">
                    Send Request
                </Text>
            </TouchableOpacity>

        </View>
    </View>
  );
}
