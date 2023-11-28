import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TextInputProps,
} from 'react-native';

type InputProps = TextInputProps & {
  label: string;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  value,
  ...inputProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={value} {...inputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: 300,
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
