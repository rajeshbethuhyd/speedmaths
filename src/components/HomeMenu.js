import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import React from 'react';

export default function HomeMenu({navigation}) {
  return (
    <View>
      <View style={styles.HomeMenuItemStyles}>
        <Pressable
          onPress={() => {
            navigation.navigate('Addition');
          }}>
          <Text style={styles.HomeMenuItemText}>ADDITION</Text>
        </Pressable>
      </View>
      <View style={styles.HomeMenuItemStyles}>
        <Pressable
          onPress={() => {
            navigation.navigate('Subtraction');
          }}>
          <Text style={styles.HomeMenuItemText}>SUBTRACTION</Text>
        </Pressable>
      </View>
      <View style={styles.HomeMenuItemStyles}>
        <Pressable
          onPress={() => {
            navigation.navigate('Multiplication');
          }}>
          <Text style={styles.HomeMenuItemText}>MULTIPLICATION</Text>
        </Pressable>
      </View>
      <View style={styles.HomeMenuItemStyles}>
        <Pressable
          onPress={() => {
            navigation.navigate('Tables');
          }}>
          <Text style={styles.HomeMenuItemText}>TABLES</Text>
        </Pressable>
      </View>
      <View style={styles.HomeMenuItemStyles}>
        <Pressable
          onPress={() => {
            navigation.navigate('Squares');
          }}>
          <Text style={styles.HomeMenuItemText}>SQUARES</Text>
        </Pressable>
      </View>
      <View style={styles.HomeMenuItemStyles}>
        <Pressable
          onPress={() => {
            navigation.navigate('Cubes');
          }}>
          <Text style={styles.HomeMenuItemText}>CUBES</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeMenuItemStyles: {
    backgroundColor: '#6495ed',
    borderRadius: 2,
    padding: 10,
    margin: 5,
  },
  HomeMenuItemText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
