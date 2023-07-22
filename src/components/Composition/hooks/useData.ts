import { useState, useEffect } from 'react';
import { useCurrentUser } from './useCurrentUser';

export const useData = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState<{ name: string; id: string }[]>([]);

  const { currentUser, handleChangeCurrentUser } = useCurrentUser(users);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(p => p.json())
      .then(p => {
        setPosts(p);
      });
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(u => u.json())
      .then(u => {
        setUsers(u);
      });
  }, []);

  return { users, posts, currentUser, handleChangeCurrentUser };
};
