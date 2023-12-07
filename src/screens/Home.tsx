import { useRecognitionData } from '../hooks/useFaceApi';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { faceStatus } from '../store/checkin/selectors';
import { navigate } from '../utils/navigateService';
import { useAppDispatch } from '../store';
import { logout } from '../store/auth/slice';
import { Stack, styled, useTheme } from 'tamagui';
import { CustomButton } from '../components/atoms/CustomButton';
import { CustomText } from '../components/atoms/CustomText';
import { Clock } from '../components/molecules/Clock';

export const Home = () => {
  const dispatch = useAppDispatch();

  const handleCheckIn = () => {
    navigate('CheckIn');
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const Wrapper = styled(Stack, {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCCCFF',
    height: '100%',
  });
  return (
    <Wrapper>
      <Clock />
      <CustomButton onPress={handleCheckIn}>
        <CustomText marginTop={0}>Check In</CustomText>
      </CustomButton>
      <CustomButton onPress={handleCheckIn}>
        <CustomText marginTop={0}>Check Out</CustomText>
      </CustomButton>
      <CustomButton onPress={logoutHandler}>
        <CustomText marginTop={0}>Log Out</CustomText>
      </CustomButton>
    </Wrapper>
  );
};
