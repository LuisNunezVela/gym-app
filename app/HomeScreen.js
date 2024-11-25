import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "../global.css"

export default function HomeScreen() {
  return (
    <View>
      <Text className="text-red-500">Open up App.js</Text>
      <StatusBar style="auto" />
    </View>
  );
}