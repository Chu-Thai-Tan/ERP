import { FC, useEffect } from 'react';
import { Camera } from '../components/molecules/Camera';
import { RouteProp } from '@react-navigation/native';
import { useRecognitionData } from '../hooks/useFaceApi';
import { useSelector } from 'react-redux';
import { isFaceMatch } from '../store/checkin/selectors';
import { CustomImageBackground } from '../components/atoms/ImageBackground';
import Background from '../assets/images/Background.png';
import { navigate } from 'react-navigation-helpers';

type Props = {
  onTakePhoto: (data: string) => void;
  route: RouteProp<{}>;
};
export const CheckIn: FC<Props> = () => {
  const [setDataImage] = useRecognitionData();
  // const response = useSelector(faceStatus);
  const isMatch = useSelector(isFaceMatch);

  useEffect(() => {
    if (isMatch) {
      navigate('Home');
    }
  }, [isMatch]);

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  return (
    <CustomImageBackground source={Background}>
      <Camera onTakePhoto={onTakePhoto} />
    </CustomImageBackground>
  );
};
