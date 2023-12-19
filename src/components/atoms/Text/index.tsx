import { TextProps } from 'tamagui'
import { CustomText } from './styles'

export const Text: React.FC<TextProps> = props => {
  return <CustomText {...props} />
}
