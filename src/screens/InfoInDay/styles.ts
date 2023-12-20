import { Stack, styled, Text } from 'tamagui'

export const ItemWrapper = styled(Stack, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
})

export const CustomTitle = styled(Text, {
  fontSize: '$6',
  color: '#800080',
  fontWeight: 'bold',
})
export const CustomDes = styled(Text, {
  fontSize: '$6',
  color: '#800080',
  fontWeight: '$400',
})
