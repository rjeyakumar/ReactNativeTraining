import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContactListItem = ({ profileImage, name, isEven }) => {
  const direction = isEven ? 'row' : 'row-reverse';
  return (
    <View style={[styles.container, { flexDirection: direction }]} key={name}>
      <Image source={{ uri: profileImage }} style={{ width: 50, height: 50, borderRadius: 25 }} />
      <Text style={{ marginLeft: 10 }}>{name}</Text>
    </View>);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  }
});

export default ContactListItem;