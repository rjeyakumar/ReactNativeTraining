import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './Timer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import timerReducer from './reducers';

const store = createStore(timerReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Timer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
