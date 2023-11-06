import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {Button, Icon} from 'react-native-paper';

export function KeyItem({value, userValue, setInput}) {
  return (
    <Pressable
      onPress={() => {
        if ((userValue == '0') & (value == '0')) {
          return;
        }
        let newValue = userValue + '' + value;
        setInput(newValue);
      }}
      style={styles.keyItem}
      android_ripple={{color: 'rgba(0,0,0,0.25)'}}>
      <Text style={styles.keyItemText}>{value}</Text>
    </Pressable>
  );
}

export default function Keyboard({userValue, setInput}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainBody}>
        <View style={styles.rowContainer}>
          <KeyItem value="1" userValue={userValue} setInput={setInput} />
          <KeyItem value="2" userValue={userValue} setInput={setInput} />
          <KeyItem value="3" userValue={userValue} setInput={setInput} />
        </View>
        <View style={styles.rowContainer}>
          <KeyItem value="4" userValue={userValue} setInput={setInput} />
          <KeyItem value="5" userValue={userValue} setInput={setInput} />
          <KeyItem value="6" userValue={userValue} setInput={setInput} />
        </View>
        <View style={styles.rowContainer}>
          <KeyItem value="7" userValue={userValue} setInput={setInput} />
          <KeyItem value="8" userValue={userValue} setInput={setInput} />
          <KeyItem value="9" userValue={userValue} setInput={setInput} />
        </View>
        <View style={styles.rowContainer}>
          <Pressable
            onPress={() => {
              if (userValue == '' || userValue.includes('.')) {
                return;
              }
              let newValue = userValue + '.';
              let ans = '.1' + 0.2;
              console.log(ans);
              setInput(newValue);
            }}
            style={styles.keyItem}
            android_ripple={{color: 'rgba(0,0,0,0.25)'}}>
            <Icon source="circle-medium" color="#fff" size={20} />
          </Pressable>
          <KeyItem value="0" userValue={userValue} setInput={setInput} />
          <Pressable
            onPress={() => {
              var string = userValue;
              string = string.slice(0, -1);
              setInput(string);
            }}
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
    marginBottom: '1%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 3,
  },
  keyItem: {
    backgroundColor: '#118ab2',
    paddingVertical: '4%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '31%',
    marginHorizontal: 3,
  },
  keyItemText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 25,
  },
});
