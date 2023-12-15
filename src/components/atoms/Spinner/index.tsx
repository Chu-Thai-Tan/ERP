import { SpinnerProps, Spinner as TamaguiSpinner } from 'tamagui';

export const Spinner: React.FC<SpinnerProps> = props => {
  return <TamaguiSpinner size="large" color="$green10" {...props} />;
};
