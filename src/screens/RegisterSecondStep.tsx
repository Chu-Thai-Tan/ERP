import { styled, Text } from 'tamagui';
import { Camera } from '../components/molecules/Camera';
import { useRecognitionData } from '../hooks/useFaceApi';
import { CustomImageBackground } from '../components/atoms/CustomImageBackground';
import Background from '../assets/images/Background.png';

export const RegisterSecondStep = () => {
  const [setDataImage] = useRecognitionData();

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  return (
    <CustomImageBackground source={Background}>
      <Camera onTakePhoto={onTakePhoto} />
    </CustomImageBackground>
  );
};
