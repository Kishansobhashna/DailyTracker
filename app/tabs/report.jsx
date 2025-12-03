import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import BottomNavBar from "../../components/BootamNavbar";
import Header from "../../components/Header";

export default function HomeScreen() {
  const [setOpenFilter] = useState();


  return (
    <View className="flex-1 bg-[#e8f1ff] ">

      <Header />

      <View className="flex-row items-center justify-between px-5 mt-8">
          <Text className="text-2xl font-semibold text-[#AAAAAA]">Report</Text>
      </View>

      <BottomNavBar />
      
    </View>
  );
}

