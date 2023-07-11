import styles from '../container.module.css';
import { randomColor } from '../utils';
import { memo } from 'react';

export const DashboardContainer = memo(
  ({ children }: { children: React.ReactNode }) => {
    const color = randomColor();
    return (
      <div
        className={styles.dashboardContainer}
        style={{ border: `5px solid #${color}` }}
      >
        <h1 style={{ textAlign: 'center', color: `#${color}` }}>
          Dashboard Container
        </h1>
        {children}
      </div>
    );
  }
);
