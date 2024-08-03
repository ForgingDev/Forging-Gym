import { FC } from 'react';
import { OurProgramsType } from './data/types/our-programs.types';

type Props = {
  item: OurProgramsType;
};

const OurProgramsCard: FC<Props> = ({ item }) => {
  const { title, description } = item;

  return (
    <div
      key={title}
      className='flex max-h-fit cursor-pointer flex-col items-center space-y-6 rounded-2xl border-2 border-primary-normal p-4 text-center transition-all hover:scale-105 hover:border-white hover:bg-background-dark-red sm:w-[45%] lg:w-[30%] xl:w-[23%]'>
      <div className='rounded-full border-2 border-primary-normal p-12'>
        <item.icon className='size-12 text-xl xl:size-16' />
      </div>
      <div className='text-xl font-bold'>{title}</div>
      <div className='text-text-secondary'>{description}</div>
    </div>
  );
};

export default OurProgramsCard;
