import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import IsAnsValid from '../components/IsAnsValid';
import {getAdNums} from '../components/getAdNums';
import {Picker} from '@react-native-picker/picker';
import {getDivNums} from '../components/getDivNums';
import Keyboard from '../components/Keyboard';
import AnswerBox from '../components/AnswerBox';

export default function Division() {
  const [init, setInit] = useState(true);
  const [userDivAns, setUserDivAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [ansWrong, setAnsWrong] = useState(false);
  const [numbers, setNumbers] = useState(null);
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState(0);
  const [dividendDigits, setDividendDigits] = useState(2);
  const [divisorDigits, setDivisorDigits] = useState(1);
  const [dividend, setDividend] = useState(1);
  const [divisor, setDivisor] = useState(1);
  const [repeat, setRepeat] = useState(1); //How many times they repeat
  const dividend_digits_start = [2, 2, 3, 3, 4, 4, 5, 5, 2];
  const divisor_digits_start = [1, 1, 2, 2, 3, 3, 4, 4, 2];

  if (init == true) {
    AllocateNumbers(level, dividendDigits, divisorDigits);
    setInit(false);
  }
  function AllocateNumbers(level, dividendDigits, divisorDigits) {
    const divNumList = getDivNums(level, dividendDigits, divisorDigits);
    setRepeat(repeat + 1);
    if (repeat == 5 && dividendDigits != 8) {
      setDividendDigits(dividendDigits + 1);
      if (level >= 7) {
        setDivisorDigits(divisorDigits + 1);
      }
      setRepeat(1);
    }
    if (repeat == 5 && dividendDigits == 8) {
      setDividendDigits(dividend_digits_start[level - 1]);
      if (level >= 7) {
        setDivisorDigits(divisor_digits_start[level - 1]);
      }
      setRepeat(1);
    }
    setDividend(divNumList[0]);
    setDivisor(divNumList[1]);
    setAnswer(divNumList[2]);
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.select_container}>
        <Text style={{fontSize: 25, flex: 1, color: 'black'}}>Difficulty:</Text>
        <View style={{backgroundColor: '#ddd', flex: 3, borderRadius: 4}}>
          <Picker
            mode="dropdown"
            selectedValue={level}
            onValueChange={(itemValue, itemIndex) => {
              setLevel(itemValue);
              setDividendDigits(dividend_digits_start[itemValue - 1]);
              setDivisorDigits(divisor_digits_start[itemValue - 1]);
              setRepeat(1);
              setShowAns(false);
              setInit(true);
            }}
            style={{height: 44}}
            itemStyle={{height: 44}}>
            <Picker.Item label="Level 1 Easy" value="1" />
            <Picker.Item label="Level 1 Hard" value="2" />
            <Picker.Item label="Level 2 Easy" value="3" />
            <Picker.Item label="Level 2 Hard" value="4" />
            <Picker.Item label="Level 3 Easy" value="5" />
            <Picker.Item label="Level 3 Hard" value="6" />
            <Picker.Item label="Level 4 Easy" value="7" />
            <Picker.Item label="Level 4 Hard" value="8" />
            <Picker.Item label="Level 5" value="9" />
          </Picker>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18}}>
          Number of digits will increase after every 5 questions up to 8.
        </Text>
      </View>
      <View style={styles.add_container}>
        <Text style={styles.NumStyles}>
          {dividend} ÷ {divisor} = ?
        </Text>
      </View>

      <AnswerBox inputText={userDivAns} />
      {/* {showDecimalInfo && (
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Text style={{fontSize: 18}}>Up to 3 decimal points</Text>
        </View>
      )} */}
      <Pressable
        style={styles.AnsSubmitBtn}
        onPress={() => {
          if (userDivAns == '') {
            return;
          }
          if (IsAnsValid(userDivAns)) {
            if (userDivAns == parseFloat(answer)) {
              setShowAns(false);
              setUserDivAns('');
              AllocateNumbers(level, dividendDigits, divisorDigits);
              setAnsWrong(false);
            } else {
              setShowAns(false);
              setAnsWrong(true);
            }
          } else {
            Alert.alert(
              'Invalid Input',
              "Please don't use any special symbols.",
            );
          }
        }}>
        <Text style={styles.AnsSubmitBtnText}>SUBMIT</Text>
      </Pressable>
      <View style={styles.AnsFeedbackContainer}>
        {ansWrong && <Text style={styles.AnsWrong}>Try Again</Text>}
      </View>
      <View>
        {!showAns && (
          <Pressable
            style={[styles.AnsSubmitBtn, styles.ShowAnsBtn]}
            onPress={() => {
              setShowAns(true);
            }}>
            <Text style={styles.AnsSubmitBtnText}>SHOW ANSWER</Text>
          </Pressable>
        )}
        {showAns && <Text style={styles.ShowAnsText}>{answer}</Text>}
      </View>
      <Keyboard userValue={userDivAns} setInput={setUserDivAns} />
    </View>
  );
}

const styles = StyleSheet.create({
  select_container: {
    padding: 50,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  add_container: {
    margin: 5,
    padding: 15,
    alignItems: 'center',
  },
  NumStyles: {
    fontSize: 40,
    fontWeight: '600',
    color: '#000',
  },
  AnsNumContainer: {
    marginTop: 15,
    padding: 15,
    alignItems: 'center',
  },
  AnsInputStyles: {
    fontSize: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black',
  },
  AnsSubmitBtn: {
    marginHorizontal: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2196F3',
  },
  AnsSubmitBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  AnsFeedbackContainer: {
    alignItems: 'center',
    marginTop: 15,
    padding: 15,
  },
  AnsCorrect: {
    fontSize: 35,
    fontWeight: '600',
    color: '#009933',
  },
  AnsWrong: {
    fontSize: 35,
    fontWeight: '600',
    color: '#FF0000',
  },
  ShowAnsBtn: {
    backgroundColor: '#ff9200',
  },
  ShowAnsText: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#ff9200',
  },
});
