import { FC } from 'react';

const HeroKPI: FC = () => {
  return (
    <div className='flex items-center'>
      <div className='text-3xl font-bold sm:text-4xl'>3K</div>
      <div className='mx-2 block h-6 w-0.5 bg-primary-normal sm:h-8'></div>
      <div className='text-sm leading-tight sm:text-base'>
        Fitness <br /> Trainer
      </div>
    </div>
  );
};

export default HeroKPI;
