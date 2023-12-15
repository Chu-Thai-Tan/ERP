import { navigate } from '../helpers/NavigateService';
import { useAppDispatch } from '../store';
import { login } from '../store/auth/slice';

import { TouchableOpacity, StyleSheet } from 'react-native';
import { Form, Stack, Text } from 'tamagui';
import { LogoApp } from '../components/atoms/Logo';
import { CustomText } from '../components/atoms/CustomText';
import { CustomButton } from '../components/atoms/CustomButton';
import { IconInput } from '../components/molecules/IconInput';
import { CustomWrapper } from '../components/atoms/CustomWrapper';
import { useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface LoginType {
  email: string;
  password: string;
}

export const Login = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<LoginType>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<LoginType>({
    email: '',
    password: '',
  });

  const handleNavigate = () => {
    navigate('Register');
  };

  const loginHandler = () => {
    const errors = handleValidateInput();
    setErrors(errors);
    if (!errors.email && !errors.password) {
      dispatch(login());
    }
  };

  const handleInputChange = (text: string, type: string) => {
    setValue(prev => {
      return { ...prev, [type]: text };
    });
  };

  const handleValidateInput = () => {
    let errors: LoginType = { email: '', password: '' };

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
    return errors;
  };

  const Input = [
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
      icon: 'lock',
      value: value.password,
      errorCondition: errors.password.length !== 0,
      errorMessage: errors.password,
      isSecure: true,
    },
  ];

  return (
    <CustomWrapper style={{ justifyContent: 'center' }}>
      <LogoApp />
      <Form style={styles.form} onSubmit={loginHandler}>
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
          <CustomButton mt={40}>
            <CustomText mt={0}>Login</CustomText>
          </CustomButton>
        </Form.Trigger>
      </Form>
      <Stack mt={10} dsp="flex" fd="row">
        <Text ml={5}>You don't have an account? </Text>
        <TouchableOpacity onPress={handleNavigate}>
          <CustomText>Register</CustomText>
        </TouchableOpacity>
      </Stack>
    </CustomWrapper>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    width: '80%',
    marginTop: 5,
  },
});
