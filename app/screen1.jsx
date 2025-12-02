import React, { useRef, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    image: require("../assets/images/illustration.png"),
    title: "Numerous free\ntrial courses",
    desc: "Free courses for you to\nfind your way to learning",
  },
  {
    image: require("../assets/images/illustration2.png"),
    title: "Quick and easy\nlearning",
    desc: "Easy and fast learning at\nany time to help you\nimprove various skills",
  },
  {
    image: require("../assets/images/Work from home.png"),
    title: "Create your own\nstudy plan",
    desc: "Study according to the\nstudy plan, make study\nmore motivated",
  },
];

export default function OnboardingSlider() {
  const scrollRef = useRef(null);
  const [page, setPage] = useState(0);

  const handleScroll = (e) => {
    const slide = Math.round(e.nativeEvent.contentOffset.x / width);
    setPage(slide);
  };

  const goToPage = (i) => {
    scrollRef.current.scrollTo({ x: i * width, animated: true });
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View
            key={index}
            style={{ width, height }}
            className="justify-center items-center px-5"
          >
            <View className="w-[260px] h-[260px] rounded-2xl justify-center items-center mb-5">
              <Image
                source={slide.image}
                className="w-full h-full"
                resizeMode="contain"
              />
            </View>

            <Text className="text-[22px] font-bold text-center mb-2 text-[#1C1C1C]">
              {slide.title}
            </Text>

            <Text className="text-[15px] text-center text-[#7A7A7A] leading-[22px] mb-5">
              {slide.desc}
            </Text>

            {/* Pagination */}
            <View className="flex-row mb-5">
              {slides.map((_, i) => (
                <TouchableOpacity key={i} onPress={() => goToPage(i)}>
                  <View
                    className={`h-[10px] mb-8 rounded-full mx-[5px] ${
                      page === i ? "w-[20px] bg-[#4c60ff]" : "w-[10px] bg-[#dcdcdc]"
                    }`}
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* Buttons on last slide */}
            {index === slides.length - 1 && (
  <View className="flex-row justify-between w-full px-6 mt-3">
    <TouchableOpacity
      className="bg-[#3B6EF6] flex-1 py-4 rounded-2xl mr-3 items-center"
      onPress={() => router.push("/auth/register")}
    >
      <Text className="text-white text-[17px] font-semibold">Register</Text>
    </TouchableOpacity>

    <TouchableOpacity
      className="border-2 border-[#3B6EF6] flex-1 py-4 rounded-2xl ml-3 items-center"
      onPress={() => router.push("/auth/login")}
    >
      <Text className="text-[#3B6EF6] text-[17px] font-semibold">Log in</Text>
    </TouchableOpacity>
  </View>
)}

          </View>
        ))}
      </ScrollView>
    </View>
  );
}
