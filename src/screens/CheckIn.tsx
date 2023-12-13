import { useEffect } from 'react';
import { Camera } from '../components/molecules/Camera';
import { useRecognitionData } from '../hooks/useFaceApi';
import { useSelector } from 'react-redux';
import { faceApiStatus } from '../store/checkin/selectors';
import { CustomImageBackground } from '../components/atoms/CustomImageBackground';
import Background from '../assets/images/Background.png';
import { navigate } from 'react-navigation-helpers';
import { CurrentToast } from '../helpers/ToastService';
import { ToastViewport } from '@tamagui/toast';

export const CheckIn = () => {
  const [setDataImage] = useRecognitionData();
  const status = useSelector(faceApiStatus);

  useEffect(() => {
    if (status === 'Success') {
      navigate('Home');
    }
  }, [status]);

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  return (
    <CustomImageBackground source={Background}>
      <Camera onTakePhoto={onTakePhoto} isLoading={status === 'Loading'} />
      {/* <CurrentToast /> */}
    </CustomImageBackground>
  );
};
