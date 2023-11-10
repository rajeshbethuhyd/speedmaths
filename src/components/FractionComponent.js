import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FractionComponent({num, denom}) {
  const is_num_great = num > denom;
  return (
    <View style={styles.fractionContainerStyle}>
      <View style={is_num_great ? styles.numContainer : ''}>
        <Text style={styles.fractionTextStyle}>{num}</Text>
      </View>
      <View style={!is_num_great ? styles.denomContainer : ''}>
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
    borderBottomWidth: 1,
  },
  denomContainer: {
    borderTopWidth: 1,
  },
  fractionTextStyle: {
    fontSize: 30,
    color: '#118AB2',
  },
  denomstyle: {
    fontSize: 30,
    color: '#118AB2',
  },
});
