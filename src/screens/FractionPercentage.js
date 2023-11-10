import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';
import FractionComponent from '../components/FractionComponent';

export default function FractionPercentage() {
  const frac_num = [];
  const frac_denom = [];
  const percentages_arr = [];
  return (
    <View>
      <FractionComponent num={44578879} denom={754} />
    </View>
  );
}
