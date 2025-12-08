// import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import BottomNavBar from "../../components/BootamNavbar";
import Header from "../../components/Header";
import FilterIcon from "../../assets/icons/filterIcon.svg";

export default function HomeScreen() {
    const [openfilter, setOpenFilter] = useState(false);

    const items = [
        { id: 1, title: "Tea", qty: "1 Cup", price: 15, image: require("../../assets/images/tea.png") },
        { id: 2, title: "Coffee", qty: "1 Cup", price: 20, image: require("../../assets/images/coffee.png") },
        { id: 3, title: "Green Tea", qty: "1 Cup", price: 35, image: require("../../assets/images/greentea.png") },
        { id: 4, title: "Cold Coffee", qty: "1 Cup", price: 60, image: require("../../assets/images/coldcoffee.png") },
    ];

    return (
      <View className="flex-1 bg-[#e8f1ff] ">
        <Header />

          <View className="flex-row items-center justify-between px-5 mt-8">
            <Text className="text-2xl font-semibold text-[#AAAAAA]">Items</Text>
          
            <TouchableOpacity
              onPress={() => setOpenFilter(true)}
              className="h-12 w-12 rounded-xl bg-white items-center justify-center shadow"
            >
              <FilterIcon width={40} height={40} />
            </TouchableOpacity>  
          </View>

          <ScrollView className="px-5 mt-5" showsVerticalScrollIndicator={false}>
            {items.map((item) => (
              <View
              key={item.id}
              className="bg-white flex-row items-center p-4 rounded-2xl shadow-md mb-4"
              >
                {/* IMAGE CIRCLE */}
                <View className="w-14 h-14 bg-white rounded-full shadow-md items-center justify-center mr-4">
                <Image
                source={item.image}
                className="w-12 h-12 rounded-full"
                />
              </View>

              {/* TEXT */}
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-900">{item.title}</Text>
                <Text className="text-gray-500 text-sm">Qty : {item.qty}</Text>
                <Text className="text-gray-800 font-semibold mt-1">₹ {item.price}.00/-</Text>
                </View>
              </View>
            ))}

            <View className="h-32" />
          </ScrollView>

        <BottomNavBar />
      </View>
    );
}
