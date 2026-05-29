import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Home        from '../pages/Home/Home'
import Services    from '../pages/Services/Services'
import SingleService from '../pages/SingleService/SingleService'
import Portfolio   from '../pages/Portfolio/Portfolio'
import About       from '../pages/About/About'
import Contact     from '../pages/Contact/Contact'
import NotFound    from '../pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true,              element: <Home /> },
      { path: 'services',         element: <Services /> },
      { path: 'services/:id',     element: <SingleService /> },
      { path: 'portfolio',        element: <Portfolio /> },
      { path: 'about',            element: <About /> },
      { path: 'contact',          element: <Contact /> },
      { path: '*',                element: <NotFound /> },
    ],
  },
])

export default router
