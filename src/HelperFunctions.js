import {GetMinMaxSub, getRandomNumber} from './components/GenerateRandNum';
export function GetDecimals(level) {
  console.log('Level: ' + level);
  const presetDecimals = [
    0.5, 0.25, 0.75, 0.2, 0.125, 0.0625, 0.05, 0.04, 0.025, 0.02,
  ];
  const denominators = [2, 4, 4, 5, 8, 16, 20, 25, 40, 50];
  const excludedNums = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  let numbersList = [];
  if (level == 1) {
    let denom = getRandomNumber(1, 10);
    numbersList[1] = presetDecimals[denom - 1];
    numbersList[0] = denominators[denom - 1] * getRandomNumber(11, 99);
    numbersList[2] = numbersList[0] * numbersList[1];
  } else if (level == 2) {
    numbersList[0] = getRandomNumber(10, 99);
    while (excludedNums.includes(numbersList[0])) {
      numbersList[0] = getRandomNumber(10, 99);
    }
    numbersList[1] = getRandomNumber(10, 99);
    while (excludedNums.includes(numbersList[1])) {
      numbersList[1] = getRandomNumber(10, 99);
    }
    while (numbersList[0] == numbersList[1]) {
      numbersList[1] = getRandomNumber(10, 99);
    }
    numbersList[2] = numbersList[0] * numbersList[1];
    numbersList[1] = numbersList[1] / 10;
    numbersList[2] = numbersList[2] / 10;
  } else if (level == 3) {
    numbersList[0] = getRandomNumber(10, 99);
    while (excludedNums.includes(numbersList[0])) {
      numbersList[0] = getRandomNumber(10, 99);
    }
    numbersList[1] = getRandomNumber(10, 99);
    while (excludedNums.includes(numbersList[1])) {
      numbersList[1] = getRandomNumber(10, 99);
    }
    while (numbersList[0] == numbersList[1]) {
      numbersList[1] = getRandomNumber(10, 99);
    }
    numbersList[2] = numbersList[0] * numbersList[1];
    numbersList[0] = numbersList[0] / 10;
    numbersList[1] = numbersList[1] / 10;
    numbersList[2] = numbersList[2] / 100;
  }
  return numbersList;
}

const fractionsEasy = [
  '1 / 2',
  '1 / 3',
  '2 / 3',
  '1 / 4',
  '3 / 4',
  '1 / 5',
  '2 / 5',
  '3 / 5',
  '4 / 5',
  '1 / 6',
  '1 / 7',
  '1 / 8',
  '1 / 9',
  '1 / 11',
  '1 / 12',
  '1 / 16',
];
const percentagesEasy = [
  50, 33.33, 66.66, 25, 75, 20, 40, 60, 80, 16.66, 14.28, 12.5, 11.11, 9.09,
  8.33, 6.25,
];
var tempFractions = fractionsEasy.slice();
var tempPercentages = percentagesEasy.slice();
let lastRandomFraction = null;
export function FractionPercentageValuesEasy() {
  let newBeginnning = false;

  if (tempFractions.length == 0) {
    newBeginnning = true;
    tempFractions = fractionsEasy.slice();
    tempPercentages = percentagesEasy.slice();
  }
  let randomIndex = getRandomNumber(0, tempFractions.length - 1);
  let randomFraction = tempFractions[randomIndex];
  while (newBeginnning == true && lastRandomFraction == randomFraction) {
    randomIndex = getRandomNumber(0, tempFractions.length - 1);
    randomFraction = tempFractions[randomIndex];
  }
  const fractionarray = randomFraction.split(' / ');
  const percentage = tempPercentages[randomIndex];
  tempFractions.splice(randomIndex, 1);
  tempPercentages.splice(randomIndex, 1);
  if (tempFractions.length == 0) {
    lastRandomFraction = randomFraction;
  }

  return [fractionarray, percentage];
}
const fractionsMore = [
  '5 / 6',
  '2 / 7',
  '3 / 7', //Add special notes about this
  '4 / 7',
  '5 / 7',
  '6 / 7',
  '3 / 8',
  '5 / 8',
  '7 / 8',
  '2 / 9',
  '4 / 9',
  '5 / 9',
  '7 / 9',
  '8 / 9',
  '2 / 11',
  '3 / 11',
  '4 / 11',
  '5 / 11',
  '6 / 11',
  '7 / 11',
  '8 / 11',
  '9 / 11',
  '10 / 11',
  '5 / 12',
  '7 / 12',
  '11 / 12',
];
const percentagesMore = [
  83.33, 28.56, 42.84, 57.12, 71.4, 85.68, 37.5, 62.5, 87.5, 22.22, 44.44,
  55.55, 77.77, 88.88, 18.18, 27.27, 36.36, 45.45, 54.54, 63.63, 72.72, 81.81,
  90.9, 41.66, 58.33, 91.66,
];
var tempFractions2 = fractionsMore.slice();
var tempPercentages2 = percentagesMore.slice();
let lastRandomFraction2 = null;
export function FractionPercentageValuesMore() {
  let newBeginnning = false;

  if (tempFractions2.length == 0) {
    newBeginnning = true;
    tempFractions2 = fractionsMore.slice();
    tempPercentages2 = percentagesMore.slice();
  }
  let randomIndex = getRandomNumber(0, tempFractions2.length - 1);
  let randomFraction = tempFractions2[randomIndex];
  while (newBeginnning == true && lastRandomFraction2 == randomFraction) {
    randomIndex = getRandomNumber(0, tempFractions2.length - 1);
    randomFraction = tempFractions2[randomIndex];
  }
  const fractionarray = randomFraction.split(' / ');
  const percentage = tempPercentages2[randomIndex];
  tempFractions2.splice(randomIndex, 1);
  tempPercentages2.splice(randomIndex, 1);
  if (tempFractions2.length == 0) {
    lastRandomFraction2 = randomFraction;
  }

  return [fractionarray, percentage];
}

export const TripletsCollection1 = [
  [3, 4, 5],
  [5, 12, 13],
  [8, 15, 17],
  [7, 24, 25],
  [20, 21, 29],
  [12, 35, 37],
  [9, 40, 41],
  [28, 45, 53],
  [11, 60, 61],
  [16, 63, 65],
  [13, 84, 85],
];
export const TripletsCollection2 = [
  [33, 56, 65],
  [48, 55, 73],
  [36, 77, 85],
  [39, 80, 89],
  [65, 72, 97],
  [20, 99, 101],
  [60, 91, 109],
  [15, 112, 113],
  [44, 117, 125],
  [88, 105, 137],
  [17, 144, 145],
  [24, 143, 145],
  [51, 140, 149],
  [85, 132, 157],
  [119, 120, 169],
  [52, 165, 173],
  [19, 180, 181],
  [57, 176, 185],
  [104, 153, 185],
  [95, 168, 193],
  [28, 195, 197],
  [84, 187, 205],
  [133, 156, 205],
  [21, 220, 221],
  [140, 171, 221],
  [60, 221, 229],
  [105, 208, 233],
  [120, 209, 241],
  [32, 255, 257],
  [23, 264, 265],
  [96, 247, 265],
  [69, 260, 269],
  [115, 252, 277],
];
var serial_order1 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
];
let lastRandSerialIndex1 = null;
var tempserial_order1 = serial_order1.slice();
export function GetRandomTriplets1() {
  let newBeginnning = false;
  if (tempserial_order1.length == 0) {
    newBeginnning = true;
    tempserial_order1 = serial_order1.slice();
  }
  let randomIndex = getRandomNumber(0, tempserial_order1.length - 1);
  let randomNumber = tempserial_order1[randomIndex];
  while (newBeginnning == true && lastRandSerialIndex1 == randomNumber) {
    randomIndex = getRandomNumber(0, tempserial_order1.length - 1);
    randomNumber = tempserial_order1[randomIndex];
  }
  tempserial_order1.splice(randomIndex, 1);

  if (tempserial_order1.length == 0) {
    lastRandSerialIndex1 = randomNumber;
  }
  return getTriplet(randomNumber, 1);
}

function getTriplet(seriesNum, level) {
  let subIndex = seriesNum % 3;
  if (subIndex == 0) {
    subIndex = 2;
  } else if (subIndex == 1) {
    subIndex = 0;
  } else if (subIndex == 2) {
    subIndex = 1;
  }
  let mainIndex = Math.trunc(seriesNum / 3);

  if (level == 1) {
    let Triplet = TripletsCollection1[mainIndex];
    let Ans = TripletsCollection1[mainIndex][subIndex];
    return [Triplet, Ans];
  } else if (level == 2) {
    let Triplet = TripletsCollection2[mainIndex];
    let Ans = TripletsCollection2[mainIndex][subIndex];
    return [Triplet, Ans];
  }
}

var serial_order2 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98,
];
let lastRandSerialIndex2 = null;
var tempserial_order2 = serial_order2.slice();
export function GetRandomTriplets2() {
  let newBeginnning = false;
  if (tempserial_order2.length == 0) {
    newBeginnning = true;
    tempserial_order2 = serial_order2.slice();
  }
  let randomIndex = getRandomNumber(0, tempserial_order2.length - 1);
  let randomNumber = tempserial_order2[randomIndex];
  while (newBeginnning == true && lastRandSerialIndex2 == randomNumber) {
    randomIndex = getRandomNumber(0, tempserial_order2.length - 1);
    randomNumber = tempserial_order2[randomIndex];
  }
  tempserial_order2.splice(randomIndex, 1);

  if (tempserial_order2.length == 0) {
    lastRandSerialIndex2 = randomNumber;
  }
  return getTriplet(randomNumber, 2);
}
