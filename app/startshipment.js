import { View, Text, Button } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import Info1 from "../components/Info1";
export default function StartShipment() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Define your package</Text>
      <Info1 />
      <Button title="Go back" onPress={() => router.back()} />
    </View>
  );
}
