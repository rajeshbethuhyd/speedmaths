import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';

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
      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('FractionPercentage');
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.HomeMenuItemText}>FRACTION </Text>
          <Icon source="swap-horizontal" color="#fff" size={28} />
          <Text style={styles.HomeMenuItemText}> PERCENTAGE</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('MemoryGame');
        }}>
        <Text style={styles.HomeMenuItemText}>MEMORY GAMES</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeMenuItemStyles: {
    backgroundColor: '#118ab2',
    padding: '1.5%',
    marginVertical: '1%',
    marginHorizontal: '5%',
    borderRadius: 5,
    alignItems: 'center',
  },
  HomeMenuItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
