import { View, Text, Button, StyleSheet } from 'react-native';

import { expensesContext } from '../store/expensesCtx';
import { useContext } from 'react';

export default function DeleteExpense({ route, navigation }) {
  const expenseItem = route?.params?.item;

  const expenseCtx = useContext(expensesContext);
  const deleteExpense = expenseCtx.deleteExpense;

  const deleteExpenseHandler = () => {
    deleteExpense(expenseItem.id);

    navigation.navigate('expensesList');
  };

  return (
    <View>
      <Text style={styles.text}>
        Delete <Text style={styles.title}>{expenseItem.item} </Text>?
      </Text>
      <Button title='Confirm' onPress={deleteExpenseHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 18,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: 'red',
  },
});
