'use client';

import FGSectionTitle from '@/components/FGLibrary/FGSectionTitle';
import { DirectionsEnum } from '@/data/types/common.types';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC } from 'react';
import ClassesScheduleHeader from './ClassesScheduleHeader';
import ClassesScheduleList from './ClassesScheduleList';
import { ClassesScheduleHelper } from './helpers/classes-schedule.helper';
import useClassesSchedule from './hooks/useClassesSchedule';

const ClassesSchedule: FC = () => {
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isDragging,
    scrollRef,
  } = useClassesSchedule();

  const { scrollToNextWeekday } = ClassesScheduleHelper;

  return (
    <section className='space-y-16'>
      <FGSectionTitle
        highlightedText='Classes'
        normalText='Schedule'
      />
      <div className='selection-none relative'>
        <ChevronLeft
          onClick={() => scrollToNextWeekday(DirectionsEnum.LEFT)}
          className='absolute left-3 top-4 z-10 h-auto w-8 cursor-pointer rounded-md bg-primary-dark'
        />
        <div
          ref={scrollRef}
          className={cn(
            'scrollbar relative select-none items-center justify-between overflow-x-auto',
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          )}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}>
          <ClassesScheduleHeader />
          <ClassesScheduleList />
        </div>
        <ChevronRight
          onClick={() => scrollToNextWeekday(DirectionsEnum.RIGHT)}
          className='absolute right-3 top-4 z-10 h-auto w-8 cursor-pointer rounded-md bg-primary-dark'
        />
      </div>
    </section>
  );
};

export default ClassesSchedule;
