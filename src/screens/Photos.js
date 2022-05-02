import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';

function Photos() {

    const [imageVisible, setImageVisible] = useState(false)

    return (
        <View style={styles.wrapper}>
            <View style={styles.button}>
                <Button
                    color={'white'}
                    title="who is the prettiest here?"
                    onPress={() => {
                        Alert.alert(
                            "Who is pretty?",
                            "gavari",
                            [
                                {
                                    text: "Not kate",
                                    onPress: () => setImageVisible(false),
                                    style: "cancel"
                                },
                                { text: "Kate", onPress: () => setImageVisible(true) },
                            ]
                        );
                    }}
                />
            </View>

            {imageVisible ?
                <TouchableOpacity onPress={() => Alert.alert('hi')}>
                    <Image
                        style={{
                            width: 200, height: 200, left: 100, bottom: 250,
                            borderColor: 'pink',
                            borderRadius: 20,
                            overflow: 'hidden',
                            borderStyle: 'solid',
                            borderWidth: 5,
                            borderRadius: 5,
                        }}
                        source={require('./kates_face.png')}
                    />
                </TouchableOpacity>

                :
                <View
                    style={{
                        bottom: 400,
                        left: 120
                    }}
                >
                    <Text style={{
                        fontSize: 50,
                        color: 'red'
                    }}>Fuck off</Text>
                </View>
            }

        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'space-between',
        width: '100%',
        height: '100%'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        left: 140,
        top: 200,
        height: 70,
        width: 140,
        backgroundColor: 'black',
        borderRadius: 5,
    },
});

export default Photos;
