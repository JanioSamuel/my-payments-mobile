import React, { useState } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, Image } from 'react-native';
import background from '../../assets/background.png';

export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  async function handleSubmit() {
    navigation.navigate('List', {
      login: login,
      password: password,
      id: id
    })
  }

  return (
    <KeyboardAvoidingView enabled={Platform.OS == 'ios'} behavior="padding" keyboardVerticalOffset={150} style={styles.container}>
      <Image source={background} />
      <View style={styles.form}>
        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="Your CPF"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={login}
          onChangeText={setLogin}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Your password"
          secureTextEntry={true}
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Workforce's ID"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={id}
          onChangeText={setId}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Find payments</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 8
  },
  form: {
    paddingHorizontal: 30,
    marginTop: 30,
    alignSelf: 'stretch'
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    height: 42,
    padding: 5,
    borderRadius: 3,
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
