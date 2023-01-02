import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

export default renderMealHandler = ({ mealItem, url }) => (
  <View>
    <Pressable>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{mealItem.title}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});
