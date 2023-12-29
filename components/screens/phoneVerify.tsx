import React, { useState, useRef } from 'react';
import { StyleSheet, View, TextInput, Text, Platform, TouchableOpacity, SafeAreaView } from 'react-native';
import CountryPicker, { Country } from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';
import SimpleButton from '../utils/SimpleButton';
import { Entypo } from '@expo/vector-icons';



const PhoneVerify: React.FC = () => {
    const navigation = useNavigation();
    const [country, setCountry] = useState<Country | null>(null);
    const phoneInputRef = useRef<TextInput>(null);
    const [phone, setPhone] = useState('')
    const [countryPickerVisible, setCountryPickerVisible] = useState(false);
    const countryPickerRef = useRef<typeof CountryPicker>(null);

    const onSelect = (selectedCountry: Country) => {
        setCountry(selectedCountry);
    };
    const placeholderText = country ? `+${country.callingCode} | 000 000 000` : 'Phone Number';
    const toggleCountryPicker = () => {
        if (countryPickerRef.current) {
            if (!countryPickerVisible) {
                // If the CountryPicker is not visible, set it to visible and focus on the phone input
                setCountryPickerVisible(true);
                phoneInputRef.current?.focus();
            } else {
                // If the CountryPicker is already visible, toggle its visibility
                setCountryPickerVisible(!countryPickerVisible);
            }
        }
    };


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
            navigation.navigate("CodeScreen" as never);
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
            {/* <View style={{ marginTop: 65 }}> */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 50, height: 50, borderRadius: 12, left: 25, position: "absolute", top: 55, borderWidth: 1, borderColor: "#EDF2F7" }}>
                <Entypo name="chevron-small-left" size={32} color="black" style={{ alignSelf: "center", top: 8 }} />
            </TouchableOpacity>

            <View style={{ alignSelf: 'center', marginTop: 110 }}>
                <Text style={styles.boldTt}>Enter your phone number</Text>
            </View>
            <Text style={styles.normalText}>
                You'll receive a 4-digit code for the phone number verification
            </Text>
            {/* </View> */}

            <View style={styles.inputContainer}>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={toggleCountryPicker}>
                    <View style={styles.avatarContainer}>
                        {/* <View style={styles.flagContainer}> */}
                        <CountryPicker
                            // ... (existing props)
                            onSelect={onSelect}
                            countryCode={country?.cca2 || 'US'}
                            withFlag
                            withCountryNameButton={false}
                            withCallingCodeButton={false}
                            withFilter
                            visible={countryPickerVisible}
                        />
                        {/* </View> */}
                    </View>

                    <Entypo name="chevron-small-down" size={24} color="black" style={{ top: 8 }} />
                </TouchableOpacity>

                <View style={{ width: 0, height: 50, borderWidth: 1, borderColor: "#E2E8F0", top: -2 }} />

                <TextInput
                    ref={phoneInputRef}
                    placeholder={placeholderText}
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                    keyboardType="phone-pad"
                    style={styles.phoneInput}
                />

            </View>
            <View style={{ alignSelf: "center", position: "absolute", bottom: Platform.OS === "ios" ? 42 : 49 }}>
                <SimpleButton onPress={() => handleSubmit()} buttonText="Send Code" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginTop: 12,
        width: 325,
        height: 56,
        top: 70,
        borderRadius: 16,
        padding: 6,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        gap: 8,
        paddingLeft: 22,
    },
    phoneInput: {
        flex: 1,
        marginLeft: 10,
    },
    signUpLinkText: {
        fontFamily: 'System',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#A0AEC0',
        margin: 10,
    },
    normalText: {
        fontFamily: 'System',
        fontSize: 18,
        width: 280,
        textAlign: 'center',
        alignSelf: 'center',
        color: '#A0AEC0',
    },
    boldText: {
        fontFamily: 'System',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#33D49D',
    },
    boldTt: {
        fontFamily: 'System',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        margin: 15,
    },
    avatarContainer: {
        width: 24,
        height: 24,
        borderRadius: 25,
        overflow: 'hidden',
        //margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countryPickerButton: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },



});

export default PhoneVerify;
