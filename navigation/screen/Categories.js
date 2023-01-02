import { CATEGORIES } from '../data/DUMMY_DATA.JS';
import CategoryGridTile from '../components/CategoryGridTile';

import { FlatList } from 'react-native';

export default function Categories({ navigation }) {
  const renderCategoryItem = (itemData) => {
    const onPressHandler = () =>
      navigation.navigate('Meals Overview', { id: itemData.item.id });

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
