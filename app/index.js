import { View, Text, Button } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { NativeBaseProvider } from "native-base";
import Home from "../components/Home";

export default function Index() {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}
