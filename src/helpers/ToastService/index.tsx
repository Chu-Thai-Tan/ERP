import { CreateNativeToastOptions } from '@tamagui/toast/src/types'
import { Component } from 'react'
import { EToastType, TToastOptions, TToastState } from './types'
import { Icon } from '../../components/atoms/Icon'
import {
  CustomToastDescription as ToastDescription,
  CustomToast as Toast,
} from './styles'
export class ToastModule extends Component<any, TToastState> {
  constructor(props: any) {
    super(props)
    this.state = {
      open: false,
      id: '',
      options: {
        type: EToastType.Success,
        message: '',
        duration: 0,
      },
    }
  }

  show = (options: TToastOptions) => {
    this.setState({
      ...this.state,
      open: true,
      id: Date.now().toString(),
      options: {
        message: options?.message ?? '',
        duration: options?.duration ?? 2000,
        type: options?.type ?? EToastType.Success,
      },
    })
  }
  componentDidMount(): void {
    ToastService.setGlobal(this)
  }
  render() {
    const {
      id,
      open,
      options: { message, duration, type },
    } = this.state

    const renderToastIcon = () => {
      if (type === EToastType.Error) {
        return <Icon icon={'circle-check'} color='#34A853' />
      }
      return <Icon icon={'circle-exclamation'} color='#EA4335' />
    }
    return (
      <Toast open={open} key={id} duration={duration}>
        {renderToastIcon()}
        <ToastDescription>{message}</ToastDescription>
      </Toast>
    )
  }
}

export class ToastService {
  static _globalModal: {
    show?(options: CreateNativeToastOptions): void
  } = {}
  static setGlobal(g: any) {
    ToastService._globalModal = g
  }
  static show(options: CreateNativeToastOptions) {
    if (ToastService._globalModal?.show) {
      ToastService._globalModal.show(options)
    }
  }
}
