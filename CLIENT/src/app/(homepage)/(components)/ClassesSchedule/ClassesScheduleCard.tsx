import { DATE_FORMATS } from '@/data/constants';
import { ObjectsHelper } from '@/data/helpers/objects.helper';
import { cn } from '@/lib/utils';
import dayjs from 'dayjs';
import { User2 } from 'lucide-react';
import { FC } from 'react';
import { ScheduledClassModel } from './data/types/classes-schedule.types';
import { ClassesScheduleHelper } from './helpers/classes-schedule.helper';

type Props = ScheduledClassModel;

const ClassesScheduleCard: FC<Props> = ({
  capacity,
  category,
  endingTime,
  instructor,
  startingTime,
  title,
}) => {
  const { getCardBackgroundColor } = ClassesScheduleHelper;
  const { getEnumKeyAsString } = ObjectsHelper;

  const formattedStartingTime = dayjs(startingTime).format(
    DATE_FORMATS.HOUR_MINUTE
  );

  const formattedEndingTime = dayjs(endingTime).format(
    DATE_FORMATS.HOUR_MINUTE
  );

  const handleClick = () => {};

  return (
    <div
      onClick={handleClick}
      className={cn(
        'min-w-52 flex-1 cursor-pointer border-2 border-primary-dark bg-opacity-90 p-4 text-sm text-text-primary-normal transition-all hover:bg-opacity-100',
        getCardBackgroundColor(category.difficulty)
      )}>
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
      <button className='mt-3 w-full rounded-md bg-primary-normal bg-opacity-80 py-1.5 text-center text-white shadow-sm transition-all hover:bg-opacity-100'>
        Enroll Now
      </button>
    </div>
  );
};

export default ClassesScheduleCard;
