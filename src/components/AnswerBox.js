import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AnswerBox({inputText}) {
  return (
    <View style={styles.AnsNumContainer}>
      <View style={styles.AnsInputStyles}>
        <Text style={styles.AnsInputText}>{inputText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AnsNumContainer: {
    marginTop: 15,
    padding: 15,
    alignItems: 'center',
  },
  AnsInputStyles: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.4,
    width: '50%',
    alignItems: 'center',
  },
  AnsInputText: {
    fontSize: 30,
    color: 'black',
  },
});
