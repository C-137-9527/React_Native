import Colors from '../constants/colors';

import { useState } from 'react';

import { StyleSheet, TextInput, View, Text, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

export default function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const resetHandler = () => {
    setEnteredNumber('');
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(enteredNumber) || chosenNumber < 0 || chosenNumber > 99)
      return Alert.alert('invalid number', 'must be a number between 1-99', [
        { text: 'ok', style: 'cancel', onPress: resetHandler },
      ]);

    onPickedNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          value={enteredNumber}
          onChangeText={(number) => setEnteredNumber(number)}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  inputContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  title: {
    color: Colors.accent500,
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: { flexDirection: 'row' },
});
