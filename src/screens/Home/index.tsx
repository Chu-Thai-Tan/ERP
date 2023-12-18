import { navigate } from '../../helpers/NavigateService';
import { useAppDispatch } from '../../store';
import { Stack } from 'tamagui';
import { Button } from '../../components/atoms/Button';
import { Text } from '../../components/atoms/Text';
import { Clock } from '../../components/molecules/Clock';
import { useSelector } from 'react-redux';
import { Calendar } from '../../components/molecules/Calendar';
import { Wrapper } from '../../components/atoms/Wrapper';
import { logout } from '../Login/store/slice';
import { faceApiStatus, faceResponse } from '../CheckIn/store/selectors';
import { recognize } from '../CheckIn/store/slice';
import { routerNames } from '../../routes/routerNames';

export const Home = () => {
  const dispatch = useAppDispatch();
  const status = useSelector(faceApiStatus);
  const response = useSelector(faceResponse);

  const handleCheckIn = () => {
    navigate(routerNames.CHECK_IN);
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
            <Text fow={'$normal'}>Hi {response.subject ?? 'User'}!</Text>
            <Stack marginTop={'40%'} marginBottom={'40%'}>
              <Clock />
            </Stack>
            <Button onPress={handleCheckOut} flex={1}>
              <Text mt={0}>Check Out</Text>
            </Button>
          </>
        );
      default:
        return (
          <Button onPress={handleCheckIn}>
            <Text mt={0}>Check In</Text>
          </Button>
        );
    }
  };

  return (
    <Wrapper>
      <Calendar />
      {/* <W flex={1} w={'100%'}> */}
      <Wrapper>
        {renderCheckIn()}
        <Button onPress={logoutHandler}>
          <Text>Log Out</Text>
        </Button>
      </Wrapper>
      {/* </W> */}
    </Wrapper>
  );
};
