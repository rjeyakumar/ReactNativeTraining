import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Box = ({ backgroundColor, height = 125 }) => {
    const style = {
        backgroundColor,
        height,
    }
    return <View style={style}></View>;
}

export default Box;