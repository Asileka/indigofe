import { View, Text, Button } from "react-native";
import { Radio } from "native-base";
export default function Info1({ setShipmentMethodValue, shipmentMethodValue }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Where are you wanting to ship?</Text>
      <Radio.Group
        name="shipmentMethod"
        accessibilityLabel="shipment method"
        value={shipmentMethodValue}
        onChange={(nextShipmentMethod) => {
          setShipmentMethodValue(nextShipmentMethod);
        }}
      >
        <Radio value="Standard UK&I" my={1}>
          Standard UK&I
        </Radio>
        <Radio value="International" my={1}>
          International
        </Radio>
        <Radio value="Intergalactic" my={1}>
          Intergalactic
        </Radio>
      </Radio.Group>
    </View>
  );
}
