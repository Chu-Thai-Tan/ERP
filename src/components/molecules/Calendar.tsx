import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import moment from 'moment';

const CustomWeekday = ({ day }: { day: any }) => {
  console.log('#Duy Phan console', day);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }}>
        {day.children}
      </Text>
    </View>
  );
};

export const Calendar = () => {
  const [date, setDate] = useState<string>(
    moment(new Date()).format('YYYY-MM-DD'),
  );

  return (
    <View style={styles.container}>
      <CalendarProvider date={date}>
        <ExpandableCalendar
          style={styles.knobContainer}
          allowShadow
          horizontal
          hideArrows
          firstDay={1}
          disablePan={true}
          calendarStyle={styles.calendar}
          onDayPress={d => setDate(d.dateString)}
          //   dayComponent={(d) => <CustomWeekday  day={d}/>}
          //   renderHeader={date => <Text>11111</Text>}
          markedDates={{
            [date]: {
              selected: true,
              marked: false,
              customContainerStyle: styles.knob,
              theme: {
                textDayStyle: {
                  borderRadius: 0,
                },
              },
              customStyles: {
                container: styles.knob,
                text: {
                  color: 'white',
                  fontWeight: 'bold',
                },
              },
            },
          }}
          markingType="custom"
        />
      </CalendarProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 145,
    width: '100%',
  },
  knobContainer: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  knob: {
    width: 40,
    height: 30,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  calendar: {
    backgroundColor: 'transparent',
  },
  markedContainer: {
    borderRadius: 0,
    backgroundColor: 'yellow',
  },
});
