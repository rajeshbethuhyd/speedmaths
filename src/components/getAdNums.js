import {getRandomNumber} from './GenerateRandNum';
import {GetMinMax} from './GetMinMax';

export function getAdNums(howMany, level) {
  const list = GetMinMax(level);
  adNumList = [];
  adNumList1 = [];
  adNumList2 = [];
  if (list.all_same_digits == true) {
    for (let index = 0; index < howMany; index++) {
      adNumList[index] = getRandomNumber(list.min, list.max);
    }
  } else {
    for (let index = 0; index < howMany; index++) {
      adNumList1[index] = getRandomNumber(list.min, list.max);
    }
    for (let index = 0; index < howMany; index++) {
      adNumList2[index] = getRandomNumber(list.min2, list.max2);
    }
    adNumList = adNumList1.concat(adNumList2);

    let limit = adNumList.length;
    for (var i = limit - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = adNumList[i];
      adNumList[i] = adNumList[j];
      adNumList[j] = temp;
    }
  }

  return adNumList;
}
