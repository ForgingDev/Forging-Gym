import { FC } from 'react';
import HeroKPI from './HeroKPI';

const HeroKPIs: FC = () => {
  return (
    <div className='flex flex-wrap items-center gap-4 sm:gap-8'>
      <HeroKPI />
      <HeroKPI />
      <HeroKPI />
    </div>
  );
};

export default HeroKPIs;
