import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HomeMenu from '../components/HomeMenu';
import Keyboard from '../components/Keyboard';

export default function Home({navigation}) {
  return (
    <View style={styles.Container}>
      <HomeMenu navigation={navigation} />
      <Keyboard />
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    paddingTop: 10,
    height: '100%',
    backgroundColor: '#fff',
  },
});
