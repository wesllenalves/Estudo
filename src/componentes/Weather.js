import React from 'react';
import { isSameDay, format } from "date-fns";
import { StatusBar } from 'expo-status-bar';
import imageDictionary from "../utils/imageDictionary";
import Card from './Card';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { i18n } from "../utils/i18n";
import {
    AdMobBanner,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
  import Constants from 'expo-constants';

  const Weather = ({ forecast: { name, list, timezone } }) => {      
    const currentWeather = list.filter((day) => {
        const now = new Date().getTime() + Math.abs(timezone * 1000);
        const currentDate = new Date(day.dt * 1000);
        return isSameDay(now, currentDate);
    });
    
    const daysByHour = list.map((day) => {
        const dt = new Date(day.dt * 1000);
        return {
            date: dt,
            hour: dt.getHours(),
            name: format(dt, "EEEE"),
            temp: Math.round(day.main.temp),
            icon: imageDictionary[day.weather[0].icon] || imageDictionary["02d"],
        };
    });  

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.CurrentDay}>
                <Text style={styles.city}>{name}</Text>
                <Text style={styles.bigText}>{i18n.t('Today')}</Text>
                <Image style={styles.bigIcone}
                    source={
                        imageDictionary[
                            currentWeather[0].weather[0].icon
                        ] || imageDictionary["02d"]
                    }
                />
                <Text style={styles.temp}>{Math.round(currentWeather[0].main.temp)}°C</Text>
                <Text style={styles.description}>
                    {i18n.t(currentWeather[0].weather[0].description)}
                </Text>
            </View>
            <ScrollView style={styles.week} horizontal={true} scrollIndicatorInsets={true} indicatorStyle={'white'}>
                {daysByHour.map((day, index) => (
                    <Card
                        key={index}
                        icon={day.icon}
                        name={i18n.t(day.name).substring(0, 3).toUpperCase()}
                        temp={day.temp}
                        hour={day.hour}
                    />
                ))}
            </ScrollView>
            <View style={styles.vasio}></View>
            <View style={styles.propaganda}>
            <AdMobBanner
                bannerSize="banner"
                adUnitID="ca-app-pub-3072202765969173/2773847315" 
                servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={erro => {console.log(erro)}} />
            </View>
        </ScrollView>
    </SafeAreaView>
    );
};
export default Weather;

const styles = StyleSheet.create({    
    container0: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    container: {
      flex: 1,
      backgroundColor: '#272343',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
        marginHorizontal: 4,
    },
    bigIcone: {
        width: 130,
        height: 130,
        paddingBottom: 40,
    },
    bigText: {
        fontSize: 28,
        fontWeight: '100',
        color: '#ffffff',
        paddingBottom: 1,
    },
    description: {
        fontSize: 24,
        paddingTop: 20,
        fontWeight: '100',
        color: '#bae8e8',
    },
    text: {
      fontSize: 42,
    },
    temp: {
        fontSize: 24,
        fontWeight: '100',
        color: '#bae8e8',
    },
    city: {
        fontSize: 22,
        fontWeight: '100',
        color: '#ffffff',
        paddingBottom: 20,
    },

    CurrentDay: {
        flex: 1,
        marginTop: 54,
        alignItems: 'center',
    },
    week: {
        flex: 1,
        
        marginTop: '16%',
        /* bottom: 0,
        left: 0, */
        
        /* height: 200px; */
        backgroundColor: '#000000',
    },
    vasio: {
        flex: 1,
        height: 100,
    },
    propaganda: {
        flex: 1,
        //padding: 2,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 2,
        position: 'relative',
    }
  });