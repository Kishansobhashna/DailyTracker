import React, {}  from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import BottomNavBar from "../../components/BootamNavbar";
import Header from "../../components/Header";
import ItemSummaryIcon from "../../assets/icons/ItemSummary.svg";
import DsIcon from "../../assets/icons/Ds.svg";
import AddIcon from "../../assets/icons/addcustomer.svg"

export default function HomeScreen() {

  return (
    <View className="flex-1 bg-[#e8f1ff] ">

      <Header />

      {/* Welcome Section */}
      <View className="mx-5 mt-4">
        <Text className="text-gray-600 text-sm">Hi, Welcome back Gopal Tea</Text>

        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-gray-500 text-sm">Current Location</Text>

          <TouchableOpacity className="border border-gray-300 px-3 py-1 rounded-lg">
            <Text className="text-gray-700 text-sm">Sun Gravitas, Shyamal ▾</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ================= Today's Summary ================= */}
<View className="mx-5 mt-4 bg-white rounded-2xl p-4 shadow">
  <Text className="font-semibold text-[18px] mb-3">Todays Summary</Text>

  <View className="flex-row justify-between">
    {/* Card 1 */}
    <View className="rounded-xl overflow-hidden border border-gray-200"
      style={{ width: "31%", height: 150 }}
    >
      <Image
        source={require("../../assets/images/tea.png")}
        className="w-full h-full"
        resizeMode="cover"
      />
      <View className="absolute bottom-0 left-0 w-full px-2 py-1 bg-black/30 flex-row items-center justify-between">
        <Text className="text-white font-semibold text-xs">Tea</Text>
        <Text className="text-white font-semibold text-xs">24</Text>
      </View>
    </View>

    {/* Card 2 */}
    <View className="rounded-xl overflow-hidden border border-gray-200"
      style={{ width: "31%", height: 150 }}
    >
      <Image
        source={require("../../assets/images/hotcoffee.png")}
        className="w-full h-full"
        resizeMode="cover"
      />
      <View className="absolute bottom-0 left-0 w-full px-2 py-1 bg-black/30 flex-row items-center justify-between">
        <Text className="text-white font-semibold text-xs">Hot Coffee</Text>
        <Text className="text-white font-semibold text-xs">15</Text>
      </View>
    </View>

    {/* Card 3 */}
    <View className="rounded-xl overflow-hidden border border-gray-200"
      style={{ width: "31%", height: 150 }}
    >
      <Image
        source={require("../../assets/images/coldcoffee.png")}
        className="w-full h-full"
        resizeMode="cover"
      />
      <View className="absolute bottom-0 left-0 w-full px-2 py-1 bg-black/30 flex-row items-center justify-between">
        <Text className="text-white font-semibold text-xs">Cold Coffee</Text>
        <Text className="text-white font-semibold text-xs">10</Text>
      </View>
    </View>
  </View>
</View>


      {/* ================= Quick Links ================= */}
      <View className="mx-5 mt-4 bg-white rounded-2xl p-4 shadow">
        <Text className="font-semibold text-[18px] mb-4">Quick Links</Text>

        <View className="flex-row flex-wrap justify-between">

          <TouchableOpacity className="h-32 w-[48%] bg-[#f3f7ff] rounded-2xl justify-center items-center mb-4">
            <ItemSummaryIcon width={40} height={40} />

            <Text className="mt-2 text-gray-700">Item Entry</Text>
          </TouchableOpacity>

          <TouchableOpacity className="h-32 w-[48%] bg-[#f3f7ff] rounded-2xl justify-center items-center mb-4">
            <AddIcon width={40} height={40} />
            <Text className="mt-2 text-gray-700">Add Customers</Text>
          </TouchableOpacity>

          <TouchableOpacity className="h-32 w-[48%] bg-[#f3f7ff] rounded-2xl justify-center items-center mb-4">
            <DsIcon width={40} height={40} />
            <Text className="mt-2 text-gray-700">Daily Summary</Text>
          </TouchableOpacity>

          <TouchableOpacity className="h-32 w-[48%] bg-[#f3f7ff] rounded-2xl justify-center items-center mb-4">
            <ItemSummaryIcon width={40} height={40} />
            <Text className="mt-2 text-gray-700">Item Entry</Text>
          </TouchableOpacity>

        </View>
      </View>

      <BottomNavBar />
    </View>
  );
}
