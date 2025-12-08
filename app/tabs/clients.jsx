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
import FilterIcon from "../../assets/icons/filterIcon.svg"

export default function ClientsScreen() {
  const [openPopup, setOpenPopup] = useState(false);
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
    },
    { 
      name: "Charbhuja Marble", 
      address: "P-445 near VR Girls Collage, Gondal road, Rajkot", 
    }, 
    { 
      name: "Tech Buddies Pvt. Ltd.", 
      address: "B-707 Ratnakar Nine Square Satellite, Ahmedabad",
    },
  ];

  return (
    <View className="flex-1 bg-[#e9f0ff]">
      <Header />

      {/* -------- Title -------- */}
      <View className="flex-row items-center justify-between px-5 mt-8">
        <Text className="text-2xl font-semibold text-[#AAAAAA]">Client</Text>

        <TouchableOpacity
          onPress={() => setOpenFilter(true)}
          className="h-12 w-12 rounded-xl bg-white items-center justify-center shadow"
        >
          <FilterIcon width={40} height={35} />
        </TouchableOpacity>
      </View>

      {/* -------- Client List -------- */}
      <ScrollView className="mt-5 px-5 mb-32">
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

      {/* -------- Floating Add Button -------- */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setOpenPopup(true)}
        className="absolute bottom-24 right-6 h-14 w-14 mb-12 bg-blue-500 rounded-full items-center justify-center shadow-lg"
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
                <View className="w-[376px] h-[640px] bg-white rounded-3xl p-7 justify-between mt-[100px]">

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
                        className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-[#DDE3F0]"
                      />
                      <TextInput
                        placeholder="Last Name"
                        className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-[#DDE3F0]"
                      />
                    </View>

                    <Text className="text-gray-600 mb-1">Phone</Text>
                    <TextInput
                      placeholder="+91 00000 00000"
                      className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-4 border border-[#DDE3F0]"
                    />

                    <Text className="text-gray-600 mb-1">Email Address</Text>
                    <TextInput
                      placeholder="youremail@gmail.com"
                      className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-4 border border-[#DDE3F0]"
                    />

                    <Text className="text-gray-600 mb-1">Address</Text>

                    <TextInput placeholder="Office" className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-3 border border-[#DDE3F0]" />
                    <TextInput placeholder="Address Line 1" className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-3 border border-[#DDE3F0]" />
                    <TextInput placeholder="Address Line 2" className="bg-[#f4f7fc] px-4 py-3 rounded-xl mb-3 border border-[#DDE3F0]" />

                    <View className="flex-row gap-3 mb-3">
                      <TextInput placeholder="Area" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-[#DDE3F0]" />
                      <TextInput placeholder="Pincode" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-[#DDE3F0]" />
                    </View>

                    <View className="flex-row gap-3">
                      <TextInput placeholder="City" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-[#DDE3F0]" />
                      <TextInput placeholder="State" className="flex-1 bg-[#f4f7fc] px-4 py-3 rounded-xl border border-[#DDE3F0]" />
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
