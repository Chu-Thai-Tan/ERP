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

export const useRecognitionData: () => [
  Dispatch<SetStateAction<string>>,
] = () => {
  const [dataImage, setDataImage] = useState<string>('');
  const dispatch = useAppDispatch();
  const recognizeHandler = useCallback(() => {
    recognitionService
      .recognize(dataImage, { limit: 1 })
      .then(res => {
        // @ts-ignore
        dispatch(recognize(res?.result?.[0].subjects[0]));
      })
      .catch(e => {
        dispatch(recognize(e.message));
      });
  }, [dataImage]);
  useEffect(() => {
    if (dataImage) {
      recognizeHandler();
    }
  }, [dataImage]);
  return [setDataImage];
};
