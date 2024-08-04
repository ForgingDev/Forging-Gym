import {
  SidebarItemType,
  SubSidebarItemType,
} from '@/data/types/sidebar.types';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import FGTooltip from '../../FGTooltip';
import FGSubSidebarItem from './FGSubSidebarItem';

type Props = {
  item: SidebarItemType;
  isNavbarItemSelected: boolean;
  handleNavItemClick: (label: string) => void;
};

const FGSidebarItem: FC<Props> = ({
  item,
  isNavbarItemSelected,
  handleNavItemClick,
}) => {
  const hasSubItems = !!item.subItems.length;

  return (
    <div className='flex flex-col'>
      {item.url ? (
        <Link
          className={cn(
            'flex items-center justify-between gap-x-3 rounded-lg px-2.5 py-2.5 text-zinc-300 transition-all',
            {
              'bg-zinc-700 text-text-primary shadow-sm': isNavbarItemSelected,
              'hover:bg-zinc-700/50 hover:text-text-primary hover:shadow-sm':
                !isNavbarItemSelected,
            }
          )}
          href={item.url}>
          <div className='flex items-center gap-x-2'>
            <item.icon className='p-0.5' />
            <div>{item.label}</div>
          </div>
        </Link>
      ) : (
        <div
          onClick={() => handleNavItemClick(item.label)}
          className={cn(
            'flex cursor-pointer items-center justify-between gap-x-3 rounded-lg px-2.5 py-2.5 text-zinc-300 transition-all',
            {
              'bg-zinc-700 text-text-primary shadow-sm': isNavbarItemSelected,
              'hover:bg-zinc-700/50 hover:text-text-primary hover:shadow-sm':
                !isNavbarItemSelected,
            }
          )}>
          <div className='flex items-center gap-x-2'>
            <item.icon className='p-0.5' />
            <div>{item.label}</div>
          </div>
          {hasSubItems ? (
            isNavbarItemSelected ? (
              <>
                <ChevronUp
                  id='chevron'
                  aria-label='close-sub-items'
                />
                <FGTooltip
                  target='#chevron'
                  content='show less'
                />
              </>
            ) : (
              <>
                <ChevronDown
                  id='chevron'
                  aria-label='open-sub-items'
                />
                <FGTooltip
                  target='#chevron'
                  content='show more'
                />
              </>
            )
          ) : null}
        </div>
      )}
      <div
        className={cn(
          'my-2 ml-4 space-y-2 overflow-hidden transition-all duration-500',
          {
            'max-h-0': !isNavbarItemSelected,
            'max-h-[200px]': isNavbarItemSelected, // Adjust 500px to suit your content's needs
          }
        )}>
        {item.subItems.map((subItem: SubSidebarItemType) => (
          <FGSubSidebarItem
            key={subItem.label}
            subItem={subItem}
          />
        ))}
      </div>
    </div>
  );
};

export default FGSidebarItem;
