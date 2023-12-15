import RNFS from 'react-native-fs';

export const convertImageToBase64 = async (url: string) => {
  const filepath = url.split('//')[1];
  const base64 = await RNFS.readFile(filepath, 'base64');
  return base64;
};
