import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Alert } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    useResponsiveWidth
} from "react-native-responsive-dimensions";

export default function Login({ navigation }: { navigation: any }): JSX.Element {
    const [userEmail, setUserEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');


    return (

        <SafeAreaView style={styles.screen}>
            <View style={styles.main}>
                <Image style={styles.logo1} source={require("../img/sangeet-logo-2.png")} />
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(UserEmail) =>
                            setUserEmail(UserEmail)
                        }
                        placeholder='Enter User Name'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(userPassword) =>
                            setUserPassword(userPassword)
                        }
                        placeholder='Enter Password'
                    /></View>
                <View>
                    <Button
                        buttonStyle={styles.btn}
                        title="Sign in"
                        onPress={() => {
                            if (userEmail == "aryan0148" && userPassword == "123") {
                                navigation.navigate("Home")
                            }
                            else {
                                Alert.alert('Enter correct username and password')
                            }
                        }

                        }
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    screen: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'black'
    },
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    logo1: {
        alignSelf: 'center',
        marginVertical: responsiveHeight(2),
        height: responsiveWidth(40),
        width: responsiveWidth(40)
    },

    input: {
        backgroundColor: 'white',
        // color: 'black',
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignSelf: 'center',
        borderRadius: 30
    },
    btn: {
        marginVertical: responsiveHeight(2),
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#11C0D3',
        height: responsiveHeight(5),
        borderRadius: 30
    }


})