import { Image, ImageProps } from 'tamagui';
import Logo from '../../assets/images/Logo.png';

export const LogoApp = () => {
  const ImgageProp: ImageProps = {
    marginBottom: 60,
    width: '59%',
    height: 38,
    source: Logo,
    alt: 'Logo',
    style: { objectFit: 'contain' },
  };

  return <Image {...ImgageProp} />;
};
