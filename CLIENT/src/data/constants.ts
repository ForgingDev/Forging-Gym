import { ROUTES } from '@/lib/routes';
import {
  BarChart4,
  CircleHelp,
  ClipboardList,
  Dumbbell,
  HeartPulse,
  House,
  PersonStanding,
  Settings,
  TriangleAlert,
  Trophy,
  Users,
} from 'lucide-react';
import { SidebarContentType } from './types/sidebar.types';

export const MOBILE_BREAKPOINT = 767;

export const SIDEBAR_ITEMS: SidebarContentType[] = [
  {
    title: 'Menu',
    items: [
      {
        icon: House,
        label: 'Home',
        url: ROUTES.HOME_ROUTE,
        isSelected: false,
        subItems: [],
      },
      {
        label: 'Activity',
        icon: BarChart4,
        isSelected: false,
        subItems: [
          {
            label: 'Overview',
            url: ROUTES.OVERVIEW_ROUTE,
          },
          {
            label: 'Analytics',
            url: ROUTES.ANALYTICS_ROUTE,
          },
          {
            label: 'Projects',
            url: ROUTES.PROJECTS_ROUTE,
          },
        ],
      },
      {
        label: 'Tasks',
        icon: ClipboardList,
        isSelected: false,
        subItems: [
          {
            label: 'Overview',
            url: ROUTES.OVERVIEW_ROUTE,
          },
          {
            label: 'Analytics',
            url: ROUTES.ANALYTICS_ROUTE,
          },
          {
            label: 'Projects',
            url: ROUTES.PROJECTS_ROUTE,
          },
        ],
        // url: ROUTES.TASKS_ROUTE,
      },
      {
        label: 'Reporting',
        icon: TriangleAlert,
        isSelected: false,
        subItems: [],
        url: ROUTES.REPORTING_ROUTE,
      },
      {
        label: 'Users',
        isSelected: false,
        icon: Users,
        subItems: [],
        url: ROUTES.USERS_ROUTE,
      },
    ],
  },
  {
    title: 'Other',
    items: [
      {
        icon: CircleHelp,
        label: 'Help',
        subItems: [],
        isSelected: false,
        url: ROUTES.HELP_ROUTE,
      },
      {
        icon: Settings,
        label: 'Settings',
        subItems: [],
        isSelected: false,
        url: ROUTES.SETTINGS_ROUTE,
      },
    ],
  },
];

export const OUR_PROGRAMS_ITEMS = [{
  title: 'Weight Training',
  description: 'Strengthen and sculpt your muscles with our extensive range of free weights and resistance training equipment. From dumbbells and barbells to squat racks and cable machines.',
  icon: Dumbbell,
},
{
  title: 'Cardio Zone',
  description: 'Get your heart pumping and burn calories with our state-of-the-art cardio equipment. Whether you prefer running on the treadmill, cycling on the stationary bike, or climbing on the stair stepper.',
  icon: HeartPulse,
},
{
  title: 'Boxing Area',
  description: 'Unleash your inner fighter in our dedicated boxing area. With heavy bags, speed bags, and boxing gloves available, you can enjoy a high-intensity workout that improves.',
  icon: Trophy,
},
{
  title: 'Yoga Studio',
  description: 'Find balance and serenity in our tranquil yoga studio. Whether you\'re a beginner or an experienced yogi, our classes cater to all levels and styles, including Hatha, Vinyasa.',
  icon: PersonStanding,
}]