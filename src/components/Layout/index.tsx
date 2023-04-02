import { ReactNode } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
