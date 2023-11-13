import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {getSubNums} from '../components/getSubNums';
import IsAnsValid from '../components/IsAnsValid';
import Keyboard from '../components/Keyboard';
import AnswerBox from '../components/AnswerBox';
import {Appbar} from 'react-native-paper';
import {Icon} from 'react-native-paper';
import FractionComponent from '../components/FractionComponent';
import {
  FractionPercentageValuesEasy,
  FractionPercentageValuesMore,
} from '../HelperFunctions';

export default function FractionPercentage({navigation}) {
  const [init, setInit] = useState(true);
  const [userMultAns, setUserMultAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [ansWrong, setAnsWrong] = useState(false);
  const [num, setNum] = useState(null);
  const [denom, setDenom] = useState(null);
  const [userNum, setUserNum] = useState(null);
  const [userDenom, setUserDenom] = useState(null);
  const [isDenomTrue, setIsDenomTrue] = useState(false);
  const [percentage, setPercentage] = useState(null);
  const [mode, setMode] = useState(1);
  const [answer, setAnswer] = useState(0);
  const [showBar, setShowBar] = useState(false);

  if (init == true) {
    AllocateNumbers(mode);
    setInit(false);
  }
  function AllocateNumbers(mode) {
    let result;
    if (mode <= 2) {
      result = FractionPercentageValuesEasy();
      if (mode == 1) {
        setAnswer(result[1]);
      } else if (mode == 2) {
        let temp_ans = result[0][0] + '/' + result[0][1];
        setPercentage(result[1]);
        setAnswer(temp_ans);
      }
    } else {
      result = FractionPercentageValuesMore();
      if (mode == 3) {
        setAnswer(result[1]);
      } else if (mode == 4) {
        let temp_ans2 = result[0][0] + '/' + result[0][1];
        setAnswer(temp_ans2);
        setPercentage(result[1]);
      }
    }
    setNum(result[0][0]);
    setDenom(result[0][1]);
  }
  function CheckUserAns() {
    if (num == userNum && denom == userDenom) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <View style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Fraction Percentage Conversion" />
      </Appbar.Header>
      <View style={styles.select_container}>
        <Text style={{fontSize: 25, flex: 1}}>Mode:</Text>
        <View style={{backgroundColor: '#ddd', flex: 4, borderRadius: 4}}>
          <Picker
            mode="dropdown"
            selectedValue={mode}
            onValueChange={(itemValue, itemIndex) => {
              setMode(itemValue);
              setShowAns(false);
              setUserNum('');
              setUserDenom('');
              setIsDenomTrue(false);
              setInit(true);
            }}
            style={{height: 44}}
            itemStyle={{height: 44}}>
            <Picker.Item label="Fraction To Percentage Most IMP" value="1" />
            <Picker.Item label="Percentage To Fraction Most IMP" value="2" />
            <Picker.Item label="Fraction To Percentage Practice" value="3" />
            <Picker.Item label="Percentage To Fraction Practice" value="4" />
          </Picker>
        </View>
      </View>
      {mode == '1' || mode == '3' ? (
        <View style={styles.add_container}>
          <FractionComponent num={num} denom={denom} />
          <Text style={styles.NumStyles}> = ?</Text>
        </View>
      ) : (
        <View style={styles.add_container}>
          <Text style={styles.NumStyles}>{percentage} % = ?</Text>
        </View>
      )}

      {mode == '1' || mode == '3' ? (
        <AnswerBox inputText={userMultAns} />
      ) : (
        <FractionComponent num={userNum} denom={userDenom} showBar={showBar} />
      )}
      <Pressable
        style={styles.AnsSubmitBtn}
        onPress={() => {
          if (mode == 2 || mode == 4) {
            if (CheckUserAns()) {
              setShowAns(false);
              setUserNum('');
              setUserDenom('');
              AllocateNumbers(mode);
              setAnsWrong(false);
              setIsDenomTrue(false);
            } else {
              setShowAns(false);
              setAnsWrong(true);
            }
          } else {
            if (userMultAns == '') {
              return;
            }
            if (userMultAns == answer) {
              setShowAns(false);
              setUserMultAns('');
              AllocateNumbers(mode);
              setAnsWrong(false);
            } else {
              setShowAns(false);
              setAnsWrong(true);
            }
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
        {(mode == 1 || mode == 3) && showAns && (
          <Text style={styles.ShowAnsText}>{answer}</Text>
        )}
        {(mode == 2 || mode == 4) && showAns && (
          <FractionComponent num={num} denom={denom} />
        )}
      </View>
      <Keyboard
        userValue={userMultAns}
        setInput={setUserMultAns}
        mode={mode}
        userNum={userNum}
        setUserNum={setUserNum}
        userDenom={userDenom}
        setUserDenom={setUserDenom}
        isDenomTrue={isDenomTrue}
        setIsDenomTrue={setIsDenomTrue}
        setShowBar={setShowBar}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  select_container: {
    padding: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  add_container: {
    margin: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
    flexDirection: 'row',
    justifyContent: 'center',
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
