import React from "react";
import { View, Text, Image, TouchableOpacity,ScrollView } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomNavBar from "../../components/BootamNavbar";
import Header from "../../components/Header";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#e8f1ff] ">
      {/* ================= Header ================= */}
      <Header />

      <BottomNavBar />
    </View>
  );
}
