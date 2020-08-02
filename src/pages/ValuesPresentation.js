import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ValuesPresentation({ route, navigation }) {
  const { month, grossValue, netValue, paymentStatus, paymentDate } = route.params;
  return (
    <View style={styles.box}>
      <StatusBar backgroundColor='dark' />
      <Text style={styles.netValueText}>NET VALUE</Text>
      <Text style={styles.netValue}>{netValue}</Text>
      <View style={styles.container}>
        <Text style={styles.grossValueText}>GROSS VALUE</Text>
        <Text style={styles.grossValue}>{grossValue}</Text> 
      </View>
      <View style={styles.containerStatus}>
        <Text style={styles.paymentStatusText}>STATUS</Text>
        <Text style={styles.paymentStatus}>{paymentStatus}</Text> 
      </View>
      <View style={styles.containerDate}>
        <Text style={styles.paymentDateText}>PAYMENT DATE</Text>
        <Text style={styles.paymentDate}>{paymentDate}</Text> 
      </View>
      <View style={styles.containerMonth}>
        <Text style={styles.monthText}>MONTH</Text>
        <Text style={styles.month}>{month}</Text> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 0,
    backgroundColor: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 70,
    backgroundColor: '#ff4d4d',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 0,
    borderWidth: 0.3
  },
  netValueText: {
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 83,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#80bfff',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 14,
  },
  netValue: {
    marginTop: -20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -60,
    fontSize: 40,
    padding: 0,
    zIndex: 1,
    color: 'green',
  },
  grossValueText: {
    marginTop: -220,
    fontSize: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  },
  grossValue: {
    color: '#fff',
    marginTop: 10,
    fontSize: 24,
    marginLeft: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerStatus: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -220,
    backgroundColor: '#00e6ac',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 0.3
  },
  paymentStatusText: {
    marginTop: -220,
    fontSize: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  },
  paymentStatus: {
    color: '#fff',
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerDate: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -220,
    backgroundColor: '#85e0e0',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: 'black',
    borderStyle: "solid",
    borderWidth: 0.3
  },
  paymentDateText: {
    marginTop: -220,
    fontSize: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  },
  paymentDate: {
    color: '#fff',
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerMonth: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -220,
    backgroundColor: '#b366ff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: 'black',
    borderStyle: "solid",
    borderWidth: 0.3
  },
  monthText: {
    marginTop: -220,
    fontSize: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  },
  month: {
    color: '#fff',
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});