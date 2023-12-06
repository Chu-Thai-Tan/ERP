import { TouchableOpacity } from 'react-native';
import { Stack, Text, Input, styled, Button, Image } from 'tamagui';
import Logo from '../assets/image/Logo.png';

export function Login({ navigation }: any) {
  const handleOnPress = () => {
    navigation.navigate('Register');
  };

  const Wrapper = styled(Stack, {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCCCFF',
    height: '100%',
  });

  const CustomInput = styled(Input, {
    size: '$3',
    width: '70%',
    marginTop: 10,
    padding: '20',
  });

  const CustomButton = styled(Button, {
    size: '$3',
    width: '70%',
    marginTop: 10,
    backgroundColor: '#DA70D6',
  });

  const CustomText = styled(Text, {
    marginTop: 10,
    color: 'red',
  });

  const CustomImage = styled(Image, {
    marginBottom: 60,
    source: {
      width: '59%',
      height: 38,
      uri: Logo,
    },
  });

  return (
    <Wrapper>
      <CustomImage alt="Logo" />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
      <CustomButton>Login</CustomButton>
      <TouchableOpacity onPress={handleOnPress}>
        <CustomText>Register</CustomText>
      </TouchableOpacity>
    </Wrapper>
  );
}
