import {GetMinMaxSub, getRandomNumber} from './GenerateRandNum';

export function getSubNums(level) {
  const sub_list = GetMinMaxSub(level);
  let subNumList = [];
  if (sub_list.all_same_digits == true) {
    subNumList[0] = getRandomNumber(sub_list.min, sub_list.max);
    subNumList[1] = getRandomNumber(sub_list.min, sub_list.max);
    while (subNumList[0] == subNumList[1]) {
      subNumList[1] = getRandomNumber(sub_list.min, sub_list.max);
    }
  } else {
    subNumList[0] = getRandomNumber(sub_list.min, sub_list.max);
    subNumList[1] = getRandomNumber(sub_list.min2, sub_list.max2);
    while (subNumList[0] == 1) {
      //Remove this while() after changing minmax function
      subNumList[0] = getRandomNumber(sub_list.min, sub_list.max);
    }
  }
  for (var i = 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = subNumList[i];
    subNumList[i] = subNumList[j];
    subNumList[j] = temp;
  }
  return subNumList;
}
