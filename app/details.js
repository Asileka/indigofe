import { View, Text, Button } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";

export default function Details() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>

      <Link href="/">Go to Home</Link>

      <Button
        title="Go to Details... again"
        onPress={() => router.push("/startshipment")}
      />
      <Button title="Go back" onPress={() => router.back()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
