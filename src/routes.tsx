import { ReactNode } from 'react';
import Main from 'components/routes/Main';
import About from 'components/routes/About';
import PageNotFound from 'components/routes/PageNotFound';
import Form from 'components/routes/Form';

export enum RoutePathes {
  main = '/',
  about = '/about',
  form = '/form',
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
  {
    id: 3,
    name: 'Form',
    path: RoutePathes.form,
    element: <Form />,
  },
  { id: 4, name: '', path: RoutePathes.notFound, element: <PageNotFound /> },
];

export default routes;
