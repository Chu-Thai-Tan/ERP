import { useEffect } from 'react';
import { Camera } from '../components/molecules/Camera';
import { useRecognitionData } from '../hooks/useFaceApi';
import { useSelector } from 'react-redux';
import { faceApiStatus, faceResponse } from '../store/checkin/selectors';
import { navigate } from 'react-navigation-helpers';
import { Wrapper } from '../components/atoms/Wrapper';
import { ToastService } from '../helpers/ToastService';

export const CheckIn = () => {
  const [setDataImage] = useRecognitionData();
  const status = useSelector(faceApiStatus);
  const response = useSelector(faceResponse);

  useEffect(() => {
    switch (status) {
      case 'Error':
        ToastService.show({
          message: response,
        });
        break;
      case 'Success':
        ToastService.show({
          message: 'Face recognize successfully!',
        });
        navigate('Home');
    }
  }, [status]);

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  return (
    <Wrapper>
      <Camera onTakePhoto={onTakePhoto} isLoading={status === 'Loading'} />
    </Wrapper>
  );
};
