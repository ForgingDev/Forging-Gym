import AppLayout from '@/components/FGLayouts/FGAppLayout';
import FGNotification from '@/components/FGLibrary/FGNotification';
import GlobalDialogs from '@/components/GlobalDialogs';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { ReactNode } from 'react';
import HydrationProvider from '../providers/HydrationProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Forging Dev - Starter Template',
  description: 'Starter Template for Forging Dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <ClerkProvider>
      <PrimeReactProvider>
        <html lang='en'>
          <body
            className={cn(
              inter.className,
              'to-background-dark-purple from-background-dark-red bg-gradient-to-br text-text-primary'
            )}>
            <GlobalDialogs />
            <FGNotification />
            <HydrationProvider>
              <AppLayout>
                <main>{children}</main>
              </AppLayout>
            </HydrationProvider>
          </body>
        </html>
      </PrimeReactProvider>
    </ClerkProvider>
  );
}
