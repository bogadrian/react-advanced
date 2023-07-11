import styles from '../container.module.css';
import { randomColor } from '../utils';

export const HeaderContainer = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const color = randomColor();
  return (
    <div
      className={styles.headerContainer}
      style={{ border: `5px solid #${color}` }}
    >
      <h1 style={{ textAlign: 'center', color: `#${color}` }}>
        Header container{' '}
      </h1>
      {children}
    </div>
  );
};
