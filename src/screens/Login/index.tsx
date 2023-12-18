import { useRef, useState } from 'react';
import { navigate } from '../../helpers/NavigateService';
import { useAppDispatch } from '../../store';
import { TouchableOpacity } from 'react-native';
import { Form, Stack } from 'tamagui';
import { Logo } from '../../components/atoms/Logo';
import { Text } from '../../components/atoms/Text';
import { Button } from '../../components/atoms/Button';
import { IconInput } from '../../components/molecules/IconInput';
import { Wrapper } from '../../components/atoms/Wrapper';
import AppLogo from '../../assets/images/Logo.png';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ILoginType } from './types';
import { login } from './store/slice';
import { styles } from './styles';
import { routerNames } from '../../routes/routerNames';

export const Login = () => {
  const dispatch = useAppDispatch();

  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const [value, setValue] = useState<ILoginType>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ILoginType>({
    email: '',
    password: '',
  });

  const handleNavigate = () => {
    navigate(routerNames.REGISTER);
  };

  console.log(errors);

  const loginHandler = () => {
    console.log(
      '#Duy Phan console',
      emailRef.current._internalFiberInstanceHandleDEV.memoizedProps.value,
    );
    console.log(
      '#Duy Phan console',
      passwordRef.current._internalFiberInstanceHandleDEV.memoizedProps.value,
    );
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
    let errors: ILoginType = { email: '', password: '' };

    if (value.email.length == 0) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      errors.email = 'Email is invalid.';
    }

    if (!value.password.length) {
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
      ref: emailRef,
    },
    {
      type: 'password',
      placeholder: 'Password',
      icon: 'lock',
      value: value.password,
      errorCondition: errors.password.length !== 0,
      errorMessage: errors.password,
      isSecure: true,
      ref: passwordRef,
    },
  ];

  return (
    <Wrapper style={{ justifyContent: 'center' }}>
      <Logo source={AppLogo} />
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
              ref={input.ref}
            />
            {input.errorCondition && (
              <Text style={styles.errorText}>{input.errorMessage}</Text>
            )}
          </Stack>
        ))}

        <Form.Trigger asChild>
          <Button mt={40}>
            <Text mt={0}>Login</Text>
          </Button>
        </Form.Trigger>
      </Form>
      <Stack mt={10} dsp="flex" fd="row">
        <Text ml={5} fow={'$normal'}>
          You don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Text>Register</Text>
        </TouchableOpacity>
      </Stack>
    </Wrapper>
  );
};
