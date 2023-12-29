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

// import baseUrl from "../../assets/common/baseUrl";

interface SignUpProps { }

const SignUp: React.FC<SignUpProps> = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
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
      navigation.navigate("VerifyScreen" as never);
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
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.psttp}>
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.boldTt}>Join Stockline</Text>
          </View>
          <Text style={styles.signUpLinkText}>
            <Text style={styles.normalText}>Start investing for your favorite companies with as little as  </Text>
            <Text style={styles.boldText}>$1</Text>
          </Text>
        </View>
        <View style={{ top: Platform.OS === "ios" ? -615 : -520 }}>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Enter UserName"
              onChangeText={(text) => setUserName(text)}
              value={userName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={handlePasswordToggle} style={styles.iconContainer}>
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#A0AEC0"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.alibtn}>
          <SimpleButton onPress={() => handleSubmit()} buttonText="Continue" />
        </View>

        <View style={styles.pstBtm}>
          <View style={{ alignSelf: "center", flexDirection: "row", top: 5 }}>
            <View style={styles.line} />
            <Text style={{ fontWeight: "400", fontSize: 16, color: "#E2E8F0", padding: 8 }}>Or continue with</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={
                styles.button}
            //onPress={}
            >
              <Image
                source={require("../../assets/images/google.png")}
                resizeMode="contain"
                style={styles.btnImg}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                styles.button
              }
            // onPress={}
            >
              <Image
                source={require("../../assets/images/apple.png")}
                resizeMode="contain"
                style={styles.btnImg}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{ bottom: -20 }} onPress={() => navigation.navigate("SignInScreen" as never)}>
            <Text style={styles.signUpLinkText}>
              <Text style={styles.normalText}>Already have an account?</Text>
              <Text style={styles.boldText}> Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //justifyContent: "center",
  },
  headerText: {
    fontFamily: 'System',
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  subHeaderText: {
    fontFamily: 'System',
    fontSize: 13,
    alignSelf: "center",
  },
  image: {
    width: "auto",
    top: Platform.OS === "ios" ? -260 : -180
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
  signUpLink: {
    fontFamily: 'System',
    alignSelf: "center",
    position: "absolute",
    flexDirection: "row",
  },
  signUpLinkText: {
    fontFamily: 'System',
    textAlign: "center",
    fontSize: 14,
    fontWeight: "normal",
    color: "#A0AEC0",
    margin: 10
  },
  normalText: {
    fontFamily: 'System',
    fontSize: 16,
  },
  boldText: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: "bold",
    color: "#33D49D",
  },
  boldTt: {
    fontFamily: 'System',
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    margin: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    gap: 20,
    top: 15,
    paddingHorizontal: 18
  },
  button: {
    width: 155,
    height: 56,
    //top:-35,
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
    top: Platform.OS === "ios" ? 480 : 580
  },
  pstBtm: {
    alignSelf: "center",
    bottom: Platform.OS === "ios" ? 513 : 395,
    width: Platform.OS === "ios" ? 360 : 300
  },
  psttp: {
    alignSelf: "center",
    justifyContent: "center",
    top: Platform.OS === "ios" ? -615 : -525,
    width: Platform.OS === "ios" ? 360 : 300
  }

});

export default SignUp;
