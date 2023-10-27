import {View, Text} from 'react-native';
import React from 'react';

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lastRandomNum = null;
export default function GenerateRandNum() {
  let newBeginnning = false;
  if (numbersArray.length == 0) {
    newBeginnning = true;
    numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  let randomNumber = numbersArray[randomIndex];
  while (newBeginnning == true && lastRandomNum == randomNumber) {
    randomIndex = getRandomNumber(0, numbersArray.length - 1);
    randomNumber = numbersArray[randomIndex];
  }
  numbersArray.splice(randomIndex, 1);
  if (numbersArray.length == 0) {
    lastRandomNum = randomNumber;
  }
  return randomNumber;
}
let tablesArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
]; // Now work on generating this Tables Array based on user's selection
//Store the table values in Async Storage in selection screen then fetch this array from there
let lastRandomTable = null;
export function GenerateRandTable() {
  let newBeginnning = false;
  if (tablesArray.length == 0) {
    newBeginnning = true;
    tablesArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ];
  }
  let randomIndex = getRandomNumber(0, tablesArray.length - 1);
  let randomNumber = tablesArray[randomIndex];
  while (newBeginnning == true && lastRandomTable == randomNumber) {
    randomIndex = getRandomNumber(0, tablesArray.length - 1);
    randomNumber = tablesArray[randomIndex];
  }
  tablesArray.splice(randomIndex, 1);
  if (tablesArray.length == 0) {
    lastRandomTable = randomNumber;
  }
  return randomNumber;
}

export function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}
