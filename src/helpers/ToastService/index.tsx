import { Toast } from '@tamagui/toast';
import { CreateNativeToastOptions } from '@tamagui/toast/src/types';
import { Component } from 'react';
import { TToastState } from './types';

export class ToastModule extends Component<any, TToastState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      open: false,
      id: '',
      options: {
        // type: EToastType.Success,
        message: '',
        duration: 0,
      },
    };
  }

  show = (title: string, options?: CreateNativeToastOptions) => {
    this.setState({
      ...this.state,
      title: title,
      open: true,
      id: Date.now().toString(),
      options: {
        message: options?.message ?? '',
        duration: options?.duration ?? 2000,
      },
    });
  };
  componentDidMount(): void {
    ToastService.setGlobal(this);
  }
  render() {
    const {
      id,
      open,
      title,
      options: { message, duration },
    } = this.state;
    return (
      <Toast open={open} key={id} duration={duration}>
        <Toast.Title fs={32} fow={'$700'}>
          {title}
        </Toast.Title>
        <Toast.Description fs={24} fow={'$400'}>
          {message}
        </Toast.Description>
      </Toast>
    );
  }
}

export class ToastService {
  static _globalModal: {
    show?(title?: string, options?: CreateNativeToastOptions): void;
  } = {};
  static setGlobal(g: any) {
    ToastService._globalModal = g;
  }
  static show(title: string, options?: CreateNativeToastOptions) {
    if (ToastService._globalModal?.show) {
      ToastService._globalModal.show(title, options);
    }
  }
}
