'use client';

import FGButton from '@/components/FGLibrary/FGButton';
import { LucidePlayCircle } from 'lucide-react';
import { Dialog } from 'primereact/dialog';
import { FC, useState } from 'react';

const HeroActions: FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className='flex gap-4'>
      <FGButton>Join Us Now</FGButton>
      <FGButton
        onClick={() => setShowVideo(true)}
        icon={<LucidePlayCircle />}
        className='bg-transparent visited:outline-none hover:text-primary-light focus:outline-none'>
        Watch Video
      </FGButton>
      <Dialog
        visible={showVideo}
        dismissableMask
        showHeader={false}
        className='aspect-video overflow-hidden rounded-lg md:w-2/3'
        contentClassName='p-0'
        onHide={() => setShowVideo(false)}>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/7e90gBu4pas?autoplay=1'
          title='Forging Gym Presentation'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </Dialog>
    </div>
  );
};

export default HeroActions;
