import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card({ name, icon, temp, hour }) {
  return (
    <View style={styles.day}>
      <Image style={styles.smallIcon} source={icon} />
      <Text style={styles.smallText}>{name}</Text>
      <Text style={styles.smallText}>{temp}°C</Text>
      <Text style={styles.smallText}>{hour}h</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  day:{ 
    height: 150,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallIcon: {
    width: 50,
    height: 50,
  },
  smallText: {
    fontSize: 20, 
    fontWeight: '300',
    color: '#FFFFFF',
    marginBottom: '2%',
  },

});
