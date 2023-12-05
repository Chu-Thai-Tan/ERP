import { Text, TouchableOpacity } from 'react-native';
import { Button } from '../components/atoms/Button';

export default function Login({ navigation }: any) {
  const handleOnPress = () => {
    navigation.navigate('Register');
  };
  return (
    <>
      <Text>Email: nguyeminhtrii@gmail.com</Text>
      <Text>Password: ***********</Text>
      <Button title="Login" />
      <TouchableOpacity onPress={handleOnPress}>
        <Text style={{ color: 'red' }}>Register</Text>
      </TouchableOpacity>
    </>
  );
}
