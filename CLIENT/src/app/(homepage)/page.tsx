import { FC } from 'react';
import Hero from './(components)/Hero/Hero';
import WhyJoinUs from './(components)/WhyJoinUs/WhyJoinUs';

const Homepage: FC = () => {
  return (
    <div>
      <Hero />
      <WhyJoinUs />
    </div>
  );
};

export default Homepage;
