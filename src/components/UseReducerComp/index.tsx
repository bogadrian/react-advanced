import { useReducer, useEffect } from 'react';

const usersData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { name: 'Adrian', role: 'admin', id: '1' },
        { name: 'Jhon', role: 'user', id: '2' },
        { name: 'Mick', role: 'moderator', id: '3' }
      ]);
    }, 1000);
  });
};

const initialState: { name: string; role: string; id: string }[] = [];

type State = typeof initialState;

type ActionType =
  | {
      type: 'FETCHED_DATA';
      payload: { name: string; role: string; id: string }[];
    }
  | { type: 'CHANGE_ROLE'; payload: { id: string; newRole: string } };

const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case 'FETCHED_DATA':
      return [...state, ...action.payload];
    case 'CHANGE_ROLE':
      return [
        ...state.map(user => {
          if (user.id === action.payload.id) {
            user.role = action.payload.newRole;
          }
          return user;
        })
      ];
    default:
      return initialState;
  }
};

export const UseReducerComp = () => {
  const [users, dispatch] = useReducer(reducer, initialState);

  const updateRole = ({ id, newRole }: { id: string; newRole: string }) => {
    dispatch({ type: 'CHANGE_ROLE', payload: { id, newRole } });
  };

  useEffect(() => {
    (async () => {
      const usersFetched:
        | { name: string; role: string; id: string }[]
        | unknown = await usersData();
      if (Array.isArray(usersFetched)) {
        dispatch({ type: 'FETCHED_DATA', payload: usersFetched });
      }
    })();
  }, []);

  return (
    <>
      {users?.map(elm => {
        return (
          <div
            key={elm.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <h1>
              {elm.name} {elm.role}
            </h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '20px',
                backgroundColor: '#050404',
                padding: 0
              }}
            >
              <h3>Change role</h3>
              <input
                style={{ height: '20px', backgroundColor: '#171616' }}
                onChange={e => {
                  updateRole({ id: elm.id, newRole: e.target.value });
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
