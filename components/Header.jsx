import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, Modal, TextInput, Text, ScrollView, TouchableWithoutFeedback  } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import ProfileIcon from "../assets/icons/profile.svg";
import { router } from "expo-router";
import SupportIcon from "../assets/icons/supportIcon.svg";
import { StatusBar } from "react-native";


export default function Header() {
  const [searchActive, setSearchActive] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      setActiveMenu("Dashboard");
    }
  }, [showMenu]);

  return (
    <>
    <StatusBar barStyle="light-content" />
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

        {/* OUTSIDE CLICK AREA */}
        <TouchableWithoutFeedback onPress={() => setShowNotifications(false)}>
          <View className="flex-1 bg-black/40 items-center justify-start pt-32">

            {/* STOP CLICK FROM CLOSING MODAL */}
            <TouchableWithoutFeedback>
              <View className="w-[376px] max-h-[80%] bg-white rounded-2xl p-5">

                {/* HEADER */}
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

                <View className="h-[1px] bg-gray-200 " />
                {/* SCROLL CONTENT */}
                <ScrollView showsVerticalScrollIndicator={false}>
                  
                  {/* NOTIFICATION 1 */}
                      <View className="flex-row gap-3 py-4 border-b border-gray-200">
                        <Image
                          source={require("../assets/images/coffee.png")}
                          className="h-12 w-12 rounded-full"
                        />
                        <View className="flex-1">
                          <Text className="font-bold text-gray-800">Emily Tyler</Text>
                          <Text className="text-gray-700 leading-tight">
                            sent you a comment in{" "}
                            <Text className="font-semibold">Research</Text> task
                          </Text>
                          <Text className="text-gray-500 text-sm mt-1">2h ago</Text>
                        </View>
                      </View>

                      {/* Notification 2 */}
                      <View className="flex-row gap-3 py-4 border-b border-gray-200">
                        <Image
                          source={require("../assets/images/tea.png")}
                          className="h-12 w-12 rounded-full"
                        />
                          <View className="flex-1">
                            <Text className="font-bold text-gray-800">James Carter</Text>
                            <Text className="text-gray-700 leading-tight">
                              Updated the status of{" "}
                            <Text className="font-semibold">Mind Map</Text> task to{" "}
                              <Text className="text-blue-600 font-semibold">In Progress</Text>
                            </Text>
                            <Text className="text-gray-500 text-sm mt-1">6h ago</Text>
                          </View>
                      </View>

                      {/* Notification 3 */}
                      <View className="flex-row gap-3 py-4 border-b border-gray-200">
                        <Image
                          source={require("../assets/images/coffee.png")}
                          className="h-12 w-12 rounded-full"
                        />
                          <View className="flex-1">
                            <Text className="font-bold text-gray-800">Blake Silva</Text>
                            <Text className="text-gray-700 leading-tight">
                              assigned the issue to you
                            </Text>
                            <Text className="text-gray-500 text-sm mt-1">
                              Today 9:30 am
                            </Text>
                          </View>
                      </View>

                      {/* Notification 4 */}
                      <View className="flex-row gap-3 py-4 border-b border-gray-200">
                        <Image
                          source={require("../assets/images/coffee.png")}
                          className="h-12 w-12 rounded-full"
                        />
                          <View className="flex-1">
                            <Text className="font-bold text-gray-800">Emily Tyler</Text>
                            <Text className="text-gray-700 leading-tight">
                              sent you a comment in{" "}
                            <Text className="font-semibold">Research</Text> task
                            </Text>
                            <Text className="text-gray-500 text-sm mt-1">
                              Tomorrow 2:30 pm
                            </Text>
                          </View>
                      </View>

                      {/* Notification 5 */}
                      <View className="flex-row gap-3 py-4 border-b border-gray-200">
                        <Image
                          source={require("../assets/images/coffee.png")}
                          className="h-12 w-12 rounded-full"
                        />
                          <View className="flex-1">
                            <Text className="font-bold text-gray-800">James Carter</Text>
                            <Text className="text-gray-700 leading-tight">
                              Updated the status of{" "}
                            <Text className="font-semibold">Mind Map</Text> task to{" "}
                            <Text className="text-blue-600 font-semibold">In Progress</Text>
                            </Text>
                            <Text className="text-gray-500 text-sm mt-1">
                              Tomorrow 1:45 pm
                            </Text>
                          </View>
                      </View>

                  {/* ... your other notifications ... */}

                </ScrollView>

              </View>
            </TouchableWithoutFeedback>

          </View>
        </TouchableWithoutFeedback>

      </Modal>

      <Modal visible={showMenu} transparent animationType="fade">

        <TouchableWithoutFeedback onPress={() => setShowMenu(false)}>
          <View className="flex-1 bg-black/30 justify-start items-end pt-24 pr-3">

            <TouchableWithoutFeedback>
              <View className="w-[275px] h-[711px] bg-white rounded-3xl p-5 shadow-lg">

                <View className="flex-row items-center mb-6">
                  <Image
                    source={require("../assets/images/companylogo.png")}
                    className="h-10 w-10 rounded-2xl"
                  />
                  <Text className="ml-3 text-[18px] font-semibold text-[#4f8bff]">
                    Company Name
                  </Text>
                </View>

                <View className="space-y-4">

                  <TouchableOpacity
                    onPress={() => setActiveMenu("Dashboard")}
                    className={`
                      flex-row items-center px-3 py-2 rounded-xl mt-5
                      ${activeMenu === "Dashboard" ? "bg-[#e8f0ff]" : ""}
                    `}
                  >
                    {activeMenu === "Dashboard" && (
                      <View className="h-full w-[3px] bg-[#4f8bff] rounded-full mr-3" />
                    )}

                    <Feather
                      name="grid"
                      size={20}
                      color={activeMenu === "Dashboard" ? "#4f8bff" : "#4b5563"}
                    />

                    <Text
                      className={`
                        ml-3 
                        ${activeMenu === "Dashboard" ? "text-[#4f8bff] font-semibold" : "text-gray-700"}
                      `}
                    >
                      Dashboard
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setActiveMenu("Daily Entry")}
                    className={`flex-row items-center px-3 py-2 rounded-xl mt-4 ${
                      activeMenu === "Daily Entry" ? "bg-[#e8f0ff]" : ""
                    }`}
                  >
                    {activeMenu === "Daily Entry" && (
                      <View className="h-full w-[3px] bg-[#4f8bff] rounded-full mr-3" />
                    )}

                    <Feather
                      name="layers"
                      size={20}
                      color={activeMenu === "Daily Entry" ? "#4f8bff" : "#4b5563"}
                    />

                    <Text
                      className={`ml-3 ${
                        activeMenu === "Daily Entry"
                          ? "text-[#4f8bff] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      Daily Entry
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setActiveMenu("Vacations")}
                    className={`flex-row items-center px-3 py-2 rounded-xl mt-4 ${
                      activeMenu === "Vacations" ? "bg-[#e8f0ff]" : ""
                    }`}
                  >
                    {activeMenu === "Vacations" && (
                      <View className="h-full w-[3px] bg-[#4f8bff] rounded-full mr-3" />
                    )}

                    <Feather
                      name="sun"
                      size={20}
                      color={activeMenu === "Vacations" ? "#4f8bff" : "#4b5563"}
                    />

                    <Text
                      className={`ml-3 ${
                        activeMenu === "Vacations"
                          ? "text-[#4f8bff] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      Vacations
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setActiveMenu("Clients")}
                    className={`flex-row items-center px-3 py-2 mt-4 rounded-xl ${
                      activeMenu === "Clients" ? "bg-[#e8f0ff]" : ""
                    }`}
                  >
                    {activeMenu === "Clients" && (
                      <View className="h-full w-[3px] bg-[#4f8bff] rounded-full mr-3" />
                    )}

                    <Feather
                      name="users"
                      size={20}
                      color={activeMenu === "Clients" ? "#4f8bff" : "#4b5563"}
                    />

                    <Text
                      className={`ml-3 ${
                        activeMenu === "Clients"
                          ? "text-[#4f8bff] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      Clients
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setActiveMenu("Messenger")}
                    className={`flex-row items-center px-3 py-2 mt-4 rounded-xl ${
                      activeMenu === "Messenger" ? "bg-[#e8f0ff]" : ""
                    }`}
                  >
                    {activeMenu === "Messenger" && (
                      <View className="h-full w-[3px] bg-[#4f8bff] rounded-full mr-3" />
                    )}

                    <Feather
                      name="message-square"
                      size={20}
                      color={activeMenu === "Messenger" ? "#4f8bff" : "#4b5563"}
                    />

                    <Text
                      className={`ml-3 ${
                        activeMenu === "Messenger"
                          ? "text-[#4f8bff] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      Messenger
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setActiveMenu("Info Portal")}
                    className={`flex-row items-center px-3 py-2 mt-4 rounded-xl ${
                      activeMenu === "Info Portal" ? "bg-[#e8f0ff]" : ""
                    }`}
                  >
                    {activeMenu === "Info Portal" && (
                      <View className="h-full w-[3px] bg-[#4f8bff] rounded-full mr-3" />
                    )}

                    <Feather
                      name="file-text"
                      size={20}
                      color={activeMenu === "Info Portal" ? "#4f8bff" : "#4b5563"}
                    />

                    <Text
                      className={`ml-3 ${
                        activeMenu === "Info Portal"
                          ? "text-[#4f8bff] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      Info Portal
                    </Text>
                  </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setActiveMenu("Settings");   
                    setShowMenu(false);          
                    router.push("/sub/settings");    
                  }}
                  className={`flex-row items-center px-3 py-2 mt-4 rounded-xl ${
                    activeMenu === "Settings" ? "bg-[#e8f0ff]" : ""
                  }`}
                >
                  {activeMenu === "Settings" && (
                    <View className="h-full w-[3px] bg-[#4f8bff] rounded-full mr-3" />
                  )}

                  <Feather
                    name="settings"
                    size={20}
                    color={activeMenu === "Settings" ? "#4f8bff" : "#4b5563"}
                  />

                  <Text
                    className={`ml-3 ${
                      activeMenu === "Settings"
                        ? "text-[#4f8bff] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    Settings
                  </Text>
                </TouchableOpacity>


                </View>

                <View className="h-[1px] bg-gray-200 my-6 mt-44" />

                  <TouchableOpacity
                    onPress={() => {
                      setShowMenu(false);
                      router.push("/sub/support");
                    }}
                    className="bg-[#4f8bff] px-4 py-2 rounded-full self-center flex-row items-center space-x-2"
                  >
                    {/* Support Icon */}
                    <SupportIcon width={25} height={25} />

                    {/* Support Text */}
                    <Text className="text-white font-semibold ml-2">Support</Text>
                  </TouchableOpacity>


                  <View className="flex-row justify-between items-center mt-6">
                    <TouchableOpacity
                      className="flex-row items-center"
                      onPress={() => {
                        setShowMenu(false);      
                        router.push("/sub/profile"); 
                      }}
                    >
                      <ProfileIcon
                        source={require("../assets/icons/profile.svg")}
                        name="user"
                        size={20}
                        color="#4b5563"
                      />
                      <Text className="ml-2 text-gray-700">Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      className="flex-row items-center"
                      onPress={() => {
                        router.replace("/auth/login");   
                      }}
                    >
                      <Feather name="log-out" size={20} color="#4b5563" />
                      <Text className="ml-2 text-gray-700 font-semibold">Logout</Text>
                    </TouchableOpacity>

                  </View>

                </View>
            </TouchableWithoutFeedback>

          </View>
        </TouchableWithoutFeedback>

      </Modal>


    </>
  );
}
