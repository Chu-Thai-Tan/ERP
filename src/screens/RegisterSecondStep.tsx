import { Camera } from '../components/molecules/Camera';
import { useRecognitionData } from '../hooks/useFaceApi';
import { CustomWrapper } from '../components/atoms/CustomWrapper';

export const RegisterSecondStep = () => {
  const [setDataImage] = useRecognitionData();

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  return (
    <CustomWrapper style={{ justifyContent: 'center' }}>
      <Camera onTakePhoto={onTakePhoto} />
    </CustomWrapper>
  );
};
