import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, usePathname } from "expo-router";
import ClientIcon from "../assets/icons/clientIcon.svg";
import ClientActive from "../assets/icons/clientactive.svg";
import InvoiceIcon from "../assets/icons/invoiceIcon.svg";
import InvoiceActive from "../assets/icons/invoiceActive.svg";
import HomeIcon from "../assets/icons/homeIcon.svg";
import HomeActive from "../assets/icons/homeActive.svg";
import ReportIcon from "../assets/icons/reportIcon.svg";
import ReportActive from "../assets/icons/reportActive.svg";
import ItemsIcon from "../assets/icons/itemIcon.svg";
import ItemsActive from "../assets/icons/itemActive.svg";

export default function BottomNavBar() {
  const path = usePathname();
  const isActive = (route) => path === route;

  const ACTIVE_COLOR = "#3F8CFF";

  const tabs = [
  { 
    name: "Clients",
    route: "/tabs/clients",
    activeIcon: ClientActive,
    inactiveIcon: ClientIcon
  },
  { 
    name: "Invoice",
    route: "/tabs/invoice",
    activeIcon: InvoiceActive,
    inactiveIcon: InvoiceIcon
  },
  { 
    name: "Home",
    route: "/tabs/home",
    activeIcon: HomeActive,
    inactiveIcon: HomeIcon
  },
  { 
    name: "Report",
    route: "/tabs/report",
    activeIcon: ReportActive,
    inactiveIcon: ReportIcon
  },
  { 
    name: "Items",
    route: "/tabs/items",
    activeIcon: ItemsActive,
    inactiveIcon: ItemsIcon
  },
];


  return (
    <View
      className="
        absolute bottom-0 left-0 right-0 
        h-[120px] w-full mx-auto z-1
        flex-row justify-between items-center px-10 py-4 
        bg-DBEAFF rounded-3xl 
      "
    >

      {tabs.map((tab, index) => {
        const active = isActive(tab.route);

        return (
          <TouchableOpacity
            key={index}
            className="items-center"
            onPress={() => {
              if (!active) {
                router.push(tab.route);
              }
            }}
          >

            {active ? (
              <View className="items-center justify-center">

                {/* Background circle */}
                <View
                  className="
                    absolute h-14 w-16 rounded-full bg-[##DBEAFF]
                     -top-12 z-0
                  "
                />

                {/* Icon bubble */}
                <View
                  className="
                    absolute h-14 w-14 rounded-full justify-center items-center
                    -top-10 z-10 shadow"
                  style={{ backgroundColor: ACTIVE_COLOR }}
                >
                  <tab.activeIcon width={40} height={35} />
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
                <tab.inactiveIcon width={40} height={35} />
              </View>
            )}
            <Text
              className="text-[12px] font-normal"
              style={{ color: active ? "#3F8CFF" : "#000000" }} 
            >
              {tab.name}
            </Text>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}
