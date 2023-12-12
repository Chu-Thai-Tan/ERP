import { ImageBackground, ImageBackgroundProps } from 'react-native';

export const CustomImageBackground: React.FC<ImageBackgroundProps> = props => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        //justifyContent: 'center',
      }}
      {...props}
    />
  );
};
