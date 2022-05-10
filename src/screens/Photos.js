import React from "react";
import {
    View,
    Button,
    Image,
    StyleSheet
} from 'react-native';

function Photos({ route, navigation }) {

    const {
        setImageVisible,
        setTextVisible,
    } = route.params;

    const styles = StyleSheet.create({
        container: {
            marginLeft: 15,
            flexWrap: 'wrap',
            paddingTop: 50,
            maxHeight: '70%',
            alignContent: 'center',
            justifyContent: 'center'
        },
        image: {
            width: 150,
            height: 150,
            marginBottom: 10,
            marginRight: 10
        },
        logo: {
            width: 66,
            height: 58,
        },
    });

    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('../assets/images/kates_face2.png')}
            />
            <Image
                style={styles.image}
                source={require('../assets/images/kates_face3.png')}
            />
            <Image
                style={styles.image}
                source={require('../assets/images/kates_face4.png')}
            />
            <Image
                style={styles.image}
                source={require('../assets/images/kates_face5.png')}
            />
            <View
                style={{
                    backgroundColor: 'pink',
                    borderRadius: 30
                }}
            >
                <Button
                    title="go Home"
                    onPress={() => {
                        navigation.navigate('Home')
                        setTextVisible(false)
                        setImageVisible(false)
                    }}
                />
            </View>
        </View>
    )
}

export default Photos;
