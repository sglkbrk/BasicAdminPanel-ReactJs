import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../components/Loadable';

// dashboard routing
const Page = Loadable({ Component: lazy(() => import('../pages/page')) });
const Page1 = Loadable({ Component: lazy(() => import('../pages/page1')) });
const Home = Loadable({ Component: lazy(() => import('../pages/dashboard')) });
const Orders1 = Loadable({ Component: lazy(() => import('../pages/orders1')) });

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/dashboard',
      element: <Home />
    },
    {
      path: 'pages',
      children: [
        {
          path: 'pages1',
          element: <Page />
        },
        {
          path: 'pages2',
          element: <Page1 />
        }
      ]
    },
    {
      path: 'orders',
      children: [
        {
          path: 'orders1',
          element: <Orders1 />
        }
      ]
    }
  ]
};

export default MainRoutes;
