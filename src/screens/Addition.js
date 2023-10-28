import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import IsAnsValid from '../components/IsAnsValid';
import {getAdNums} from '../components/getAdNums';
import {Picker} from '@react-native-picker/picker';

export default function Addition() {
  const [init, setInit] = useState(true);
  const [userAddAns, setUserAddAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [ansWrong, setAnsWrong] = useState(false);
  const [numbersList, setNumbersList] = useState(null);
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState(0);
  const [howMany, setHowMany] = useState(2); //n is How many numbers
  const [repeat, setRepeat] = useState(1); //How many times they repeat
  const howmany_start = [2, 6, 4, 6];
  const howmany_limit = [5, 10, 4, 6];

  if (init == true) {
    const result = AllocateNumbers(howMany);
    console.log(result);
    setNumbersList(result[0]);
    setAnswer(result[1]);
    setInit(false);
  }

  function AllocateNumbers(howMany) {
    console.log('How many: ' + howMany);
    let ad_ans = 0;
    const adNumList = getAdNums(10, 99, howMany);
    adNumList.forEach(num => {
      ad_ans += num;
    });
    setRepeat(repeat + 1);

    if (repeat == 2 && howMany != howmany_limit[level - 1]) {
      setHowMany(howMany + 1);
      setRepeat(1);
    }
    if (repeat == 2 && howMany == howmany_limit[level - 1]) {
      setHowMany(howmany_start[level - 1]);
      setRepeat(1);
    }
    return [adNumList.join(' + '), ad_ans];
  }

  return (
    <View>
      <View style={styles.select_container}>
        <Text style={{fontSize: 25, flex: 1}}>Level:</Text>
        <View style={{backgroundColor: '#ddd', flex: 4, borderRadius: 4}}>
          <Picker
            mode="dropdown"
            selectedValue={level}
            onValueChange={(itemValue, itemIndex) => {
              setLevel(itemValue);
              setHowMany(howmany_start[itemValue - 1]);
              setRepeat(1);
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
            <Picker.Item label="10" value="10" />
          </Picker>
        </View>
      </View>
      <View style={styles.add_container}>
        <Text style={styles.NumStyles}>{numbersList}</Text>
      </View>
      <View style={styles.AnsNumContainer}>
        <TextInput
          style={styles.AnsInputStyles}
          placeholder="Your Answer"
          keyboardType="numeric"
          textAlign={'center'}
          value={userAddAns}
          onChangeText={input => {
            input = input.trim();
            setUserAddAns(input);
          }}
        />
      </View>

      <Pressable
        style={styles.AnsSubmitBtn}
        onPress={() => {
          if (userAddAns == '') {
            return;
          }
          if (IsAnsValid(userAddAns)) {
            console.log('userAddAns: ' + userAddAns);
            console.log('Act ans: ' + answer);
            if (userAddAns == answer) {
              setShowAns(false);
              setUserAddAns('');
              console.log('everytime before calling HOWMANY: ' + howMany);
              const reallocate = AllocateNumbers(howMany);
              console.log('New: ' + reallocate);
              setNumbersList(reallocate[0]);
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
