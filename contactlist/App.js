
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ContactList from "./ContactList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <ContactList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
