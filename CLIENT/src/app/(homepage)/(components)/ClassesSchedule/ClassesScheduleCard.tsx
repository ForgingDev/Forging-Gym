import { DATE_FORMATS } from '@/data/constants';
import dayjs from 'dayjs';
import { User2 } from 'lucide-react';
import { FC } from 'react';
import { ScheduledClassModel } from './data/types/classes-schedule.types';

type Props = ScheduledClassModel;

const ClassesScheduleCard: FC<Props> = ({
  capacity,
  category,
  endingTime,
  instructor,
  startingTime,
  title,
}) => {
  const formattedStartingTime = dayjs(startingTime).format(
    DATE_FORMATS.HOUR_MINUTE
  );
  const formattedEndingTime = dayjs(endingTime).format(
    DATE_FORMATS.HOUR_MINUTE
  );

  return (
    <div className='min-w-52 flex-1 border-2 border-primary-dark bg-purple-300 p-4 text-sm text-text-primary-normal'>
      <div className='flex items-center justify-between font-semibold'>
        <p>
          {formattedStartingTime} - {formattedEndingTime}
        </p>
        <p className='flex items-center'>
          <User2 size={15} /> {capacity}
        </p>
      </div>
      <h5 className='my-1 break-all text-base font-bold'>{title}</h5>
      <p>{instructor.name}</p>
      <p>{category.name}</p>
      <button className='mt-2 w-full rounded-sm bg-purple-500 py-1 text-center text-white shadow-sm'>
        Enroll Now
      </button>
    </div>
  );
};

export default ClassesScheduleCard;
