import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/Header";
import BottomNavBar from "../../components/BootamNavbar";
import FilterIcon from "../../assets/icons/filterIcon.svg";
import { router } from "expo-router";

export default function ItemsScreen() {
  const [role, setRole] = useState("vendor");
  const [openFilter, setOpenFilter] = useState(false);


  useEffect(() => {
    const loadRole = async () => {
      const r = await AsyncStorage.getItem("role");
      setRole(r || "customer"); // default = customer
    };
    loadRole();
  }, []);


  const vendorItems = [
    { id: 1, title: "Tea", qty: "1 Cup", price: 15, image: require("../../assets/images/tea.png") },
    { id: 2, title: "Coffee", qty: "1 Cup", price: 20, image: require("../../assets/images/coffee.png") },
    { id: 3, title: "Green Tea", qty: "1 Cup", price: 35, image: require("../../assets/images/greentea.png") },
    { id: 4, title: "Cold Coffee", qty: "1 Cup", price: 60, image: require("../../assets/images/coldcoffee.png") },
  ];


  const vendorsList = [
    {
      name: "shreeji water suppliers",
      address: "B-103 Maruti Complex, Vaghodiya Chowkdi, Vadodara",
      phone: "+91 00000 00000",
    },
    {
      name: "Ajay Medical Store",
      address: "A-15 Avadh Arcade, Nikol, Ahmedabad",
      phone: "+91 00000 00000",
    },
    {
      name: "Patel Associates",
      address: "Nana Mava Road, Rajkot",
      phone: "+91 00000 00000",
    },
    {
      name: "Charbhuja Marble",
      address: "Gondal road, Rajkot",
      phone: "+91 00000 00000",
    },
  ];

  return (
    <View className="flex-1 bg-[#e8f1ff]">
      <Header />


      <View className="flex-row items-center justify-between px-5 mt-8">
        <Text className="text-2xl font-semibold text-[#AAAAAA]">
          {role === "vendor" ? "Items" : "Vendors"}
        </Text>

        <TouchableOpacity
          onPress={() => setOpenFilter(true)}
          className="h-12 w-12 rounded-xl bg-white items-center justify-center shadow"
        >
          <FilterIcon width={40} height={40} />
        </TouchableOpacity>
      </View>

      <ScrollView className="px-5 mt-5" showsVerticalScrollIndicator={false}>


        {role === "vendor" &&
          vendorItems.map((item) => (
            <View
              key={item.id}
              className="bg-white flex-row items-center p-4 rounded-2xl shadow-md mb-4"
            >
              {/* IMAGE */}
              <View className="w-14 h-14 bg-white rounded-full shadow-md items-center justify-center mr-4">
                <Image source={item.image} className="w-12 h-12 rounded-full" />
              </View>

              {/* TEXT */}
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-900">{item.title}</Text>
                <Text className="text-gray-500 text-sm">Qty : {item.qty}</Text>
                <Text className="text-gray-800 font-semibold mt-1">₹ {item.price}.00/-</Text>
              </View>
            </View>
          ))}


        {role === "customer" &&
          vendorsList.map((v, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() =>
                router.push({
                  pathname: "/sub/vendorItems",
                  params: { vendorName: v.name }
                })
              }
              className="bg-white flex-row items-center p-4 rounded-2xl shadow-md mb-4"
            >
              <View className="w-12 h-12 rounded-full bg-[#eef3ff] items-center justify-center mr-4">
                <Text className="text-lg font-bold text-gray-800">{v.name.charAt(0)}</Text>
              </View>

              <View className="flex-1">
                <Text className="text-[15px] font-semibold text-gray-900">{v.name}</Text>
                <Text className="text-[11px] text-gray-500 mt-1">{v.address}</Text>
                <Text className="text-[11px] text-gray-600 mt-1">{v.phone}</Text>
              </View>
            </TouchableOpacity>
          ))}


        <View className="h-32" />
      </ScrollView>

      <BottomNavBar />
    </View>
  );
}
