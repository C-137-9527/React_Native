import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpensesProvider from './store/expensesCtx';
import ExpensesList from './screen/ExpensesList';
import AddExpense from './screen/AddExpense';
import DeleteExpense from './screen/DeleteExpense';

// TODO: delete screen, ripple effect

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style='auto' />

      <ExpensesProvider>
        {/* navigation */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerTintColor: '#463AC4' }}>
            {/* expenses list */}
            <Stack.Screen
              name='expensesList'
              component={ExpensesList}
              options={{
                title: 'List of Your Expenses',
              }}
            ></Stack.Screen>

            {/* add expense */}
            <Stack.Screen
              name='addExpense'
              component={AddExpense}
              options={{ title: 'Add an Expense' }}
            ></Stack.Screen>

            {/* delete expense */}
            <Stack.Screen
              name='deleteExpense'
              component={DeleteExpense}
              options={{ title: 'Delete an Expense' }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    paddingTop: 60,
    flex: 1,
  },
});
