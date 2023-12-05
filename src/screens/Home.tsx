import { Button } from '../components/atoms/Button';
import { recognizeFace } from '../store/checkInSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../store';
import { ViewStyle, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useAppDispatch();
  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  };
  const dispatch = useDispatch<ThunkDispatch<string, any, any>>();

  const onTakePhoto = (data: string) => {
    dispatch(recognizeFace(data));
  };

  const handleCheckIn = () => {
    navigation.navigate('CheckIn', { onTakePhoto });
  };
  return (
    <>
      <Button title={'Check In'} onPress={handleCheckIn} />
      <Button title={'Check Out'} onPress={handleCheckIn} />
    </>
  );
};

export default Home;
