import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SmallBox = ({ backgroundColor = 'blue', width = 100, height = 100 }) => {
    const { container } = styles;
    const style = {
        backgroundColor,
        height,
        width,
    }
    return <View style={[container, style]}></View>;
}

const styles = StyleSheet.create({
    container: {
        marginRight: 5,
        marginBottom: 5,
        flexGrow: 1,
    },
});
export default SmallBox;