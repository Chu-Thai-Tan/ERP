import { Wrapper } from '../../components/atoms/Wrapper'
import { Camera } from '../../components/molecules/Camera'
import { useRecognitionData } from '../../hooks/useFaceApi'
import { styles } from './styles'

export const RegisterSecondStep = () => {
  const [setDataImage] = useRecognitionData()

  const onTakePhoto = (data: string) => {
    setDataImage(data)
  }

  return (
    <Wrapper style={styles.RegisterWrapper}>
      <Camera onTakePhoto={onTakePhoto} />
    </Wrapper>
  )
}
