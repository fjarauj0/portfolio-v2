import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/index.css';
import { HelmetProvider } from 'react-helmet-async';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: import.meta.env.VITE_GTM,
};

TagManager.initialize(tagManagerArgs);

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: '*',
        element: <Navigate to='/' replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
