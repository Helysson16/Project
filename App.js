import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gato from './gato';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello word, how are you now ?</Text>
      <Gato nome="pedro" idade={1}/>
      <Gato nome="Fufy" idade={56}/>
      <Gato nome="Estelar" idade={1000}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
