import { useEffect, useState, useCallback } from 'react';
import { useData } from '../hooks/useData';

import { DashboardContainer } from './Dashboard/DashboardContainer';
import { HeaderContainer } from './Header/HeaderContainer';
import { User } from './Header/User';
import { MainPageContainer } from './Main/MainPageContainer';
import { randomColor } from './utils';
import { DashboardUserSelection } from './Dashboard/DashboardUserSelection';
import { SelectUser } from './Dashboard/SelectUser';
import { MainPage } from './Main/MainPage';
import { UserPosts } from './Main/UserPosts';

export const AppComponent = () => {
  // const [posts, setPosts] = useState([]);
  // const [users, setUsers] = useState<{ name: string; id: string }[]>([]);
  // const [currentUser, setCurrentUser] = useState<{
  //   name: string;
  //   id: string;
  // }>();

  // const handleChangeCurrentUser = useCallback(
  //   (value: string) => {
  //     users.forEach(user => {
  //       if (value === user.name) {
  //         setCurrentUser(user);
  //       }
  //     });
  //   },
  //   [users]
  // );

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(p => p.json())
  //     .then(p => {
  //       setPosts(p);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(u => u.json())
  //     .then(u => {
  //       setUsers(u);
  //     });
  // }, []);

  const { users, posts, currentUser, handleChangeCurrentUser } = useData();

  return (
    <div
      style={{
        minWidth: '98vw',
        border: `5px solid #${randomColor()}`,
        marginTop: '200px'
      }}
    >
      <div
        style={{
          width: '100%',

          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px'
        }}
      >
        <HeaderContainer>
          <User currentUser={currentUser} />
        </HeaderContainer>
        <div style={{ display: 'flex', width: '100%' }}>
          <DashboardContainer>
            <DashboardUserSelection>
              <SelectUser
                currentUser={currentUser}
                handleChangeCurrentUser={handleChangeCurrentUser}
                users={users}
              />
            </DashboardUserSelection>
          </DashboardContainer>
          <MainPageContainer>
            <MainPage>
              <UserPosts currentUser={currentUser} posts={posts} />
            </MainPage>
          </MainPageContainer>
        </div>
      </div>
    </div>
  );
};
