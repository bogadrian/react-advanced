import styles from '../container.module.css';
import { randomColor } from '../utils';

interface Props {
  users: { id: string; name: string }[];
  handleChangeCurrentUser: (value: string) => void;
  currentUser: { name: string; id: string } | undefined;
}

export const SelectUser = ({
  users,
  handleChangeCurrentUser,
  currentUser
}: Props) => {
  const color = randomColor();

  return (
    <div
      className={styles.dashboardSelect}
      style={{ border: `5px solid #${color}` }}
    >
      <h1 style={{ textAlign: 'center', color: `#${color}` }}>Select user</h1>
      <div style={{ fontSize: '28px', height: '100%' }}>
        <label htmlFor="users">Choose a current user:</label>

        <select
          name="users"
          id="users"
          value={currentUser?.name}
          onChange={e => {
            handleChangeCurrentUser(e.target.value);
          }}
          style={{ fontSize: '28px', marginTop: '30px' }}
        >
          {users.map(user => {
            return (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
