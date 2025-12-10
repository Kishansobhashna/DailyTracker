import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

export default function VendorItems() {
  const { vendorName } = useLocalSearchParams();

  const vendorProducts = [
    {
      id: 1,
      title: "Bisleri Mini Water bottle",
      qty: "Qty : 1 Pack (30 Bottles)",
      price: "₹ 10.00/-",
      image: require("../../assets/images/bislerimini.png"),
    },
    {
      id: 2,
      title: "Bisleri Water bottle",
      qty: "Qty : 1 Pack (30 Bottles)",
      price: "₹ 30.00/-",
      image: require("../../assets/images/bisleri.png"),
    },
    {
      id: 3,
      title: "Bisleri Water Can",
      qty: "Qty : 1 Pack (20 Lit)",
      price: "₹ 180.00/-",
      image: require("../../assets/images/watercan.png"),
    },
    {
      id: 4,
      title: "Bisleri Combo",
      qty: "Qty : 1 Pack (30 Bottles)",
      price: "₹ 180.00/-",
      image: require("../../assets/images/combo.png"),
    },
  ];

  return (
    <View className="flex-1 bg-[#e8f1ff]">
      
      <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">
        <View className="bg-white rounded-3xl flex-row items-center px-4 w-[376px] h-[77px] self-center">
                
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
                
          <View className="absolute left-0 right-0 items-center">
            <Text className="text-lg font-semibold ml-2">{vendorName}</Text>
            </View>
        </View>
      </View>

      <ScrollView className="px-5 mt-5" showsVerticalScrollIndicator={false}>
        {vendorProducts.map((item) => (
          <View
            key={item.id}
            className="bg-white flex-row items-center p-4 rounded-2xl shadow-md mb-4"
          >
            <View className="w-14 h-14 bg-white rounded-full shadow items-center justify-center mr-4">
              <Image source={item.image} className="w-12 h-12 rounded-full" />
            </View>

            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-900">{item.title}</Text>
              <Text className="text-gray-500 text-sm">{item.qty}</Text>
              <Text className="text-gray-800 font-semibold mt-1">{item.price}</Text>
            </View>
          </View>
        ))}

        <View className="h-32" />
      </ScrollView>

    </View>
  );
}
