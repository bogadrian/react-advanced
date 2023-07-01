import { useState, useRef, useCallback, useEffect, memo } from 'react';

export const UseCallbackComp = () => {
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState('');

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleForm = useCallback((value: string) => {
    // construct an URL
    console.log(`https://myAwesomSite/${value}/${count}`);
    setUrl(`https://myAwesomSite/${value}/${count}`);
  }, []);

  const sendRequest = useCallback(
    ({ url, randomId }: { url: string; randomId: number }) => {
      // send a request to some api
      console.log(`POST ${url} ${randomId} ${count}`);
    },
    [url, count]
  );

  useEffect(() => {
    sendRequest({ url, randomId: Math.random() });
  }, [sendRequest]);

  return (
    <>
      <h1>use callback</h1>
      <h1>{count}</h1>
      <Component handleCount={handleCount} />
      <Form handleForm={handleForm} />
    </>
  );
};

const Component = memo(({ handleCount }: { handleCount: () => void }) => {
  console.log('Component is rendering!');
  return <button onClick={handleCount}>Increase count</button>;
});

const Form = memo(({ handleForm }: { handleForm: (value: string) => void }) => {
  const valueRef = useRef<HTMLInputElement>(null);

  console.log('Form is rendering!');

  return (
    <>
      <input ref={valueRef} />
      <button
        onClick={() => {
          if (valueRef.current) handleForm(valueRef.current?.value);
        }}
      >
        Call the API
      </button>
    </>
  );
});
