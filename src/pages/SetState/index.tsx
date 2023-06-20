import { Link } from 'react-router-dom';
import { HowUseStateHookWorks } from '../../components/HowUseStateHooksWorks';

export const SetState = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Set State</h1>
      <HowUseStateHookWorks />
      <Link to="/">Back Home</Link>
    </div>
  );
};
