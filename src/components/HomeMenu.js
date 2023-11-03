import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import React from 'react';

export default function HomeMenu({navigation}) {
  return (
    <View>
      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('Addition');
        }}>
        <Text style={styles.HomeMenuItemText}>ADDITION</Text>
      </Pressable>

      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('Subtraction');
        }}>
        <Text style={styles.HomeMenuItemText}>SUBTRACTION</Text>
      </Pressable>

      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('Multiplication');
        }}>
        <Text style={styles.HomeMenuItemText}>MULTIPLICATION</Text>
      </Pressable>

      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('Division');
        }}>
        <Text style={styles.HomeMenuItemText}>DIVISION</Text>
      </Pressable>

      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('Tables');
        }}>
        <Text style={styles.HomeMenuItemText}>TABLES</Text>
      </Pressable>

      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('Squares');
        }}>
        <Text style={styles.HomeMenuItemText}>SQUARES</Text>
      </Pressable>

      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('Cubes');
        }}>
        <Text style={styles.HomeMenuItemText}>CUBES</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeMenuItemStyles: {
    backgroundColor: '#118ab2',
    borderRadius: 2,
    padding: 10,
    margin: 8,
    marginHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  HomeMenuItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
