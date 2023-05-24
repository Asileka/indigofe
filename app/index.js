import { View, Text, Button } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { NativeBaseProvider, Box } from "native-base";

export default function Home() {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Box>Hello world</Box>
        <Text>Welcome to Shippi, start creating your label now!</Text>
        <Button
          title="Create Shipment"
          onPress={() => router.push("/startshipment")}
        />
      </View>
    </NativeBaseProvider>
  );
}
