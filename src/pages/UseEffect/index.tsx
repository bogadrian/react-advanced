import { Link } from 'react-router-dom';
import { HowUseEffectWorks } from '../../components/hooks/HowUseEffectWorks';

export const UseEffect = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Use Effect</h1>
      <HowUseEffectWorks />
      <Link to="/" style={{ marginTop: '400px' }}>
        Back Home
      </Link>
    </div>
  );
};
