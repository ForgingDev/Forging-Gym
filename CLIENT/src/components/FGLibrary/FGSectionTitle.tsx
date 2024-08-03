import { FC } from 'react';

type Props = {
  highlightedText: string;
  normalText: string;
};

const FGSectionTitle: FC<Props> = ({ highlightedText, normalText }) => {
  return (
    <h3 className='text-center text-4xl font-bold md:text-5xl'>
      <span className='outline-text text-gray-800'>{highlightedText}</span>{' '}
      <span className='text-primary-normal'>{normalText}</span>
    </h3>
  );
};

export default FGSectionTitle;
