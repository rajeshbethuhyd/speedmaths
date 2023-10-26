import {View, Text} from 'react-native';
import React from 'react';

export default function IsAnsValid(userAns) {
  const specialChars = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
  return specialChars.test(userAns) ? false : true;
}
