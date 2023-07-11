import { memo, useMemo, useRef, useState } from 'react';
import { useInterval } from '../useInterval';
var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

export const HowUseEffectWorks = () => {
  const [data, setData] =
    useState<{ name: string; role: string; id: string }[]>();
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(prev => prev + 1);
    // some async call ...
    setData([
      { name: 'Adrian', role: 'admin', id: '1' },
      { name: 'Jhon', role: 'user', id: '2' },
      { name: 'Mick', role: 'moderator', id: '3' }
    ]);
  }, 1000);

  return (
    <>
      <h2>parent num of renders: {count}</h2>
      {data && <Comp data={data} />}
    </>
  );
};

const Comp = memo(
  ({ data }: { data: { name: string; role: string; id: string }[] }) => {
    const numOfRenders = useRef(0);
    const [role, setRole] = useState('admin');

    const filteredData = useMemo(() => {
      return data?.filter(el => el.role === role);
    }, [data, role]);

    const handleRole = (role: string) => {
      setRole(role);
    };

    return (
      <div style={{ backgroundColor: `#${randomColor()}` }}>
        <h1>Component. num of renders: {numOfRenders.current++}</h1>
        {filteredData.map(el => (
          <h1 color="white" key={el.id}>
            {el.name}: {el.role}
          </h1>
        ))}

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => handleRole('admin')}>Admins</button>
          <button onClick={() => handleRole('moderator')}>Moderators</button>
          <button onClick={() => handleRole('user')}>Users</button>
        </div>
        {data.map(el => (
          <h2 key={el.id} color="white">
            {el.name}: {el.role}
          </h2>
        ))}
      </div>
    );
  },
  arePropsEqual
);

function arePropsEqual(
  oldProps: {
    data: { name: string; role: string; id: string }[];
  },
  newProps: {
    data: { name: string; role: string; id: string }[];
  }
) {
  return (
    oldProps.data.length === newProps.data.length &&
    oldProps.data.every((oldPoint, index) => {
      const newPoint = newProps.data[index];
      return (
        oldPoint.name === newPoint.name &&
        oldPoint.role === newPoint.role &&
        oldPoint.id === newPoint.id
      );
    })
  );
}
