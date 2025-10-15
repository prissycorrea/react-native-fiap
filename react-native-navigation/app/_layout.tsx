import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
 
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

// import { Drawer } from 'expo-router/drawer';

// export default function Layout() {
//   return (
//     <Drawer>
//       <Drawer.Screen
//         name="index" // This is the name of the page and must match the url from root
//         options={{
//           drawerLabel: 'Home',
//           title: 'overview',
//         }}
//       />
//       <Drawer.Screen
//         name="about" // This is the name of the page and must match the url from root
//         options={{
//           drawerLabel: 'Sobre',
//           title: 'overview',
//         }}
//       />
//     </Drawer>
//   );
// }