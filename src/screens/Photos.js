import React, { useState } from "react";
import {
    Text,
    View,
    Button,
} from 'react-native';

function Photos({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Photos</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default Photos;
