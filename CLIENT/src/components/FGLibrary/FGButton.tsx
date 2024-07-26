import { cn } from '@/lib/utils';
import { Button, ButtonProps } from 'primereact/button';
import { FC } from 'react';

type Props = ButtonProps;

const FGButton: FC<Props> = props => {
  return (
    <Button
      pt={{
        root: {
          className: cn(
            'gap-x-2 rounded bg-primary-normal bg-opacity-80 px-3 sm:px-4 py-1.5 sm:py-2 font-bold text-text-primary outline-primary-light transition-all hover:bg-opacity-100 focus:shadow-none focus:outline focus:outline-2 text-sm sm:text-base',
            props.className
          ),
        },
        ...props.pt,
      }}
      {...props}>
      {props.children}
    </Button>
  );
};

export default FGButton;
