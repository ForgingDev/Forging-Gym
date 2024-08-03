import { FC } from 'react';
import ClassesSchedule from './(components)/ClassesSchedule/ClassesSchedule';
import Hero from './(components)/Hero/Hero';
import WhyJoinUs from './(components)/WhyJoinUs/WhyJoinUs';

const Homepage: FC = () => {
  return (
    <div>
      <Hero />
      <WhyJoinUs />
      <ClassesSchedule />
    </div>
  );
};

export default Homepage;
