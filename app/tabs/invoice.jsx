import React, { useState, useEffect } from "react";
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
import { router } from "expo-router";
import FilterIcon from "../../assets/icons/filterIcon.svg";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ClientsScreen() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openCityDropdown, setOpenCityDropdown] = useState(false);
  const [openMonthDropdown, setOpenMonthDropdown] = useState(false);
  const [openYearDropdown, setOpenYearDropdown] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // ROLE STATE (customer/vendor)
  const [role, setRole] = useState("");

  useEffect(() => {
    const loadRole = async () => {
      const r = await AsyncStorage.getItem("role");
      setRole(r || "customer");
    };
    loadRole();
  }, []);

  // DATE STATES
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [openStartPicker, setOpenStartPicker] = useState(false);
  const [openEndPicker, setOpenEndPicker] = useState(false);

  const cityList = [
    "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch",
    "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhumi Dwarka",
    "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kachchh",
    "Rajkot", "Surat", "Surendranagar"
  ];

  const monthList = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const yearList = ["2021","2022","2023","2024","2025","2026","2027"];

  const invoices = [
    {
      name: "Samay Traders",
      address: "B-103 Maruti Complex,\nVaghodiya Chowkdi, Vadodara",
      amount: "₹ 2156.00/-",
      date: "01 April 2025   To   31 May 2025",
    },
    {
      name: "WEBYUG INFONET LLP",
      address:
        "704 Sun Gravitas, Radio Mirchi Road,\nNear Shyamal Cross Road, Ahmedabad",
      amount: "₹ 1120.00/-",
      date: "01 April 2025   To   31 May 2025",
    },
    {
      name: "Ajay Medical Store",
      address: "A-15 Avadh Arcade, Nikol,\nAhmedabad",
      amount: "₹ 1300.00/-",
      date: "01 April 2025   To   31 May 2025",
    },

    {
      name: "Patel Associates",
      address:
        "B-111 Twin Star, Nana Mava\nRoad, Rajkot",
      amount: "₹ 1200.00/-",
      date: "01 April 2025  To  31 May 2025",
    },
  ];


  return (
    <View className="flex-1 bg-[#e9f0ff]">
      <Header />

      {/* -------- Title -------- */}
      <View className="flex-row items-center justify-between px-5 mt-8">
        <Text className="text-2xl font-semibold text-[#AAAAAA]">Invoice</Text>

        <TouchableOpacity
          onPress={() => setOpenFilter(true)}
          className="h-12 w-12 mb-4 rounded-xl bg-white items-center justify-center shadow"
        >
          <FilterIcon width={48} height={40} />
        </TouchableOpacity>

      </View>

      {/* -------- Invoice List -------- */}
      <ScrollView
        
        className="px-5 mb-32"

        showsVerticalScrollIndicator={false}
      >
       
        {invoices.map((item, index) => (
          
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => router.push("/invoicedetails")}
            className="bg-white rounded-2xl px-4 py-4 mb-4 shadow flex-row"
          >

            <View className="h-14 w-14 rounded-full bg-[#f3f7ff] items-center justify-center mr-4">
              <Text className="text-lg font-bold">{item.name.charAt(0)}</Text>
            </View>


            <View className="flex-1">
              <Text className="text-[16px] font-semibold">{item.name}</Text>
              <Text className="text-[11px] text-gray-500 mt-1 leading-4">{item.address}</Text>
              <Text className="text-[11px] text-gray-400 mt-1">{item.date}</Text>
            </View>


            <View className="justify-center items-end">
              <Text className="text-[13px] font-semibold text-gray-700">
                {item.amount}
                <Feather name="chevron-right" size={22} color="#2E3A59" />
              </Text>
            </View>

          </TouchableOpacity>

        ))}
      </ScrollView>

      {/* -------- Add Invoice Button (ONLY FOR VENDOR) -------- */}
      {role === "vendor" && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setOpenPopup(true)}
          className="absolute bottom-24 right-6 h-14 w-14 mb-12 bg-blue-500 rounded-full items-center justify-center shadow-lg"
        >
          <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
      )}

      <BottomNavBar />

      {/* ------------------ INVOICE MODAL (ONLY FOR VENDOR) ------------------ */}
      {role === "vendor" && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={openPopup}
          onRequestClose={() => setOpenPopup(false)}
        >
          <TouchableWithoutFeedback onPress={() => setOpenPopup(false)}>
            <View className="flex-1 bg-black/40 items-center px-4">

              <TouchableWithoutFeedback>
                <View className="w-[376px] h-[636px] bg-white rounded-3xl p-7 mt-[100px]">

                  {/* Close Button */}
                  <TouchableOpacity
                    onPress={() => setOpenPopup(false)}
                    className="absolute top-3 right-4 h-10 w-10 bg-blue-500 rounded-full items-center justify-center shadow"
                  >
                    <Ionicons name="close" size={22} color="white" />
                  </TouchableOpacity>

                  {/* FORM */}
                  <ScrollView>
                    <View className="items-center mt-2 mb-6">
                      <Text className="text-[20px] font-semibold">New Invoice</Text>
                    </View>

                    <Text className="text-gray-500 mt-1">
                      Invoice No : <Text className="font-semibold text-black">#0026</Text>
                    </Text>

                    {/* DATE RANGE */}
                    <View className="flex-row justify-between mb-5">
                      <TouchableOpacity
                        onPress={() => setOpenStartPicker(true)}
                        className="flex-1 bg-[#eef3ff] py-3 rounded-xl mr-2 items-center mt-2 border border-[#DDE3F0]"
                      >
                        <Text className="text-gray-700">
                          {startDate ? startDate.toLocaleDateString() : "Start Date"}
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => setOpenEndPicker(true)}
                        className="flex-1 bg-[#eef3ff] py-3 rounded-xl ml-2 items-center mt-2 border border-[#DDE3F0]"
                      >
                        <Text className="text-gray-700">
                          {endDate ? endDate.toLocaleDateString() : "End Date"}
                        </Text>
                      </TouchableOpacity>
                    </View>

                    {/* FORM FIELDS */}
                    <Text className="text-gray-600 mb-1">Name</Text>
                    <TextInput
                      placeholder="Enter Name"
                      className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-4 border border-[#DDE3F0]"
                    />

                    <Text className="text-gray-600 mb-1">Email Address</Text>
                    <TextInput
                      placeholder="youremail@gmail.com"
                      className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-4 border border-[#DDE3F0]"
                    />

                    <Text className="text-gray-600 mb-1">Contact</Text>
                    <TextInput
                      placeholder="+91 00000 00000"
                      className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-4 border border-[#DDE3F0]"
                    />

                    <View className="w-full border-t border-gray-200 my-3" />

                    <Text className="text-gray-600 mb-1">Address</Text>

                    <TextInput placeholder="Office" className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-3 border border-[#DDE3F0]" />
                    <TextInput placeholder="Address Line 1" className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-3 border border-[#DDE3F0]" />
                    <TextInput placeholder="Address Line 2" className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-3 border border-[#DDE3F0]" />

                    <View className="flex-row gap-3 mb-3">
                      <TextInput placeholder="Area" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-[#DDE3F0]" />
                      <TextInput placeholder="City" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-[#DDE3F0]" />
                    </View>

                    <View className="w-full border-t border-gray-200 my-3" />

                    <Text className="text-gray-600 mb-1">Items</Text>

                    <View className="flex-row gap-3 mb-1">
                      <TextInput placeholder="Select Item" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-[#DDE3F0]" />
                      <TextInput placeholder="Enter Qty" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-[#DDE3F0]" />
                    </View>

                    <View className="items-end">
                      <TouchableOpacity>
                        <Text className="text-blue-500 mb-4">+ Add More</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity className="bg-blue-500 py-4 rounded-2xl items-center mb-2">
                      <Text className="text-white text-lg font-semibold">Generate Invoice</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>

            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={openFilter}
        onRequestClose={() => setOpenFilter(false)}
      >
        <TouchableWithoutFeedback onPress={() => setOpenFilter(false)}>
            <View className="flex-1 bg-black/40 items-center px-4">

              <TouchableWithoutFeedback>
                <View className="w-[360px]  bg-white rounded-3xl p-6 mt-[195px]">


                  <TextInput
                    placeholder="Enter Business Name"
                    className="bg-[#f4f7fc] px-4 py-3 rounded-xl border border-gray-200 mb-4"
                    value={businessName}
                    onChangeText={setBusinessName}
                  />


                  <TextInput
                    placeholder="Enter Office/House/Shop No."
                    className="bg-[#f4f7fc] px-4 py-3 rounded-xl border border-gray-200 mb-4"
                    value={address}
                    onChangeText={setAddress}
                  />


                <View className="mb-4">
                  <TouchableOpacity
                    onPress={() => {
                    setOpenCityDropdown(!openCityDropdown);
                    setOpenMonthDropdown(false);
                    setOpenYearDropdown(false);
                  }}
                    className="border border-gray-300 bg-[#f8fafc] rounded-xl px-4 py-3 flex-row justify-between items-center"
                  >
                    <Text className="text-gray-600">{city || "Select City"}</Text>
                    <Feather name="chevron-down" size={20} color="#555" />
                  </TouchableOpacity>

                  {openCityDropdown && (
                    <View className="bg-white border border-gray-300 rounded-xl mt-2 max-h-56 shadow-lg">
                      <ScrollView nestedScrollEnabled={true}>
                        {cityList.map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                            setCity(item);
                            setOpenCityDropdown(false);
                            }}
                            className="px-4 py-3 border-b border-gray-200"
                          >
                            <Text className="text-gray-700">{item}</Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  )}
                </View>



                <View className="flex-row gap-3 mb-6">


                    <View className="flex-1">

                      <TouchableOpacity

                        onPress={() => {
                          setOpenMonthDropdown(!openMonthDropdown);
                          setOpenCityDropdown(false);
                          setOpenYearDropdown(false);
                        }}
                        className="border border-gray-300 bg-[#f8fafc] rounded-xl px-4 py-3 flex-row justify-between items-center"
                      >
                        <Text className="text-gray-600">{month || "Month"}</Text>
                        <Feather name="chevron-down" size={20} color="#555" />
                      </TouchableOpacity>


                      {openMonthDropdown && (
                        <View className="bg-white border border-gray-300 rounded-xl mt-2 max-h-56 shadow-lg absolute w-full z-20">
                          <ScrollView nestedScrollEnabled={true}>
                            {monthList.map((item, index) => (
                              <TouchableOpacity
                                key={index}

                                onPress={() => {
                                  setMonth(item);
                                  setOpenMonthDropdown(false);
                                }}
                                className="px-4 py-3 border-b border-gray-200"
                              >
                                <Text className="text-gray-700">{item}</Text>
                              </TouchableOpacity>
                            ))}
                          </ScrollView>
                        </View>
                      )}

                    </View>


                    <View className="flex-1">
                      <TouchableOpacity
                        onPress={() => {
                          setOpenYearDropdown(!openYearDropdown);
                          setOpenCityDropdown(false);
                          setOpenMonthDropdown(false);
                        }}
                        className="border border-gray-300 bg-[#f8fafc] rounded-xl px-4 py-3 flex-row justify-between items-center"
                      >
                        <Text className="text-gray-600">{year || "Year"}</Text>
                        <Feather name="chevron-down" size={20} color="#555" />
                      </TouchableOpacity>

                      {openYearDropdown && (
                        <View className="bg-white border border-gray-300 rounded-xl mt-2 max-h-56 shadow-lg absolute w-full z-20">
                          <ScrollView nestedScrollEnabled={true}>
                            {yearList.map((item, index) => (
                              <TouchableOpacity
                                key={index}
                                onPress={() => {
                                  setYear(item);
                                  setOpenYearDropdown(false);
                                }}
                                className="px-4 py-3 border-b border-gray-200"
                              >
                                <Text className="text-gray-700">{item}</Text>
                              </TouchableOpacity>
                            ))}
                          </ScrollView>
                        </View>
                      )}
                    </View>


                </View>



                <View className="flex-row gap-3">

                  
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


                  <TouchableOpacity className="flex-1 py-3 rounded-xl bg-blue-500 items-center">
                    <Text className="text-white font-semibold">Filter</Text>
                  </TouchableOpacity>

                </View>

                </View>
              </TouchableWithoutFeedback>

            </View>
        </TouchableWithoutFeedback>
      </Modal>



      {openStartPicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, selected) => {
            setOpenStartPicker(false);
            if (selected) setStartDate(selected);
          }}
        />
      )}

      {openEndPicker && (
        <DateTimePicker
          value={endDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, selected) => {
            setOpenEndPicker(false);
            if (selected) setEndDate(selected);
          }}
        />
      )}
    </View>
  );
}
