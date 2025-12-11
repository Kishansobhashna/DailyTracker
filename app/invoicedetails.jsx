import React, { useRef } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import * as FileSystem from "expo-file-system/legacy";
import * as IntentLauncher from "expo-intent-launcher";
import * as Sharing from "expo-sharing";
import * as Print from "expo-print";

import BottomInvoiceBorder from "../components/BottomInvoiceBorder";
import TopInvoiceBorder from "../components/TopInvoiceBorder";

export default function InvoiceDetails() {

  const invoiceData = {
    number: "#0025",
    fromDate: "01 April 2025",
    toDate: "31 May 2025",
    date: "03 May 2025",
    company: "WEBYUG INFONET LLP",
    address: "704, Sun Gravitas,\nShyamal Cross Road, Ahmedabad",
    email: "webyuginfo@gmail.com",
    phone: "+91 00000 00000",
    items: [
      { name: "Tea", rate: 10, qty: 30 },
      { name: "Coffee", rate: 15, qty: 12 },
      { name: "Water Can", rate: 30, qty: 15 },
    ],
  };

  const totalAmount = invoiceData.items.reduce(
    (sum, i) => sum + i.rate * i.qty,
    0
  );

  const handleDownload = async () => {
    try {
      const html = `
        <html>
          <head>
            <style>
              body { font-family: Arial; padding: 20px; }
              h1 { text-align: center; }
              .info { margin-bottom: 20px; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #ccc; padding: 10px; text-align: right; }
              th:first-child, td:first-child { text-align: left; }
              th { background-color: #f3f3f3; }
              .total { font-size: 18px; font-weight: bold; }
            </style>
          </head>

          <body>

            <h1>Invoice Details</h1>
            <p style="text-align:center; color:gray;">${invoiceData.date}</p>

            <div class="info">
              <h3>Invoice No: ${invoiceData.number}</h3>
              <p>Date: <b>${invoiceData.fromDate}</b> to <b>${invoiceData.toDate}</b></p>
            </div>

            <div class="info">
              <h3>To,</h3>
              <p>
                <b>${invoiceData.company}</b><br/>
                ${invoiceData.address.replace(/\n/g, "<br/>")}<br/>
                ${invoiceData.email}<br/>
                ${invoiceData.phone}
              </p>
            </div>

            <h3>Items</h3>

            <table>
              <tr>
                <th>Item</th>
                <th>Rate (₹)</th>
                <th>Qty</th>
                <th>Price (₹)</th>
              </tr>

              ${invoiceData.items
                .map(
                  (i) => `
                    <tr>
                      <td>${i.name}</td>
                      <td>${i.rate}</td>
                      <td>${i.qty}</td>
                      <td>${i.rate * i.qty}</td>
                    </tr>
                  `
                )
                .join("")}

              <tr class="total">
                <td colspan="3">Total Amount</td>
                <td>₹${totalAmount} /-</td>
              </tr>
            </table>

          </body>
        </html>
      `;

      const { uri: tempPdfUri } = await Print.printToFileAsync({ html });

      const permissions =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

      if (!permissions.granted) return;

      const fileUri = await FileSystem.StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        "invoice",
        "application/pdf"
      );

      const base64pdf = await FileSystem.readAsStringAsync(tempPdfUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      await FileSystem.writeAsStringAsync(fileUri, base64pdf, {
        encoding: FileSystem.EncodingType.Base64,
      });

      IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: fileUri,
        flags: 1,
        type: "application/pdf",
      });

    } catch (error) {
      console.log("PDF Download Error:", error);
    }
  };
  
  const handleShare = async () => {
    try {
      const html = `
        <html>
          <head>
            <style>
              body { font-family: Arial; padding: 20px; }
              h1 { text-align: center; }
              .info { margin-bottom: 20px; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #ccc; padding: 10px; text-align: right; }
              th:first-child, td:first-child { text-align: left; }
              th { background-color: #f3f3f3; }
              .total { font-size: 18px; font-weight: bold; }
            </style>
          </head>

          <body>

            <h1>Invoice Details</h1>
            <p style="text-align:center; color:gray;">${invoiceData.date}</p>

            <div class="info">
              <h3>Invoice No: ${invoiceData.number}</h3>
              <p>Date: <b>${invoiceData.fromDate}</b> to <b>${invoiceData.toDate}</b></p>
            </div>

            <div class="info">
              <h3>To,</h3>
              <p>
                <b>${invoiceData.company}</b><br/>
                ${invoiceData.address.replace(/\n/g, "<br/>")}<br/>
                ${invoiceData.email}<br/>
                ${invoiceData.phone}
              </p>
            </div>

            <h3>Items</h3>

            <table>
              <tr>
                <th>Item</th>
                <th>Rate (₹)</th>
                <th>Qty</th>
                <th>Price (₹)</th>
              </tr>

              ${invoiceData.items
                .map(
                  (i) => `
                    <tr>
                      <td>${i.name}</td>
                      <td>${i.rate}</td>
                      <td>${i.qty}</td>
                      <td>${i.rate * i.qty}</td>
                    </tr>
                  `
                )
                .join("")}

              <tr class="total">
                <td colspan="3">Total Amount</td>
                <td>₹${totalAmount} /-</td>
              </tr>
            </table>

          </body>
        </html>
      `;

      const { uri: tempPdfUri } = await Print.printToFileAsync({ html });

      const finalPath = FileSystem.documentDirectory + "invoice.pdf";

      await FileSystem.moveAsync({
        from: tempPdfUri,
        to: finalPath,
      });

      await Sharing.shareAsync(finalPath);

    } catch (error) {
      console.log("PDF Error:", error);
    }
  };

  return (
    <View className="flex-1 bg-[#e9f0ff]">


      <View className="w-full px-4 pt-6 mt-8 mb-8 bg-[#eef6ff]">
        <View className="bg-white rounded-3xl flex-row items-center px-4 w-[376px] h-[77px] self-center">


          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>


          <View className="absolute left-0 right-0 items-center">
            <Text className="text-[18px] font-semibold">Invoice Details</Text>
            <Text className="text-[12px] text-gray-500">{invoiceData.date}</Text>
          </View>
        </View>
      </View>


      <ScrollView className="px-4 pt-2">

        <TopInvoiceBorder />


        <View className="bg-white w-full overflow-hidden">

          <View className="px-5 py-4">
            <Text className="text-gray-500 mb-1">
              Invoice No : <Text className="text-black font-medium">{invoiceData.number}</Text>
            </Text>

            <Text className="text-gray-500 mb-3">
              Date : <Text className="text-black font-medium">{invoiceData.fromDate}</Text> TO
              <Text className="text-black font-medium"> {invoiceData.toDate}</Text>
            </Text>
          </View>


          <View className="w-full border-t border-gray-200" />


          <View className="px-5 py-4">
            <Text className="text-black mb-1 font-medium">To,</Text>

            <Text className="text-black font-semibold">{invoiceData.company}</Text>
            <Text className="text-black leading-5 mt-1">
              {invoiceData.address}
            </Text>

            <Text className="text-black mt-3">{invoiceData.email}</Text>
            <Text className="text-black">{invoiceData.phone}</Text>
          </View>

          <View className="w-full border-t border-gray-200" />

          {/* Table Header */}
          <View className="px-5 py-3 flex-row">
            <Text className="text-gray-500 font-semibold flex-1">Items</Text>
            <Text className="text-gray-500 font-semibold w-12 text-right">Rate</Text>
            <Text className="text-gray-500 font-semibold w-10 text-right">Qty</Text>
            <Text className="text-gray-500 font-semibold w-16 text-right">Price</Text>
          </View>

          <View className="w-full border-t border-gray-200" />

          {/* Item Rows */}
          <View className="px-5">
            {invoiceData.items.map((item, i) => (
              <View key={i} className="flex-row py-1">
                <Text className="text-black flex-1">{item.name}</Text>
                <Text className="text-black w-12 text-right">₹{item.rate}</Text>
                <Text className="text-black w-10 text-right">{item.qty}</Text>
                <Text className="text-black w-16 text-right">₹{item.rate * item.qty}</Text>
              </View>
            ))}
          </View>


          <View className="w-full border-t border-gray-200 mt-3" />

          {/* Total */}
          <View className="px-5 py-4 flex-row justify-between">
            <Text className="text-black font-semibold text-lg">Total Amount</Text>
            <Text className="text-black font-bold text-lg">₹{totalAmount} /-</Text>
          </View>

        </View>

        <BottomInvoiceBorder />

        {/* Buttons */}
        <View className="flex-row justify-center mt-6 mb-16">
          
          <TouchableOpacity
            className="w-[160px] h-[52px] bg-blue-500 rounded-2xl flex-row items-center justify-center mr-4"
            onPress={handleDownload}
          >
            <SimpleLineIcons name="cloud-download" size={22} color="white" />
            <Text className="text-white font-semibold ml-3">Download</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[160px] h-[52px] border border-blue-500 rounded-2xl flex-row items-center justify-center" onPress={handleShare}>
            <Feather name="share-2" size={20} color="#3b82f6" />
            <Text className="text-blue-500 font-semibold ml-3">Share</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </View>
  );
}
