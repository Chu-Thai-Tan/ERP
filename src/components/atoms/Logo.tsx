import { Image } from 'tamagui';
import Logo from '../../assets/images/Logo.png';

export const LogoApp = () => {
  const ImgageProp = {
    marginBottom: 60,
    width: '59%',
    height: 38,
    source: Logo,
    alt: 'Logo',
  };

  return <Image {...ImgageProp} />;
};
