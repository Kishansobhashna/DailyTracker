import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

export default function Verification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-16 items-center justify-center">

      {/* LOGO + NAME */}
      <View className="flex-row items-center mb-10">
        <Image
          source={require("../../assets/images/companylogo.png")}
          className="w-12 h-12 rounded-xl"
        />
        <Text className="text-[#3B6EF6] text-xl font-semibold ml-3">
          Company Name
        </Text>
      </View>


      {/* CARD */}
      <View className="bg-white w-full rounded-3xl p-6 shadow-lg shadow-neutral-200 items-center">

        <Text className="text-2xl font-bold text-center mb-4 text-[#0A0A0A]">
          Verification
        </Text>

        <Text className="text-gray-600 text-center mb-6">
          Enter Verification Code
        </Text>

        {/* OTP BOXES WITH SPACE */}
        <View className="flex-row justify-center mb-6">
          {otp.map((value, index) => (
            <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                value={value}
                onChangeText={(text) => handleChange(text, index)}
                maxLength={1}
                keyboardType="numeric"
                onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === "Backspace" && otp[index] === "") {
                    if (index > 0) {
                        inputRefs.current[index - 1].focus();
                    }
                    }
                }}
                className="w-12 h-12 mx-2 border border-[#3B6EF6] rounded-xl text-center text-lg text-black"
            />
          ))}
        </View>

        {/* RESEND */}
        <View className="flex-row justify-center mb-6">
          <Text className="text-gray-600">if you didn’t receive a code? </Text>
          <TouchableOpacity>
            <Text className="text-[#3B6EF6] font-semibold">Resend</Text>
          </TouchableOpacity>
        </View>

        {/* VERIFY BUTTON */}
        <TouchableOpacity
          onPress={() => router.push("/auth/updatepassword")}
          className="bg-[#3B6EF6] w-full py-4 rounded-2xl shadow shadow-blue-300 items-center"
        >
          <Text className="text-white text-base font-semibold">Verify</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
