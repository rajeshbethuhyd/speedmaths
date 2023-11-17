import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {getSubNums} from '../components/getSubNums';
import IsAnsValid from '../components/IsAnsValid';
import Keyboard from '../components/Keyboard';
import AnswerBox from '../components/AnswerBox';
import {Appbar} from 'react-native-paper';
import {GetDiscountNums} from '../HelperFunctions';

export default function NetDiscount({navigation}) {
  const [init, setInit] = useState(true);
  const [userMultAns, setUserMultAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [ansWrong, setAnsWrong] = useState(false);
  const [numbers, setNumbers] = useState(null);
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState(0);
  const [options, setOptions] = useState([]);

  if (init == true) {
    AllocateNumbers(level);
    setInit(false);
  }
  function AllocateNumbers(level) {
    const DiscNumList = GetDiscountNums(level);
    console.log('DiscNumList: ' + DiscNumList);
    let NetDISC =
      DiscNumList[0] + DiscNumList[1] - (DiscNumList[0] * DiscNumList[1]) / 100;
    let numebrs = DiscNumList[0] + '% ' + 'and ' + DiscNumList[1] + '%';
    NetDISC = NetDISC.toString();
    let length = NetDISC.length;
    let tempNetDisc = [];
    for (let index = 0; index < length; index++) {
      if (NetDISC[index] == '.') {
        tempNetDisc[index] = NetDISC[index];
        tempNetDisc[index + 1] = NetDISC[index + 1];
        tempNetDisc[index + 2] = NetDISC[index + 2];
        break;
      } else {
        tempNetDisc[index] = NetDISC[index];
      }
    }
    tempNetDisc = tempNetDisc.join('');

    setNumbers(numebrs);
    setAnswer(tempNetDisc);
    setUserMultAns('');
  }
  return (
    <View style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Net Discount" />
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
