import { RouteProp, useRoute } from '@react-navigation/native';
import { CustomImageBackground } from '../components/atoms/CustomImageBackground';
import Background from '../assets/images/Background3.png';
import { Stack, Text, styled } from 'tamagui';

export const InfoInDay = () => {
  const route: RouteProp<{ params: { date: string } }, 'params'> = useRoute();
  const { date } = route.params;
  const Wrapper = styled(Stack, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  });

  const ItemWrapper = styled(Stack, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const data = [
    { title: 'Date:', value: date },
    { title: 'Check In At:', value: '8:00AM' },
    { title: 'Check Out At:', value: '6:00PM' },
    { title: 'Working Time:', value: '8 hours' },
  ];

  const CustomTitle = styled(Text, {
    fontSize: '$6',
    color: 'white',
    fontWeight: 'bold',
  });
  const CustomDes = styled(Text, {
    fontSize: '$6',
    color: 'white',
    fontWeight: '$400',
  });
  return (
    <CustomImageBackground source={Background}>
      <Wrapper>
        {data.map(item => (
          <ItemWrapper key={item.title}>
            <CustomTitle>{item.title}</CustomTitle>
            <CustomDes>{item.value}</CustomDes>
          </ItemWrapper>
        ))}
      </Wrapper>
    </CustomImageBackground>
  );
};
