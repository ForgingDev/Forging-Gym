import { CLASSES, WEEK_DAYS_COUNT } from '@/data/constants';
import { DirectionsEnum } from '@/data/types/common.types';
import dayjs from 'dayjs';
import {
  ClassesScheduleType,
  ScheduledClassModel,
} from '../data/types/classes-schedule.types';

export const SCHEDULE_PERIOD = WEEK_DAYS_COUNT * 2;

/**
 * Scrolls to the next weekday container based on the given direction.
 *
 * @param {DirectionsEnum} direction - The direction to scroll.
 *                                     Use DirectionsEnum.LEFT to scroll to the first weekday,
 *                                     and DirectionsEnum.RIGHT to scroll to the last weekday.
 */
const scrollToNextWeekday = (direction: DirectionsEnum): void => {
  const weekdayContainer = document.getElementsByClassName('weekday-container');

  if (weekdayContainer.length === 0) {
    console.warn('No weekday containers found.');
    return;
  }

  const scrollOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'nearest',
  };

  if (direction === DirectionsEnum.LEFT) {
    weekdayContainer[0].scrollIntoView(scrollOptions);
  } else if (direction === DirectionsEnum.RIGHT) {
    weekdayContainer[weekdayContainer.length - 1].scrollIntoView(scrollOptions);
  } else {
    console.warn('Invalid direction provided.');
  }
};

/**
 * Generates an array of weekdays starting from the most recent Monday.
 * Each weekday includes the date and the name of the day.
 *
 * @returns {ClassesScheduleType[]} An array of objects representing the weekdays.
 */
const getCurrentWeekDays = (): ClassesScheduleType[] => {
  const weekdays: ClassesScheduleType[] = [];
  const today = dayjs();
  const lastMonday =
    today.day() === 1 ? today : today.subtract(today.day() - 1, 'day');

  for (let i = 0; i < SCHEDULE_PERIOD; i++) {
    const currentDay = lastMonday.add(i, 'day');
    const date = currentDay.format('DD MMM');
    const name = currentDay.format('dddd');

    weekdays.push({ date, name });
  }

  return weekdays;
};

/**
 * Organizes classes by date for the current week.
 *
 * @returns {Array<{ [key: string]: ScheduledClassModel[] }>} An array of objects where each object
 * represents a date and its corresponding scheduled classes.
 */
const getOrganisedClassesByDate = (): {
  [key: string]: ScheduledClassModel[];
}[] => {
  const organisedClassesByDate: { [key: string]: ScheduledClassModel[] }[] = [];
  const currentWeekDays = getCurrentWeekDays();

  currentWeekDays.forEach(weekday => {
    const classesForDate: ScheduledClassModel[] = [];

    CLASSES.forEach(classItem => {
      const classDate = dayjs(classItem.startingTime).format('DD MMM');
      if (classDate === weekday.date) {
        classesForDate.push(classItem);
      }
    });

    organisedClassesByDate.push({ [weekday.date]: classesForDate });
  });

  return organisedClassesByDate;
};

export const ClassesScheduleHelper = {
  getCurrentWeekDays,
  scrollToNextWeekday,
  getOrganisedClassesByDate,
};
