import { FC, PropsWithChildren } from 'react';
import FGSidebar from '../FGLibrary/FGSidebar/FGSidebar';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <FGSidebar />
      <div className='container mx-auto min-h-screen'>
        <main className='px-2 pt-14 sm:px-4'>{children}</main>
      </div>
    </>
  );
};

export default AppLayout;
