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
export function GetMinMaxAdd(level) {
  console.log('CAME HERE: level: ' + level);
  let list = {};
  if (level <= 2) {
    list = {
      min: 10,
      max: 99,
      all_same_digits: true,
    };
  } else if (level == 3) {
    list = {
      min: 10,
      max: 99,
      min2: 100,
      max2: 999,
      all_same_digits: false,
    };
  } else if (level == 4) {
    list = {
      min: 100,
      max: 999,
      all_same_digits: true,
    };
  } else if (level == 5) {
    list = {
      min: 100,
      max: 999,
      min2: 1000,
      max2: 9999,
      all_same_digits: false,
    };
  } else if (level == 6) {
    list = {
      min: 1000,
      max: 9999,
      all_same_digits: true,
    };
  } else if (level == 7) {
    list = {
      min: 1000,
      max: 9999,
      min2: 10000,
      max2: 99999,
      all_same_digits: false,
    };
  } else if (level == 8) {
    list = {
      min: 10000,
      max: 99999,
      all_same_digits: true,
    };
  }

  return list;
}

export function GetMinMaxSub(level) {
  let sub_list = {};
  if (level == 1) {
    sub_list = {
      min: 1, //change this to 2 and remove the while()
      max: 9,
      min2: 10,
      max2: 99,
      all_same_digits: false,
    };
  } else if (level == 2) {
    sub_list = {
      min: 10,
      max: 99,
      all_same_digits: true,
    };
  } else if (level == 3) {
    sub_list = {
      min: 10,
      max: 99,
      min2: 100,
      max2: 999,
      all_same_digits: false,
    };
  } else if (level == 4) {
    sub_list = {
      min: 100,
      max: 999,
      all_same_digits: true,
    };
  } else if (level == 5) {
    sub_list = {
      min: 100,
      max: 999,
      min2: 1000,
      max2: 9999,
      all_same_digits: false,
    };
  } else if (level == 6) {
    sub_list = {
      min: 1000,
      max: 9999,
      all_same_digits: true,
    };
  } else if (level == 7) {
    sub_list = {
      min: 1000,
      max: 9999,
      min2: 10000,
      max2: 99999,
      all_same_digits: false,
    };
  } else if (level == 8) {
    sub_list = {
      min: 10000,
      max: 99999,
      all_same_digits: true,
    };
  } else if (level == 9) {
    sub_list = {
      min: 10000,
      max: 99999,
      min2: 100000,
      max2: 999999,
      all_same_digits: false,
    };
  }
  return sub_list;
}

export function GetMinMaxRangebyDigits(digits) {
  let range = {};
  if (digits == 1) {
    range = {
      min: 2,
      max: 9,
    };
  } else if (digits == 2) {
    range = {
      min: 10,
      max: 99,
    };
  } else if (digits == 3) {
    range = {
      min: 100,
      max: 999,
    };
  } else if (digits == 4) {
    range = {
      min: 1000,
      max: 9999,
    };
  } else if (digits == 5) {
    range = {
      min: 10000,
      max: 99999,
    };
  } else if (digits == 6) {
    range = {
      min: 100000,
      max: 999999,
    };
  } else if (digits == 7) {
    range = {
      min: 1000000,
      max: 9999999,
    };
  } else if (digits == 8) {
    range = {
      min: 10000000,
      max: 99999999,
    };
  }
  return range;
}
