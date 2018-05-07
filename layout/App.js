import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Box';
import SmallBox from './SmallBox';

export default class App extends React.Component {

  renderBigBoxes() {
    const { bigBoxContainer } = styles;
    return (
      <View style={bigBoxContainer}>
        <Box backgroundColor="green" />
        <Box backgroundColor="red" />
      </View>
    );
  }

  renderSmallBoxes() {
    const { smallBoxContainer } = styles;
    return (
      <View style={smallBoxContainer}>
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
      </View>
    );
  }

  render() {
    const {container} = styles;
    return (
      <View style={container}>
        {this.renderBigBoxes()}
        {this.renderSmallBoxes()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bigBoxContainer: {
    alignItems: 'stretch',
  },
  smallBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
});
