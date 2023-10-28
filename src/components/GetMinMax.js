export function GetMinMax(level) {
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
