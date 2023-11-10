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
