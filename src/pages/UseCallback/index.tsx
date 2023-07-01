import { Link } from 'react-router-dom';
import { UseCallbackComp } from '../../components/UseCallbackComp';

export const UseCallback = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Use Callback</h1>
      <UseCallbackComp />
      <Link to="/">Back Home</Link>
    </div>
  );
};
