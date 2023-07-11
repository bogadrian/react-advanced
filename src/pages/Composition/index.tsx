import { Link } from 'react-router-dom';
import { AppComponent } from '../../components/Composition';

export const Composition = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <AppComponent />
      <Link to="/">Back Home</Link>
    </div>
  );
};
