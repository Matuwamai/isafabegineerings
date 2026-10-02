import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ServiceDetail from './pages/ServiceDetail'
import { allServices } from './data/services'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/components/Layout.jsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      ...allServices.map((s) => ({ path: `services/${s.id}`, element: <ServiceDetail service={s} /> })),
      { path: 'gallery', element: <Gallery /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
