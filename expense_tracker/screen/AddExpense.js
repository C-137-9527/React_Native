import {
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
} from 'react-native';

import { expensesContext } from '../store/expensesCtx';
import { useContext, useState } from 'react';

export default function AddExpense({ navigation }) {
  const expensesCtx = useContext(expensesContext);
  const addExpense = expensesCtx.addExpense;

  const [item, setItem] = useState();
  const [price, setPrice] = useState();

  // add new expense
  const addExpenseHandler = () => {
    if (!item || !price) return;

    // create a new expense item
    const newExpenseItem = {
      id: Math.random(),
      item: item,
      date: new Date(),
      price: +price,
    };

    addExpense(newExpenseItem);
    navigation.navigate('expensesList');
  };

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior='position'>
        <TextInput
          placeholder='Expense'
          value={item}
          onChangeText={(text) => setItem(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Price'
          value={price}
          onChangeText={(text) => setPrice(text)}
          style={styles.input}
        />
      </KeyboardAvoidingView>
      <Button title='Add' onPress={addExpenseHandler} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  input: {
    padding: 12,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#E3D6FB',
    fontSize: 20,
  },
});
