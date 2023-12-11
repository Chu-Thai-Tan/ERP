import { styled, Text } from 'tamagui';
import { Camera } from '../components/molecules/Camera';
import { useRecognitionData } from '../hooks/useFaceApi';
import { useSelector } from 'react-redux';
import { faceStatus } from '../store/checkin/selectors';
import { CustomImageBackground } from '../components/atoms/ImageBackground';
import Background from '../assets/images/Background.png';

const Description = styled(Text, {
  color: 'black',
  marginTop: 60,
  fontSize: '$6',
});

export const RegisterSecondStep = () => {
  const [setDataImage] = useRecognitionData();
  const response = useSelector(faceStatus);

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  return (
    <CustomImageBackground source={Background}>
      {/*<Description>Please take photo to register your face ID</Description>*/}
      <Camera onTakePhoto={onTakePhoto} />
    </CustomImageBackground>
  );
};
