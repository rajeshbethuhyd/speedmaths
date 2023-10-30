import {GetMinMaxRangebyDigits, getRandomNumber} from './GenerateRandNum';

export function getDivNums(level, dividendDigits, divisorDigits) {
  let dividendRange = GetMinMaxRangebyDigits(dividendDigits);
  let divisorRange = GetMinMaxRangebyDigits(divisorDigits);
  const divisor = getRandomNumber(divisorRange.min, divisorRange.max);
  if (level == 1 || level == 3 || level == 5 || level == 7) {
    const multiplierRange = GetMultiplierRange(divisor, dividendRange);
    const multiplier = getRandomNumber(multiplierRange[0], multiplierRange[1]);
    const dividend = divisor * multiplier;
    console.log('Answer is: ' + multiplier);
    return [dividend, divisor, multiplier];
  } else {
    let dividend = getRandomNumber(dividendRange.min, dividendRange.max);
    while (dividend % divisor == 0 || dividend == divisor) {
      dividend = getRandomNumber(dividendRange.min, dividendRange.max);
    }
    let answer = dividend / divisor;
    answer = answer.toFixed(3);
    console.log('Answer is: ' + answer);
    return [dividend, divisor, answer];
  }
}
function GetMultiplierRange(divisor, dividendRange) {
  let multi_range = [];
  let remainder = dividendRange.min % divisor;
  if (remainder == 0) {
    multi_range[0] = dividendRange.min / divisor;
  } else {
    multi_range[0] = Math.trunc(dividendRange.min / divisor) + 1;
  }
  let remainder2 = dividendRange.max % divisor;
  if (remainder2 == 0) {
    multi_range[1] = dividendRange.max / divisor;
  } else {
    multi_range[1] = Math.trunc(dividendRange.max / divisor);
  }
  return multi_range;
}
