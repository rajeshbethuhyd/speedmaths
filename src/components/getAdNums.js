import {getRandomNumber} from './GenerateRandNum';

export function getAdNums(min, max, n) {
  adNumList = [];
  for (let index = 0; index < n; index++) {
    adNumList[index] = getRandomNumber(min, max);
  }
  return adNumList;
}
