import styles from '../container.module.css';
import { randomColor } from '../utils';
import { memo } from 'react';

export const MainPage = memo(({ children }: { children: React.ReactNode }) => {
  const color = randomColor();
  return (
    <div className={styles.selection} style={{ border: `5px solid #${color}` }}>
      <h1 style={{ color: `#${color}` }}>Main Page</h1>
      {children}
    </div>
  );
});
