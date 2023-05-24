import { View, Text, Button } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { NativeBaseProvider } from "native-base";
import Info1 from "../components/Info1";
import { useState } from "react";
export default function StartShipment() {
  const router = useRouter();
  const navigation = useNavigation();
  const [shipmentMethodValue, setShipmentMethodValue] =
    useState("International");
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Define your package</Text>
        <Info1
          shipmentMethodValue={shipmentMethodValue}
          setShipmentMethodValue={setShipmentMethodValue}
        />
        <Button title="Go back" onPress={() => router.back()} />
      </View>
    </NativeBaseProvider>
  );
}
