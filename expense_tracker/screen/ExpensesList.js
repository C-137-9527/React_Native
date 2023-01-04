import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Button,
} from 'react-native';

import TotalAmount from '../components/TotalAmount';
import ExpenseItem from '../components/ExpenseItem';
import { useState } from 'react';
import { useContext } from 'react';
import { expensesContext } from '../store/expensesCtx';

import { Ionicons } from '@expo/vector-icons';

export default function ExpensesList({ navigation }) {
  navigation.setOptions({
    headerRight: () => (
      <Button title='Add' onPress={() => navigation.navigate('addExpense')} />
    ),
  });

  const expensesCtx = useContext(expensesContext);
  const allExpenses = expensesCtx.allExpenses;

  const [recent, setRecent] = useState(true);

  // filter recent expenses
  const recentExpenses = allExpenses.filter((expenseItem) => {
    const today = new Date().getTime();
    const expenseDate = expenseItem.date.getTime();

    return today - expenseDate <= 86400000 * 7;
  });

  // render expenses conditionally
  const expenses = recent ? recentExpenses : allExpenses;

  const renderExpenses = (expenseData) => (
    <ExpenseItem expenseItem={expenseData.item} />
  );

  // sorting handlers
  const recentExpensesHandler = () => {
    setRecent(true);
  };

  const allExpensesHandler = () => {
    setRecent('');
  };

  return (
    <View style={styles.container}>
      {/* total amount */}
      <TotalAmount expenses={expenses} recent={recent} />

      {/* expense list */}
      <FlatList
        data={expenses}
        keyExtractor={(expenseItem) => expenseItem.id}
        renderItem={renderExpenses}
      />

      {/* footer */}
      <View style={styles.footer}>
        {/* recent */}
        <Pressable onPress={recentExpensesHandler}>
          <View style={styles.buttonContainer}>
            <Ionicons name='hourglass' size={26} color='#E3D6FB' />
            <Text style={styles.footerText}>recent</Text>
          </View>
        </Pressable>

        {/* all */}
        <Pressable onPress={allExpensesHandler}>
          <View style={styles.buttonContainer}>
            <Ionicons name='calendar' size={26} color='#E3D6FB' />
            <Text style={styles.footerText}>all</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#463AC4',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  footerText: {
    marginTop: 5,
    fontSize: 16,
    color: '#E3D6FB',
  },
});
