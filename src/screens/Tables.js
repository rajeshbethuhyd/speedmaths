import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import TableItem, {TableItemTest} from '../components/TableItem';

export default function Tables({navigation}) {
  return (
    <ScrollView>
      <TableItemTest is_mixed={true} navigation={navigation} />
      <TableItem is_mixed={true} navigation={navigation} />
      <TableItem tableNum={2} navigation={navigation} />
      <TableItem tableNum={3} navigation={navigation} />
      <TableItem tableNum={4} navigation={navigation} />
      <TableItem tableNum={5} navigation={navigation} />
      <TableItem tableNum={6} navigation={navigation} />
      <TableItem tableNum={7} navigation={navigation} />
      <TableItem tableNum={8} navigation={navigation} />
      <TableItem tableNum={9} navigation={navigation} />
      <TableItem tableNum={10} navigation={navigation} />
      <TableItem tableNum={11} navigation={navigation} />
      <TableItem tableNum={12} navigation={navigation} />
      <TableItem tableNum={13} navigation={navigation} />
      <TableItem tableNum={14} navigation={navigation} />
      <TableItem tableNum={15} navigation={navigation} />
      <TableItem tableNum={16} navigation={navigation} />
      <TableItem tableNum={17} navigation={navigation} />
      <TableItem tableNum={18} navigation={navigation} />
      <TableItem tableNum={19} navigation={navigation} />
      <TableItem tableNum={20} navigation={navigation} />
      <TableItem tableNum={21} navigation={navigation} />
      <TableItem tableNum={22} navigation={navigation} />
      <TableItem tableNum={23} navigation={navigation} />
      <TableItem tableNum={24} navigation={navigation} />
      <TableItem tableNum={25} navigation={navigation} />
    </ScrollView>
  );
}
