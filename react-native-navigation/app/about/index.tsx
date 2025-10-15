import { View, Text, Image, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Stack.Screen options={{ headerTitle: () => <LogoTitle /> }} />
      <Text>Esta é a página Sobre</Text>
      <Link href="/">- Home</Link>
      <Link href="/contact">- Contato</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
