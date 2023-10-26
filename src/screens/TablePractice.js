import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import GenerateRandNum, {
  GenerateRandTable,
} from '../components/GenerateRandNum';
import IsAnsValid from '../components/IsAnsValid';

export default function TablePractice({navigation, route}) {
  const [init, setInit] = useState(true);
  const [userAns, setUserAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [ansWrong, setAnsWrong] = useState(false);
  const is_mixed = route.params.is_mixed;
  let table = null;
  let randomNum = null;
  if (init == true) {
    randomNum = GenerateRandNum();
    if (is_mixed) {
      table = GenerateRandTable();
    } else {
      table = route.params.tableNum;
    }
    setInit(false);
  }

  const [tableNum, setTableNum] = useState(table);
  const [randNum, setRandNum] = useState(randomNum);
  const answer = tableNum * randNum;
  return (
    <View>
      <View style={styles.TableNumContainer}>
        <Text style={styles.TableNumStyles}>
          {tableNum} x {randNum} = ?
        </Text>
      </View>
      <View style={styles.AnsNumContainer}>
        <TextInput
          style={styles.AnsInputStyles}
          placeholder="Your Answer"
          keyboardType="numeric"
          value={userAns}
          onChangeText={input => {
            input = input.trim();
            setUserAns(input);
          }}
        />
      </View>

      <Pressable
        style={styles.AnsSubmitBtn}
        onPress={() => {
          if (userAns == '') {
            return;
          }
          if (IsAnsValid(userAns)) {
            if (userAns == answer) {
              setShowAns(false);
              setUserAns('');
              setRandNum(GenerateRandNum());
              if (is_mixed) {
                setTableNum(GenerateRandTable());
              }
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
  TableHeadingContainer: {
    padding: 10,
    margin: 5,
  },
  TableHeadingText: {
    fontSize: 25,
    color: 'black',
  },
  TableNumContainer: {
    margin: 5,
    padding: 15,
    alignItems: 'center',
  },
  TableNumStyles: {
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
