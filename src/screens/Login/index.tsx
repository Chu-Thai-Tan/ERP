import { useState } from 'react'
import { navigate } from '../../helpers/NavigateService'
import { useAppDispatch } from '../../store'
import { TouchableOpacity } from 'react-native'
import { Stack } from 'tamagui'

import { Button } from '../../components/atoms/Button'
import { Logo } from '../../components/atoms/Logo'
import { Text } from '../../components/atoms/Text'
import { Wrapper } from '../../components/atoms/Wrapper'
import AppLogo from '../../assets/images/Logo.png'
import { login } from './store/slice'
import { styles } from './styles'
import { routerNames } from '../../routes/routerNames'
import { Formik } from 'formik'
import * as yup from 'yup'
import { ILogin } from './types'
import { IconInput } from '../../components/molecules/IconInput'

export const Login = () => {
  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false)

  const handleNavigate = () => {
    navigate(routerNames.REGISTER)
  }

  const loginHandler = (values: ILogin) => {
    setIsLoading(true)

    console.log(values)
    const timer = setTimeout(() => {
      setIsLoading(false)
      clearTimeout(timer)
      dispatch(login())
    }, 1000)
  }

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

  return (
    <Wrapper style={{ justifyContent: 'center' }}>
      <Logo source={AppLogo} />

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={loginHandler}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <IconInput
              onChangeText={handleChange('email')}
              placeholder={'Email Address'}
              icon={'envelope'}
              value={values.email}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <IconInput
              onChangeText={handleChange('password')}
              placeholder={'Password'}
              icon={'lock'}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Button
              mt={40}
              isLoading={isLoading}
              onPress={() => handleSubmit()}
            >
              <Text mt={0}>Login</Text>
            </Button>
          </>
        )}
      </Formik>

      <Stack mt={10} dsp='flex' fd='row'>
        <Text ml={5} fow={'$normal'}>
          You don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Text>Register</Text>
        </TouchableOpacity>
      </Stack>
    </Wrapper>
  )
}
