import { useEffect } from 'react'
import { navigate } from 'react-navigation-helpers'
import { useSelector } from 'react-redux'

import { Wrapper } from '../../components/atoms/Wrapper'
import { Camera } from '../../components/molecules/Camera'
import { ToastService } from '../../helpers/ToastService'
import { useRecognitionData } from '../../hooks/useFaceApi'
import { routerNames } from '../../routes/routerNames'
import { useAppDispatch } from '../../store'
import { faceApiStatus, faceResponse } from './store/selectors'
import { recognize } from './store/slice'

export const CheckIn = () => {
  const [setDataImage] = useRecognitionData()
  const dispatch = useAppDispatch()
  const status = useSelector(faceApiStatus)
  const response = useSelector(faceResponse)

  useEffect(() => {
    switch (status) {
      case 'Error':
        ToastService.show({
          message: response,
        })
        break
      case 'Success':
        ToastService.show({
          message: 'Face recognize successfully!',
        })
        navigate(routerNames.HOME)
        break
    }
    return () => {
      dispatch(
        recognize({
          status: 'NotCheckedIn',
          response: null,
        }),
      )
    }
  }, [status])

  const onTakePhoto = (data: string) => {
    setDataImage(data)
  }

  return (
    <Wrapper>
      <Camera onTakePhoto={onTakePhoto} isLoading={status === 'Loading'} />
    </Wrapper>
  )
}
