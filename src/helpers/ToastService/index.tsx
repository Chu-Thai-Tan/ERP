import { Toast } from '@tamagui/toast';
import { CreateNativeToastOptions } from '@tamagui/toast/src/types';
import { Component } from 'react';
import { EToastType, TToastOptions, TToastState } from './types';
import { Icon } from '../../components/atoms/Icon';
import { Stack } from 'tamagui';
export class ToastModule extends Component<any, TToastState> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      id: '',
      options: {
        type: EToastType.Success,
        message: '',
        duration: 0,
      },
    };
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
    });
  };
  componentDidMount(): void {
    ToastService.setGlobal(this);
  }
  render() {
    const {
      id,
      open,
      options: { message, duration, type },
    } = this.state;

    const renderToastIcon = () => {
      if (type === EToastType.Error) {
        return <Icon icon={'circle-check'} color="#34A853" />;
      }
      return <Icon icon={'circle-exclamation'} color="#EA4335" />;
    };
    return (
      <Toast
        open={open}
        key={id}
        duration={duration}
        fd={'row'}
        gap={'$2'}
        ai={'center'}
        paddingHorizontal="$4"
        shadowColor="#000"
        shadowOffset={{
          width: 0,
          height: 2,
        }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        elevation={5}
      >
        {renderToastIcon()}
        <Toast.Description size={'$4'} fow={'$400'} col={'#0F0F0F'}>
          {message}
        </Toast.Description>
      </Toast>
    );
  }
}

export class ToastService {
  static _globalModal: {
    show?(options: CreateNativeToastOptions): void;
  } = {};
  static setGlobal(g: any) {
    ToastService._globalModal = g;
  }
  static show(options: CreateNativeToastOptions) {
    if (ToastService._globalModal?.show) {
      ToastService._globalModal.show(options);
    }
  }
}
