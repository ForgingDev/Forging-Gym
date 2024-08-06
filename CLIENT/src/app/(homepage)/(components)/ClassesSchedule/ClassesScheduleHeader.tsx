import { FC } from 'react';
import { ClassesScheduleHelper } from './helpers/classes-schedule.helper';

const ClassesScheduleHeader: FC = () => {
  const { getCurrentWeekDays } = ClassesScheduleHelper;

  return (
    <div className='flex'>
      {getCurrentWeekDays().map(weekday => (
        <div
          key={weekday.date}
          className='weekday-container min-w-52 flex-1 select-none border-2 border-primary-dark bg-zinc-800 p-2 text-center text-text-primary shadow-md'>
          <div className='font-semibold uppercase'>{weekday.name}</div>
          <div className='text-sm'>{weekday.date}</div>
        </div>
      ))}
    </div>
  );
};

export default ClassesScheduleHeader;
