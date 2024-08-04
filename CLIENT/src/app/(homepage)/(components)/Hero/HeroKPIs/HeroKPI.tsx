import { FC } from 'react';

type Props = {
  title: string;
  value: string;
};

const HeroKPI: FC<Props> = ({ title, value }) => {
  const words = title.split(' ');

  return (
    <div className='flex items-center'>
      <div className='text-3xl font-bold sm:text-4xl'>{value}</div>
      <div className='mx-2 block h-6 w-0.5 bg-primary-normal sm:h-10'></div>
      <div className='text-sm leading-tight sm:text-base'>
        {words.map((word, index) => (
          <div key={index}>{word}</div>
        ))}
      </div>
    </div>
  );
};

export default HeroKPI;
