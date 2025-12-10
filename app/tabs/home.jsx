import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { router } from "expo-router";
import BottomNavBar from "../../components/BootamNavbar";
import Header from "../../components/Header";

export default function ClientsScreen() {

  return (
    <View className="flex-1 bg-[#e9f0ff]">
      <Header />

      <View className="mx-5 mt-4">
        <Text className="text-gray-600 text-sm">Hi, Welcome back Gopal Tea</Text>

        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-gray-500 text-sm">Current Location</Text>

          <TouchableOpacity className="border bg-white border-gray-300 px-3 py-1 rounded-lg">
            <Text className="text-gray-700 text-sm ">Sun Gravitas, Shyamal ▾</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="mt-1 px-5 mb-32">
        <View className="mt-8 bg-white rounded-2xl p-4 shadow w-[373px] h-[241px]">

          <Text className="font-semibold text-[16px] mb-3 ">Todays Summary</Text>

          <View className="flex-row justify-between">

            <View
              className="rounded-xl overflow-hidden border border-gray-200 w-[109px] h-[139px]"
            >
              <Image
                source={require("../../assets/images/tea.png")}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute bottom-0 left-0 w-full px-2 py-1 bg-black/40 flex-row items-center justify-between">
                <Text className="text-white font-semibold text-xs">Tea</Text>
                <Text className="text-white font-semibold text-xs">24</Text>
              </View>
            </View>

            <View
              className="rounded-xl overflow-hidden border border-gray-200 w-[109px] h-[139px]"
            >
              <Image
                source={require("../../assets/images/hotcoffee.png")}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute bottom-0 left-0 w-full px-2 py-1 bg-black/40 flex-row items-center justify-between">
                <Text className="text-white font-semibold text-xs">Hot Coffee</Text>
                <Text className="text-white font-semibold text-xs">15</Text>
              </View>
            </View>

            <View
              className="rounded-xl overflow-hidden border border-gray-200 w-[109px] h-[139px]"
            >
              <Image
                source={require("../../assets/images/coldcoffee.png")}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute bottom-0 left-0 w-full px-2 py-1 bg-black/40 flex-row items-center justify-between">
                <Text className="text-white font-semibold text-xs">Cold Coffee</Text>
                <Text className="text-white font-semibold text-xs">10</Text>
              </View>
            </View>
          </View>

          <View className="items-center mt-5">
            <TouchableOpacity
              className="bg-blue-500 w-[110px] h-[24px] rounded-full justify-center items-center"
              onPress={() => router.push("/sub/summary")} 
            >
              <Text className="text-white font-semibold text-xs">Show More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-4 bg-white rounded-2xl p-4 mb-6">
          <Text className="font-semibold text-[18px] mb-4">Quick Links</Text>

          <View className="flex-row flex-wrap justify-between">

            <TouchableOpacity className="h-32 w-[48%] bg-[#f3f7ff] rounded-2xl justify-center items-center mb-4">
              <Image source={require("../../assets/icons/isummary.png")} width={40} height={40} />

              <Text className="mt-2 text-gray-700">Item Entry</Text>
            </TouchableOpacity>

            <TouchableOpacity className="h-32 w-[48%] bg-[#f3f7ff] rounded-2xl justify-center items-center mb-4">
              <Image source={require("../../assets/icons/addcustomer.png")} width={40} height={40} />
              <Text className="mt-2 text-gray-700">Add Customers</Text>
            </TouchableOpacity>

            <TouchableOpacity className="h-32 w-[48%] bg-[#f3f7ff] rounded-2xl justify-center items-center mb-4">
              <Image source={require("../../assets/icons/dsummary.png")} width={40} height={40} />
              <Text className="mt-2 text-gray-700">Daily Summary</Text>
            </TouchableOpacity>

            <TouchableOpacity className="h-32 w-[48%] bg-[#f3f7ff] rounded-2xl justify-center items-center mb-4">
              <Image source={require("../../assets/icons/isummary.png")} width={40} height={40} />
              <Text className="mt-2 text-gray-700">Item Entry</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView>

      <BottomNavBar  />
    </View>
  );
}
