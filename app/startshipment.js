import { View, Button } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { NativeBaseProvider, Text, Input, Box } from "native-base";
import Info1 from "../components/Info1";
import { useState } from "react";
import axios from "axios";
export default function StartShipment() {
  const router = useRouter();
  const navigation = useNavigation();
  const [shipmentMethodValue, setShipmentMethodValue] =
    useState("International");
  const [sendPostcodeValue, setSendPostcodeValue] = useState("SR77HQ");
  const handleSendPostcodeChange = (text) => setSendPostcodeValue(text);
  const [recPostcodeValue, setRecPostcodeValue] = useState("SR77HQ");
  const handleRecPostcodeChange = (text) => setRecPostcodeValue(text);
  const [weight, setWeight] = useState("2");
  const handleWeightChange = (text) => setWeight(text);
  const [date, setDate] = useState("26/04/2024");
  const handleDateChange = (text) => setDate(text);
  function handleSubmit() {
    axios
      .post("http://localhost:3000/api/shipmentinfo", {
        "shipWeight": weight,
        "shipType": shipmentMethodValue,
        "shipSendAddrs": sendPostcodeValue,
        "shipRecieveAddrs": recPostcodeValue,
        "shipDate": date,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Where are you wanting to ship?</Text>
        <Info1
          shipmentMethodValue={shipmentMethodValue}
          setShipmentMethodValue={setShipmentMethodValue}
        />
        <Text>Enter your details...</Text>
        <Text>Sender Postcode</Text>
        <Input
          value={sendPostcodeValue}
          w="100%"
          onChangeText={handleSendPostcodeChange}
          placeholder="SR77HQ"
        />
        <Text>Recipient Postcode</Text>
        <Input
          value={recPostcodeValue}
          w="100%"
          onChangeText={handleRecPostcodeChange}
          placeholder="SR77HQ"
        />
        <Text>Weight of your package in KG</Text>
        <Input
          value={weight}
          w="100%"
          onChangeText={handleWeightChange}
          placeholder="2"
        />
        <Text>Preferred Shipping Date</Text>
        <Input
          value={date}
          w="100%"
          onChangeText={handleDateChange}
          placeholder="26/04/2024"
        />
        <Button title="Calculate My Shipping" onPress={handleSubmit} />
        <Button title="Go back" onPress={() => router.back()} />
      </View>
    </NativeBaseProvider>
  );
}
