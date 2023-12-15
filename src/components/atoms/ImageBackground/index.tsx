import { ImageBackground, ImageBackgroundProps } from 'react-native';
import { styles } from './styles';

export const CustomImageBackground: React.FC<ImageBackgroundProps> = props => {
  return (
    <ImageBackground resizeMode="cover" style={styles.background} {...props} />
  );
};
