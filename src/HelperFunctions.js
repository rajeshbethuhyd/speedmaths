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
export function FractionPercentageValuesEasy(type) {
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
  console.log('RANDOM NUM: ' + randomFraction);
  console.log('INDEX: ' + randomIndex);
  console.log('PERCE: ' + percentage);
  tempFractions.splice(randomIndex, 1);
  tempPercentages.splice(randomIndex, 1);
  if (tempFractions.length == 0) {
    lastRandomFraction = randomFraction;
  }

  return [fractionarray, percentage];
}
export function FractionPercentageValuesMore(level) {
  const fractionsMore = [
    5 / 6,
    2 / 7,
    3 / 7, //Think about Sevens
    4 / 7,
    5 / 7,
    6 / 7,
    3 / 8,
    5 / 8,
    7 / 8,
    2 / 9,
    4 / 9,
    5 / 9,
    7 / 9,
    8 / 9,
    2 / 11,
    3 / 11,
    4 / 11,
    5 / 11,
    6 / 11,
    7 / 11,
    8 / 11,
    9 / 11,
    10 / 11,
    5 / 12,
    7 / 12,
    11 / 12,
  ];
  const percentagesMore = [
    83.33, 28.57, 42.85, 57.14, 71.42, 85.71, 37.5, 62.5, 87.5, 22.22, 44.44,
    55.55, 77.77, 88.88, 18.18, 27.27, 36.36, 45.45, 54.54, 63.63, 72.72, 81.81,
    90.9, 41.66, 58.33, 91.66,
  ];
  if (type == 3) {
  } else if (type == 4) {
  }

  // const num = ;
  // const denom = ;
  // const ans = ;
}
