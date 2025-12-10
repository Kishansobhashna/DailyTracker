import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import BottomNavBar from "../../components/BootamNavbar";
import Header from "../../components/Header";
import FilterIcon from "../../assets/icons/filterIcon.svg"

export default function ClientsScreen() {
  const [openFilter, setOpenFilter] = useState(false);
  const [businessName, setBusinessName] = useState();
  const [area, setArea] = useState();
  const [mobile, setMobile] = useState();

  const clients = [
    {
      name: "Samay Traders",
      address: "B-103 Maruti Complex, Vaghodiya Chowkdi, Vadodara",
    },
    {
      name: "WEBYUG INFONET LLP",
      address:
        "704 Sun Gravitas, Radio Mirchi Road, Near Shyamal Cross Road",
    },
    {
      name: "Ajay Medical Store",
      address: "A-15 Avadh Arcade, Nikol, Ahmedabad",
    },
    {
      name: "Patel Associates",
      address: "B-111 Twin Star, Nana Mava Road, Rajkot",
    }
  ];

  return (
    
    <View className="flex-1 bg-[#e9f0ff]">
      <Header />

      <View className="flex-row items-center justify-between px-5 mt-8">
        <Text className="text-2xl font-semibold text-[#AAAAAA]">Vendors</Text>

        <TouchableOpacity
          onPress={() => setOpenFilter(true)}
          className="h-12 w-12 rounded-xl bg-white items-center justify-center shadow"
        >
          <FilterIcon width={48} height={40} />
        </TouchableOpacity>
      </View>

      <ScrollView className="mt-5 px-5 mb-32  ">
        {clients.map((item, index) => (
          <View
            key={index}
            className="w-full bg-white rounded-2xl px-4 py-4 flex-row items-start mb-4 shadow"
          >
            <View className="h-12 w-12 rounded-full bg-[#eef3fb] items-center justify-center mr-4">
              <Text className="text-lg font-semibold text-gray-600">
                {item.name.charAt(0)}
              </Text>
            </View>

            <View className="flex-1">
              <Text className="text-[16px] font-semibold text-gray-800">
                {item.name}
              </Text>
              <Text className="text-sm text-gray-500">{item.address}</Text>
              <Text className="text-sm text-gray-400 mt-1">+91 00000 00000</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      
      <BottomNavBar />

      <Modal
        animationType="fade"
        transparent={true}
        visible={openFilter}
        onRequestClose={() => setOpenFilter(false)}
      >
        <TouchableWithoutFeedback onPress={() => setOpenFilter(false)}>
          <View className="flex-1 bg-black/40 items-center px-4">

            <TouchableWithoutFeedback>
              <View className="w-[376px] bg-white rounded-3xl p-6 mt-[200px]">
                
               
                {/* Business Name */}
                <TextInput
                  placeholder="Enter Business Name"
                  className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-4"
                  value={businessName}
                  onChangeText={setBusinessName}
                />

                {/* Area */}
                <TextInput
                  placeholder="Enter Area"
                  className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-4"
                  value={area}
                  onChangeText={setArea}
                />

                {/* Mobile No */}
                <TextInput
                  placeholder="Enter Mobile Number"
                  className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-4"
                  keyboardType="numeric"
                  value={mobile}
                  onChangeText={setMobile}
                />

                {/* Buttons Row */}
                <View className="flex-row justify-between mt-8">

                  {/* Clean Filter Button */}
                  <TouchableOpacity
                    className="flex-1 py-3 rounded-xl border border-blue-500 items-center mr-3"
                    onPress={() => {
                      setBusinessName("");
                      setArea("");
                      setMobile("");
                    }}
                  >
                    <Text className="text-blue-500 font-semibold">Clean Filter</Text>
                  </TouchableOpacity>

                  {/* Filter Button */}
                  <TouchableOpacity className="flex-1 py-3 rounded-xl bg-blue-500 items-center">
                    <Text className="text-white font-semibold">Filter</Text>
                  </TouchableOpacity>

                </View>

              </View>
            </TouchableWithoutFeedback>

          </View>
        </TouchableWithoutFeedback>
      </Modal>


    </View>
  );
}
