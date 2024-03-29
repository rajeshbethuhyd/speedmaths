import {
  Pressable,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IsAnsValid from '../components/IsAnsValid';
import {getAdNums} from '../components/getAdNums';
import {Picker} from '@react-native-picker/picker';
import Keyboard from '../components/Keyboard';
import AnswerBox from '../components/AnswerBox';
import {Appbar, Icon} from 'react-native-paper';

export default function Addition({navigation}) {
  const [init, setInit] = useState(true);
  const [userAddAns, setUserAddAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [ansWrong, setAnsWrong] = useState(false);
  const [numbersList, setNumbersList] = useState(null);
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState(0);
  const [howMany, setHowMany] = useState(2); //n is How many numbers
  const [repeat, setRepeat] = useState(1); //How many times they repeat
  const howmany_start = [2, 6, 1, 2, 1, 2, 1, 2];
  const howmany_limit = [5, 10, 4, 6, 3, 6, 3, 6];
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);
  if (init == true) {
    const result = AllocateNumbers(howMany, level);
    console.log(result);
    setNumbersList(result[0]);
    setAnswer(result[1]);
    setInit(false);
    StartTimer();
  }

  function StartTimer() {
    let timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    setTimerId(timer);
  }
  function StopTimer() {
    console.log('when stopped timer: ');
    console.log(timerId);
    clearInterval(timerId);
  }
  function RestartTimer() {
    setSeconds(0);
    StartTimer();
  }

  function AllocateNumbers(howMany, level) {
    let ad_ans = 0;
    const adNumList = getAdNums(howMany, level);
    adNumList.forEach(num => {
      ad_ans += num;
    });
    setRepeat(repeat + 1);

    if (repeat == 5 && howMany != howmany_limit[level - 1]) {
      setHowMany(howMany + 1);
      setRepeat(1);
    }
    if (repeat == 5 && howMany == howmany_limit[level - 1]) {
      setHowMany(howmany_start[level - 1]);
      setRepeat(1);
    }
    return [adNumList.join(' + '), ad_ans];
  }
  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };
  return (
    <View style={{flex: 1}}>
      <Appbar.Header mode="small">
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      </View>
      <View style={styles.select_container}>
        <Text style={{fontSize: 25, flex: 1, color: 'black'}}>Level:</Text>
        <View style={{backgroundColor: '#ddd', flex: 4, borderRadius: 4}}>
          <Picker
            mode="dropdown"
            selectedValue={level}
            onValueChange={(itemValue, itemIndex) => {
              setLevel(itemValue);
              setHowMany(howmany_start[itemValue - 1]);
              setRepeat(1);
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
          </Picker>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#000000'}}>
          Numbers will increase after every 5 questions
        </Text>
      </View>
      <View style={styles.add_container}>
        <Text style={styles.NumStyles}>{numbersList} = ?</Text>
      </View>
      <AnswerBox inputText={userAddAns} />
      <Pressable
        style={styles.AnsSubmitBtn}
        onPress={() => {
          if (userAddAns == '') {
            return;
          }
          if (IsAnsValid(userAddAns)) {
            if (userAddAns == answer) {
              setShowAns(false);
              setUserAddAns('');
              const reallocate = AllocateNumbers(howMany, level);
              setNumbersList(reallocate[0]);
              setAnswer(reallocate[1]);
              setAnsWrong(false);
              RestartTimer();
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
              StopTimer();
            }}>
            <Text style={styles.AnsSubmitBtnText}>SHOW ANSWER</Text>
          </Pressable>
        )}
        {showAns && <Text style={styles.ShowAnsText}>{answer}</Text>}
      </View>
      <Keyboard userValue={userAddAns} setInput={setUserAddAns} />
    </View>
  );
}

const styles = StyleSheet.create({
  timerText: {
    fontSize: 25,
  },
  select_container: {
    paddingHorizontal: 50,
    paddingVertical: 5,
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
