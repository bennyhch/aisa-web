import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  // return <main className="pt-8 px-8 sm:px-6 md:px-10">{children}</main>;
  return <main className="flex flex-col space-y-20 ">{children}</main>;
};

export default PageWrapper;
