import { ReactNode } from 'react';
import Main from 'components/routes/Main';
import About from 'components/routes/About/Index';
import PageNotFound from 'components/routes/PageNotFound';

export enum RoutePathes {
  main = '/',
  about = '/about',
  notFound = '*',
}

export interface IRoute {
  id: number;
  name: string;
  path: string;
  element: ReactNode;
}

const routes: IRoute[] = [
  { id: 1, name: 'Main', path: RoutePathes.main, element: <Main /> },
  {
    id: 2,
    name: 'About us',
    path: RoutePathes.about,
    element: <About />,
  },
  { id: 3, name: '', path: RoutePathes.notFound, element: <PageNotFound /> },
];

export default routes;
