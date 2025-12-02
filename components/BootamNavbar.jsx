import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, usePathname } from "expo-router";
import ClientIcon from "../assets/icons/clientIcon.svg";
import HomeIcon from "../assets/icons/homeIcon.svg";
import InvoiceIcon from "../assets/icons/invoiceIcon.svg";
import ItemsIcon from "../assets/icons/itemIcon.svg";
import ReportIcon from "../assets/icons/reportIcon.svg";

export default function BottomNavBar() {
  const path = usePathname();
  const isActive = (route) => path === route;

  const ACTIVE_COLOR = "#3F8CFF";

  const tabs = [
    { name: "Clients", route: "/tabs/clients", icon: <MaterialIcons name="groups" size={35} color="black" /> },
    { name: "Invoice", route: "/tabs/invoice", icon: <MaterialIcons name="receipt-long" size={35} color="black" /> },
    { name: "Home", route: "/tabs/home", icon: <Ionicons name="home-outline" size={35} color="black" /> },
    { name: "Report", route: "/tabs/report", icon: <Ionicons name="stats-chart-outline" size={35} color="black" />},
    { name: "Items", route: "/tabs/items", icon: <AntDesign name="bars" size={35} color="black" />},
  ];

  return (
    <View
  className="
    absolute bottom-0 left-0 right-0 
    h-[120px] w-full mx-auto z-1
    flex-row justify-between items-center px-10 py-4 
    bg-DBEAFF rounded-t-3xl shadow
  "
>

      {tabs.map((tab, index) => {
        const active = isActive(tab.route);

        return (
          <TouchableOpacity
            key={index}
            className="items-center"
            onPress={() => router.push(tab.route)}
          >
          {active ? (
            <View className="items-center justify-center">

              {/* Background circle */}
              <View
                className="
                  absolute h-16 w-14 rounded-full bg-[##DBEAFF]
                  opacity-80 -top-12 z-0
                "
              />

              {/* Icon bubble */}
              <View
                className="
                  absolute h-14 w-14 rounded-full justify-center items-center
                  -top-10 z-10 shadow
                "
                style={{ backgroundColor: ACTIVE_COLOR }}
              >
                {React.cloneElement(tab.icon, { color: "white" })}
              </View>

              {/* Text (WILL NOT MOVE) */}
              <Text
                className="text-[12px] font-normal mt-4"
                style={{ color: "#3F8CFF" }}
              >
                {/* {tab.name} */}
              </Text>

            </View>
          ) : (
            <View className="items-center">
              {React.cloneElement(tab.icon, { color: "black" })}
            </View>
          )}
            <Text
              className="text-[12px] font-normal"
              style={{ color: active ? "#3F8CFF" : "#000000" }} // gray-500 fallback
            >
              {tab.name}
            </Text>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}
