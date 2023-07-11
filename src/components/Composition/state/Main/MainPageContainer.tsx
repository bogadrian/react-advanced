import styles from '../container.module.css';
import { randomColor } from '../utils';

export const MainPageContainer = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const color = randomColor();
  return (
    <div
      className={styles.mainPageContainer}
      style={{ border: `5px solid #${color}` }}
    >
      <h1 style={{ textAlign: 'center', color: `#${color}` }}>
        Main page container
      </h1>
      {children}
    </div>
  );
};
