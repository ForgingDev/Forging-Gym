import FGButton from '@/components/FGLibrary/FGButton';
import { LucidePlayCircle } from 'lucide-react';
import { FC } from 'react';

const HeroActions: FC = () => {
  return (
    <div className='flex gap-4'>
      <FGButton>Join Us Now</FGButton>
      <FGButton
        icon={<LucidePlayCircle />}
        className='bg-transparent hover:text-primary-light'>
        Watch Video
      </FGButton>
    </div>
  );
};

export default HeroActions;
