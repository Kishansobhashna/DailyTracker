import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Feather, SimpleLineIcons  } from "@expo/vector-icons";
import { router } from "expo-router";
import BottomNavBar from "../components/BootamNavbar";

export default function InvoiceDetails() {
  return (
    <View className="flex-1 bg-[#e9f0ff]">

      {/* Header */}
      <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">
        <View
          className="bg-white rounded-3xl flex-row items-center px-4"
          style={{
            width: 376,
            height: 77,
            alignSelf: "center",
          }}
        >
          {/* BACK BUTTON */}
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>

          {/* TITLE + DATE (CENTERED ABSOLUTELY) */}
          <View className="absolute left-0 right-0 items-center">
            <Text className="text-[18px] font-semibold text-black">
              Invoice Details
            </Text>
            <Text className="text-[12px] text-gray-500 mt-1">03 May 2025</Text>
          </View>
        </View>
      </View>


      <ScrollView
        className="px-5 mt-4"
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white rounded-2xl p-5 shadow w-[376px] h-[540px]">

          {/* Invoice No + Dates */}
          <Text className="text-gray-500 mb-1">
            Invoice No : <Text className="text-gray-700">#0025</Text>
          </Text>

          <Text className="text-gray-500 mb-4 ">
            Date : <Text className="text-gray-700">01 April 2025</Text>  TO  <Text className="text-gray-700">31 May 2025</Text>
          </Text>

          {/* To Section */}
          <Text className="text-[#AAAAAA] mb-2 border-t">To,</Text>

          <Text className="text-[#000000] font-semibold">WEBYUG INFONET LLP</Text>
          <Text className="text-[#000000] leading-5 mt-1">
            704, Sun Gravitas,{"\n"}
            Shyamal Cross Road, Ahmedabad
          </Text>

          <Text className="text-[#000000] mt-3">webyuginfo@gmail.com</Text>
          <Text className="text-[#000000] mb-4">+91 00000 00000</Text>

          {/* Items Table */}
          <View className="flex-row justify-center border-b pb-2 mb-2">
            <Text className="text-[#AAAAAA] font-semibold flex-1 ">Items</Text>
            <Text className="text-[#AAAAAA] font-semibold w-12 text-right">Rate</Text>
            <Text className="text-[#AAAAAA] font-semibold w-10 text-right">Qty</Text>
            <Text className="text-[#AAAAAA] font-semibold w-16 text-right">Price</Text>
          </View>

          <View className="flex-row justify-between mb-1">
            <Text className="text-gray-700 flex-1">Tea</Text>
            <Text className="text-gray-700 w-12 text-right">₹10</Text>
            <Text className="text-gray-700 w-10 text-right">30</Text>
            <Text className="text-gray-700 w-16 text-right">₹300</Text>
          </View>

          <View className="flex-row justify-between mb-1">
            <Text className="text-gray-700 flex-1">Coffee</Text>
            <Text className="text-gray-700 w-12 text-right">₹15</Text>
            <Text className="text-gray-700 w-10 text-right">12</Text>
            <Text className="text-gray-700 w-16 text-right">₹180</Text>
          </View>

          <View className="flex-row justify-between mb-1">
            <Text className="text-gray-700 flex-1">Water Can</Text>
            <Text className="text-gray-700 w-12 text-right">₹30</Text>
            <Text className="text-gray-700 w-10 text-right">15</Text>
            <Text className="text-gray-700 w-16 text-right">₹450</Text>
          </View>

          <View className="border-t mt-4 pt-3 flex-row justify-between">
            <Text className="text-gray-700 font-semibold text-lg">Total Amount</Text>
            <Text className="text-gray-700 font-bold text-lg">₹930.00 /-</Text>
          </View>
        </View>

        <View className="flex-row justify-center mt-6 mb-12">

          {/* Download Button */}
          <TouchableOpacity
            className="w-[180px] h-[54px] bg-blue-500 rounded-2xl items-center justify-center mr-3 flex-row"
          >
            <SimpleLineIcons name="cloud-download" size={24} color="white" />
            <Text className="text-white font-semibold ml-3">Download</Text>
          </TouchableOpacity>

          {/* Share Button */}
          <TouchableOpacity
            className="w-[180px] h-[54px] border border-blue-500 rounded-2xl items-center justify-center flex-row"
          >
            <Feather name="share-2" size={20} color="#3b82f6" />
            <Text className="text-blue-500 font-semibold ml-3">Share</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </View>
  );
}
