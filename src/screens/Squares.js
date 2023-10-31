import {View, Text, Pressable, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {Modal, Portal, Checkbox, Switch} from 'react-native-paper';
import CheckboxList from 'rn-checkbox-list';

//Upto 30 and some imp like 37 etc
//mixed and option to select upto 50
//Same for cubes
export default function Squares() {
  const [init, setInit] = useState(true);
  const [number, setNumber] = useState(2);
  const [mode, setMode] = useState('');
  const [level, setLevel] = useState(1);
  const [shuffle, setShuffle] = useState(false);
  const [numbersList, setNumbersList] = useState([
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50,
  ]);
  const [userAns, setUserAns] = useState('');
  const [showAns, setShowAns] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [ansWrong, setAnsWrong] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setItems] = useState([
    {id: 1, name: 'Green Book'},
    {id: 2, name: 'Bohemian Rhapsody'},
  ]);
  const [visible, setVisible] = useState(false);
  const [isAllTrue, setIsAllTrue] = useState(true);

  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 50,
          padding: 50,
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
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
          </Picker>
        </View>
      </View>
      <View style={styles.select_container}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderRadius: 4,
                transform: [{scaleX: 1.6}, {scaleY: 1.6}],
              }}>
              <Checkbox
                status={isAllTrue ? 'checked' : 'unchecked'}
                color="#457b9d"
                onPress={() => {
                  if (isAllTrue) {
                    setVisible(true);
                  }
                  setIsAllTrue(!isAllTrue);
                }}
              />
            </View>
            <Text style={{fontSize: 25}}>All [2 - 100]</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
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
              color="#457b9d"
              style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
              onValueChange={() => {
                setShuffle(!shuffle);
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.add_container}>
        <Text style={styles.NumStyles}>{number} = ?</Text>
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

              // const reallocate = AllocateNumbers();
              // console.log('New: ' + reallocate);
              // setNumbersList(reallocate[0]);
              // setAnswer(reallocate[1]);
              // setAnsWrong(false);
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

      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => {
            setVisible(false);
          }}
          dismissable={true}
          dismissableBackButton={false}
          contentContainerStyle={containerStyle}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
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
