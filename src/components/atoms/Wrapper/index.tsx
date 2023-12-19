import { StackProps } from 'tamagui'
import { CustomWrapper } from './styles'

export const Wrapper: React.FC<StackProps> = props => {
  return <CustomWrapper {...props} />
}
