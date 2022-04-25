import { lazy, Suspense } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';
import BaseLayout from 'src/layouts/BaseLayout';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

//Authentication

const Login = Loader(lazy(() => import('src/content/authentication/Login')));
const ForgotPassword = Loader(
  lazy(() => import('src/content/authentication/ForgotPassword'))
);

// Pages

// Dashboards
const Home = Loader(lazy(() => import('src/components/Pages/Home')));
// Applications

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);

const routes = (isLogin, role) => [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: '/',

        element: <Home />
      },

      {
        path: '*',
        element: <Status404 />
      }
    ]
  },

  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />
  }
];

export default routes;
