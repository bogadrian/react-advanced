import { Link } from 'react-router-dom';
import { UseReducerComp } from '../../components/UseReducerComp';

export const UseReducer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Use Effect</h1>
      <UseReducerComp />
      <Link to="/" style={{ marginTop: '400px' }}>
        Back Home
      </Link>
    </div>
  );
};
