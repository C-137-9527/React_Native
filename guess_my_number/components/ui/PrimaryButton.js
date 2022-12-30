import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.textContainer}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    margin: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  textContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    backgroundColor: 'red',
  },
});
