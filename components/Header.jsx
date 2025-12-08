import React, { useState } from "react";
import { View, Image, TouchableOpacity, Modal, TextInput, Text, ScrollView, TouchableWithoutFeedback  } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Header() {
  const [searchActive, setSearchActive] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


  return (
    <>
      <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">

        <View className="bg-white rounded-3xl flex-row items-center justify-between px-4 w-[376px] h-[77px] self-center">

          <View className="h-12 w-12 bg-[#4c8dff] rounded-2xl justify-center items-center">
            <Image
              source={require("../assets/images/companylogo.png")}
              className="h-10 w-10"
              resizeMode="contain"
            />
          </View>

          <View className="flex-row items-center gap-4">

            <TouchableOpacity onPress={() => setSearchActive(true)}>
              <Ionicons
                name="search"
                size={27}
                color={searchActive ? "#3b82f6" : "#0f172a"} // active = blue
              />
            </TouchableOpacity>

             <TouchableOpacity onPress={() => setShowNotifications(true)}>
              <Feather
                name="bell"
                size={27}
                color={showNotifications ? "#3b82f6" : "#0f172a"}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowMenu(true)}>
              <Feather name="menu" size={27} color="#0f172a" />
            </TouchableOpacity>

          </View>
        </View>
      </View>

      <Modal transparent visible={searchActive} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setSearchActive(false)}>
          <View className="flex-1 bg-black/40 justify-start pt-24">
            
            <TouchableWithoutFeedback>
              <View className="w-[376px] h-[597px] bg-white rounded-3xl p-5 self-center">

                <TouchableOpacity
                  className="absolute top-3 right-4 h-10 w-10 bg-blue-500 rounded-full items-center justify-center"
                  onPress={() => setSearchActive(false)}
                >
                  <Ionicons name="close" size={22} color="white" />
                </TouchableOpacity>

                <TextInput
                  placeholder="Search here..."
                  className="mt-16 border border-gray-300 bg-[#f4f7fc] px-4 py-3 rounded-xl"
                />

              </View>
            </TouchableWithoutFeedback>

          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal visible={showNotifications} transparent animationType="fade">
  
        <TouchableWithoutFeedback onPress={() => setShowNotifications(false)}>
          <View className="flex-1 bg-black/40 items-center justify-start pt-32">

            <TouchableWithoutFeedback>
              <View className="w-[376px] h-[597px] bg-white rounded-2xl p-5">

                <View className="flex-row justify-between items-center mb-4">
                  <Text className="text-xl font-semibold text-gray-800">
                    Notifications
                  </Text>

                  <TouchableOpacity
                    onPress={() => setShowNotifications(false)}
                    className="h-10 w-10 items-center justify-center"
                  >
                    <Ionicons name="close" size={28} color="#000" />
                  </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                  <View className="flex-row gap-3 py-3 border-b border-gray-200">
                    <Image
                      source={require("../assets/images/coffee.png")}
                      className="h-12 w-12 rounded-full"
                    />
                    <View>
                      <Text className="font-bold">Emily Tyler</Text>
                      <Text className="text-gray-700">
                        sent you a comment in{" "}
                        <Text className="font-semibold">Research</Text> task
                      </Text>
                      <Text className="text-gray-500 mt-1">2h ago</Text>
                    </View>
                  </View>
                </ScrollView>

              </View>
            </TouchableWithoutFeedback>

          </View>
        </TouchableWithoutFeedback>

      </Modal>


    </>
  );
}
