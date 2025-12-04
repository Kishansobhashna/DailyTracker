import React,{ useState} from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomNavBar from "../../components/BootamNavbar";
import Header from "../../components/Header";

export default function ClientsScreen() {
  const [activeTab, setActiveTab] = useState("Monthly");

  const tabs = ["Weekly", "Monthly", "Yearly", "Custom"];

  return (
    <View className="flex-1 bg-[#e9f0ff]">
      <Header />

      {/* -------- Title -------- */}
      <View className="flex-row items-center justify-between px-5 mt-8">
        <Text className="text-2xl font-semibold text-[#AAAAAA]">Report</Text>
      </View>

      <ScrollView className="mt-5 px-5 mb-32">

        <View className="flex-row justify-between mb-4">

          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                className={`rounded-xl w-[90px] h-[40px] items-center justify-center ${
                  isActive ? "bg-[#4f8bff] shadow" : "bg-white"
                }`}
              >
                <Text
                  className={`font-medium ${
                    isActive ? "text-white" : "text-gray-600"
                  }`}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}

        </View>

        <View className="flex-row justify-end items-center space-x-3 mb-4 pr-2">
          <Feather name="chevron-left" size={20} color="#7a8394" />
          <Text className="text-gray-600 font-semibold text-lg">2025</Text>
          <Feather name="chevron-right" size={20} color="#7a8394" />
        </View>

        <View className="bg-white rounded-2xl p-4 shadow mb-5">
          <Text className="font-semibold text-[16px] mb-3 ">Purchase By Items</Text>

          <View className="flex-row">

            <View className="w-[40%] h-[120px] bg-gray-200 rounded-full" />

            <View className="ml-4 flex-1">
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-700">Water can</Text>
                <Text className="text-gray-700">44.00%</Text>
              </View>
              <View className="bg-[#4f8bff] h-1.5 rounded-full w-[70%] mb-3" />

              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-700">Tea</Text>
                <Text className="text-gray-700">18.50%</Text>
              </View>
              <View className="bg-gray-800 h-1.5 rounded-full w-[40%] mb-3" />

              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-700">Coffee</Text>
                <Text className="text-gray-700">19.50%</Text>
              </View>
              <View className="bg-gray-300 h-1 rounded-full w-[45%]" />
            </View>

          </View>
        </View>

        <View className="bg-white rounded-2xl p-4 shadow mb-6">
          <Text className="font-semibold text-[16px] mb-3">Purchase By Items</Text>

          <View className="h-[180px] flex-row items-end justify-between px-3">

            <View className="items-center">
              <View className="h-[60px] w-[12px] bg-[#4f8bff] rounded-md"></View>
              <Text className="text-xs mt-1">Mar</Text>
            </View>

            <View className="items-center">
              <View className="h-[40px] w-[12px] bg-[#4f8bff] rounded-md"></View>
              <Text className="text-xs mt-1">Apr</Text>
            </View>

            <View className="items-center">
              <View className="h-[55px] w-[12px] bg-[#4f8bff] rounded-md"></View>
              <Text className="text-xs mt-1">May</Text>
            </View>

            <View className="items-center">
              <View className="h-[10px] w-[12px] bg-[#4f8bff] rounded-md"></View>
              <Text className="text-xs mt-1">Jun</Text>
            </View>

            <View className="items-center">
              <View className="h-[5px] w-[12px] bg-[#4f8bff] rounded-md"></View>
              <Text className="text-xs mt-1">Jul</Text>
            </View>

          </View>
        </View>

        <View className="h-28" /> 
      </ScrollView>

      <BottomNavBar />

      


    </View>
  );
}
