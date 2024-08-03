import { OUR_PROGRAMS_ITEMS } from '@/data/constants';
import { FC } from 'react';
import { OurProgramsType } from './data/types/our-programs.types';
import OurProgramsCard from './OurProgramsCard';

const OurPrograms: FC = () => {
  return (
    <section className='space-y-16'>
      {/* Update to <FGSectionTitle /> when feature/forge-18 merges */}
      <div className='text-center text-4xl font-bold md:text-5xl'>
        <span className='outline-text text-text-primary-normal'>Our</span>{' '}
        <span className='text-primary-normal'>Programs</span>
      </div>
      <div className='mx-4 flex flex-wrap justify-center gap-6 md:mx-0 lg:justify-between'>
        {OUR_PROGRAMS_ITEMS.map((item: OurProgramsType) => (
          <OurProgramsCard
            key={item.title}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;
