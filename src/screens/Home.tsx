import { View, ViewStyle, useColorScheme } from 'react-native';
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

export const Home = ({ navigation }: any) => {
  // const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();
  const [setDataImage] = useRecognitionData();
  const response = useSelector(faceStatus);
  const theme = useTheme();

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  useEffect(() => {
    if (response) console.log(response);
  }, [response]);

  const handleCheckIn = () => {
    navigation.navigate('CheckIn', { onTakePhoto });
  };

  const Wrapper = styled(Stack, {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCCCFF',
    height: '100%',
  });
  return (
    <Wrapper>
      <CustomButton>
        <CustomText onPress={handleCheckIn} marginTop={0}>
          Check In
        </CustomText>
      </CustomButton>
      <CustomButton>
        <CustomText onPress={handleCheckIn} marginTop={0}>
          Check Out
        </CustomText>
      </CustomButton>
    </Wrapper>
  );
};
