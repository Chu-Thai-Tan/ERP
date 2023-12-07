import { Button } from '../components/atoms/Button';
import { View, ViewStyle, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRecognitionData } from '../hooks/useFaceApi';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { faceStatus } from '../store/checkin/selectors';
import { AppInput } from '../components/atoms/Input';
import { useTheme } from 'tamagui';
import { navigate } from '../utils/navigateService';
import { useAppDispatch } from '../store';
import { logout } from '../store/auth/slice';

const Home = ({ navigation }: any) => {
  // const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();
  const [setDataImage] = useRecognitionData();
  const response = useSelector(faceStatus);
  const theme = useTheme();

  const backgroundStyle: ViewStyle = {
    // backgroundColor: theme.bg,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  };

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  useEffect(() => {
    if (response) console.log(response);
  }, [response]);

  const handleCheckIn = () => {
    navigation.navigate('CheckIn', { onTakePhoto });
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('Login');
  };
  return (
    <View style={backgroundStyle}>
      <Button title={'Check In'} onPress={handleCheckIn} />
      <Button title={'Check Out'} onPress={handleCheckIn} />
      <Button title={'Log Out'} onPress={handleLogout} />
      <AppInput
        label="Name"
        placeholder={'Please fill your name here'}
        height={'0'}
      />
    </View>
  );
};

export default Home;
