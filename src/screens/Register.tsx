import { TouchableOpacity } from 'react-native';
import { Stack, styled } from 'tamagui';
import { LogoApp } from '../components/atoms/Logo';
import { CustomInput } from '../components/atoms/CustomInput';
import { CustomButton } from '../components/atoms/CustomButton';
import { CustomText } from '../components/atoms/CustomText';
import { navigate } from '../utils/navigateService';

export const Register = () => {
  const handleOnPress = () => {
    navigate('Login');
  };

  const Wrapper = styled(Stack, {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCCCFF',
    height: '100%',
  });

  return (
    <Wrapper>
      <LogoApp />
      <CustomInput placeholder="Name" />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
      <CustomInput placeholder="Confirm Password" />
      <CustomButton>
        <CustomText marginTop={0}>Next</CustomText>
      </CustomButton>
      <TouchableOpacity onPress={handleOnPress}>
        <CustomText>Login</CustomText>
      </TouchableOpacity>
    </Wrapper>
  );
};
