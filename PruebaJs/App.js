import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const  si = 'Open up App.js to start working on your app!';
  const [count, setCount] = useState(0);
  const [text, setText] = useState(si);

  return (
    <View style={ styles.container }>
      <Text style={ styles.text } id='MainText'>{text}</Text>
      <View style={ styles.container2 }>
        <Button id='as' style={ styles.button } title='Aumentar' onPress={ () => setCount(count + 1) }/>
        <Button title='Disminuir' onPress={ () => setCount(count-1) }/>
      </View>
      <Button style={ styles.button } title='Cambiar Texto' onPress={ () => setText('Welcome!') }></Button>
      <Text style={ styles.text }>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    padding: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    borderCurve: 'circular',
    backgroundColor : '#123',
    borderRadius: 5,
  },
  button: {
    borderRadius: 90,
  },
});
