import { ImageBackground } from 'react-native';
import Background from '../../assets/images/Background.png';

export const CustomImageBackground = (props: any) => {
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </ImageBackground>
  );
};
