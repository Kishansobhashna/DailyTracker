import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import EditIcon from "../../assets/icons/EditIcon.svg";


export default function ProfileEditScreen() {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
    >
    <View className="flex-1 bg-[#e9f0ff]">


      <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">
        <View className="bg-white rounded-3xl flex-row items-center px-4 w-[376px] h-[77px] self-center">
          
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>

          <View className="absolute left-0 right-0 items-center">
            <Text className="text-[18px] font-semibold text-black">Profile</Text>
          </View>
        </View>
      </View>


        <ScrollView showsVerticalScrollIndicator={false} className="px-5">

            <View className="bg-white rounded-3xl p-6 shadow">
            
                <View className="items-center w-full">
                
                    <TouchableOpacity

className="
                            absolute right-4 top-2
                            h-10 w-10
                            bg-white/90 
                            rounded-2xl
                            items-center justify-center
                            border border-gray-200
                            shadow-md
                        "
                    >
                        <EditIcon width={40} height={40} />
                    </TouchableOpacity>
                
                    <Image
                        source={require("../../assets/images/companylogo.png")}
                        className="h-24 w-24 rounded-full"
                        resizeMode="contain"
                    />
                
                    <Text className="mt-4 text-[20px] font-semibold text-gray-900">
                        WEBYUG INFONET LLP
                    </Text>
                    <Text className="text-gray-500">Owner Name</Text>
                
                </View>

                <View className="h-[1px] bg-gray-200 my-5" />

                <Text className="text-[15px] font-semibold text-gray-800 mb-3">Personal info</Text>

                <View className="flex-row justify-between">
                    <TextInput
                    placeholder="First Name"
                    className="bg-[#f6f7fb] w-[48%] h-12 rounded-xl px-3 text-gray-800 border border-[#DDE3F0]"
                    />
                    <TextInput
                    placeholder="Last Name"
                    className="bg-[#f6f7fb] w-[48%] h-12 rounded-xl px-3 text-gray-800 border border-[#DDE3F0]"
                    />
                </View>

                <TextInput
                    placeholder="Email"
                    className="bg-[#f6f7fb] w-full h-12 rounded-xl px-3 mt-3 text-gray-800 border border-[#DDE3F0]"
                />

                <TextInput
                    placeholder="+91 00000 00000"
                    className="bg-[#f6f7fb] w-full h-12 rounded-xl px-3 mt-3 text-gray-800 border border-[#DDE3F0]"
                />

                <Text className="mt-6 text-[15px] font-semibold text-gray-800 mb-3">Business Info</Text>

                <TextInput
                    placeholder="Webyug Infonet LLP"
                    className="bg-[#f6f7fb] w-full h-12 rounded-xl px-3 text-gray-800 border border-[#DDE3F0]"
                />

                <View className="flex-row items-center bg-[#f6f7fb] w-full h-12 mt-3 rounded-xl px-3 border border-[#DDE3F0]">
                    <TextInput
                        placeholder="705, Sai ganesh, radio mirchi road"
                        className="flex-1 text-gray-800"
                    />
                    <Feather name="map-pin" size={18} color="gray" />
                </View>

                <Text className="mt-6 text-[15px] font-semibold text-gray-800 mb-3">Business Details</Text>

                <TextInput
                    placeholder="Add some description of the business..."
                    multiline
                    className="bg-[#f6f7fb] rounded-xl p-3 text-gray-800 h-[130px] border border-[#DDE3F0]"
                />

                <TouchableOpacity
                    onPress={() => console.log("Saved")}
                    className="bg-[#4f8bff] h-12 rounded-xl items-center justify-center mt-6"
                >
                    <Text className="text-white text-[16px] font-semibold">Save Changes</Text>
                </TouchableOpacity>

            </View>

            <View className="h-16" />
        </ScrollView>

    </View>
    </KeyboardAvoidingView>
  );
}
