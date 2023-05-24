import { View, Text, Button } from "react-native";
export default function Info1() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Where are you wanting to ship?</Text>
      <Radio.Group
        name="shipmentMethod"
        accessibilityLabel="shipment method"
        shipmentMthodValue={shipmentMthodValue}
        onChange={(nextShipmentMethod) => {
          setShipmentMethod(nextShipmentMethod);
        }}
      >
        <Radio shipmentMthodValue="one" my={1}>
          One
        </Radio>
        <Radio shipmentMthodValue="two" my={1}>
          Two
        </Radio>
      </Radio.Group>
    </View>
  );
}
