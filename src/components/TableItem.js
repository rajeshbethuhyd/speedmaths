import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

export default function TableItem({
  tableNum = null,
  navigation,
  is_mixed = false,
}) {
  return (
    <Pressable
      style={styles.TableItemStyles}
      onPress={() => {
        navigation.navigate('Practice Tables', {
          tableNum: tableNum,
          is_mixed: is_mixed,
        });
      }}>
      <Text style={{color: 'white'}}>{is_mixed ? 'Mixed' : tableNum}</Text>
    </Pressable>
  );
}

export function TableItemTest({navigation}) {
  return (
    <Pressable
      style={styles.TableItemStyles}
      onPress={() => {
        navigation.navigate('Practice_Tables', {});
      }}>
      <Text style={{color: 'white'}}>Practice Tables</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  TableItemStyles: {
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    margin: '1%',
    backgroundColor: '#1D3557',
    borderRadius: 5,
  },
});
