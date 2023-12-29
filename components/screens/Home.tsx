// SwiperComponent.tsx
import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../utils/Input";
import SimpleButton from "../utils/SimpleButton";
import { Ionicons } from '@expo/vector-icons';

type Props = {}

const Home: React.FC = () => {
    const navigation = useNavigation();

    const handleSubmit = async () => {
        try {
            // Commented out fetch logic for now
            // Uncomment and modify it based on your requirements
            // const user = { email, password };
            // if (email === "" || password === "") {
            //   Toast.show("Please fill in your credentials", Toast.SHORT);
            // } else {
            //   const response = await fetch(`${baseUrl}users/login`, {
            //     method: "POST",
            //     body: JSON.stringify(user),
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //   });

            //   if (response.ok) {
            //     const data = await response.json();
            //     AsyncStorage.setItem("userString", JSON.stringify(data));
            navigation.navigate("HomeScreen" as never);
            //   } else {
            //     Toast.show("Please provide correct credentials", Toast.SHORT);
            //   }
            // }
        } catch (error) {
            // Uncomment and modify the error handling based on your requirements
            // Toast.show(error.message, Toast.SHORT);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <Image
                    source={require("../../assets/images/Union.png")}
                    resizeMode="contain"
                    style={styles.image}
                />
                <Image
                    source={require("../../assets/images/bg-blur.png")}
                    resizeMode="contain"
                    style={styles.bgimage}
                />
                <View style={styles.psttp}>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Text style={styles.boldTt}>Hello Tocky!</Text>
                        <Image
                            source={require("../../assets/images/hand.png")}
                            resizeMode="contain"
                            style={styles.snimage}
                        />

                    </View>
                    <Text style={styles.boldTt}>Welcome to Stockline</Text>
                    <Text style={styles.signUpLinkText}>
                        <Text style={styles.normalText}>It’s great to have you here</Text>
                    </Text>
                </View>

                <View style={styles.alibtn}>
                    <SimpleButton onPress={() => handleSubmit()} buttonText="I’m ready to start!" />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        //justifyContent: "center",
    },

    image: {
        width: 80,
        height: 80,
        position: "absolute",
        top: 220,
        alignSelf: "center",
    },
    bgimage: {
        width: 325,
        height: 52,
        position: "absolute",
        top: 265,
        left: 25,
        alignSelf: "center",
    },
    snimage: {
        width: 22,
        height: 22,
        top: 18,
        left: -5,

    },
    inputContainer: {
        marginTop: 5,
    },
    errorText: {
        fontFamily: 'System',
        color: "red",
        fontSize: 16,
        alignSelf: "center",
        marginTop: 10,
    },
    signUpLinkText: {
        fontFamily: 'System',
        //color: "black",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "normal",
        color: "#A0AEC0",
        margin: 10
    },
    normalText: {
        fontFamily: 'System',
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center",
        lineHeight: 20

    },
    boldText: {
        fontFamily: 'System',
        fontSize: 24,
        fontWeight: "600",
        color: "#33D49D",
        top: 2,
        lineHeight: 29

    },
    boldTt: {
        fontFamily: 'System',
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        lineHeight: 29,
        margin: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        gap: 20,
        top: 50,
        paddingHorizontal: 18
    },
    button: {
        width: 155,
        height: 56,
        padding: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        gap: 10
    },
    buttonText: {
        fontFamily: 'System',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: 0.2,
        color: '#33D49D',
        textAlign: 'center',
        padding: 10
    },
    btnImg: {
        alignSelf: 'center',
        margin: 8,
        width: 19.52,
        height: 23.21,

    },
    iconContainer: {
        position: 'absolute',
        right: 65,
        top: 20,
    },
    line: {
        width: Platform.OS === "android" ? "40%" : "30%",
        height: 0.5,
        borderWidth: 1,
        borderColor: "#E2E8F0",
        top: 18
    },
    alibtn: {
        alignSelf: "center",
        position: "absolute",
        top: Platform.OS === "ios" ? 640 : 690
    },
    pstBtm: {
        alignSelf: "center",
        bottom: Platform.OS === "ios" ? 455 : 418,
        width: Platform.OS === "ios" ? 360 : 300
    },
    psttp: {
        alignSelf: "center",
        justifyContent: "center",
        top: Platform.OS === "ios" ? 275 : 285,
        width: Platform.OS === "ios" ? 360 : 300
    }

});
export default Home