import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from 'react';

const DataContext = createContext<{
  users: { id: string; name: string }[];
  posts: { title: string; userId: string; id: string }[];
} | null>(null);

const CurerntUserContext = createContext<{
  currentUser: { id: string; name: string } | undefined;
  handleChangeCurrentUser: (value: string) => void;
} | null>(null);

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error('You are outise of the Conetxt Provider');
  }

  return context;
};

export const useCurrentUserContext = () => {
  const context = useContext(CurerntUserContext);

  if (context === undefined) {
    throw new Error('You are outise of the Conetxt Provider');
  }

  return context;
};

export const ContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
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

  return (
    <DataContext.Provider value={{ users, posts }}>
      <CurerntUserContext.Provider
        value={{ handleChangeCurrentUser, currentUser }}
      >
        {children}
      </CurerntUserContext.Provider>
    </DataContext.Provider>
  );
};
