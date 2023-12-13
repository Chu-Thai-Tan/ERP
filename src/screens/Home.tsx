import { navigate } from '../helpers/NavigateService';
import { useAppDispatch } from '../store';
import { logout } from '../store/auth/slice';
import { Stack, Text } from 'tamagui';
import { CustomButton } from '../components/atoms/CustomButton';
import { CustomText } from '../components/atoms/CustomText';
import { Clock } from '../components/molecules/Clock';
import { useSelector } from 'react-redux';
import { faceApiStatus, faceResponse } from '../store/checkin/selectors';
import { recognize } from '../store/checkin/slice';
import { Calendar } from '../components/molecules/Calendar';
import { CustomWrapper } from '../components/atoms/CustomWrapper';

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
            <Text>Hi {response.subject ?? 'User'}!</Text>
            <Stack marginTop={50} marginBottom={80}>
              <Clock />
            </Stack>
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
    <CustomWrapper>
      <Calendar />
      <Stack marginTop={'40%'} marginBottom={'40%'}>
        <Clock />
      </Stack>
      {renderCheckIn()}
      <CustomButton onPress={logoutHandler}>
        <CustomText>Log Out</CustomText>
      </CustomButton>
    </CustomWrapper>
  );
};
