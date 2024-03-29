import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {getSubNums} from '../components/getSubNums';
import IsAnsValid from '../components/IsAnsValid';
import Keyboard from '../components/Keyboard';
import AnswerBox from '../components/AnswerBox';
import {Appbar} from 'react-native-paper';

export default function Multiplication({navigation}) {
  const [init, setInit] = useState(true);
  const [userMultAns, setUserMultAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [ansWrong, setAnsWrong] = useState(false);
  const [numbers, setNumbers] = useState(null);
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState(0);

  if (init == true) {
    const result = AllocateNumbers(level);
    console.log(result);
    setNumbers(result[0]);
    setAnswer(result[1]);
    setInit(false);
  }
  function AllocateNumbers(level) {
    let mult_ans = 0;
    const multNumList = getSubNums(level);
    console.log('SubNumList: ' + multNumList);
    mult_ans = multNumList[0] * multNumList[1];
    return [multNumList.join(' x '), mult_ans];
  }
  return (
    <View style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Multiplication" />
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
              setInit(true);
            }}
            style={{height: 44}}
            itemStyle={{height: 44}}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
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

              const reallocate = AllocateNumbers(level);
              console.log('New: ' + reallocate);
              setNumbers(reallocate[0]);
              setAnswer(reallocate[1]);
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
