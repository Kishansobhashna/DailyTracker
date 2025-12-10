import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import FilterIcon from "../../assets/icons/filterIcon.svg";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SummaryPage() {

  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  
  const data = [
    { id: 1, name: "Tea", qty: 12, img: require("../../assets/images/tea.png") },
    { id: 2, name: "Hot Coffee", qty: 20, img: require("../../assets/images/hotcoffee.png") },
    { id: 3, name: "Cold Coffee", qty: 30, img: require("../../assets/images/coldcoffee.png") },
    { id: 4, name: "Cold Coffee", qty: 30, img: require("../../assets/images/coldcoffee.png") },
    { id: 5, name: "Tea", qty: 12, img: require("../../assets/images/tea.png") },
    { id: 6, name: "Hot Coffee", qty: 20, img: require("../../assets/images/hotcoffee.png") },
    { id: 7, name: "Hot Coffee", qty: 20, img: require("../../assets/images/hotcoffee.png") },
    // { id: 8, name: "Cold Coffee", qty: 30, img: require("../../assets/images/coldcoffee.png") },
    // { id: 9, name: "tea", qty: 12, img: require("../../assets/images/tea.png") },
  ];

  return (
    <View className="flex-1 bg-[#eef6ff]">


      <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">
        <View className="bg-white rounded-3xl flex-row items-center px-4 w-[376px] h-[77px] self-center">

          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>

          <View className="absolute left-0 right-0 items-center">
            <Text className="text-[18px] font-semibold text-black">Summary</Text>
          </View>

        </View>
      </View>

      <View className="flex-row items-center justify-between px-5 mt-1">
          <TouchableOpacity
            onPress={() => setShowPicker(true)}
            className="h-12 w-12 rounded-xl bg-white items-center justify-center shadow ml-auto"
          >
            <FilterIcon width={48} height={40} />
          </TouchableOpacity>
      </View>


      <ScrollView className="px-5 mb-32">

        <View className="bg-white rounded-2xl p-4 mb-5 w-[373px] h-full self-center mt-2">
          <Text className="text-[16px] font-semibold mb-4">Today Summary</Text>


          <View className="flex-row flex-wrap justify-between">

            {data.map((item) => (
              <View
                key={item.id}
                className="w-[109px] h-[139px] rounded-xl overflow-hidden border border-gray-200 mb-4"
              >
                <Image
                  source={item.img}
                  className="w-full h-full"
                  resizeMode="cover"
                />


                <View className="absolute bottom-0 left-0 w-full bg-black/40 px-2 py-1 flex-row justify-between">
                  <Text className="text-white text-xs font-semibold">{item.name}</Text>
                  <Text className="text-white text-xs font-semibold">{item.qty}</Text>
                </View>
              </View>
            ))}

          </View>

        </View>

      </ScrollView>


      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={(event, date) => {
            setShowPicker(false);
            if (date) setSelectedDate(date);
          }}
        />
      )}
      
    </View>
  );
}
