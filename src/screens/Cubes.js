import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ToastAndroid,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Checkbox, Switch, ActivityIndicator} from 'react-native-paper';
import CheckboxList from 'rn-checkbox-list';
import Modal from 'react-native-modal';
import IsAnsValid from '../components/IsAnsValid';
import {getRandomNumber} from '../components/GenerateRandNum';
import Keyboard from '../components/Keyboard';
import AnswerBox from '../components/AnswerBox';

export default function Cubes() {
  const [init, setInit] = useState(true);
  const [level, setLevel] = useState(1);
  const [shuffle, setShuffle] = useState(false);
  const [numbersList, setNumbersList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [userAns, setUserAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [ansWrong, setAnsWrong] = useState(false);
  const [showCustomOptions, setShowCustomOptions] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(2);
  const [selectedNumbersIds, setSelectedNumbersIds] = useState([1]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    {id: 1, name: '2 - 10'},
    {id: 2, name: '11 - 20'},
    {id: 3, name: '21 - 30'},
  ]);
  const [selectedData, setSelectedData] = useState([]); //Store and get this value from local DB

  if (init === true) {
    //check if selectedNumbersIds already exists in DB
    SaveSelectedNumbers(selectedNumbersIds);
    setInit(false);
    setLoading(false);
  }

  function SaveSelectedNumbers(selectedIds) {
    let tempSelectedData = [];
    let tempNumbersList = [];
    for (let index = 0; index < 10; index++) {
      if (selectedIds.includes(index + 1)) {
        tempSelectedData.push(data[index]); //Use the item parameter of onChange
        let initVal = (index + 1) * 10 - 9;
        let finishVal = initVal + 9;
        for (let j = initVal; j <= finishVal; j++) {
          if (j == 1) {
            continue;
          }
          tempNumbersList.push(j);
        }
      }
    }
    let orginal_List = tempNumbersList.slice();
    setOriginalList(orginal_List);
    setSelectedData(tempSelectedData);
    setNumbersList(ShuffleNumbers(tempNumbersList, shuffle));
  }
  function ShuffleNumbers(givenList, isShuffleTrue) {
    if (isShuffleTrue) {
      let arrayLength = givenList.length;
      for (let k = arrayLength - 1; k > 0; k--) {
        let j = Math.floor(Math.random() * (k + 1));
        let temp = givenList[k];
        givenList[k] = givenList[j];
        givenList[j] = temp;
      }
    }
    let tempAns = givenList[0] * givenList[0] * givenList[0];
    setAnswer(tempAns);
    setCurrentNumber(givenList[0]);
    setCurrentIndex(0);
    return givenList;
  }
  function MovetoNextNumber() {
    console.log(
      'C_INDEX: ' +
        (currentIndex + 1) +
        '  |  C_VALUE: ' +
        numbersList[currentIndex + 1],
    );
    if (currentIndex == numbersList.length - 1) {
      if (shuffle) {
        setNumbersList(ShuffleNumbers(originalList.slice(), true));
      } else {
        setCurrentNumber(numbersList[0]);
        setCurrentIndex(0);
        let ans = numbersList[0] * numbersList[0] * numbersList[0];
        setAnswer(ans);
      }
    } else {
      setCurrentNumber(numbersList[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
      let ans =
        numbersList[currentIndex + 1] *
        numbersList[currentIndex + 1] *
        numbersList[currentIndex + 1];
      setAnswer(ans);
    }
  }
  function Generate3DNumber() {
    let num = getRandomNumber(31, 100);
    console.log('NUM: ' + num);
    setCurrentNumber(num);
    setAnswer(num * num * num);
    setShowAns(false);
  }
  return (
    <View style={{flex: 1}}>
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
              if (itemValue == 1) {
                setInit(true);
                setShowCustomOptions(true);
              } else if (itemValue == 2) {
                setShowCustomOptions(false);
                Generate3DNumber();
              }
              setLevel(itemValue);
              setShowAns(false);
            }}
            style={{height: 44}}
            itemStyle={{height: 44}}>
            <Picker.Item label="2 - 30 Most Important" value="1" />
            <Picker.Item label="31 - 100" value="2" />
          </Picker>
        </View>
      </View>
      {showCustomOptions && (
        <View style={styles.select_container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              mode="contained"
              icon="numeric-1-box-multiple"
              style={{borderRadius: 5, padding: 3}}
              buttonColor="#118ab2"
              uppercase={true}
              onPress={() => {
                setVisible(true);
              }}>
              Choose Numebrs
            </Button>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={{fontSize: 25, paddingRight: 20}}>Shuffle:</Text>
              <Switch
                value={shuffle}
                color="#118ab2"
                style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
                onValueChange={() => {
                  if (shuffle === true) {
                    setNumbersList(originalList); //Original order
                    setCurrentIndex(0);
                    setCurrentNumber(originalList[0]);
                    setAnswer(
                      originalList[0] * originalList[0] * originalList[0],
                    );
                  } else {
                    let origin_list = originalList.slice();
                    let shuffledNumbers = ShuffleNumbers(origin_list, true);
                    setNumbersList(shuffledNumbers);
                  }
                  setShuffle(!shuffle);
                }}
              />
            </View>
          </View>
        </View>
      )}

      <View style={styles.add_container}>
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
              if (level == 1) {
                MovetoNextNumber();
              } else if (level == 2) {
                Generate3DNumber();
              }
              setShowAns(false);
              setUserAns('');
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
      <Modal
        isVisible={visible}
        coverScreen={false}
        style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          maxHeight: '80%',
        }}>
        <View
          style={{
            // height: '100%',
            flex: 1,
          }}>
          <View style={styles.modalTopTitle}>
            <Text style={styles.modalTopTitleText}>Choose the Numbers</Text>
          </View>
          <View style={styles.modalBody}>
            <CheckboxList
              headerName="All [2 - 30]"
              theme="#118ab2"
              listItems={data}
              selectedListItems={selectedData} //Update this array with function
              onChange={({ids, items}) => {
                console.log('items: ');
                console.log(items);
                setSelectedNumbersIds(ids);
                ToastAndroid.show('Updated', ToastAndroid.SHORT);
              }}
              listItemStyle={{borderBottomColor: '#eee', borderBottomWidth: 1}}
            />
          </View>
          <View style={styles.modalBottom}>
            <Button
              style={{borderRadius: 5}}
              buttonColor="#118ab2"
              textColor="#ffffff"
              uppercase={true}
              onPress={() => {
                SaveSelectedNumbers(selectedNumbersIds);
                setVisible(false);
              }}>
              close
            </Button>
          </View>
        </View>
      </Modal>
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
  NumStyles: {
    fontSize: 40,
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
