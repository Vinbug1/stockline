// SwiperComponent.tsx
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

interface SwiperComponentProps {

}

const SwiperComponent: React.FC<SwiperComponentProps> = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0);



  const handleSkipPress = () => {
    navigation.navigate('SignInScreen' as never);

    // Handle the "Skip" button press (you can navigate or perform any other action)
  };

  const handleLoginPress = () => {
    setActiveButton(1); // Set activeIndex to 0 for 'Log In' button
    navigation.navigate('SignInScreen' as never);
    // Other functionality for Log In press
  };

  const handleGetStartedPress = () => {
    setActiveButton(0); // Set activeIndex to 1 for 'Get Started' button
    navigation.navigate('SignUpScreen' as never);

    // Other functionality for Get Started press
  };


  const slides = [
    {
      id: 123,
      image: require('../../assets/images/test.png'),
      title: 'Investing for Everybody',
      description: 'We let you easily invest in fractional shares for as little as $1.',
    },
    {
      id: 456,
      image: require('../../assets/images/work.png'),
      title: 'Get Better Returns',
      description: "Invest in the world's leading brands and unlock amazing returns.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          showsPagination={false} // Disable pagination
          dotStyle={{ backgroundColor: 'transparent' }}
          activeDotStyle={{ backgroundColor: 'transparent' }}
          onMomentumScrollEnd={(e, state) => {
            setActiveIndex(state.index);
          }}
          autoplay={true} // Add this line for automatic sliding
          autoplayTimeout={8000} // Adjust the timeout (in milliseconds) as needed
        >
          {slides.map((slide, index) => (
            <View key={index} style={styles.slideContainer}>
              <Image source={slide.image} resizeMode='contain' style={styles.image} />
              <View style={styles.contentContainer}>
                <Text style={styles.titletxt}>{slide.title}</Text>
                <View style={styles.tlvw}>
                  <Text style={styles.destxt}>{slide.description}</Text>
                </View>
              </View>
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.dotsContainer}>
        {[...Array(slides.length)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.dots,
              { backgroundColor: i === activeIndex ? '#33D49D' : '#EDF2F7' },
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 1 ? { backgroundColor: '#33D49D' } : { backgroundColor: '#FFFFFF' },
          ]}
          onPress={handleLoginPress}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 1 ? { color: '#FFFFFF' } : { color: '#33D49D' },
            ]}
          >
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 0 ? { backgroundColor: '#33D49D' } : { backgroundColor: '#FFFFFF' },
          ]}
          onPress={handleGetStartedPress}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 0 ? { color: '#FFFFFF' } : { color: '#33D49D' },
            ]}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkipPress}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  swiperContainer: {
    height: Platform.OS === "android" ? "70%" : "75%",
  },
  slideContainer: {
    flex: 1,
  },

  image: {
    width: "95%",
    height: 386,
    alignSelf: 'center',
    top: 109,
    left: 10
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  textContainer: {
    fontFamily: 'System',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    top: Platform.OS === "android" ? 120 : 75,
    paddingHorizontal: 42
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  skipButtonText: {
    fontFamily: 'System',
    color: '#33D49D',
    fontSize: 16,
    top: 60,
    lineHeight: 22.4,
    width: 31,
    height: 22
  },
  button: {
    width: 155,
    height: 56,
    //top:-35,
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#33D49D',
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
  titletxt: {
    fontFamily: 'System',
    top: 89,
    fontWeight: '700',
    color: '#2D3748',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 29,
  },
  destxt: {
    fontFamily: 'System',
    fontWeight: '600',
    color: '#A0AEC0',
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 23,
    //top:120
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    top: Platform.OS === 'android' ? 75 : 55
  },
  dots: {
    width: 35,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#33D49D',
    marginHorizontal: -5,
  },
  tlvw: {
    width: 345,
    height: Platform.OS === 'android' ? 110 : 250,
    top: 34,
    //left: 32,
    marginTop: 85,
    alignSelf: 'center',

  }
});

export default SwiperComponent;




