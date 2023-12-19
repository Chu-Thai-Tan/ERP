import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch } from '../../store'
import { recognitionService } from '../../utils/compreFaceService'
import { THookReturnType } from './types'
import { recognize } from '../../screens/CheckIn/store/slice'

export const useRecognitionData: () => THookReturnType = () => {
  const [dataImage, setDataImage] = useState<string>('')
  const dispatch = useAppDispatch()

  const recognizeHandler = useCallback(() => {
    recognitionService
      .recognize(dataImage, { limit: 1 })
      .then(res => {
        dispatch(
          recognize({
            response: (res as any).result?.[0].subjects[0],
            status: 'Success',
          }),
        )
      })
      .catch(e => {
        dispatch(
          recognize({
            response: e.message,
            status: 'Error',
          }),
        )
      })
  }, [dataImage])
  useEffect(() => {
    if (dataImage) {
      recognizeHandler()
      setDataImage('')
    }
  }, [dataImage])
  return [setDataImage]
}
