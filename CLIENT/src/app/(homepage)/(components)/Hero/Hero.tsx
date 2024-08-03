import HeroImage from '@/lib/images/hero-wallpaper-2.webp';
import Image from 'next/image';
import { FC } from 'react';
import HeroActions from './HeroActions';
import HeroKPIs from './HeroKPIs/HeroKPIs';

const Hero: FC = () => {
  return (
    <section className='hero-container relative left-1/2 -mt-14 flex h-[80vh] min-h-[500px] w-screen -translate-x-1/2 transform flex-col justify-center'>
      <Image
        src={HeroImage}
        width={1920}
        height={1080}
        priority
        alt='Hero'
        className='absolute -z-10 h-full w-full transform object-cover object-center opacity-90 brightness-50 filter'
      />
      <div className='container mx-auto px-2 sm:px-4'>
        <div className='container max-w-screen-sm'>
          <div className='flex flex-col justify-center'>
            <h2 className='outline-text text-3xl font-semibold text-gray-800 md:text-4xl'>
              MAKE YOUR
            </h2>
            <h1 className='outline-text-dark my-4 text-5xl font-extrabold text-primary-normal md:my-6 md:text-7xl'>
              BODY SHAPE
            </h1>
            <p className='mb-6 text-sm font-medium text-text-primary sm:text-base'>
              Achieve your fitness goals with our state-of-the-art gym
              facilities and expert trainers. Join us to transform your body and
              mind
            </p>
          </div>
          <div className='flex flex-col space-y-10 md:space-y-16'>
            <HeroActions />
            <HeroKPIs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
