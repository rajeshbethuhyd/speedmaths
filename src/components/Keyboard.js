import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {Button, Icon} from 'react-native-paper';

export function KeyItem({value}) {
  return (
    <Pressable
      style={styles.keyItem}
      android_ripple={{color: 'rgba(0,0,0,0.25)'}}>
      <Text style={styles.keyItemText}>{value}</Text>
    </Pressable>
  );
}

export default function Keyboard() {
  return (
    <View style={styles.container}>
      <View style={styles.mainBody}>
        <View style={styles.rowContainer}>
          <KeyItem value="1" />
          <KeyItem value="2" />
          <KeyItem value="3" />
        </View>
        <View style={styles.rowContainer}>
          <KeyItem value="4" />
          <KeyItem value="5" />
          <KeyItem value="6" />
        </View>
        <View style={styles.rowContainer}>
          <KeyItem value="7" />
          <KeyItem value="8" />
          <KeyItem value="9" />
        </View>
        <View style={styles.rowContainer}>
          <KeyItem value="0" />
          <Pressable
            style={styles.keyItem}
            android_ripple={{color: 'rgba(0,0,0,0.25)'}}>
            <Icon source="circle-medium" color="#fff" size={20} />
          </Pressable>
          <Pressable
            style={styles.keyItem}
            android_ripple={{color: 'rgba(0,0,0,0.25)'}}>
            <Icon source="backspace" color="#fff" size={25} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    margin: 'auto',
    width: '100%',
    // backgroundColor: '#ddd',
  },
  mainBody: {
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: '1%',
  },
  keyItem: {
    backgroundColor: '#118ab2',
    paddingVertical: '5%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  keyItemText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 20,
  },
});
