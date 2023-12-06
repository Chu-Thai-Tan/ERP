import { TouchableOpacity } from 'react-native';
//import { Button } from '../components/atoms/Button';
import { Stack, Text, Input, styled, Button } from 'tamagui';

export function Register({ navigation }: any) {
  const handleOnPress = () => {
    navigation.navigate('Login');
  };

  const Wrapper = styled(Stack, {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCCCFF',
    height: '100%',
  });

  const CustomInput = styled(Input, {
    size: '$4',
    width: '70%',
    marginTop: 10,
  });

  const CustomButton = styled(Button, {
    size: '$4',
    width: '70%',
    marginTop: 10,
    backgroundColor: '#DA70D6',
  });

  const CustomText = styled(Text, {
    marginTop: 10,
    color: 'red',
  });

  return (
    <Wrapper>
      <CustomInput placeholder="Name" />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
      <CustomInput placeholder="Confirm Password" />
      <CustomButton>Register</CustomButton>
      <TouchableOpacity onPress={handleOnPress}>
        <CustomText>Login</CustomText>
      </TouchableOpacity>
    </Wrapper>
  );
}
