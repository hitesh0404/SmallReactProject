import { createBrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Login from './Login';
import Register from './Register';
import Child from './Child';

export default function Route() {
  return createBrowserRouter([
    { path: '/',
      element: (<> <Nav /> <Home /> </>),},
    { path: '/about',
      element: (<> <Nav /> <About /> </>),
      children: [
        { path: 'newChild', // No leading slash
          element: (<><Nav /><Child /></>),},
      ],},
    { path: '/login',
      element: (<><Nav /><Login /></>),
      children: [
        { path: 'newChild', // No leading slash
          element: (<><Nav /><Child /></>),},
      ],},
    { path: '/register',
      element: (<><Nav /><Register /></>),
      children: [
        { path: 'newChild', // No leading slash
          element: (<><Nav /><Child /></>),},
      ],},
  ]);
}