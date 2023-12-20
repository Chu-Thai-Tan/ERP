import { useSelector } from 'react-redux'

import { Button } from '../../components/atoms/Button'
import { Text } from '../../components/atoms/Text'
import { Wrapper } from '../../components/atoms/Wrapper'
import { Calendar } from '../../components/molecules/Calendar'
import { Clock } from '../../components/molecules/Clock'
import { navigate } from '../../helpers/NavigateService'
import { routerNames } from '../../routes/routerNames'
import { useAppDispatch } from '../../store'
import { faceApiStatus, faceResponse } from '../CheckIn/store/selectors'
import { recognize } from '../CheckIn/store/slice'
import { logout } from '../Login/store/slice'

export const Home = () => {
  const dispatch = useAppDispatch()
  const status = useSelector(faceApiStatus)
  const response = useSelector(faceResponse)

  const handleCheckIn = () => {
    navigate(routerNames.CHECK_IN)
  }

  const handleCheckOut = () => {
    dispatch(
      recognize({
        status: 'NotCheckedIn',
        response: null,
      }),
    )
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  const renderCheckIn = () => {
    switch (status) {
      case 'Success':
        return (
          <>
            <Text fow={'$normal'}>Hi {response?.subject ?? 'User'}!</Text>
            <Clock />
            <Button onPress={handleCheckOut}>
              <Text mt={0}>Check Out</Text>
            </Button>
          </>
        )
      default:
        return (
          <Button onPress={handleCheckIn}>
            <Text mt={0}>Check In</Text>
          </Button>
        )
    }
  }

  return (
    <Wrapper>
      <Calendar />
      <Wrapper display={'flex'} justifyContent={'center'}>
        {renderCheckIn()}
        <Button onPress={logoutHandler}>
          <Text>Log Out</Text>
        </Button>
      </Wrapper>
    </Wrapper>
  )
}
