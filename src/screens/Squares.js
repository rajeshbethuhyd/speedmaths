import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Checkbox, Switch, ActivityIndicator} from 'react-native-paper';
import CheckboxList from 'rn-checkbox-list';
import Modal from 'react-native-modal';
import IsAnsValid from '../components/IsAnsValid';

//Upto 30 and some imp like 37 etc
//mixed and option to select upto 50
//Same for cubes
export default function Squares() {
  const [init, setInit] = useState(true);
  const [number, setNumber] = useState(2);
  const [level, setLevel] = useState(1);
  const [shuffle, setShuffle] = useState(false);
  const [numbersList, setNumbersList] = useState([]);
  const [unshuffledNumbers, setUnshuffledNumbers] = useState([]);
  const [userAns, setUserAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [ansWrong, setAnsWrong] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNumbersIds, setSelectedNumbersIds] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setItems] = useState([
    {id: 1, name: '2 - 10'},
    {id: 2, name: '11 - 20'},
    {id: 3, name: '21 - 30'},
    {id: 4, name: '31 - 40'},
    {id: 5, name: '41 - 50'},
    {id: 6, name: '51 - 60'},
    {id: 7, name: '61 - 70'},
    {id: 8, name: '71 - 80'},
    {id: 9, name: '81 - 90'},
    {id: 10, name: '91 - 100'},
  ]);
  const [selectedData, setSelectedData] = useState([]); //Store and get this value from local DB

  if (init === true) {
    console.log('INIT LIST: ' + numbersList);
    //check if selectedNumbersIds already exists in DB
    SaveSelectedNumbers(selectedNumbersIds);
    setInit(false);
    setLoading(false);
    console.log('Loading Stopped ');
  }

  function SaveSelectedNumbers(selectedIds) {
    console.log('Process Started');
    let tempSelectedData = [];
    let tempNumbersList = [];
    for (let index = 0; index < 10; index++) {
      if (selectedIds.includes(index + 1)) {
        tempSelectedData.push(data[index]);
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
    setSelectedData(tempSelectedData);
    setUnshuffledNumbers(tempNumbersList);
    tempNumbersList = ShuffleNumbers(tempNumbersList);
    setNumbersList(tempNumbersList);
    console.log('NUMBERS ASSIGNED');
    let tempAns = tempNumbersList[currentIndex] * tempNumbersList[currentIndex];
    setAnswer(tempAns);
    console.log('Process ENDED');
  }
  function ShuffleNumbers(numberslist) {
    if (shuffle) {
      let arrayLength = numberslist.length;
      for (let k = arrayLength - 1; k > 0; k--) {
        // Generate random number
        let j = Math.floor(Math.random() * (k + 1));
        let temp = numberslist[k];
        numberslist[k] = numberslist[j];
        numberslist[j] = temp;
      }
    }
    return numberslist;
  }

  return (
    <View>
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
            }}
            style={{height: 44}}
            itemStyle={{height: 44}}>
            <Picker.Item label="Most Imp (Level 1)" value="1" />
            <Picker.Item label="3 Digit Numbers (Level 2)" value="2" />
          </Picker>
        </View>
      </View>
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
                  setNumbersList(unshuffledNumbers);
                } else {
                  let shuffledNumbers = ShuffleNumbers(numbersList);
                  console.log('shuffledNumbers: ' + shuffledNumbers);
                  setNumbersList(shuffledNumbers);
                }
                setCurrentIndex(0);
                setShuffle(!shuffle);
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.add_container}>
        <Text style={styles.NumStyles}>{numbersList[currentIndex]}</Text>
      </View>
      <View style={styles.AnsNumContainer}>
        <TextInput
          style={styles.AnsInputStyles}
          placeholder="Your Answer"
          keyboardType="numeric"
          textAlign={'center'}
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
              setCurrentIndex(currentIndex + 1);
              let ans =
                numbersList[currentIndex + 1] * numbersList[currentIndex + 1];
              setAnswer(ans);
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
        }}>
        <View
          style={{
            height: '100%',
          }}>
          <View style={styles.modalTopTitle}>
            <Text style={styles.modalTopTitleText}>Choose the Numbers</Text>
          </View>
          <View style={styles.modalBody}>
            <CheckboxList
              headerName="All [2 - 100]"
              theme="#118ab2"
              listItems={data}
              selectedListItems={selectedData} //Update this array with function
              onChange={({ids, items}) => {
                setSelectedNumbersIds(ids);
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
              SUBMIT
            </Button>
          </View>
        </View>
      </Modal>
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
    height: '15%',
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
    height: '70%',
    padding: '5%',
  },
  modalBottom: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
