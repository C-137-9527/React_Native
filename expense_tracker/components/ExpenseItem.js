import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { expensesContext } from '../store/expensesCtx';
import { useContext } from 'react';

export default function ExpenseItem({ expenseItem }) {
  const navigation = useNavigation();

  const toDeleteExpense = () => {
    navigation.navigate('deleteExpense', { item: expenseItem });
  };

  const expenseCtx = useContext(expensesContext);

  const itemName = expenseItem.item;
  const date = expenseItem.date.toLocaleDateString();
  const price = `$${expenseItem.price}`;

  return (
    <Pressable
      onPress={toDeleteExpense}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{itemName}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 5,
    backgroundColor: '#463AC4',
    borderRadius: 8,
  },
  itemContainer: {
    flex: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E3D6FB',
  },
  date: { marginTop: 3, fontSize: 16, color: '#E3D6FB' },
  price: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '#E3D6FB',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#32268A',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: '0.5',
  },
});
