import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {getSubNums} from '../components/getSubNums';
import IsAnsValid from '../components/IsAnsValid';
import Keyboard from '../components/Keyboard';
import AnswerBox from '../components/AnswerBox';
import {GetDecimals} from '../HelperFunctions';
import {Appbar} from 'react-native-paper';

export default function Decimals({navigation}) {
  const [init, setInit] = useState(true);
  const [userMultAns, setUserMultAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [ansWrong, setAnsWrong] = useState(false);
  const [numbers, setNumbers] = useState(null);
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState(0);
  if (init == true) {
    AllocateNumbers(level);
    setInit(false);
  }
  function AllocateNumbers(level) {
    const NumList = GetDecimals(level);
    console.log('Decimals List: ' + NumList);
    let tempNum = NumList[0] + ' x ' + NumList[1];
    setNumbers(tempNum);
    setAnswer(NumList[2]);
  }
  return (
    <View style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Decimals" />
        {/* <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      </Appbar.Header>
      <View style={styles.select_container}>
        <Text style={{fontSize: 25, flex: 1}}>Level:</Text>
        <View style={{backgroundColor: '#ddd', flex: 4, borderRadius: 4}}>
          <Picker
            mode="dropdown"
            selectedValue={level}
            onValueChange={(itemValue, itemIndex) => {
              setLevel(itemValue);
              setShowAns(false);
              AllocateNumbers(itemValue);
            }}
            style={{height: 44}}
            itemStyle={{height: 44}}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
        </View>
      </View>
      <View style={styles.add_container}>
        <Text style={styles.NumStyles}>{numbers}</Text>
      </View>

      <AnswerBox inputText={userMultAns} />

      <Pressable
        style={styles.AnsSubmitBtn}
        onPress={() => {
          if (userMultAns == '') {
            return;
          }
          if (IsAnsValid(userMultAns)) {
            if (userMultAns == answer) {
              setShowAns(false);
              setUserMultAns('');
              AllocateNumbers(level);
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
      <Keyboard userValue={userMultAns} setInput={setUserMultAns} />
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
