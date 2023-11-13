import {
  StyleSheet,
  Pressable,
  Alert,
  ToastAndroid,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import CheckboxList from 'rn-checkbox-list';
import AnswerBox from '../components/AnswerBox';
import Keyboard from '../components/Keyboard';
import GenerateRandNum, {
  GenerateRandTable,
} from '../components/GenerateRandNum';
import IsAnsValid from '../components/IsAnsValid';
import {Button} from 'react-native-paper';

export default function PracticeTables({navigation, route}) {
  const [init, setInit] = useState(true);
  const [userAns, setUserAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [ansWrong, setAnsWrong] = useState(false);
  const [selectedTables, setSelectedTables] = useState([2, 3]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    {id: 2, name: 2},
    {id: 3, name: 3},
    {id: 4, name: 4},
    {id: 5, name: 5},
    {id: 6, name: 6},
    {id: 7, name: 7},
    {id: 8, name: 8},
    {id: 9, name: 9},
    {id: 10, name: 10},
    {id: 11, name: 11},
    {id: 12, name: 12},
    {id: 13, name: 13},
    {id: 14, name: 14},
    {id: 15, name: 15},
    {id: 16, name: 16},
    {id: 17, name: 17},
    {id: 18, name: 18},
    {id: 19, name: 19},
    {id: 20, name: 20},
    {id: 21, name: 21},
    {id: 22, name: 22},
    {id: 23, name: 23},
    {id: 24, name: 24},
    {id: 25, name: 25},
    {id: 26, name: 26},
    {id: 27, name: 27},
    {id: 28, name: 28},
    {id: 29, name: 29},
    {id: 30, name: 30},
    {id: 31, name: 31},
    {id: 32, name: 32},
    {id: 33, name: 33},
    {id: 34, name: 34},
    {id: 35, name: 35},
    {id: 36, name: 36},
    {id: 37, name: 37},
    {id: 38, name: 38},
    {id: 39, name: 39},
    {id: 40, name: 40},
    {id: 41, name: 41},
    {id: 42, name: 42},
    {id: 43, name: 43},
    {id: 44, name: 44},
    {id: 45, name: 45},
    {id: 46, name: 46},
    {id: 47, name: 47},
    {id: 48, name: 48},
    {id: 49, name: 49},
    {id: 50, name: 50},
  ]);
  const [selectedData, setSelectedData] = useState([
    {id: 2, name: '2'},
    {id: 3, name: '3'},
  ]); //Store and get this value from local DB

  let table = null;
  let randomNum = null;

  if (init == true) {
    randomNum = GenerateRandNum();
    console.log('selected Tables:');
    console.log(selectedTables);
    table = GenerateRandTable(selectedTables);
    setInit(false);
  }
  const [tableNum, setTableNum] = useState(table);
  const [randNum, setRandNum] = useState(randomNum);
  const answer = tableNum * randNum;
  console.log('Table: ' + tableNum + ' randNum: ' + randNum);

  return (
    <View style={{flex: 1}}>
      <View style={styles.select_container}>
        <Button
          mode="contained"
          icon="numeric-1-box-multiple"
          style={{borderRadius: 5, padding: 3}}
          buttonColor="#118ab2"
          uppercase={true}
          onPress={() => {
            setVisible(true);
          }}>
          Choose Tables
        </Button>
      </View>
      <View style={styles.TableNumContainer}>
        <Text style={styles.TableNumStyles}>
          {tableNum} x {randNum} = ?
        </Text>
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
              setShowAns(false);
              setUserAns('');
              setRandNum(GenerateRandNum());
              setTableNum(GenerateRandTable(selectedTables));
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
              headerName="All [2 - 100]"
              theme="#118ab2"
              listItems={data}
              selectedListItems={selectedData} //Update this array with function
              onChange={({ids, items}) => {
                setSelectedData(items);
                setSelectedTables(ids);
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
                console.log('selected Tables: ' + selectedTables);
                setTableNum(GenerateRandTable(selectedTables));
                setVisible(false);
              }}>
              CLOSE
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
