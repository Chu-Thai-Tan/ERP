import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Props as FAProps } from '@fortawesome/react-native-fontawesome'
import { TextInputProps } from 'react-native'
import { InputProps } from 'tamagui'

export type TIconInputProps = InputProps &
  TextInputProps & {
    icon: IconProp
    iconProps?: FAProps
  }
