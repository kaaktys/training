import React from "react";
import {
    Text,
    View,
    Button,
} from 'react-native';

function Photos({ route, navigation }) {

    const {
        setImageVisible,
        setTextVisible,
    } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Photos</Text>
            <Button title="go Home" onPress={() => {
                navigation.navigate('Home')
                setTextVisible(false)
                setImageVisible(false)
            }} />
        </View>
    )
}

export default Photos;
