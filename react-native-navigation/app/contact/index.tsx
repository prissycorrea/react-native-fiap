import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Contact() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Esta é a página Contato</Text>
      <Link href="/">- Home</Link>
      <Link href="/about">- Sobre</Link>
    </View>
  );
}
