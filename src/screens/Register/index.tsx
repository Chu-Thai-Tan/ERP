import { TouchableOpacity } from 'react-native'
import { Stack } from 'tamagui'
import { Logo } from '../../components/atoms/Logo'
import { Button } from '../../components/atoms/Button'
import { Text } from '../../components/atoms/Text'
import { navigate } from '../../helpers/NavigateService'
import { IconInput } from '../../components/molecules/IconInput'
import { Wrapper } from '../../components/atoms/Wrapper'
import AppLogo from '../../assets/images/Logo.png'
import { styles } from './styles'
import { routerNames } from '../../routes/routerNames'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import { IRegister } from './types'

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    navigate(routerNames.LOGIN)
  }
  const handleNextStep = (values: IRegister) => {
    console.log(values)
    setIsLoading(true)

    console.log(values)
    const timer = setTimeout(() => {
      setIsLoading(false)
      clearTimeout(timer)
      navigate(routerNames.REGISTER_SECOND_STEP)
    }, 1000)
  }

  const registerValidationSchema = yup.object().shape({
    name: yup.string().required('Name is Required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })

  return (
    <Wrapper style={{ justifyContent: 'center' }}>
      <Logo source={AppLogo} />

      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          email: '',
          password: '',
          name: '',
          confirmPassword: '',
        }}
        onSubmit={handleNextStep}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <IconInput
              onChangeText={handleChange('name')}
              placeholder={'Name'}
              icon={'user'}
              value={values.name}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

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
              icon={'key'}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <IconInput
              onChangeText={handleChange('confirmPassword')}
              placeholder={'Confirm Password'}
              icon={'key'}
              value={values.confirmPassword}
              secureTextEntry
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
            <Button
              mt={40}
              isLoading={isLoading}
              onPress={() => handleSubmit()}
            >
              <Text mt={0}>Next</Text>
            </Button>
          </>
        )}
      </Formik>

      <Stack mt={10} dsp='flex' fd='row'>
        <Text ml={5} fow={'$normal'}>
          You have an account?{' '}
        </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </Stack>
    </Wrapper>
  )
}
