import { FC } from 'react';
import Hero from './(components)/Hero/Hero';
import OurPrograms from './(components)/OurPrograms/OurPrograms';
import WhyJoinUs from './(components)/WhyJoinUs/WhyJoinUs';

const Homepage: FC = () => {
  return (
    <div>
      <Hero />
      <WhyJoinUs />
      <OurPrograms />
    </div>
  );
};

export default Homepage;
