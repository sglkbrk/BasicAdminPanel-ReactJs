import { lazy } from 'react';

// project imports
import FullScrennLayout from '../layout/FullScrennLayout';
import Loadable from '../components/Loadable';

// dashboard routing

const Login = Loadable({ Component: lazy(() => import('../pages/Login')) });

const Authorization = {
  path: '/',
  element: <FullScrennLayout />,
  // TODO: Daha Sonra Register eklenecek
  children: [
    {
      path: '/Register',
      element: <Login />
    },
    {
      path: '/Login',
      element: <Login />
    }
  ]
};

export default Authorization;
