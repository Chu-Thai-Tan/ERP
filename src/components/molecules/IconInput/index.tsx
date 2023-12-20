import { forwardRef } from 'react'
import { View } from 'tamagui'

import { Icon } from '../../atoms/Icon'
import { Input } from '../../atoms/Input'
import { TIconInputProps } from './types'

export const IconInput = forwardRef(
  ({ icon, iconProps, ...inputProps }: TIconInputProps, ref: any) => {
    return (
      <View w={'80%'}>
        <View pos='absolute' t='$4' l='$2.5'>
          <Icon icon={icon} color='#800080' {...iconProps} />
        </View>
        <Input
          containerProps={{ style: { width: '100%' } }}
          ref={ref}
          {...inputProps}
        />
      </View>
    )
  },
)
