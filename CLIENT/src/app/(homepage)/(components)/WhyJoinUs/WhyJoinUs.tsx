import GymImage from '@/lib/images/victor-freitas-KkYWWpurqbE-unsplash.jpg';
import Image from 'next/image';
import { FC } from 'react';

const WhyJoinUs: FC = () => {
  return (
    <section>
      <div className='relative mx-auto flex flex-col items-stretch gap-x-6 md:flex-row'>
        <div className='mb-8 w-full md:mb-0 md:w-2/3'>
          <Image
            width={500}
            height={500}
            src={GymImage}
            alt='gym-image'
            className='why-join-us-image h-full max-h-80 w-full rounded-md object-cover object-center md:max-h-max'
          />
        </div>
        <div className='flex w-full flex-col justify-center gap-y-6 md:w-1/2 md:gap-y-10'>
          <h2 className='text-4xl font-bold md:text-5xl'>
            <span className='outline-text text-text-primary-normal'>WHY</span>{' '}
            <span className='text-primary-normal'>JOIN US?</span>
          </h2>
          <div className='transform md:-translate-x-8'>
            <h3 className='mb-1 text-2xl font-semibold text-primary-normal'>
              PROFESSIONAL TRAINER
            </h3>
            <p className='text-text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              quam tellus aliquet nec risus adipiscing.
            </p>
          </div>
          <div className='transform md:-translate-x-16'>
            <h3 className='mb-1 text-2xl font-semibold text-primary-normal'>
              GOOD MANAGEMENT
            </h3>
            <p className='text-text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              quam tellus aliquet nec risus adipiscing.
            </p>
          </div>
          <div className='transform md:-translate-x-24'>
            <h3 className='mb-1 text-2xl font-semibold text-primary-normal'>
              PRACTICE VIDEOS
            </h3>
            <p className='text-text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              quam tellus aliquet nec risus adipiscing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
