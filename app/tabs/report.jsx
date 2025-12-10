import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import BottomNavBar from "../../components/BootamNavbar";
import Header from "../../components/Header";

export default function ClientsScreen() {
  const [activeTab, setActiveTab] = useState("Monthly")
  const tabs = ["Weekly", "Monthly", "Yearly", "Custom"];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (tab === "Custom") {
      const today = new Date();
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);

      setStartDate(lastMonth);
      setEndDate(today);
    }
  };

  return (
    <View className="flex-1 bg-[#e9f0ff]">
      <Header />


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
                onPress={() => handleTabChange(tab)}
                className={`px-4 py-2 rounded-full ${
                  isActive
                    ? "bg-[#4f8bff]"
                    : "bg-white border border-[#d0d7e6]"
                }`}
              >
                <Text
                  className={`font-semibold ${
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


        {activeTab === "Weekly" ? (
          <View className="bg-white rounded-2xl p-5 shadow mb-5">
            <Text className="font-semibold text-[16px] text-[#9D9D9D] mb-4">
              Weekly Purchase Report
            </Text>

            <View className="flex-row justify-between items-end">
              {[
                { h: 40, d: "Mon" },
                { h: 70, d: "Tue" },
                { h: 55, d: "Wed" },
                { h: 30, d: "Thu" },
                { h: 80, d: "Fri" },
                { h: 45, d: "Sat" },
                { h: 20, d: "Sun" },
              ].map((item, i) => (
                <View className="items-center" key={i}>
                  <View
                    className={`w-[12px] bg-[#4f8bff] rounded-md`}
                    style={{ height: item.h }}
                  />
                  <Text className="text-xs text-[#8F97A6] mt-1">{item.d}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}


        {activeTab === "Yearly" ? (
          <View className="bg-white rounded-2xl p-5 shadow mb-5">
            <Text className="font-semibold text-[16px] text-[#9D9D9D] mb-4">
              Yearly Purchase Report
            </Text>

            <View className="flex-row justify-between items-end">
              {[
                { y: "2022", h: 40 },
                { y: "2023", h: 75 },
                { y: "2024", h: 110 },
                { y: "2025", h: 85 },
              ].map((item, i) => (
                <View className="items-center" key={i}>
                  <View
                    className="w-[14px] bg-[#4f8bff] rounded-md"
                    style={{ height: item.h }}
                  />
                  <Text className="text-xs text-[#8F97A6] mt-1">{item.y}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}


        {activeTab === "Custom" ? (
          <View className="bg-white rounded-2xl p-5 shadow mb-5">
            <Text className="font-semibold text-[16px] text-[#9D9D9D] mb-4">
              Custom Date Range
            </Text>


            <View className="flex-row justify-between mb-5">

              <TouchableOpacity
                onPress={() => setShowStartPicker(true)}
                className="border border-[#d0d7e6] px-4 py-3 rounded-xl w-[48%]"
              >
                <Text className="text-[#4B4B4B]">
                  {startDate ? startDate.toDateString() : "Start Date"}
                </Text>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => setShowEndPicker(true)}
                className="border border-[#d0d7e6] px-4 py-3 rounded-xl w-[48%]"
              >
                <Text className="text-[#4B4B4B]">
                  {endDate ? endDate.toDateString() : "End Date"}
                </Text>
              </TouchableOpacity>
            </View>

            <Text className="text-gray-500 text-sm mb-3">
              Showing data from {startDate?.toDateString()} to{" "}
              {endDate?.toDateString()}
            </Text>


            <View className="h-[150px] bg-[#] rounded-xl items-center justify-center">
              {/* <Text className="text-[#9D9D9D] font-semibold">
                Custom Report Graph
              </Text> */}
            </View>
          </View>
        ) : null}


        {activeTab !== "Weekly" &&
        activeTab !== "Yearly" &&
        activeTab !== "Custom" ? (
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
        ) : null}


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
              {[
                { m: "Jan", h: 5 },
                { m: "Feb", h: 25 },
                { m: "Mar", h: 100 },
                { m: "Apr", h: 70 },
                { m: "May", h: 95 },
                { m: "Jun", h: 10 },
                { m: "Jul", h: 5 },
              ].map((item, i) => (
                <View className="items-center" key={i}>
                  <View
                    className="w-[12px] bg-[#4f8bff] rounded-md"
                    style={{ height: item.h }}
                  />
                  <Text className="text-xs text-[#8F97A6] mt-1">{item.m}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View className="h-28" />
      </ScrollView>

      <BottomNavBar />

      {showStartPicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, selected) => {
            setShowStartPicker(false);
            if (selected) setStartDate(selected);
          }}
        />
      )}

      {showEndPicker && (
        <DateTimePicker
          value={endDate || new Date()} 
          mode="date"
          display="default"
          onChange={(event, selected) => {
            setShowEndPicker(false);
            if (selected) setEndDate(selected);
          }}
        />
      )}
    </View>
  );
}
