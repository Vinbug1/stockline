import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert,StyleSheet,Platform } from 'react-native';
import ReactNativePinView from 'react-native-pin-view';
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import SimpleButton from "../utils/SimpleButton";



const VerifyCode: React.FC = () => {
  const pinView = useRef<any>(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const navigation = useNavigation();
  const [showCompletedButton, setShowCompletedButton] = useState(false);

  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }

    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
      // Check if entered pin is '1234'
      // if (enteredPin === '1234') {
      //   // Navigate to the next page
      //   navigation.navigate("HomeScreen" as never);
      // }
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 50, height: 50, borderRadius: 12, left: 25, position: "absolute", top: 55, borderWidth: 1, borderColor: "#EDF2F7" }}>
        <Entypo name="chevron-small-left" size={32} color="black" style={{ alignSelf: "center", top: 8 }} />
      </TouchableOpacity>
      <Text style={{ paddingTop: 24, paddingBottom: 18, color: 'black', fontSize: 20 }}> Enter verification code </Text>
      <Text style={{ paddingBottom: 48, lineHeight: 19.6, color: '#A0AEC0', fontSize: 14, fontWeight: "400", textAlign: 'center', alignSelf: 'center', width: 300 }}>We have sent the code verification to your mobile number </Text>
<>
      <ReactNativePinView
        inputSize={56}
        ref={pinView}
        pinLength={4}
        buttonSize={60}
        onValueChange={(text) => setEnteredPin(text)}
        showInputText={true}
        inputTextStyle={{
          fontFamily: 'System',
          fontSize: 24,
          fontWeight: '700',
          textAlign: 'center',
          color: '#000000',
        }}
        buttonAreaStyle={{
          marginTop: 24,
        }}
        inputAreaStyle={{
          marginBottom: 24,
        }}
        inputViewEmptyStyle={{
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: enteredPin.length > 0 ? '#33D49D' : '#E2E8F0',
          borderRadius: 12,
        }}
        inputViewFilledStyle={{
          borderWidth: 1,
          borderColor: enteredPin.length > 0 ? '#33D49D' : '#E2E8F0',
          backgroundColor: 'transparent',
          width: 56,
          height: 56,
          borderRadius: 12,
        }}
        buttonViewStyle={{

          //borderWidth: 1,
          //borderColor: '#FFF',
        }}
        buttonTextStyle={{
          color: 'black',
        }}
        onButtonPress={(key) => {
          if (key === 'custom_left') {
            Alert.alert('Entered Pin:', enteredPin);
          }
          if (key === 'custom_right') {
            pinView.current.clear();
          }
        }}
        customLeftButton={
          showCompletedButton ? <FontAwesome5 name="asterisk" size={24} color="black" /> : undefined}
        customRightButton={
          showRemoveButton ? <Ionicons name="ios-backspace-outline" size={24} color="black" /> : undefined}
      />
</>
<TouchableOpacity style={styles.alitxt}>
          <Text style={styles.txt}>Resend Code</Text>
        </TouchableOpacity>

<View style={styles.alibtn}>
          <SimpleButton onPress={() => handleSubmit()} buttonText="Verify Accounts" />
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  alibtn: {
    alignSelf: "center",
    position: "absolute",
    bottom:  50
  },

  alitxt: {
    alignSelf: "center",
    position: "absolute",
    top: Platform.OS === "ios" ? 390 : 380
  },
  txt:{
    fontFamily: 'System',
    fontWeight: "700",
    fontSize: 14,
    color: "#33D49D",
    textAlign: "center",
  }
});
export default VerifyCode;


