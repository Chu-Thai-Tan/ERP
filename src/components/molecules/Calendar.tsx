import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  ExpandableCalendar,
  CalendarProvider,
  DateData,
} from 'react-native-calendars';
import moment from 'moment';
import { navigate } from '../../helpers/NavigateService';
import { useSelector } from 'react-redux';
import { faceApiStatus, faceResponse } from '../../store/checkin/selectors';
import { Button } from 'tamagui';

export const Calendar = () => {
  const [date, setDate] = useState<string>(
    moment(new Date()).format('YYYY-MM-DD'),
  );

  const status = useSelector(faceApiStatus);
  const response = useSelector(faceResponse);

  const handleOnPress = (d: DateData) => {
    setDate(d.dateString);
    //if (status === 'Success') {
    navigate('InfoInDay', { date: d.dateString });
    //}
  };

  const CustomWeekday = ({ day }: { day: any }) => {
    console.log('#Duy Phan console', day);
    return (
      <TouchableOpacity
        onPress={() => handleOnPress(day.date)}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#800080' }}>
          {day.children}
        </Text>
      </TouchableOpacity>
    );
  };

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
                textDayStyle: {
                  borderRadius: 0,
                },
              },
              customStyles: {
                container: styles.knob,
                text: {
                  color: '#800080',
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
    backgroundColor: 'transparent',
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
    backgroundColor: '#DA70D6',
  },
  calendar: {
    backgroundColor: 'transparent',
  },
  markedContainer: {
    borderRadius: 0,
    backgroundColor: 'yellow',
  },
});
