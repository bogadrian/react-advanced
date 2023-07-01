import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Home page</h1>

      <Link to="/setState">Go to set state</Link>
      <Link to="/useEffect">Go to useEffect</Link>
      <Link to="/stale-closure">Go to stale closure</Link>
      <Link to="/useReducer">Go to useReducer</Link>
      <Link to="/useCallback">Go to useCallback</Link>
    </div>
  );
};
