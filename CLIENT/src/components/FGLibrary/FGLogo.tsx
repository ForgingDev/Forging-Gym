import Logo from '@/lib/images/forging-dev.jpg';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const FGLogo: FC<Props> = ({ size = 'md', className }) => {
  return (
    <Link href={ROUTES.HOME_ROUTE}>
      <Image
        src={Logo}
        alt='Forging Dev'
        width={100}
        height={100}
        className={cn(
          'object-center` cursor-pointer rounded-full object-cover',
          className,
          size === 'sm' && 'size-8',
          size === 'md' && 'size-10',
          size === 'lg' && 'size-14'
        )}
      />
    </Link>
  );
};

export default FGLogo;
