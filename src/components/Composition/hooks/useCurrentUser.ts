import { useState, useCallback } from 'react';

export const useCurrentUser = (users: { name: string; id: string }[]) => {
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

  return { currentUser, handleChangeCurrentUser };
};
