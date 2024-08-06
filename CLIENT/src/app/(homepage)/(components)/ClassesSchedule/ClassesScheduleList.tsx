import { FC } from 'react';
import ClassesScheduleCard from './ClassesScheduleCard';
import { ClassesScheduleHelper } from './helpers/classes-schedule.helper';

const ClassesScheduleList: FC = () => {
  const { getOrganisedClassesByDate } = ClassesScheduleHelper;

  return (
    <div className='flex'>
      {getOrganisedClassesByDate().map((item, index) => {
        const key = Object.keys(item)[0];
        const value = item[key];

        if (!value.length) {
          return (
            <div
              key={index}
              className='min-w-52 flex-1'></div>
          );
        }

        return (
          <div key={index}>
            {value.map(classItem => {
              if (classItem.id) {
                return (
                  <ClassesScheduleCard
                    key={classItem.id}
                    {...classItem}
                  />
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ClassesScheduleList;
