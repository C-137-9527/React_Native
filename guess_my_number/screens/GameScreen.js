import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';

const randomNum = (min, max, exclude) => {
  let rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) return randomNum(min, max, exclude);

  return rndNum;
};

let min = 1;
let max = 100;

export default function GameScreen({ userNumber, onGameOverHandler }) {
  const initialGuess = randomNum(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) onGameOverHandler(true);
  }, [currentGuess, userNumber, onGameOverHandler]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      return Alert.alert('Don"t lie', 'You know this is wrong', [
        {
          text: 'sorry',
          style: 'cancel',
        },
      ]);
    }

    if (direction === 'lower') {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    const newGuess = randomNum(min, max, currentGuess);

    setCurrentGuess(newGuess);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>High or Low?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            <Ionicons name='md-remove' color='white' size={24} />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name='md-add' color='white' size={24} />
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    paddingTop: 36,
  },
});
