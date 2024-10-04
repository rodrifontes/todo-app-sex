import { useFonts } from 'expo-font';

import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontFamily: 'GeneralSans-400' }}>GeneralSans-400</Text>
      <Text style={{ fontFamily: 'GeneralSans-600' }}>GeneralSans-600</Text>
      <Text style={{ fontFamily: 'GeneralSans-700' }}>GeneralSans-700</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
