import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Switch, Alert } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SettingsScreen() {
    
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (name) => {
        setOpenSection(openSection === name ? null : name);
    };

    const [issue, setIssue] = useState(true);
    const [tracking, setTracking] = useState(false);
    const [comments, setComments] = useState(false);

    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Logout",
                    style: "destructive",
                    onPress: () => {
                        router.replace("/auth/login"); 
                    }
                }
            ]
        );
    };

  return (
    <View className="flex-1 bg-[#e9f0ff]">

        <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">
            <View className="bg-white rounded-3xl flex-row items-center px-4 w-[376px] h-[77px] self-center">
                
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back-outline" size={24} color="black" />
                </TouchableOpacity>
                
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-[18px] font-semibold text-black">
                        Settings
                    </Text>
                </View>
            </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="bg-white rounded-3xl mx-5 p-6 mt-3 mb-10 shadow w-[374px] self-center">


                <TouchableOpacity
                    onPress={() => toggleSection("Account")}
                    className="flex-row items-center justify-between py-4"
                >
                    <View className="flex-row items-center">
                        <Ionicons
                            name="person-outline"
                            size={22}
                            color={openSection === "Account" ? "#4f8bff" : "#606b80"}
                        />
                        <Text
                            className={`ml-4 text-[16px] ${
                                openSection === "Account"
                                ? "text-[#4f8bff] font-semibold"
                                : "text-gray-800"
                            }`}
                        >
                            Account
                        </Text>
                    </View>

                    <Feather
                        name={openSection === "Account" ? "chevron-up" : "chevron-down"}
                        size={20}
                        color={openSection === "Account" ? "#4f8bff" : "#606b80"}
                    />
                </TouchableOpacity>

                {openSection === "Account" && (
                <View className="mt-2 space-y-4">
                    
                    <View className="bg-[#f4f8ff] rounded-2xl p-4">
                        <Text className="text-[16px] font-semibold text-gray-800">Username</Text>
                        <Text className="mt-1 text-gray-600">Vaibhav Mistry</Text>
                    </View>

                    <View className="bg-[#f4f8ff] rounded-2xl p-4">
                        <Text className="text-[16px] font-semibold text-gray-800">Email</Text>
                        <Text className="mt-1 text-gray-600">info@webyuginfonet.com</Text>
                    </View>

                    <View className="bg-[#f4f8ff] rounded-2xl p-4">
                        <Text className="text-[16px] font-semibold text-gray-800">Phone Number</Text>
                        <Text className="mt-1 text-gray-600">+91 98765 43210</Text>
                    </View>

                </View>
                )}


                <TouchableOpacity
                    onPress={() => toggleSection("Notifications")}
                    className="flex-row items-center justify-between py-4"
                >
                    <View className="flex-row items-center">
                        <Ionicons
                            name="notifications-outline"
                            size={22}
                            color={openSection === "Notifications" ? "#4f8bff" : "#606b80"}
                        />
                        <Text
                            className={`ml-4 text-[16px] ${
                                openSection === "Notifications"
                                ? "text-[#4f8bff] font-semibold"
                                : "text-gray-800"
                            }`}
                        >
                            Notifications
                        </Text>
                    </View>

                    <Feather
                        name={openSection === "Notifications" ? "chevron-up" : "chevron-down"}
                        size={20}
                        color={openSection === "Notifications" ? "#4f8bff" : "#606b80"}
                    />
                </TouchableOpacity>

                {openSection === "Notifications" && (
                    <View className="mt-2 space-y-4">

                        <View className="bg-[#f4f8ff] rounded-2xl p-4">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-[16px] font-semibold text-gray-800">
                                    Issue Activity
                                </Text>
                                <Switch
                                    value={issue}
                                    onValueChange={setIssue}
                                    trackColor={{ false: "#d1d5db", true: "#93c5fd" }}
                                    thumbColor={issue ? "#3b82f6" : "#f4f3f4"}
                                />
                            </View>
                            <Text className="text-gray-500 text-sm mt-2">
                                Send me email notifications for issue activity
                            </Text>
                        </View>

                        <View className="bg-[#f4f8ff] rounded-2xl p-4">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-[16px] font-semibold text-gray-800">
                                    Tracking Activity
                                </Text>
                                <Switch
                                    value={tracking}
                                    onValueChange={setTracking}
                                    trackColor={{ false: "#d1d5db", true: "#93c5fd" }}
                                    thumbColor={tracking ? "#3b82f6" : "#f4f3f4"}
                                />
                            </View>
                            <Text className="text-gray-500 text-sm mt-2">
                                Send me notifications when someone tracked time in tasks
                            </Text>
                        </View>

                        <View className="bg-[#f4f8ff] rounded-2xl p-4">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-[16px] font-semibold text-gray-800">
                                    New Comments
                                </Text>
                                <Switch
                                    value={comments}
                                    onValueChange={setComments}
                                    trackColor={{ false: "#d1d5db", true: "#93c5fd" }}
                                    thumbColor={comments ? "#3b82f6" : "#f4f3f4"}
                                />
                            </View>
                            <Text className="text-gray-500 text-sm mt-2">
                                Send me notifications when someone sent the comment
                            </Text>
                        </View>

                    </View>
                )}

                <TouchableOpacity className="flex-row items-center justify-between py-4">
                    <View className="flex-row items-center">
                        <Ionicons name="business-outline" size={22} color="#606b80" />
                        <Text className="ml-4 text-[16px] text-gray-800">My Company</Text>
                    </View>
                    <Feather name="chevron-down" size={20} color="#606b80" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center justify-between py-4">
                    <View className="flex-row items-center">
                        <Feather name="share-2" size={22} color="#606b80" />
                        <Text className="ml-4 text-[16px] text-gray-800">Connected Apps</Text>
                    </View>
                    <Feather name="chevron-down" size={20} color="#606b80" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center justify-between py-4">
                    <View className="flex-row items-center">
                        <Ionicons name="card-outline" size={22} color="#606b80" />
                        <Text className="ml-4 text-[16px] text-gray-800">Payments</Text>
                    </View>
                    <Feather name="chevron-down" size={20} color="#606b80" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center justify-between py-4">
                    <View className="flex-row items-center">
                        <Feather name="lock" size={22} color="#606b80" />
                        <Text className="ml-4 text-[16px] text-gray-800">Confidentiality</Text>
                    </View>
                    <Feather name="chevron-down" size={20} color="#606b80" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center justify-between py-4">
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="shield-outline" size={24} color="#606b80" />
                        <Text className="ml-4 text-[16px] text-gray-800">Safety</Text>
                    </View>
                    <Feather name="chevron-down" size={20} color="#606b80" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleLogout}
                    className="mt-6 bg-blue-500 py-3 rounded-2xl items-center"
                >
                    <Text className="text-white text-[16px] font-semibold">Logout</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>

    </View>
  );
}
