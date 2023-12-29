import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwiperComponent  from './screens/SwiperComponent';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import PhoneVerify from './screens/phoneVerify';
import VerifyCode from './screens/VerifyCode';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const MainNavigations = () => {
  return (
    <Stack.Navigator 
      headerModal="non"
      screenOptions={{ headerStyle: { backgroundColor: "#FFFFFF" } }}
    >
      <Stack.Screen
        name="Swiper"
        component={SwiperComponent }
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="SignInScreen"
        component={SignIn }
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="SignUpScreen"
        component={SignUp } // Use the OnboardingScreen component
        options={{ headerShown: false }}
      />

<Stack.Screen 
        name="VerifyScreen"
        component={PhoneVerify } // Use the OnboardingScreen component
        options={{ headerShown: false }}
      />

<Stack.Screen 
        name="CodeScreen"
        component={VerifyCode } // Use the OnboardingScreen component
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="HomeScreen"
        component={Home } // Use the OnboardingScreen component
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigations;





















// import React from 'react';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import UserNavigation from './UserNavigation';
// import BottomNavigation from './BottomNavigation';
// // import BottomNavigation from './BottomNavigation';
// // import ProductDetails from '../shop/ProductDetails';

// const Stack = createNativeStackNavigator();
// const MainNavigations = () => {
//   return (
//     <Stack.Navigator 
//     headerModal="non"
//     screenOptions={{ headerStyle: { backgroundColor: "#FFFFFF" } }}
//     >
//       <Stack.Screen
//         name="User"
//         component={UserNavigation}
//         options={{ headerShown: false }}
      
//       />  
//        <Stack.Screen 
//         name="MainScreen"
//         component={BottomNavigation}
//         options={{ headerShown: false }}
//       />  

//          {/* <Stack.Screen
//       name="ProductDetail"
//       component={ProductDetails }
//       options={{ headerShown: false }}
//     />          */}
        
//       {/* <Stack.Screen />  
//       <Stack.Screen />  
//       <Stack.Screen />   */}
//     </Stack.Navigator>
//   )
// }

// export default MainNavigations