import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import avatar5 from '@/assets/images/3d_avatar_24-1.png';
import { ImageBackground, StyleSheet, View , Image, Text} from 'react-native';


import 'react-native-reanimated';

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
      <Stack screenOptions={{
        contentStyle: {
          backgroundColor: '#151320',
        },
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#151320',
          
        },
        
      }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: true, title: 'Connections',
        contentStyle: {
          backgroundColor: 'black'
        },
        headerTitleStyle: {
          color: 'white'
        },
        // headerLargeTitle: true,
headerLeft: () => (
  <TouchableOpacity onPress={() => {router.push('/(tabs)/explore')}}>
    <Ionicons name="chevron-back" size={28} weight="bold" color='white' />
  </TouchableOpacity>
),
headerSearchBarOptions: {
  placeholder: 'Search',
  headerIconColor: 'white',
  onChangeText: (text) => console.log('Searching:', text), // Logs search text
},

         }} />
         <Stack.Screen name='(new)' options={{
            headerShown: true, title: 'New Message',
            contentStyle: {
              backgroundColor: 'black'
            },
            headerTitleStyle: {
              color: 'white'
            },
            // headerLargeTitle: true,
    headerLeft: () => (
      <TouchableOpacity onPress={() => {router.push('/(tabs)/explore')}}>
        <Ionicons name="chevron-back" size={28} weight="bold" color='white' />
      </TouchableOpacity>
    ),
         }}/>
         <Stack.Screen name='(each)' options={{
          title: '',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#151320'
          },
          headerShadowVisible: true,
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3, padding: 10}}>
              <TouchableOpacity onPress={() => {router.back()}}>
              <Ionicons name='chevron-back' color='white' size={23}/>
              </TouchableOpacity>
                <Image source={avatar5}/>
                <Text style={{ fontSize: 20, color: '#fff', marginLeft: 3 }}>Ward Sims</Text>
            </View>
          ),
          headerRight: () => (
            <Ionicons name='menu' color='white' size={32}/>
          )
          
         }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider> 
  );
}
