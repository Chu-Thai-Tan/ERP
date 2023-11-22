import { FC } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type Props = {
  onPress?(): void;
  title: string;
  isLoading?: boolean;
  style?: ViewStyle;
};

export const Button: FC<Props> = ({ onPress, title, isLoading, style }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.wrapper, ...style }}
      onPress={onPress}
      disabled={isLoading}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 200,
  },
  container: {
    padding: 16,
    backgroundColor: '#55c2da',
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
  },
});
