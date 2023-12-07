import { Stack, styled } from 'tamagui';
import { Camera } from '../components/molecules/Camera';
import { useRecognitionData } from '../hooks/useFaceApi';
import { useSelector } from 'react-redux';
import { faceStatus } from '../store/checkin/selectors';

export const RegisterSecondStep = () => {
  const Wrapper = styled(Stack, {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#CCCCFF',
    height: '100%',
  });

  const [setDataImage] = useRecognitionData();
  const response = useSelector(faceStatus);

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  return (
    <>
      <Camera onTakePhoto={onTakePhoto} />
    </>
  );
};
