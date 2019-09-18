import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';

import AppScreen from '../../components/AppScreen';
import Colors from '../../ui/constants/colors';
import AppText from '../../components/AppText';

const screenState = {
  LIST: 'LIST',
  DETAILS: 'DETAILS',
};
const listState = {
  THIS_WEEK: 'THIS_WEEK',
  LAST_WEEK: 'LAST_WEEK',
  OLDER: 'OLDER',
};
const detailsState = {
  SLEEP_STAGES: 'SLEEP_STAGES',
  HEART_RATE: 'HEART_RATE',
  MOVEMENT: 'MOVEMENT',
};

export default class StatsScreen extends React.Component {
  state = {
    selected: {},
    keySelected: null,
    allSleepDays: {
      1: {
        day: 'Saturday',
        date: '31st August 2019',
        week: 'this_week',
        duration: '8:21',
        rem_sleep: '1:23',
        nrem_sleep: '3:23',
        light_sleep: '5:23',
        awake_percentage: '27%',
        rem_percentage: '55%',
        nrem_percentage: '35%',
        light_percentage: '78%',
        heart_rate: {
          lowest: 43,
          av: 56,
          highest: 66,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      2: {
        day: 'Friday',
        date: '30th August 2019',
        week: 'this_week',
        duration: '6:55',
        rem_sleep: '1:34',
        nrem_sleep: '2:23',
        light_sleep: '3:23',
        awake_percentage: '67%',
        rem_percentage: '89%',
        nrem_percentage: '66%',
        light_percentage: '48%',
        heart_rate: {
          lowest: 33,
          av: 54,
          highest: 76,
          data: [34, 46, 78, 76, 34, 46, 48, 23, 37, 48],
        },
      },
      3: {
        day: 'Thursday',
        date: '29th August 2019',
        week: 'this_week',
        duration: '7:12',
        rem_sleep: '2:43',
        nrem_sleep: '3:23',
        light_sleep: '2:23',
        awake_percentage: '56%',
        rem_percentage: '90%',
        nrem_percentage: '52%',
        light_percentage: '12%',
        heart_rate: {
          lowest: 43,
          av: 56,
          highest: 66,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      4: {
        day: 'Saturday',
        date: '24th August 2019',
        week: 'last_week',
        duration: '7:38',
        rem_sleep: '2:45',
        nrem_sleep: '3:23',
        light_sleep: '2:23',
        awake_percentage: '36%',
        rem_percentage: '40%',
        nrem_percentage: '32%',
        light_percentage: '52%',
        heart_rate: {
          lowest: 43,
          av: 54,
          highest: 63,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      5: {
        day: 'Friday',
        date: '23th August 2019',
        week: 'last_week',
        duration: '7:05',
        rem_sleep: '1:19',
        nrem_sleep: '2:18',
        light_sleep: '3:33',
        awake_percentage: '89%',
        rem_percentage: '78%',
        nrem_percentage: '32%',
        light_percentage: '72%',
        heart_rate: {
          lowest: 53,
          av: 56,
          highest: 62,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      6: {
        day: 'Thursday',
        date: '22nd August 2019',
        week: 'last_week',
        duration: '5:43',
        rem_sleep: '1:23',
        nrem_sleep: '1:02',
        light_sleep: '1:45',
        awake_percentage: '5%',
        rem_percentage: '39%',
        nrem_percentage: '27%',
        light_percentage: '29%',
        heart_rate: {
          lowest: 43,
          av: 56,
          highest: 66,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      7: {
        day: 'Sunday',
        date: '18th August 2019',
        week: 'older',
        duration: '8:21',
        rem_sleep: '1:23',
        nrem_sleep: '3:23',
        light_sleep: '5:23',
        awake_percentage: '67%',
        rem_percentage: '45%',
        nrem_percentage: '24%',
        light_percentage: '78%',
        heart_rate: {
          lowest: 43,
          av: 56,
          highest: 66,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      8: {
        day: 'Saturday',
        date: '17th August 2019',
        week: 'older',
        duration: '6:55',
        rem_sleep: '1:34',
        nrem_sleep: '2:23',
        light_sleep: '3:23',
        awake_percentage: '68%',
        rem_percentage: '36%',
        nrem_percentage: '13%',
        light_percentage: '45%',
        heart_rate: {
          lowest: 45,
          av: 54,
          highest: 61,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      9: {
        day: 'Friday',
        date: '16th August 2019',
        week: 'older',
        duration: '7:12',
        rem_sleep: '2:43',
        nrem_sleep: '3:23',
        light_sleep: '2:23',
        awake_percentage: '18%',
        rem_percentage: '33%',
        nrem_percentage: '63%',
        light_percentage: '25%',
        heart_rate: {
          lowest: 43,
          av: 57,
          highest: 62,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      10: {
        day: 'Thursday',
        date: '15th August 2019',
        week: 'older',
        duration: '8:21',
        rem_sleep: '1:23',
        nrem_sleep: '3:23',
        light_sleep: '5:23',
        awake_percentage: '23%',
        rem_percentage: '46%',
        nrem_percentage: '73%',
        light_percentage: '25%',
        heart_rate: {
          lowest: 46,
          av: 56,
          highest: 69,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      11: {
        day: 'Wednesday',
        date: '14th August 2019',
        week: 'older',
        duration: '6:55',
        rem_sleep: '1:34',
        nrem_sleep: '2:23',
        light_sleep: '3:23',
        awake_percentage: '48%',
        rem_percentage: '32%',
        nrem_percentage: '23%',
        light_percentage: '85%',
        heart_rate: {
          lowest: 49,
          av: 52,
          highest: 62,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      12: {
        day: 'Tuesday',
        date: '13th August 2019',
        week: 'older',
        duration: '7:12',
        rem_sleep: '2:43',
        nrem_sleep: '3:23',
        light_sleep: '2:23',
        awake_percentage: '61%',
        rem_percentage: '49%',
        nrem_percentage: '28%',
        light_percentage: '45%',
        heart_rate: {
          lowest: 47,
          av: 51,
          highest: 63,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      13: {
        day: 'Monday',
        date: '12th August 2019',
        week: 'older',
        duration: '8:21',
        rem_sleep: '1:23',
        nrem_sleep: '3:23',
        light_sleep: '5:23',
        awake_percentage: '38%',
        rem_percentage: '28%',
        nrem_percentage: '72%',
        light_percentage: '19%',
        heart_rate: {
          lowest: 43,
          av: 52,
          highest: 63,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      14: {
        day: 'Sunday',
        date: '11th August 2019',
        week: 'older',
        duration: '6:55',
        rem_sleep: '1:34',
        nrem_sleep: '2:23',
        light_sleep: '3:23',
        awake_percentage: '38%',
        rem_percentage: '48%',
        nrem_percentage: '16%',
        light_percentage: '25%',
        heart_rate: {
          lowest: 43,
          av: 56,
          highest: 66,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
      15: {
        day: 'Saturday',
        date: '10th August 2019',
        week: 'older',
        duration: '7:12',
        rem_sleep: '2:43',
        nrem_sleep: '3:23',
        light_sleep: '2:23',
        awake_percentage: '22%',
        rem_percentage: '38%',
        nrem_percentage: '57%',
        light_percentage: '15%',
        heart_rate: {
          lowest: 48,
          av: 56,
          highest: 66,
          data: [56, 34, 67, 76, 34, 46, 78, 42, 33, 78],
        },
      },
    },
  };

  render() {
    return (
      <AppScreen>
        <View style={styles.container}>
          <AppText>Stats Screen</AppText>
        </View>
      </AppScreen>
    );
  }

  isThisWeek = () => this.state.listState === listState.THIS_WEEK;
  isLastWeek = () => this.state.listState === listState.LAST_WEEK;
  isOlder = () => this.state.listState === listState.OLDER;

  isSleepStages = () => this.state.detailsState === detailsState.SLEEP_STAGES;
  isHeartRate = () => this.state.detailsState === detailsState.HEART_RATE;
  isMovement = () => this.state.detailsState === detailsState.MOVEMENT;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
