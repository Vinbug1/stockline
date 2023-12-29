import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = (props) => {
  const [hasValue, setHasValue] = useState<boolean>(!!props.value);

  const handleTextChange = (text: string) => {
    setHasValue(!!text);
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  return (
    <TextInput
      style={[
        styles.aptinput,
        {
          borderColor: hasValue ? '#33D49D' : 'gray',
        },
      ]}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      //name={props.name}
      id={props.id}
      value={props.value}
      autoCorrect={props.autoCorrect}
      onChangeText={handleTextChange}
      onFocus={props.onFocus}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  aptinput: {
    width: 325,
    height: 56,
    //backgroundColor: '#CCCEE6',
    margin: 5,
    borderRadius: 16,
    padding: 6,
    alignSelf: 'center',
    borderWidth: 1,
    gap: 8,
    paddingLeft: 22, // Add padding to move text away from the wall
  },
});
