import { View, Text, StyleSheet } from 'react-native';

export default function TotalAmount({ recent, expenses }) {
  const totalAmount = expenses.reduce(
    (accumulator, expenseItem) => accumulator + expenseItem.price,
    0
  );

  const title = recent ? 'Last 7 Days' : 'Total';

  return (
    <View style={styles.container}>
      {/* title */}
      <Text style={styles.title}>{title}</Text>

      {/* amount */}
      <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#E3D6FB',
  },
  title: {
    fontSize: 16,
  },
  amount: {
    color: '#32268A',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
