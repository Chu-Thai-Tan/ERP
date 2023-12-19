import { ImageProps } from 'tamagui'

export const CustomImageProps: Omit<ImageProps, 'source'> = {
  marginBottom: 60,
  width: '59%',
  height: 38,
  alt: 'Logo',
  style: { objectFit: 'contain' },
}
