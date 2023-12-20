import { forwardRef, Ref, useMemo } from 'react'
import { TamaguiElement } from 'tamagui'

import { Spinner } from '../Spinner'
import { CustomButton } from './styles'
import { TButtonProps } from './types'

export const Button = forwardRef(
  ({ isLoading = false, ...props }: TButtonProps, ref: Ref<TamaguiElement>) => {
    const renderLoadingState = useMemo(() => {
      if (isLoading) {
        return <Spinner size='small' />
      }
      return undefined
    }, [isLoading])
    return (
      <CustomButton
        icon={renderLoadingState}
        o={isLoading ? 0.5 : 1}
        ref={ref}
        {...props}
      />
    )
  },
)
