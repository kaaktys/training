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

function Home({ navigation }) {

    const [imageVisible, setImageVisible] = useState(false)
    const [textVisible, setTextVisible] = useState(false)

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
                                    onPress: () => {
                                        setTextVisible(true)
                                        setImageVisible(false)
                                    },
                                    style: "cancel"
                                },
                                {
                                    text: "Kate", onPress: () => {
                                        setImageVisible(true)
                                        setTextVisible(false)
                                    }
                                },
                            ]
                        );
                    }}
                />
            </View>

            {imageVisible ?
                <TouchableOpacity onPress={() => {
                    Alert.alert(
                        "you want to see her more?",
                        "gavari",
                        [
                            {
                                text: "no",
                                onPress: () => {
                                    setTextVisible(true)
                                    setImageVisible(false)
                                },
                            },
                            {
                                text: "SURE!!", onPress: () => {
                                    navigation.navigate('Photos', {
                                        setImageVisible: setImageVisible,
                                        setTextVisible: setTextVisible,
                                    })
                                }
                            },
                        ]
                    );
                }
                } >
                    <Image
                        style={{
                            width: 200, height: 200, left: 100, bottom: 250,
                            borderColor: 'pink',
                            borderRadius: 20,
                            overflow: 'hidden',
                            borderWidth: 5,
                        }}
                        source={require('../assets/images/kates_face.png')}
                    />
                </TouchableOpacity>

                : null
            }

            {
                textVisible ?
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

                    : null
            }
        </View >
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

export default Home;
