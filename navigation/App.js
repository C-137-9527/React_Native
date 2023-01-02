import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './screen/Categories';
import MealsOverview from './screen/MealsOverview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: 'whitesmoke' },
          }}
        >
          <Stack.Screen name='Meals Category' component={Categories} />
          <Stack.Screen
            name='Meals Overview'
            component={MealsOverview}
            options={({ route }) => {
              return {
                title: route.params.id,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
