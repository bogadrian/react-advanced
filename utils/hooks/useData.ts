import { useState, useEffect, useCallback } from 'react';

export const useData = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState<{ name: string; id: string }[]>([]);
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    id: string;
  }>();

  const handleChangeCurrentUser = useCallback(
    (value: string) => {
      users.forEach(user => {
        if (value === user.name) {
          setCurrentUser(user);
        }
      });
    },
    [users]
  );

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

  return { posts, users, currentUser, handleChangeCurrentUser };
};
