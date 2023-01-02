import { View, FlatList, Text, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

import { MEALS } from '../data/DUMMY_DATA.JS';

export default function MealsOverview({ route }) {
  const id = route.params.id;

  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  const renderMealHandler = (mealItem) => (
    <MealItem mealItem={mealItem.item} url={mealItem.item.imageUrl} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
