import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import counterStore from './counterStore';

const Counter = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {counterStore.count}</Text>
      <Text style={styles.text}>Double Count: {counterStore.doubleCount}</Text>
      <Button title="Increment" onPress={() => counterStore.increment()} />
      <Button title="Decrement" onPress={() => counterStore.decrement()} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Counter;
