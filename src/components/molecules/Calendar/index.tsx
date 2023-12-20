import moment from 'moment'
import { useMemo, useState } from 'react'
import { View } from 'react-native'
import { Calendar as CustomCalendar, DateData } from 'react-native-calendars'

import { navigate } from '../../../helpers/NavigateService'
import { routerNames } from '../../../routes/routerNames'
import { styles } from './styles'

export const Calendar = () => {
  const [date, setDate] = useState<string>(
    moment(new Date()).format('YYYY-MM-DD'),
  )

  const handleOnPress = (d: DateData) => {
    setDate(d.dateString)
    // if (status === 'Success') {
    navigate(routerNames.INFO_IN_DAY, { date: d.dateString })
    // }
  }

  const marked = useMemo(
    () => ({
      [date]: {
        selected: true,
        mark: true,
        selectedColor: '#DA70D6',
        selectedTextColor: '#800080',
      },
    }),
    [date],
  )

  return (
    <View style={styles.container}>
      <CustomCalendar
        markingType='dot'
        markedDates={marked}
        onDayPress={handleOnPress}
        theme={{
          monthTextColor: '#800080',
          textMonthFontSize: 20,
          textMonthFontWeight: 'bold',
          textSectionTitleColor: '#800080',
        }}
      />
    </View>
  )
}
