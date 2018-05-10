import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as timerActions from './actionCreators';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.startHandler = this.startHandler.bind(this);
    this.stopHandler = this.stopHandler.bind(this);
  }

  startHandler() {
    const { startTimerActionCreator, showStartActionCreator } = this.props.actions;
    showStartActionCreator();
    this.timer = setInterval(() => {
      startTimerActionCreator();
    }, 1000);
  }

  stopHandler() {
    const { stopTimerActionCreator } = this.props.actions;
    clearInterval(this.timer);
    stopTimerActionCreator();
  }
  render() {
    const { counter, canStop } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>{counter}</Text>
        {!canStop ? <Button title="Start" onPress={this.startHandler} /> : <Button title="Stop" onPress={this.stopHandler} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 30,
    marginLeft: 5,
    marginRight: 5,
  },
});

function mapStateToProps(state) {
  const { counter, canStop } = state;
  return {
    counter,
    canStop,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(timerActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
