import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchDialog from '../components/SearchDialog';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Houses from '../pages/Houses';
import Characters from '../pages/Characters';
import Archive from '../pages/Archive';
import Timeline from '../pages/Timeline';
import Stories from '../pages/Stories';
import Journey from '../pages/Journey';
import Play from '../pages/Play';

function Layout({ children }) {
  return <div className="site-shell"><Header /><main>{children}</main><Footer /><SearchDialog /></div>;
}
const page = Component => <Layout><Component /></Layout>;
export const router = createBrowserRouter([
  { path: '/', element: page(Home) },
  { path: '/explore', element: page(Explore) },
  { path: '/world', element: page(Explore) },
  { path: '/houses', element: page(Houses) },
  { path: '/characters', element: page(Characters) },
  { path: '/archive', element: page(Archive) },
  { path: '/lore', element: page(Archive) },
  { path: '/timeline', element: page(Timeline) },
  { path: '/stories', element: page(Stories) },
  { path: '/journey', element: page(Journey) },
  { path: '/play', element: page(Play) }
]);