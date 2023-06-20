import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { SetState } from './pages/SetState';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/setState',
    element: <SetState />
  }
]);

function App() {
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
}

export default App;
