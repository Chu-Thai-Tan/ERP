import { navigate } from '../utils/navigateService';
import { useAppDispatch } from '../store';
import { logout } from '../store/auth/slice';
import { Stack, styled, useTheme } from 'tamagui';
import { CustomButton } from '../components/atoms/CustomButton';
import { CustomText } from '../components/atoms/CustomText';
import { Clock } from '../components/molecules/Clock';
import { CustomImageBackground } from '../components/atoms/ImageBackground';
import Background from '../assets/images/Background.png';
import { Calendar } from '../components/molecules/Calendar';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { isFaceMatch } from '../store/checkin/selectors';

const Wrapper = styled(Stack, {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#CCCCFF',
  height: '100%',
});

export const Home = () => {
  const dispatch = useAppDispatch();
  const isMatch = useSelector(isFaceMatch);

  const handleCheckIn = () => {
    navigate('CheckIn');
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <CustomImageBackground source={Background}>
      {isMatch ? (
        <>
          <Clock />
          <CustomButton onPress={handleCheckIn}>
            <CustomText mt={0}>Check Out</CustomText>
          </CustomButton>
        </>
      ) : (
        <CustomButton onPress={handleCheckIn}>
          <CustomText mt={0}>Check In</CustomText>
        </CustomButton>
      )}
      <CustomButton onPress={logoutHandler}>
        <CustomText mt={0}>Log Out</CustomText>
      </CustomButton>
    </CustomImageBackground>
  );
};
