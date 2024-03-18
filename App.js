import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gato from './gato';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello word, how are you now ?</Text>
      <Gato/>
      <Gato/>
      <Gato/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
