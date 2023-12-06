import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TextInputProps,
} from 'react-native';
import { Input, InputProps } from 'tamagui';

type AppInputProps = InputProps & {
  label: string;
  placeholder?: string;
};

export const AppInput: React.FC<AppInputProps> = ({
  label,
  value,
  ...inputProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input flex={1} value={value} {...inputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: 300,
    height: 100
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
