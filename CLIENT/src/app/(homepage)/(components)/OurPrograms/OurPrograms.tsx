import { OUR_PROGRAMS_ITEMS } from '@/data/constants';
import { ourProgramsType } from '@/data/types/ourPrograms';
import { FC } from 'react';

const OurPrograms: FC = () => {
  return (
    <div className='space-y-6 pb-16'>
      <div className='md:text-5xl" text-center text-4xl font-bold'>
        <span className='outline-text text-gray-800'>Our</span>{' '}
        <span className='text-primary-normal'>Programs</span>
      </div>
      <div className='mx-4 flex flex-wrap space-y-6'>
        {OUR_PROGRAMS_ITEMS.map((item: ourProgramsType) => {
          return (
            <div
              key={item.title}
              className='flex max-w-xs flex-col items-center space-y-6 rounded-2xl border-2 border-primary-normal p-4 text-center'>
              <div className='rounded-full border-2 border-primary-normal p-12'>
                <item.icon
                  className='size-12 text-xl'
                  aria-hidden='true'
                />
              </div>
              <div className='text-xl font-bold'>{item.title}</div>
              <div className='text-slate-100'>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurPrograms;
