import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomNavBar from "../../components/BootamNavbar";
import Header from "../../components/Header";

export default function HomeScreen() {
    const items = [
        { id: 1, title: "Tea", qty: "1 Cup", price: 15 },
        { id: 2, title: "Coffee", qty: "1 Cup", price: 20 },
        { id: 3, title: "Green Tea", qty: "1 Cup", price: 35 },
        { id: 4, title: "Cold Coffee", qty: "1 Cup", price: 60 },
    ];

  return (
    <View className="flex-1 bg-[#e8f1ff] ">
      {/* ================= Header ================= */}
      <Header />

        <View className="px-5 mt-6 flex-row justify-between items-center">
<Text className="text-2xl font-semibold text-gray-500">Items</Text>
<View className="bg-white w-10 h-10 rounded-xl shadow-md items-center justify-center">
<Feather name="filter" size={35} />
</View>
</View>


{/* LIST */}
<ScrollView className="px-5 mt-5" showsVerticalScrollIndicator={false}>
{items.map((item) => (
<View
key={item.id}
className="bg-white flex-row items-center p-4 rounded-2xl shadow-md mb-4"
>
{/* IMAGE CIRCLE */}
<View className="w-14 h-14 bg-white rounded-full shadow-md items-center justify-center mr-4">
<Image
source={{ uri: "https://via.placeholder.com/60" }}
className="w-12 h-12 rounded-full"
/>
</View>


{/* TEXT */}
<View className="flex-1">
<Text className="text-base font-semibold text-gray-900">{item.title}</Text>
<Text className="text-gray-500 text-sm">Qty : {item.qty}</Text>
<Text className="text-gray-800 font-semibold mt-1">₹ {item.price}.00/-</Text>
</View>
</View>
))}


<View className="h-32" />
</ScrollView>



      <BottomNavBar />
    </View>
  );
}
