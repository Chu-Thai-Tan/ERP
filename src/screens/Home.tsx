import { navigate } from '../utils/navigateService';
import { useAppDispatch } from '../store';
import { logout } from '../store/auth/slice';
import { Stack, styled, useTheme } from 'tamagui';
import { CustomButton } from '../components/atoms/CustomButton';
import { CustomText } from '../components/atoms/CustomText';
import { Clock } from '../components/molecules/Clock';
import { CustomImageBackground } from '../components/atoms/CustomImageBackground';
import Background from '../assets/images/Background.png';
import { useSelector } from 'react-redux';
import { faceApiStatus, faceResponse } from '../store/checkin/selectors';
import { recognize } from '../store/checkin/slice';

import { Calendar } from '../components/molecules/Calendar';

export const Home = () => {
  const dispatch = useAppDispatch();
  const status = useSelector(faceApiStatus);
  const response = useSelector(faceResponse);

  const handleCheckIn = () => {
    navigate('CheckIn');
  };

  const handleCheckOut = () => {
    dispatch(
      recognize({
        status: 'NotCheckedIn',
        response: null,
      }),
    );
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const renderCheckIn = () => {
    switch (status) {
      case 'Success':
        return (
          <>
            <CustomText>Hi {response.subject ?? 'User'}!</CustomText>
            <Clock />
            <CustomButton onPress={handleCheckOut}>
              <CustomText mt={0}>Check Out</CustomText>
            </CustomButton>
          </>
        );
      default:
        return (
          <CustomButton onPress={handleCheckIn}>
            <CustomText mt={0}>Check In</CustomText>
          </CustomButton>
        );
    }
  };

  return (
    <CustomImageBackground source={Background}>
      {renderCheckIn()}
      <Calendar />
      <Stack marginTop={50} marginBottom={80}>
        <Clock />
      </Stack>

      <CustomButton onPress={handleCheckIn}>
        <CustomText mt={0}>Check In</CustomText>
      </CustomButton>
      <CustomButton onPress={handleCheckIn}>
        <CustomText mt={0}>Check Out</CustomText>
      </CustomButton>
      <CustomButton onPress={logoutHandler}>
        <CustomText mt={0}>Log Out</CustomText>
      </CustomButton>
    </CustomImageBackground>
  );
};
