import { Link } from 'react-router-dom';
import { StaleClosureComp } from '../../components/StaleClosureComp';

export const StaleClosure = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Set State</h1>
      <StaleClosureComp />
      <Link to="/">Back Home</Link>
    </div>
  );
};
