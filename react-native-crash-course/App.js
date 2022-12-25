import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = () => {
    if (!enteredGoal.trim()) return;

    setGoalsList((prev) => [
      ...prev,
      { text: enteredGoal, key: Math.random().toString() },
    ]);

    setEnteredGoal('');
  };

  const deleteGoalHandler = (id) => {
    setGoalsList((prev) => prev.filter((goal) => goal.key !== id));
  };

  return (
    <View style={styles.app}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder='your new year goal'
          onChangeText={(text) => setEnteredGoal(text)}
          value={enteredGoal}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsList}>
        <FlatList
          data={goalsList}
          renderItem={(goalData) => (
            <View style={styles.goal}>
              <Pressable
                onPress={() => deleteGoalHandler(goalData.item.key)}
                style={({ pressed }) => pressed && styles.pressed}
              >
                <Text style={styles.goalText}>{goalData.item.text}</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, paddingTop: 80, paddingHorizontal: 16 },
  inputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    padding: 10,
    marginRight: 8,
    width: '70%',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  goalsList: {
    flex: 5,
  },
  goal: {
    marginBottom: 15,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    overflow: 'hidden',
  },
  goalText: {
    padding: 6,
    color: 'white',
    fontSize: 20,
  },
  pressed: {
    backgroundColor: 'red',
    opacity: 0.5,
  },
});
