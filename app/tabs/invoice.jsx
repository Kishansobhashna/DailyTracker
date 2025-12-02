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
import { Ionicons, Feather } from "@expo/vector-icons";
import BottomNavBar from "../../components/BootamNavbar";
import Header from "../../components/Header";

export default function ClientsScreen() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [businessName, setBusinessName] = useState();
  const [area, setArea] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
const [city, setCity] = useState();
const [month, setMonth] = useState();
const [year, setYear] = useState();
  

  const invoices = [
    {
      name: "Samay Traders",
      address:
        "B-103 Maruti Complex,\nVaghodiya Chowkdi, Vadodara",
      amount: "₹ 2156.00/-",
      date: "01 April 2025   TO   31 May 2025",
    },
    {
      name: "WEBYUG INFONET LLP",
      address:
        "704 Sun Gravitas, Radio Mirchi Road,\nNear Shyamal Cross Road, Ahmedabad",
      amount: "₹ 1120.00/-",
      date: "01 April 2025   TO   31 May 2025",
    },
    {
      name: "Ajay Medical Store",
      address:
        "A-15 Avadh Arcade, Nikol,\nAhmedabad",
      amount: "₹ 1300.00/-",
      date: "01 April 2025   TO   31 May 2025",
    },
    {
      name: "Charbhuja Marble",
      address:
        "P-445 near Vr Girls Collage,\nGondal road, Rajkot",
      amount: "₹ 1870.00/-",
      date: "01 April 2025   TO   31 May 2025",
    },
    {
      name: "Patel Associates",
      address:
        "B-111 Twin Star, Nana Mava\nRoad, Rajkot",
      amount: "₹ 1200.00/-",
      date: "01 April 2025   TO   31 May 2025",
    },
  ];


  return (
    <View className="flex-1 bg-[#e9f0ff]">
      <Header />

      {/* -------- Title -------- */}
      <View className="flex-row items-center justify-between px-5 mt-8">
        <Text className="text-2xl font-semibold text-gray-600">Invoice</Text>

        <TouchableOpacity
            onPress={() => setOpenFilter(true)}
            className="h-12 w-12 mb-4 rounded-xl bg-white items-center justify-center shadow"
            >
            <Feather name="filter" size={35} />
        </TouchableOpacity>

      </View>

      {/* -------- Client List -------- */}
      <ScrollView
        className="px-5 mb-32"
        contentContainerStyle={{ paddingBottom: 10 }}  // avoids overlap with navbar
        showsVerticalScrollIndicator={false}
      >
        {invoices.map((item, index) => (
          <View
            key={index}
            className="bg-white rounded-2xl px-4 py-4 mb-4 shadow flex-row"
          >
            {/* Circle Icon */}
            <View className="h-14 w-14 rounded-full bg-[#f3f7ff] items-center justify-center mr-4">
              <Text className="text-lg font-bold text-gray-700">S</Text>
            </View>

            {/* DETAILS */}
            <View className="flex-1">
              <Text className="text-[16px] font-semibold text-gray-900">
                {item.name}
              </Text>

              <Text className="text-[11px] text-gray-500 mt-1 leading-4">
                {item.address}
              </Text>

              <Text className="text-[11px] text-gray-400 mt-1">
                {item.date}
              </Text>
            </View>

            {/* AMOUNT + ARROW */}
            <View className="items-end justify-between">
              <Text className="text-[13px] font-semibold text-gray-700">
                {item.amount}
              </Text>

              <Feather name="chevron-right" size={22} color="#2E3A59" />
            </View>
          </View>
        ))}
      </ScrollView>


      {/* -------- Floating Add Button -------- */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setOpenPopup(true)}
        className="absolute bottom-24 right-6 h-14 w-14 mb-10 bg-blue-500 rounded-full items-center justify-center shadow-lg"
      >
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>

      <BottomNavBar />

      <Modal
              animationType="fade"
              transparent={true}
              visible={openPopup}
              onRequestClose={() => setOpenPopup(false)}
            >
              {/* OUTSIDE CLICK */}
              <TouchableWithoutFeedback onPress={() => setOpenPopup(false)}>
                <View className="flex-1 bg-black/40 items-center px-4">
      
                  {/* STOP PROPAGATION (WHITE BOX) */}
                  <TouchableWithoutFeedback>
                    <View className="w-[376px] h-[636px] bg-white rounded-3xl p-7 justify-between mt-[100px]">
      
                      {/* Close Button */}
                      <TouchableOpacity
                        onPress={() => setOpenPopup(false)}
                        className="absolute top-3 right-4 h-10 w-10 bg-blue-500 rounded-full items-center justify-center shadow"
                      >
                        <Ionicons name="close" size={22} color="white" />
                      </TouchableOpacity>
      
                      {/* All Inputs */}
                      <View>
      
                        <Text className="text-gray-600 mb-1">Name</Text>
                        <View className="flex-row gap-3 mb-4">
                          <TextInput
                            placeholder="First Name"
                            className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl"
                          />
                          <TextInput
                            placeholder="Last Name"
                            className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl"
                          />
                        </View>
      
                        <Text className="text-gray-600 mb-1">Phone</Text>
                        <TextInput
                          placeholder="+91 00000 00000"
                          className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-4"
                        />
      
                        <Text className="text-gray-600 mb-1">Email Address</Text>
                        <TextInput
                          placeholder="youremail@gmail.com"
                          className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-4"
                        />
      
                        <Text className="text-gray-600 mb-1">Address</Text>
      
                        <TextInput placeholder="Office" className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-3" />
                        <TextInput placeholder="Address Line 1" className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-3" />
                        <TextInput placeholder="Address Line 2" className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-3" />
      
                        <View className="flex-row gap-3 mb-3">
                          <TextInput placeholder="Area" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl" />
                          <TextInput placeholder="Pincode" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl" />
                        </View>
      
                        <View className="flex-row gap-3">
                          <TextInput placeholder="City" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl" />
                          <TextInput placeholder="State" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl" />
                        </View>
      
                      </View>
      
                      {/* Submit Button */}
                      <TouchableOpacity className="bg-blue-500 py-4 rounded-2xl items-center mb-3 mt-2">
                        <Text className="text-white text-lg font-semibold">Add Client →</Text>
                      </TouchableOpacity>
      
                    </View>
                  </TouchableWithoutFeedback>
      
                </View>
              </TouchableWithoutFeedback>
           </Modal>
      

      <Modal
        animationType="fade"
        transparent={true}
        visible={openFilter}
        onRequestClose={() => setOpenFilter(false)}
      >
        <TouchableWithoutFeedback onPress={() => setOpenFilter(false)}>
          <View className="flex-1 bg-black/40 items-center justify-center px-4">

            <TouchableWithoutFeedback>
              <View className="w-[360px] bg-white rounded-3xl p-6">

                {/* Business Name */}
                <TextInput
                  placeholder="Enter Business Name"
                  className="bg-[#f4f7fc] px-4 py-3 rounded-xl border border-gray-200 mb-4"
                  value={businessName}
                  onChangeText={setBusinessName}
                />

                {/* Address Line */}
                <TextInput
                  placeholder="Enter Office/House/Shop No. and Building Name"
                  className="bg-[#f4f7fc] px-4 py-3 rounded-xl border border-gray-200 mb-4"
                  value={address}
                  onChangeText={setAddress}
                />

                {/* Select City (Dropdown UI feel) */}
                <TouchableOpacity className="bg-[#f4f7fc] px-4 py-3 rounded-xl border border-gray-200 mb-4 flex-row justify-between items-center">
                  <Text className="text-gray-500">{city || "Select city"}</Text>
                  <Text className="text-gray-400">▼</Text>
                </TouchableOpacity>

                {/* Month + Year Row */}
                <View className="flex-row gap-3 mb-6">

                  {/* Month Dropdown */}
                  <TouchableOpacity className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-gray-200 flex-row justify-between items-center">
                    <Text className="text-gray-500">{month || "Month"}</Text>
                    <Text className="text-gray-400">▼</Text>
                  </TouchableOpacity>

                  {/* Year Dropdown */}
                  <TouchableOpacity className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-gray-200 flex-row justify-between items-center">
                    <Text className="text-gray-500">{year || "Year"}</Text>
                    <Text className="text-gray-400">▼</Text>
                  </TouchableOpacity>

                </View>

                {/* Buttons Row */}
                <View className="flex-row gap-3">

                  {/* Clean Filter */}
                  <TouchableOpacity
                    className="flex-1 py-3 rounded-xl border border-blue-500 items-center"
                    onPress={() => {
                      setBusinessName("");
                      setAddress("");
                      setCity("");
                      setMonth("");
                      setYear("");
                    }}
                  >
                    <Text className="text-blue-500 font-semibold">Clean Filter</Text>
                  </TouchableOpacity>

                  {/* Filter */}
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
