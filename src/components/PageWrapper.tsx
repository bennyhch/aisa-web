import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <main className="pt-8">{children}</main>;
};

export default PageWrapper;
