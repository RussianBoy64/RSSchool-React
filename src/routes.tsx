import { ReactNode } from 'react';
import Main from 'components/routes/Main';
import About from 'components/routes/About/Index';
import PageNotFound from 'components/routes/PageNotFound';

interface IRoutes {
  id: number;
  name: string;
  path: string;
  element: ReactNode;
}

const routes: IRoutes[] = [
  { id: 1, name: 'Main', path: '/', element: <Main /> },
  { id: 2, name: 'About us', path: '/about', element: <About /> },
  { id: 3, name: '404', path: '*', element: <PageNotFound /> },
];

export default routes;
