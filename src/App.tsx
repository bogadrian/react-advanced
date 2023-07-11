import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Home,
  SetState,
  UseEffect,
  StaleClosure,
  UseReducer,
  UseCallback,
  Composition
} from './pages';

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
  },
  {
    path: '/useReducer',
    element: <UseReducer />
  },
  {
    path: '/useCallback',
    element: <UseCallback />
  },
  {
    path: '/composition',
    element: <Composition />
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
