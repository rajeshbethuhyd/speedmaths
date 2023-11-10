import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';

export default function HomeMenu({navigation}) {
  return (
    <ScrollView>
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
          navigation.navigate('SquareRoots');
        }}>
        <Text style={styles.HomeMenuItemText}>SQUARE ROOTS</Text>
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
          navigation.navigate('CubesRoots');
        }}>
        <Text style={styles.HomeMenuItemText}>CUBE ROOTS</Text>
      </Pressable>
      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('Cubes');
        }}>
        <Text style={styles.HomeMenuItemText}>EXPONENTS</Text>
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
          navigation.navigate('Decimals');
        }}>
        <Text style={styles.HomeMenuItemText}>DECIMALS</Text>
      </Pressable>
      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('');
        }}>
        <Text style={styles.HomeMenuItemText}>FRACTIONS</Text>
      </Pressable>
      <Pressable
        style={styles.HomeMenuItemStyles}
        onPress={() => {
          navigation.navigate('');
        }}>
        <Text style={styles.HomeMenuItemText}>TRIGONOMETRIC TRIPLETS</Text>
      </Pressable>
    </ScrollView>
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
