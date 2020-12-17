import React, {useEffect} from 'react';
import Weather from './src/componentes/Weather';
import Loading from './src/componentes/Loading';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import useWeather from "./src/utils/useWeather";
import * as ScreenOrientation from 'expo-screen-orientation';


export default function App() {
const weather = useWeather();
  useEffect(() => {
    changeScreenOrientation();
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    }
  }, []);

  return (
    <View style={styles.container}>
      {!weather ? <Loading /> : <Weather forecast={weather} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#272343',
    justifyContent: 'center',
  }, 
  
});
