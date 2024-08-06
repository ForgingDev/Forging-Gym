import { IdNameModel } from '@/data/models/common.models';
import { DifficultyEnum } from '@/data/types/common.types';

export type ClassesScheduleType = {
  date: string;
  name: string;
};

export type ScheduledClassModel = {
  capacity: number;
  category: ScheduledClassCategoryModel;
  endingTime: Date;
  id: string;
  instructor: IdNameModel;
  startingTime: Date;
  title: string;
};

export type ScheduledClassCategoryModel = IdNameModel & {
  difficulty: DifficultyEnum;
};
