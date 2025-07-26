import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Layout from './Layout';
import { AboutUs, ContactUs, Home, Services } from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index={true} element={<Home />} />
      <Route path='Services' element={<Services />} />
      <Route path='About-Us' element={<AboutUs />} />
      <Route path='Contact-Us' element={<ContactUs />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
