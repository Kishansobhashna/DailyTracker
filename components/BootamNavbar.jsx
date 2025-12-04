import { router, usePathname } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import ClientIcon from "../assets/icons/clientIcon.svg";
import ClientActive from "../assets/icons/clientactive.svg";
import HomeActive from "../assets/icons/homeActive.svg";
import HomeIcon from "../assets/icons/homeIcon.svg";
import InvoiceActive from "../assets/icons/invoiceActive.svg";
import InvoiceIcon from "../assets/icons/invoiceIcon.svg";
import ItemsActive from "../assets/icons/itemActive.svg";
import ItemsIcon from "../assets/icons/itemIcon.svg";
import ReportActive from "../assets/icons/reportActive.svg";
import ReportIcon from "../assets/icons/reportIcon.svg";

export default function BottomNavBar() {
  const path = usePathname();
  const isActive = (route) => path === route;

  const ACTIVE_COLOR = "#3F8CFF";

  const tabs = [
    {
      name: "Clients",
      route: "/tabs/clients",
      activeIcon: ClientActive,
      inactiveIcon: ClientIcon,
    },
    {
      name: "Invoice",
      route: "/tabs/invoice",
      activeIcon: InvoiceActive,
      inactiveIcon: InvoiceIcon,
    },
    {
      name: "Home",
      route: "/tabs/home",
      activeIcon: HomeActive,
      inactiveIcon: HomeIcon,
    },
    {
      name: "Report",
      route: "/tabs/report",
      activeIcon: ReportActive,
      inactiveIcon: ReportIcon,
    },
    {
      name: "Items",
      route: "/tabs/items",
      activeIcon: ItemsActive,
      inactiveIcon: ItemsIcon,
    },
  ];

  return (
    <View
      className="
        absolute bottom-0 left-0 right-0 
        h-[120px] w-full mx-auto z-10
        flex-row justify-center items-center 
        bg-[#DBEAFF] rounded-t-3xl
      "
    >
      {tabs.map((tab, index) => {
        const active = isActive(tab.route);

        return (
          <TouchableOpacity
            key={index}
            className="w-1/5 items-center justify-center" // 20% per item
            onPress={() => !active && router.push(tab.route)}
          >
            {/* ACTIVE TAB */}
            {active ? (
              <View className="items-center justify-center">
                <View
                  className="
                    absolute rounded-full justify-center items-center
                    -top-20 z-20
                  "
                  style={{
                    backgroundColor: ACTIVE_COLOR,
                    borderColor: "#DBEAFF",
                    borderWidth: 5,
                    width: 65,
                    height: 65,
                  }}
                >
                  <tab.activeIcon width={40} height={35} />
                </View>

                <Text className="text-[14px] font-semibold mt-6" style={{ color: "#3F8CFF" }}>
                  {tab.name}
                </Text>
              </View>
            ) : (
              /* INACTIVE TAB */
              <View className="items-center justify-center">
                <tab.inactiveIcon width={40} height={35} />
                <Text className="text-[13px] font-normal mt-1" style={{ color: "#000" }}>
                  {tab.name}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
