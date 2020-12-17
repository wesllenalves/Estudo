import React from "react";
import imageDictionary from "../utils/imageDictionary";
import { i18n } from "../utils/i18n";
import { StyleSheet, Text, Image, View } from 'react-native';

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{i18n.t('Welcome')}!</Text>
      <Image style={styles.bigIcon} source={imageDictionary["01d"]} />
      <Text style={styles.description}>{i18n.t('Loading')}...</Text>
    </View>
  );
};
export default Loading;

const styles = StyleSheet.create({   
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#272343',
    justifyContent: 'center',
  }, 
  bigIcon: {
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
});

