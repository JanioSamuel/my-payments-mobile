import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function PaymentList({ item, navigation }) {
  const [monthName, setMonthName] = useState(null);
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    function getMonthName() {
      const monthNumber = item.month;

      setMonthName(month[monthNumber.substring(0, 2) - 1].concat(' ').concat(monthNumber.substring(3)));
    }
    getMonthName();
  }, [])

  function goToPresentation(item) {
    const itemValues = item;
    itemValues.month = monthName;
    navigation.navigate('Values', item);
  }
  return (
    <LinearGradient
      colors={['#ccccff', '#b3b3ff', '#9999ff', '#8080ff']}
      style={styles.list}>
      <TouchableOpacity onPress={() => goToPresentation(item)} >
        <Text style={styles.title}>{item.month}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  list: {
    margin: 5
  },
  box: {
    marginTop: 20,
    width: 320,
    height: 190,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20,
    borderRadius: 5,
    borderColor: '#ccccff',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
    padding: 0
  }
});