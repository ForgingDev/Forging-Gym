'use client';

import FGSectionTitle from '@/components/FGLibrary/FGSectionTitle';
import { WEEK_DAYS_COUNT } from '@/data/constants';
import { DirectionsEnum } from '@/data/types/common.types';
import { cn } from '@/lib/utils';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC, useRef, useState } from 'react';
import { ClassesScheduleType } from './data/types/classes-schedule.types';

const ClassesSchedule: FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getNextWeekdays = () => {
    const weekdays: ClassesScheduleType[] = [];

    for (let index = 0; index < WEEK_DAYS_COUNT; index++) {
      const nextDay = dayjs().add(index, 'day');
      const name = nextDay.format('dddd');
      const date = nextDay.format('DD MMM');

      weekdays.push({ name, date });
    }

    return weekdays;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);

    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));

    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);

    const walk = x - startX;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollToNextWeekday = (direction: DirectionsEnum) => {
    const weekdays = document.getElementsByClassName('weekday-container');

    if (direction === DirectionsEnum.LEFT) {
      weekdays[0].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    } else {
      weekdays[weekdays.length - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  return (
    <section className='space-y-16'>
      <FGSectionTitle
        highlightedText='Classes'
        normalText='Schedule'
      />
      <div className='relative'>
        <ChevronLeft
          onClick={() => scrollToNextWeekday(DirectionsEnum.LEFT)}
          className='absolute left-3 top-4 h-auto w-8 cursor-pointer rounded-md bg-primary-dark'
        />
        <div
          ref={scrollRef}
          className={cn(
            'scrollbar flex items-center justify-between overflow-x-auto',
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          )}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}>
          {getNextWeekdays().map(weekday => (
            <div
              key={weekday.date}
              className='weekday-container min-w-52 flex-1 select-none rounded-sm border-2 border-primary-dark bg-zinc-800 p-2 text-center text-text-primary shadow-md'>
              <div className='font-semibold uppercase'>{weekday.name}</div>
              <div className='text-sm'>{weekday.date}</div>
            </div>
          ))}
        </div>
        <ChevronRight
          onClick={() => scrollToNextWeekday(DirectionsEnum.RIGHT)}
          className='absolute right-3 top-4 h-auto w-8 cursor-pointer rounded-md bg-primary-dark'
        />
      </div>
    </section>
  );
};

export default ClassesSchedule;
