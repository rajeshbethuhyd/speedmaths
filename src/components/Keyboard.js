import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {Button, Icon} from 'react-native-paper';

export function KeyItem({
  value,
  userValue,
  setInput,
  mode,
  userNum,
  setUserNum,
  userDenom,
  setUserDenom,
  isDenomTrue,
}) {
  return (
    <Pressable
      onPress={() => {
        if ((userValue == '0') & (value == '0')) {
          return;
        }

        if ((mode == 2 || mode == 4) && isDenomTrue == false) {
          let newValue = userNum + '' + value;
          setUserNum(newValue);
          // setInput(newValue);
        } else if ((mode == 2 || mode == 4) && isDenomTrue == true) {
          let newValue = userDenom + '' + value;
          setUserDenom(newValue);
          // setInput(newValue);
        } else if (mode == null || mode == 1 || mode == 3) {
          let newValue = userValue + '' + value;
          setInput(newValue);
        }
      }}
      style={styles.keyItem}
      android_ripple={{color: 'rgba(0,0,0,0.25)'}}>
      <Text style={styles.keyItemText}>{value}</Text>
    </Pressable>
  );
}

export default function Keyboard({
  userValue,
  setInput,
  mode = null,
  userNum,
  setUserNum,
  userDenom,
  setUserDenom,
  isDenomTrue,
  setIsDenomTrue,
  setShowBar,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainBody}>
        <View style={styles.rowContainer}>
          <KeyItem
            value="1"
            userValue={userValue}
            setInput={setInput}
            mode={mode}
            userNum={userNum}
            setUserNum={setUserNum}
            userDenom={userDenom}
            setUserDenom={setUserDenom}
            isDenomTrue={isDenomTrue}
          />
          <KeyItem
            value="2"
            userValue={userValue}
            setInput={setInput}
            mode={mode}
            userNum={userNum}
            setUserNum={setUserNum}
            userDenom={userDenom}
            setUserDenom={setUserDenom}
            isDenomTrue={isDenomTrue}
          />
          <KeyItem
            value="3"
            userValue={userValue}
            setInput={setInput}
            mode={mode}
            userNum={userNum}
            setUserNum={setUserNum}
            userDenom={userDenom}
            setUserDenom={setUserDenom}
            isDenomTrue={isDenomTrue}
          />
        </View>
        <View style={styles.rowContainer}>
          <KeyItem
            value="4"
            userValue={userValue}
            setInput={setInput}
            mode={mode}
            userNum={userNum}
            setUserNum={setUserNum}
            userDenom={userDenom}
            setUserDenom={setUserDenom}
            isDenomTrue={isDenomTrue}
          />
          <KeyItem
            value="5"
            userValue={userValue}
            setInput={setInput}
            mode={mode}
            userNum={userNum}
            setUserNum={setUserNum}
            userDenom={userDenom}
            setUserDenom={setUserDenom}
            isDenomTrue={isDenomTrue}
          />
          <KeyItem
            value="6"
            userValue={userValue}
            setInput={setInput}
            mode={mode}
            userNum={userNum}
            setUserNum={setUserNum}
            userDenom={userDenom}
            setUserDenom={setUserDenom}
            isDenomTrue={isDenomTrue}
          />
        </View>
        <View style={styles.rowContainer}>
          <KeyItem
            value="7"
            userValue={userValue}
            setInput={setInput}
            mode={mode}
            userNum={userNum}
            setUserNum={setUserNum}
            userDenom={userDenom}
            setUserDenom={setUserDenom}
            isDenomTrue={isDenomTrue}
          />
          <KeyItem
            value="8"
            userValue={userValue}
            setInput={setInput}
            mode={mode}
            userNum={userNum}
            setUserNum={setUserNum}
            userDenom={userDenom}
            setUserDenom={setUserDenom}
            isDenomTrue={isDenomTrue}
          />
          <KeyItem
            value="9"
            userValue={userValue}
            setInput={setInput}
            mode={mode}
            userNum={userNum}
            setUserNum={setUserNum}
            userDenom={userDenom}
            setUserDenom={setUserDenom}
            isDenomTrue={isDenomTrue}
          />
        </View>
        <View style={styles.rowContainer}>
          {mode != null && (mode == 2 || mode == 4) ? (
            <Pressable
              onPress={() => {
                console.log('INIT  DENOM: ' + isDenomTrue);
                console.log('userNum: ' + userNum);
                console.log('userdenom: ' + userDenom);
                if (userNum == '') {
                  return;
                }
                if (isDenomTrue == true) {
                  return;
                }
                setIsDenomTrue(true);
                setShowBar(true);
              }}
              style={styles.keyItem}
              android_ripple={{color: 'rgba(0,0,0,0.25)'}}>
              <Icon source="minus-thick" color="#fff" size={20} />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                if (userValue == '' || userValue.includes('.')) {
                  return;
                }
                let newValue = userValue + '.';
                setInput(newValue);
              }}
              style={styles.keyItem}
              android_ripple={{color: 'rgba(0,0,0,0.25)'}}>
              <Icon source="circle-medium" color="#fff" size={20} />
            </Pressable>
          )}
          <KeyItem
            value="0"
            userValue={userValue}
            setInput={setInput}
            mode={mode}
            userNum={userNum}
            setUserNum={setUserNum}
            userDenom={userDenom}
            setUserDenom={setUserDenom}
            isDenomTrue={isDenomTrue}
          />
          <Pressable
            onPress={() => {
              var string = userValue;
              string = string.slice(0, -1);
              setInput(string);
              if (isDenomTrue == false && mode != null) {
                let string = userNum;
                string = string.slice(0, -1);
                setUserNum(string);
              } else if (isDenomTrue == true && mode != null) {
                if (userDenom == '') {
                  setIsDenomTrue(false);
                  setShowBar(false);
                }
                let string = userDenom;
                string = string.slice(0, -1);
                setUserDenom(string);
              }
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
