import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import routes from 'routes';

export default class Layout extends Component {
  render() {
    return (
      <>
        <header>
          {routes.map((route) => (
            <Link to={route.path} key={route.id}>
              {route.name}
            </Link>
          ))}
        </header>
        <Outlet />
        <footer>Footer</footer>
      </>
    );
  }
}
