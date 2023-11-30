import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ViewStyle,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { Button } from '../components/atoms/Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Login({ navigation }: any) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  };

  const handleOnPress = () => {
    navigation.navigate('Register');
  };
  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={backgroundStyle}>
          <Text>Email: nguyeminhtrii@gmail.com</Text>
          <Text>Password: ***********</Text>
          <Button title="Login" />
          <TouchableOpacity onPress={handleOnPress}>
            <Text style={{ color: 'red' }}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
