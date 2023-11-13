import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FractionComponent({num, denom, showBar = true}) {
  if (denom != '') {
    denom = denom * 1;
  }
  const is_num_great = num * 1 > denom;
  console.log('is_num_great');
  console.log(is_num_great);
  return (
    <View style={styles.fractionContainerStyle}>
      <View style={is_num_great && showBar == true ? styles.numContainer : ''}>
        <Text style={styles.fractionTextStyle}>{num}</Text>
      </View>
      <View
        style={!is_num_great && showBar == true ? styles.denomContainer : ''}>
        <Text style={styles.denomstyle}>{denom}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  fractionContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  denomContainer: {
    borderTopWidth: 2,
    borderTopColor: '#000',
  },
  fractionTextStyle: {
    fontSize: 30,
    color: '#000',
  },
  denomstyle: {
    fontSize: 30,
    color: '#000',
  },
});
