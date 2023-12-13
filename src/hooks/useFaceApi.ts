import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useAppDispatch } from '../store';
import { recognize } from '../store/checkin/slice';
import { recognitionService } from '../utils/compreFaceService';
import { ToastService } from '../helpers/ToastService';

export const useRecognitionData: () => [
  Dispatch<SetStateAction<string>>,
] = () => {
  const [dataImage, setDataImage] = useState<string>('');
  const dispatch = useAppDispatch();
  const recognizeHandler = useCallback(() => {
    recognitionService
      .recognize(dataImage, { limit: 1 })
      .then(res => {
        dispatch(
          recognize({
            response: (res as any).result?.[0].subjects[0],
            status: 'Success',
          }),
        );
      })
      .catch(e => {
        dispatch(
          recognize({
            response: e.message,
            status: 'Error',
          }),
        );
        ToastService.show('Error', {
          message: e.message,
          duration: 2000
        })
      });
  }, [dataImage]);
  useEffect(() => {
    if (dataImage) {
      recognizeHandler();
    }
  }, [dataImage]);
  return [setDataImage];
};
