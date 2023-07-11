import styles from '../container.module.css';
import { randomColor } from '../utils';

export const DashboardUserSelection = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const color = randomColor();

  return (
    <div className={styles.selection} style={{ border: `5px solid #${color}` }}>
      <h1 style={{ textAlign: 'center', color: `#${color}` }}>
        User selection
      </h1>
      {children}
    </div>
  );
};
