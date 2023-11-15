import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Appbar} from 'react-native-paper';
import IsAnsValid from '../components/IsAnsValid';
import {getRandomNumber} from '../components/GenerateRandNum';
import Keyboard from '../components/Keyboard';
import AnswerBox from '../components/AnswerBox';
import {GetRandomTriplets1, GetRandomTriplets2} from '../HelperFunctions';

export default function Triplets({navigation}) {
  const [init, setInit] = useState(true);
  const [level, setLevel] = useState(1); //store in async storage
  const [currentNumber, setCurrentNumber] = useState(2);
  const [userAns, setUserAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [ansWrong, setAnsWrong] = useState(false);
  if (init == true) {
    GenerateNumber();
    setInit(false);
  }
  function GenerateNumber() {
    let curr_num = '';
    let result;
    if (level == 1) {
      result = GetRandomTriplets1();
    } else if (level == 2) {
      result = GetRandomTriplets2();
    }

    for (let index = 0; index < 3; index++) {
      if (result[0][index] == result[1]) {
        if (index != 2) {
          curr_num += '___ ,';
        } else {
          curr_num += '___';
        }
      } else {
        curr_num += result[0][index];
        if (index != 2) {
          curr_num += ', ';
        }
      }
    }

    setCurrentNumber(curr_num);
    setAnswer(result[1]);
    setShowAns(false);
  }
  return (
    <View style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Trigonometric Triplets" />
      </Appbar.Header>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: '8%',
          padding: '5%',
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 25}}>Level:</Text>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: '#ddd',
            width: '40%',
          }}>
          <Picker
            mode="dropdown"
            selectedValue={level}
            onValueChange={(itemValue, itemIndex) => {
              setLevel(itemValue);
              setShowAns(false);
              setInit(true);
              setUserAns('');
            }}
            style={{height: 44}}
            itemStyle={{height: 44}}>
            <Picker.Item label="Level 1 Most Imp" value="1" />
            <Picker.Item label="Level 2" value="2" />
          </Picker>
        </View>
      </View>

      <View style={styles.add_container}>
        <Text style={styles.QtnStyles}>
          Find the missing side of the Right Triangle.
        </Text>
        <Text style={styles.NumStyles}>{currentNumber}</Text>
      </View>

      <AnswerBox inputText={userAns} />
      <Pressable
        style={styles.AnsSubmitBtn}
        onPress={() => {
          if (userAns == '') {
            return;
          }
          if (IsAnsValid(userAns)) {
            if (userAns == answer) {
              GenerateNumber();
              setShowAns(false);
              setUserAns('');
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
        {showAns && <Text style={styles.ShowAnsText}>{answer}</Text>}
      </View>

      <Keyboard userValue={userAns} setInput={setUserAns} />
    </View>
  );
}

const styles = StyleSheet.create({
  select_container: {
    padding: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  add_container: {
    margin: '1%',
    padding: '1%',
    alignItems: 'center',
  },
  QtnStyles: {
    fontSize: 20,
    color: '#000',
    marginTop: '3%',
    marginBottom: '5%',
  },
  NumStyles: {
    fontSize: 35,
    color: '#000',
  },
  AnsNumContainer: {
    marginTop: '2%',
    padding: '2%',
    alignItems: 'center',
  },
  AnsInputStyles: {
    fontSize: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    color: 'black',
  },
  AnsSubmitBtn: {
    marginHorizontal: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2196F3',
  },
  AnsSubmitBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.35,
    color: 'white',
  },
  AnsFeedbackContainer: {
    alignItems: 'center',
    marginTop: 15, //UPDATE %
    padding: 15, //UPDATE %
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
  modalTopTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#118ab2',
  },
  modalTopTitleText: {
    fontSize: 25,
    color: '#118ab2',
  },
  modalBody: {
    flex: 6,
    padding: '5%',
  },
  modalBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
