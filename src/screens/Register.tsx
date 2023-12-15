import { TouchableOpacity } from 'react-native';
import { Stack, styled, Text } from 'tamagui';
import { LogoApp } from '../components/atoms/Logo';
import { Button } from '../components/atoms/Button';
import { CustomText } from '../components/atoms/CustomText';
import { navigate } from '../helpers/NavigateService';
import { IconInput } from '../components/molecules/IconInput';
import { CustomWrapper } from '../components/atoms/CustomWrapper';

export const Register = () => {
  const handleLogin = () => {
    navigate('Login');
  };
  const handleNextStep = () => {
    navigate('RegisterSecondStep');
  };

  return (
    <CustomWrapper style={{ justifyContent: 'center' }}>
      <LogoApp />
      <IconInput placeholder="Name" icon={'user'} />
      <IconInput placeholder="Email" icon={'envelope'} />
      <IconInput secureTextEntry placeholder="Password" icon={'key'} />
      <IconInput secureTextEntry placeholder="Confirm Password" icon={'key'} />
      <Button mt={40} onPress={handleNextStep}>
        <CustomText mt={0}>Next</CustomText>
      </Button>
      <Stack mt={10} dsp="flex" fd="row">
        <Text ml={5}>You have an account? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <CustomText>Login</CustomText>
        </TouchableOpacity>
      </Stack>
    </CustomWrapper>
  );
};
