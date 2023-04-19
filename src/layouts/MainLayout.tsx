import { Link, Outlet } from 'react-router-dom'
// import { useAuthenticate } from '../hooks/useAuthenticate';
// import router from '../routes';

export const MainLayout = () => {
  // useAuthenticate(router);
  document.title = 'Welcome to main page'
  return (
    <div>
      <h1>Main Layout</h1>
      <Link to="/auth">auth</Link>
      <Link to="/about">about</Link>
      <Outlet />
    </div>
  )
}
