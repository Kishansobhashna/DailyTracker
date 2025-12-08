import React,{ useState} from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
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

      <View className="bg-white rounded-2xl p-5 shadow mb-5">

          <Text className="font-semibold text-[16px] text-[#9D9D9D] mb-4">
            Purchase By Items
          </Text>

          <View className="flex-row items-center">

            <Image
              source={require("../../assets/images/Group 407.png")}
              className="w-[110px] h-[110px]"
              resizeMode="contain"
            />

            <View className="ml-5 flex-1">

              <View className="flex-row justify-between mb-1">
                <Text className="text-[#4B4B4B] text-[14px]">Water can</Text>
                <Text className="text-[#4B4B4B] text-[14px]">44.00%</Text>
              </View>
              <View className="h-1.5 w-full bg-[#E3EAFF] rounded-full mb-3">
                <View className="h-1.5 bg-[#4f8bff] rounded-full w-[70%]" />
              </View>

              <View className="flex-row justify-between mb-1">
                <Text className="text-[#4B4B4B] text-[14px]">Tea</Text>
                <Text className="text-[#4B4B4B] text-[14px]">18.50%</Text>
              </View>
              <View className="h-1.5 w-full bg-[#E3EAFF] rounded-full mb-3">
                <View className="h-1.5 bg-[#000000] rounded-full w-[40%]" />
              </View>

              <View className="flex-row justify-between mb-1">
                <Text className="text-[#4B4B4B] text-[14px]">Coffee</Text>
                <Text className="text-[#4B4B4B] text-[14px]">19.50%</Text>
              </View>
              <View className="h-1.5 w-full bg-[#E3EAFF] rounded-full mb-3">
                <View className="h-1.5 bg-[#9D9D9D] rounded-full w-[45%]" />
              </View>

              <Text className="text-[12px] text-[#BBBBBB] mt-1">
                Others...
              </Text>

            </View>

          </View>
      </View>


      <View className="bg-white rounded-2xl p-5 shadow mb-1">

        <Text className="font-semibold text-[16px] text-[#6F6F6F] mb-4">
          Purchase By Items
        </Text>

        <View className="flex-row">

          <View className="justify-between py-2 mr-2">
            
            <Text className="text-[10px] text-[#8F97A6]">₹1.5K</Text>
            <Text className="text-[10px] text-[#8F97A6]">₹1.0K</Text>
            <Text className="text-[10px] text-[#8F97A6]">₹500</Text>
            <Text className="text-[10px] text-[#8F97A6]">0</Text>
          </View>

          <View className="flex-row flex-1 items-end justify-between px-3">

            <View className="items-center">
              <View className="h-[5px] w-[12  px] bg-[#4f8bff] rounded-md" />
              <Text className="text-xs text-[#8F97A6] mt-1">Jan</Text>
            </View>

            <View className="items-center">
              <View className="h-[25px] w-[12px] bg-[#4f8bff] rounded-md" />
              <Text className="text-xs text-[#8F97A6] mt-1">Feb</Text>
            </View>

            <View className="items-center">
              <View className="h-[100px] w-[12px] bg-[#4f8bff] rounded-md" />
              <Text className="text-xs text-[#8F97A6] mt-1">Mar</Text>
            </View>

            <View className="items-center">
              <View className="h-[70px] w-[12px] bg-[#4f8bff] rounded-md" />
              <Text className="text-xs text-[#8F97A6] mt-1">Apr</Text>
            </View>

            <View className="items-center">
              <View className="h-[95px] w-[12px] bg-[#4f8bff] rounded-md" />
              <Text className="text-xs text-[#8F97A6] mt-1">May</Text>
            </View>

            <View className="items-center">
              <View className="h-[10px] w-[12px] bg-[#4f8bff] rounded-md" />
              <Text className="text-xs text-[#8F97A6] mt-1">Jun</Text>
            </View>

            <View className="items-center">
              <View className="h-[5px] w-[12px] bg-[#4f8bff] rounded-md" />
              <Text className="text-xs text-[#8F97A6] mt-1">Jul</Text>
            </View>

          </View>
        </View>

      </View>

      <View className="h-28" /> 
    </ScrollView>

    <BottomNavBar />

    </View>
  );
}
