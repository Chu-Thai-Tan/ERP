import { Button } from '../components/atoms/Button';
import { View, ViewStyle, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRecognitionData } from '../hooks/useFaceApi';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { faceStatus } from '../store/checkin/selectors';

const Home = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [setDataImage] = useRecognitionData();
  const response = useSelector(faceStatus);

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
  return (
    <View style={backgroundStyle}>
      <Button title={'Check In'} onPress={handleCheckIn} />
      <Button title={'Check Out'} onPress={handleCheckIn} />
    </View>
  );
};

export default Home;
