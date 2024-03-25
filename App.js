import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gato from './gato';
import cliques from './cliques';

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello word, how are you now ?</Text>
      <Gato  idade={1}/>
      <Gato  idade={56}/>
      <Gato idade={1000}/>
      <StatusBar style="auto"/>
    </View>
  );
}

export default cliques;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
