import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";


export default function SupportScreen() {
  const [subject, setSubject] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  const subjects = [
    "Technical difficulties",
    "Billing issue",
    "Login problem",
    "General question",
  ];

  return (
    <View className="flex-1 bg-[#e9f0ff]">

      {/* HEADER */}
      <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">
        <View className="bg-white rounded-3xl flex-row items-center px-4 w-[376px] h-[77px] self-center">

          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>

          <View className="absolute left-0 right-0 items-center">
            <Text className="text-[18px] font-semibold text-black">Support</Text>
          </View>
        </View>
      </View>

      {/* SUPPORT FORM */}
      <View className="bg-white w-[374px] h-[650px] rounded-3xl mx-auto p-6 mt-3 shadow">

        <Text className="text-[18px] font-semibold text-gray-900 mt-2">Need some Help?</Text>

        <Text className="text-gray-600 text-[14px] mt-2 leading-5">
          Describe your question and our specialists{"\n"}
          will answer you within 24 hours.
        </Text>

        <Text className="text-gray-800 mt-6 mb-2 font-medium">Request Subject</Text>

        {/* SUBJECT DROPDOWN */}
        <TouchableOpacity
          onPress={() => setOpenDropdown(!openDropdown)}
          className="border border-gray-300 bg-[#f8fafc] rounded-xl px-3 py-3 flex-row justify-between items-center"
        >
          <Text className="text-gray-600">
            {subject || "Select Subject"}
          </Text>
          <Feather name="chevron-down" size={20} color="#555" />
        </TouchableOpacity>

        {/* DROPDOWN LIST */}
        {openDropdown && (
          <View className="mt-2 bg-white border border-gray-300 rounded-xl shadow">
            {subjects.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSubject(item);
                  setOpenDropdown(false);
                }}
                className="px-4 py-3 border-b border-gray-200"
              >
                <Text className="text-gray-700">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

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
