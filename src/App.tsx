import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { SetState } from './pages/SetState';
import { UseEffect } from './pages/UseEffect';
import { StaleClosure } from './pages/StaleClosure';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/setState',
    element: <SetState />
  },
  {
    path: '/useEffect',
    element: <UseEffect />
  },
  {
    path: '/stale-closure',
    element: <StaleClosure />
  }
]);

const App = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
