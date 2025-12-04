import { Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import BottomInvoiceBorder from "../components/BottomInvoiceBorder";
import TopInvoiceBorder from "../components/TopInvoiceBorder";


export default function InvoiceDetails() {
  return (
    <View className="flex-1 bg-[#e9f0ff]">

      {/* Header */}
      <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">
        <View className="bg-white rounded-3xl flex-row items-center px-4 w-[376px] h-[77px] self-center">

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
        className="px-4 pt-2"
        showsVerticalScrollIndicator={false}
      >
        
        <TopInvoiceBorder />

        {/* ---------- INVOICE CARD ---------- */}
        <View className="bg-white w-full overflow-hidden">
          
          {/* Invoice Info */}
          <View className="px-5 py-4">
            <Text className="text-gray-500 mb-1">
              Invoice No : <Text className="text-black font-medium">#0025</Text>
            </Text>

            <Text className="text-gray-500 mb-3">
              Date : <Text className="text-black font-medium">01 April 2025</Text>  TO  
              <Text className="text-black font-medium"> 31 May 2025</Text>
            </Text>
          </View>

          {/* ---------- TOP DIVIDER ---------- */}
          <View className="w-full border-t border-gray-200" />

          {/* To Section */}
          <View className="px-5 py-4">
            <Text className="text-black mb-1 font-medium">To,</Text>

            <Text className="text-black font-semibold">WEBYUG INFONET LLP</Text>
            <Text className="text-black leading-5 mt-1">
              704, Sun Gravitas,{"\n"}
              Shyamal Cross Road, Ahmedabad
            </Text>

            <Text className="text-black mt-3">webyuginfo@gmail.com</Text>
            <Text className="text-black">+91 00000 00000</Text>
          </View>

          <View className="w-full border-t border-gray-200" />

          {/* Items Header */}
          <View className="px-5 py-3 flex-row">
            <Text className="text-gray-500 font-semibold flex-1">Items</Text>
            <Text className="text-gray-500 font-semibold w-12 text-right">Rate</Text>
            <Text className="text-gray-500 font-semibold w-10 text-right">Qty</Text>
            <Text className="text-gray-500 font-semibold w-16 text-right">Price</Text>
          </View>

          <View className="w-full border-t border-gray-200" />

          {/* Items Rows */}
          <View className="px-5">
            
            <View className="flex-row py-1">
              <Text className="text-black flex-1">Tea</Text>
              <Text className="text-black w-12 text-right">₹10</Text>
              <Text className="text-black w-10 text-right">30</Text>
              <Text className="text-black w-16 text-right">₹300</Text>
            </View>

            <View className="flex-row py-1">
              <Text className="text-black flex-1">Coffee</Text>
              <Text className="text-black w-12 text-right">₹15</Text>
              <Text className="text-black w-10 text-right">12</Text>
              <Text className="text-black w-16 text-right">₹180</Text>
            </View>

            <View className="flex-row py-1">
              <Text className="text-black flex-1">Water Can</Text>
              <Text className="text-black w-12 text-right">₹30</Text>
              <Text className="text-black w-10 text-right">15</Text>
              <Text className="text-black w-16 text-right">₹450</Text>
            </View>

          </View>

          {/* ---------- DIVIDER ---------- */}
          <View className="w-full border-t border-gray-200 mt-3" />

          {/* Total */}
          <View className="px-5 py-4 flex-row justify-between">
            <Text className="text-black font-semibold text-lg">Total Amount</Text>
            <Text className="text-black font-bold text-lg">₹930.00 /-</Text>
          </View>
        </View>

        <BottomInvoiceBorder />


        {/* ---------- Buttons ---------- */}
        <View className="flex-row justify-center mt-6 mb-16">

          {/* Download */}
          <TouchableOpacity className="w-[160px] h-[52px] bg-blue-500 rounded-2xl flex-row items-center justify-center mr-4">
            <SimpleLineIcons name="cloud-download" size={22} color="white" />
            <Text className="text-white font-semibold ml-3">Download</Text>
          </TouchableOpacity>

          {/* Share */}
          <TouchableOpacity className="w-[160px] h-[52px] border border-blue-500 rounded-2xl flex-row items-center justify-center">
            <Feather name="share-2" size={20} color="#3b82f6" />
            <Text className="text-blue-500 font-semibold ml-3">Share</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </View>
  );
}
