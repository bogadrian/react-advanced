import styles from '../container.module.css';
import { randomColor } from '../utils';

interface Props {
  currentUser: { name: string; id: string } | undefined;
  posts: { userId: string; id: string; title: string }[];
}

export const UserPosts = ({ currentUser, posts }: Props) => {
  const color = randomColor();
  return (
    <div className={styles.posts} style={{ border: `5px solid #${color}` }}>
      <h1 style={{ textAlign: 'center', color: `#${color}` }}>User posts</h1>
      <ol style={{ marginLeft: '4px' }}>
        <h1 style={{ color: '#1df127' }}>{currentUser?.name}</h1>
        {posts
          .filter(post => post.userId === currentUser?.id)
          .map(post => {
            return (
              <li key={post.id}>
                <h1>{post.title}</h1>
              </li>
            );
          })}
      </ol>
    </div>
  );
};
