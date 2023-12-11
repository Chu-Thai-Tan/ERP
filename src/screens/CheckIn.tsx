import { FC } from 'react';
import { Camera } from '../components/molecules/Camera';
import { RouteProp } from '@react-navigation/native';
import { useRecognitionData } from '../hooks/useFaceApi';
import { useSelector } from 'react-redux';
import { faceStatus } from '../store/checkin/selectors';
import { CustomImageBackground } from '../components/atoms/ImageBackground';
import Background from '../assets/images/Background.png';

type Props = {
  onTakePhoto: (data: string) => void;
  route: RouteProp<{}>;
};
export const CheckIn: FC<Props> = () => {
  const [setDataImage] = useRecognitionData();
  const response = useSelector(faceStatus);

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  return (
    <CustomImageBackground source={Background}>
      <Camera onTakePhoto={onTakePhoto} />
    </CustomImageBackground>
  );
};
