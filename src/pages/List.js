import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import PaymentList from '../components/PaymentList';
import api from '../services/api';

export default function List({ route, navigation }) {
  const [payment, setPayments] = useState(null);

  const render = ({ item }) => (
    <PaymentList item={item} navigation={navigation}/>
  );

  useEffect(() => {
    async function loadPayments() {
      const response = await api.post('/payments', { login, password, id});
      setPayments(response.data);
    }
    loadPayments();
  }, [])
  return (
    <SafeAreaView >
      <FlatList 
        data={payment}
        renderItem={render}
        keyExtractor={(p) => p.month}
      />
    </SafeAreaView>
  )
}