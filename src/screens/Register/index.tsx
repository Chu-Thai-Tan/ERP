import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Form, Stack } from 'tamagui';
import { Logo } from '../../components/atoms/Logo';
import { Button } from '../../components/atoms/Button';
import { Text } from '../../components/atoms/Text';
import { navigate } from '../../helpers/NavigateService';
import { IconInput } from '../../components/molecules/IconInput';
import { Wrapper } from '../../components/atoms/Wrapper';
import AppLogo from '../../assets/images/Logo.png';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { styles } from './styles';
import { RegisterType } from './types';
import { routerNames } from '../../routes/routerNames';

export const Register = () => {
  const [value, setValue] = useState<RegisterType>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<RegisterType>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleLogin = () => {
    navigate(routerNames.LOGIN);
  };
  const handleNextStep = () => {
    const errors = handleValidateInput();
    setErrors(errors);
    const isFormValid =
      !errors.name &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword;
    if (isFormValid) {
      navigate(routerNames.REGISTER_SECOND_STEP);
    }
  };

  const handleInputChange = (text: string, type: string) => {
    setValue(prev => {
      return { ...prev, [type]: text };
    });
  };

  const handleValidateInput = () => {
    let errors: RegisterType = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (value.name.length == 0) {
      errors.name = 'Name is required';
    }

    if (value.email.length == 0) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      errors.email = 'Email is invalid.';
    }

    if (value.password.length == 0) {
      errors.password = 'Password is required.';
    } else if (value.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    } else if (value.password.search(/[a-z]/i) < 0) {
      errors.password = 'Password must contain at least one letter';
    } else if (value.password.search(/[0-9]/) < 0) {
      errors.password = 'Password must contain at least one digit';
    }

    if (value.confirmPassword.length == 0) {
      errors.confirmPassword = 'ConfirmPassword is required.';
    } else if (value.confirmPassword !== value.password) {
      errors.confirmPassword = 'ConfirmPassword is not matches the password';
    }
    return errors;
  };

  const Input = [
    {
      type: 'name',
      placeholder: 'Name',
      icon: 'user',
      value: value.name,
      errorCondition: errors.name.length !== 0,
      errorMessage: errors.name,
      isSecure: false,
    },
    {
      type: 'email',
      placeholder: 'Email',
      icon: 'envelope',
      value: value.email,
      errorCondition: errors.email.length !== 0,
      errorMessage: errors.email,
      isSecure: false,
    },
    {
      type: 'password',
      placeholder: 'Password',
      icon: 'key',
      value: value.password,
      errorCondition: errors.password.length !== 0,
      errorMessage: errors.password,
      isSecure: true,
    },
    {
      type: 'confirmPassword',
      placeholder: 'Confirm Password',
      icon: 'key',
      value: value.confirmPassword,
      errorCondition: errors.confirmPassword.length !== 0,
      errorMessage: errors.confirmPassword,
      isSecure: true,
    },
  ];

  return (
    <Wrapper style={{ justifyContent: 'center' }}>
      <Logo source={AppLogo} />
      <Form onSubmit={handleNextStep} style={styles.form}>
        {Input.map(input => (
          <Stack
            key={input.type}
            style={{ display: 'flex', width: '100%', alignItems: 'center' }}
          >
            <IconInput
              onChangeText={text => handleInputChange(text, input.type)}
              placeholder={input.placeholder}
              icon={input.icon as IconProp}
              value={input.value}
              secureTextEntry={input.isSecure}
            />
            {input.errorCondition && (
              <Text style={styles.errorText}>{input.errorMessage}</Text>
            )}
          </Stack>
        ))}
        <Form.Trigger asChild>
          <Button mt={40}>
            <Text mt={0}>Next</Text>
          </Button>
        </Form.Trigger>
      </Form>
      <Stack mt={10} dsp="flex" fd="row">
        <Text ml={5} fow={'$normal'}>
          You have an account?{' '}
        </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </Stack>
    </Wrapper>
  );
};