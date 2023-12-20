import { RouteProp, useRoute } from '@react-navigation/native'

import { Wrapper } from '../../components/atoms/Wrapper'
import { CustomDes, CustomTitle, ItemWrapper } from './styles'

export const InfoInDay = () => {
  const route: RouteProp<{ params: { date: string } }, 'params'> = useRoute()
  const { date } = route.params
  const data = [
    { title: 'Date:', value: date },
    { title: 'Check In At:', value: '8:00AM' },
    { title: 'Check Out At:', value: '6:00PM' },
    { title: 'Working Time:', value: '8 hours' },
  ]
  return (
    <Wrapper style={{ justifyContent: 'center' }}>
      {data.map(item => (
        <ItemWrapper key={item.title}>
          <CustomTitle>{item.title}</CustomTitle>
          <CustomDes>{item.value}</CustomDes>
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}
