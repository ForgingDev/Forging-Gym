import { FC } from 'react';
import HeroKPI from './HeroKPI';

const HeroKPIs: FC = () => {
  return (
    <div className='flex flex-wrap items-center gap-4 sm:gap-8'>
      <HeroKPI
        title='Fitness Trainer'
        value='3K'
      />
      <HeroKPI
        title='GYM Equipment'
        value='200'
      />
      <HeroKPI
        title='Happy Customers'
        value='5K'
      />
    </div>
  );
};

export default HeroKPIs;
