import { useState } from 'react'
import { View } from 'react-native'
import {
  ExpandableCalendar,
  CalendarProvider,
  DateData,
} from 'react-native-calendars'
import moment from 'moment'
import { styles } from './styles'
import { navigate } from '../../../helpers/NavigateService'
import { routerNames } from '../../../routes/routerNames'

export const Calendar = () => {
  const [date, setDate] = useState<string>(
    moment(new Date()).format('YYYY-MM-DD'),
  )

  const handleOnPress = (d: DateData) => {
    setDate(d.dateString)
    //if (status === 'Success') {
    navigate(routerNames.INFO_IN_DAY, { date: d.dateString })
    //}
  }

  // const CustomWeekday = ({ day }: { day: any }) => {
  //   console.log('#Duy Phan console', day);
  //   return (
  //     <TouchableOpacity
  //       onPress={() => handleOnPress(day.date)}
  //       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  //     >
  //       <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#800080' }}>
  //         {day.children}
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <View style={styles.container}>
      <CalendarProvider date={date}>
        <ExpandableCalendar
          style={styles.knobContainer}
          allowShadow
          horizontal
          firstDay={1}
          onDayPress={handleOnPress}
          disablePan={true}
          calendarStyle={styles.calendar}
          //  dayComponent={d => <CustomWeekday day={d} />}
          markedDates={{
            [date]: {
              selected: true,
              marked: false,
              customContainerStyle: styles.knob,
              theme: {
                textDayStyle: styles.markedTextDay,
              },
              customStyles: {
                container: styles.knob,
                text: styles.markedText,
              },
            },
          }}
          markingType='custom'
        />
      </CalendarProvider>
    </View>
  )
}
