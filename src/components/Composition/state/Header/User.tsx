import styles from '../container.module.css';
import { randomColor } from '../utils';

interface Props {
  currentUser: { name: string; id: string } | undefined;
}

export const User = ({ currentUser }: Props) => {
  const color = randomColor();
  return (
    <div className={styles.user} style={{ border: `5px solid #${color}` }}>
      <h1 style={{ textAlign: 'center', color: `#${color}` }}>
        User component
      </h1>
      <h1 style={{ textAlign: 'center', color: '#1df127' }}>
        {currentUser?.name}
      </h1>
    </div>
  );
};
