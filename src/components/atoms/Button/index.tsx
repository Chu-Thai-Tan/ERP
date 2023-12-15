import { ButtonProps } from 'tamagui';
import { CustomButton } from './styles';

export const Button: React.FC<ButtonProps> = props => {
  return <CustomButton {...props} />;
};
