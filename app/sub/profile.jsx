  import React, {useState} from "react";
  import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
  import { Feather, Ionicons } from "@expo/vector-icons";
  import { router } from "expo-router";
  import EditIcon from "../../assets/icons/EditIcon.svg";

  export default function ProfileScreen() {

    const [showInfo, setShowInfo] = useState(false);
    const [showMembers, setShowMembers] = useState(false);    

    return (
      <View className="flex-1 bg-[#e9f0ff]">

        {/* HEADER */}
        <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">
          <View className="bg-white rounded-3xl flex-row items-center px-4 w-[376px] h-[77px] self-center">
        
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </TouchableOpacity>
        
            <View className="absolute left-0 right-0 items-center">
              <Text className="text-[18px] font-semibold text-black">
                Profile
              </Text>
            </View>
          </View>
        </View>

        {/* CONTENT SCROLL */}
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* MAIN CARD */}
          <View className="bg-white rounded-3xl mx-5 p-6 mt-3 mb-10 shadow w-[374px] h-full self-center">

            <View className="items-center w-full">

                <TouchableOpacity
                  onPress={() => router.push("/sub/profileEdit")}
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

              {/* PROFILE IMAGE */}
              <Image
                source={require("../../assets/images/companylogo.png")}
                className="h-24 w-24 rounded-full"
                resizeMode="contain"
              />

              {/* NAME TEXT */}
              <Text className="mt-4 text-[20px] font-semibold text-gray-900">
                WEBYUG INFONET LLP
              </Text>
              <Text className="text-gray-500">Owner Name</Text>

            </View>


              {/* LINE */}
              <View className="h-[1px] bg-gray-200 my-5 mt-8" />

              <View className="space-y-6">

                <TouchableOpacity
                  onPress={() => setShowInfo(!showInfo)}
                  className={`
                    flex-row items-center justify-between  py-2 rounded-xl
                    ${showInfo ? "bg-[#]" : ""}
                  `}
                >
                  <View className="flex-row items-center mt-4">
                    
                    {/* BLUE INDICATOR STRIP WHEN ACTIVE */}
                    {showInfo && (
                      <View className="h-full w-[3px] bg-[#4f8bff] rounded-full mr-3" />
                    )}

                    <Ionicons
                      name="information-circle-outline"
                      size={22}
                      color={showInfo ? "#4f8bff" : "#000"}
                    />

                    <Text
                      className={`ml-3 text-[16px] ${
                        showInfo ? "text-[#4f8bff] font-semibold" : "text-gray-800"
                      }`}
                    >
                      Info
                    </Text>

                  </View>

                  <Feather
                    name="chevron-down"
                    size={20}
                    color={showInfo ? "#4f8bff" : "#000"}
                    style={{
                      transform: [{ rotate: showInfo ? "180deg" : "0deg" }],
                    }}
                  />
                </TouchableOpacity>


                {showInfo && (
                  <View className="mt-4 ml-10 space-y-3">

                    <View>
                      <Text className="text-gray-500 text-[13px]">Owner Name</Text>
                      <Text className="text-gray-800 text-[15px] font-medium">
                        Vaibhav Mistry
                      </Text>
                    </View>

                    <View>
                      <Text className="text-gray-500 text-[13px]">Phone Number</Text>
                      <Text className="text-gray-800 text-[15px] font-medium">
                        +91 98765 43210
                      </Text>
                    </View>

                    <View>
                      <Text className="text-gray-500 text-[13px]">Email ID</Text>
                      <Text className="text-gray-800 text-[15px] font-medium">
                        info@webyuginfonet.com
                      </Text>
                    </View>

                    <View>
                      <Text className="text-gray-500 text-[13px]">Business Name</Text>
                      <Text className="text-gray-800 text-[15px] font-medium">
                        WEBYUG INFONET LLP
                      </Text>
                    </View>

                    <View>
                      <Text className="text-gray-500 text-[13px]">Business Address</Text>
                      <Text className="text-gray-800 text-[15px] font-medium leading-tight">
                        401, Shreenath Complex,
                        Paldi, Ahmedabad - 380007
                      </Text>
                    </View>

                  </View>
                )}

                <TouchableOpacity
                  onPress={() => setShowMembers(!showMembers)}
                  className={`
                    flex-row items-center justify-between  py-2 rounded-xl
                    ${showMembers ? "bg-[#]" : ""}
                  `}
                >
                  <View className="flex-row items-center mt-4">

                    {showMembers && (
                      <View className="h-full w-[3px] bg-[#4f8bff] rounded-full mr-3" />
                    )}

                    <Feather
                      name="users"
                      size={22}
                      color={showMembers ? "#4f8bff" : "#000"}
                    />

                    <Text
                      className={`ml-3 text-[16px] ${
                        showMembers ? "text-[#4f8bff] font-semibold" : "text-gray-800"
                      }`}
                    >
                      Members
                    </Text>
                  </View>

                  <Feather
                    name="chevron-down"
                    size={20}
                    color={showMembers ? "#4f8bff" : "#000"}
                    style={{
                      transform: [{ rotate: showMembers ? "180deg" : "0deg" }]
                    }}
                  />
                </TouchableOpacity>

                {showMembers && (
                  <View className="mt-4 ml-10 p-4 rounded-xl  space-y-2">

                    <Text className="text-gray-800 text-[15px] font-medium">Tirth</Text>
                    <Text className="text-gray-800 text-[15px] font-medium">Kishan</Text>
                    <Text className="text-gray-800 text-[15px] font-medium">Meet</Text>
                    <Text className="text-gray-800 text-[15px] font-medium">Manas</Text>

                  </View>
                )}

                <TouchableOpacity className="flex-row items-center justify-between">
                  <View className="flex-row items-center space-x-3 mt-6">
                    <Feather name="image" size={22} color="#000" />
                    <Text className="text-gray-800 text-[16px] ml-3">Media</Text>
                  </View>
                  <Feather name="chevron-down" size={20} color="#000" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center justify-between">
                  <View className="flex-row items-center space-x-3 mt-6">
                    <Feather name="paperclip" size={22} color="#000" />
                    <Text className="text-gray-800 text-[16px] ml-3">Files</Text>
                  </View>
                  <Feather name="chevron-down" size={20} color="#000" />
                </TouchableOpacity>

              </View>

          </View>

        </ScrollView>
      </View>
    );
  }
