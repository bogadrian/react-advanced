import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Home page</h1>

      <Link to="/setState">Go to set state</Link>
      <Link to="/useEffect">Go to useEffect</Link>
    </div>
  );
};
