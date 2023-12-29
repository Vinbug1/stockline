import React from 'react';
import { TouchableOpacity, Text,Platform, StyleSheet, TouchableOpacityProps } from 'react-native';
import color from './Color';
interface SimpleButtonProps extends TouchableOpacityProps {
  buttonText: string;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ onPress, buttonText, ...props }) => {
  return (
    <TouchableOpacity style={styles.getStartedButton} onPress={onPress} {...props}>
      <Text style={styles.getStartedButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  getStartedButton: {
    width: 325,
    height: 56,
    gap: 10,
    padding: 15,
    borderRadius: 16,
    backgroundColor: color.primary,
  },
  getStartedButtonText: {
    fontFamily: 'System',
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '700',
    textAlign: 'center',
    padding: 6,
  },

});

export default SimpleButton;
