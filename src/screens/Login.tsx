import { navigate } from '../utils/navigateService';
import { useAppDispatch } from '../store';
import { login } from '../store/auth/slice';

import { TouchableOpacity } from 'react-native';
import { Stack, styled } from 'tamagui';
import { LogoApp } from '../components/atoms/Logo';
import { CustomInput } from '../components/atoms/CustomInput';
import { CustomText } from '../components/atoms/CustomText';
import { CustomButton } from '../components/atoms/CustomButton';
import { background } from '../assets/images/city.svg';

export const Login = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  const handleOnPress = () => {
    navigation.navigate('Register');
  };

  const loginHandler = () => {
    dispatch(login());
    navigate('Home');
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
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
      <CustomButton>
        <CustomText marginTop={0}>Login</CustomText>
      </CustomButton>
      <TouchableOpacity onPress={handleOnPress}>
        <CustomText>Register</CustomText>
      </TouchableOpacity>
    </Wrapper>
  );
};
