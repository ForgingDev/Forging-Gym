import { FC } from 'react';
import ClassesSchedule from './(components)/ClassesSchedule/ClassesSchedule';
import Hero from './(components)/Hero/Hero';
import OurPrograms from './(components)/OurPrograms/OurPrograms';
import WhyJoinUs from './(components)/WhyJoinUs/WhyJoinUs';

const Homepage: FC = () => {
  return (
    <div>
      <Hero />
      <WhyJoinUs />
      <ClassesSchedule />
      <OurPrograms />
    </div>
  );
};

export default Homepage;
