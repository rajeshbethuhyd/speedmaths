import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Test() {
  console.log('TEST CALLED');
  //for given number, get min and max multiplier so that result is in the given range(ex: 100 to 999).
  let n = 13;
  let range = {
    min: 100,
    max: 999,
  };
  let multi_range = {};

  let remainder = range.min % n;
  if (remainder == 0) {
    multi_range.min = range.min / n;
  } else {
    multi_range.min = Math.trunc(range.min / n) + 1;
  }
  let remainder2 = range.max % n;
  if (remainder2 == 0) {
    multi_range.max = range.max / n;
  } else {
    multi_range.max = Math.trunc(range.max / n);
  }
  console.log('Multiplier min is: ' + multi_range.min);
  console.log('Multiplier max is: ' + multi_range.max);
}

const styles = StyleSheet.create({});
