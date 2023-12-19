import { Image, ImageProps } from 'tamagui'
import { CustomImageProps } from './styles'

export const Logo: React.FC<ImageProps> = props => {
  return <Image {...CustomImageProps} {...props} />
}
