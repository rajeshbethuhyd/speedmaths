import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import IsAnsValid from '../components/IsAnsValid';
import {getAdNums} from '../components/getAdNums';

export default function Addition() {
  const [init, setInit] = useState(true);
  const [userAddAns, setUserAddAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [ansWrong, setAnsWrong] = useState(false);
  const [numbersList, setNumbersList] = useState(null);
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState(0);
  const [repeat, setRepeat] = useState(1);
  const [n, setN] = useState(2);

  if (init == true) {
    const result = AllocateNumbers();
    console.log(result);
    setNumbersList(result[0]);
    setAnswer(result[1]);
    setInit(false);
  }
  function AllocateNumbers() {
    let ad_ans = 0;
    const adNumList = getAdNums(10, 99, n);
    adNumList.forEach(num => {
      ad_ans += num;
    });
    setRepeat(repeat + 1);
    if (repeat == 5 && n != 5) {
      setRepeat(1);
      setN(n + 1);
    }
    if (repeat == 5 && n == 5) {
      setRepeat(1);
      setN(2);
    }
    return [adNumList.join(' + '), ad_ans];
  }

  return (
    <View>
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
              const reallocate = AllocateNumbers();
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
    </View>
  );
}

const styles = StyleSheet.create({
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
});
