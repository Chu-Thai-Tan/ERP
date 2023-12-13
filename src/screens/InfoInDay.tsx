import { RouteProp, useRoute } from '@react-navigation/native';
import { Stack, Text, styled } from 'tamagui';
import { CustomWrapper } from '../components/atoms/CustomWrapper';

export const InfoInDay = () => {
  const route: RouteProp<{ params: { date: string } }, 'params'> = useRoute();
  const { date } = route.params;

  const ItemWrapper = styled(Stack, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  });

  const data = [
    { title: 'Date:', value: date },
    { title: 'Check In At:', value: '8:00AM' },
    { title: 'Check Out At:', value: '6:00PM' },
    { title: 'Working Time:', value: '8 hours' },
  ];

  const CustomTitle = styled(Text, {
    fontSize: '$6',
    color: '#800080',
    fontWeight: 'bold',
  });
  const CustomDes = styled(Text, {
    fontSize: '$6',
    color: '#800080',
    fontWeight: '$400',
  });
  return (
    <CustomWrapper style={{ justifyContent: 'center' }}>
      {data.map(item => (
        <ItemWrapper key={item.title}>
          <CustomTitle>{item.title}</CustomTitle>
          <CustomDes>{item.value}</CustomDes>
        </ItemWrapper>
      ))}
    </CustomWrapper>
  );
};
