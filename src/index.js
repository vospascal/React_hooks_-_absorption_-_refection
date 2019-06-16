import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import useAbsorption from './useAbsorption';
import useRefection from './useRefection';

function App() {
  const baseState = {
    product1: {
      id: 'product1',
      color: 'red',
      account: {
        accountNumber: 'd',
      },
    },
    product2: {
      id: '',
      color: 'green',
      account: {
        accountNumber: 'd',
      },
    },
    product3: {
      color: 'blue',
      account: {
        accountNumber: 'd',
      },
    },
  };

  const _account = useAbsorption({
    baseState: baseState,
    absorbs: ['product1.account', 'product2.account', 'product3.account'],
  });

  //dont like this part very much..
  const [account, setAccount] = useState(_account);

  const reflectedState = useRefection({
    absorbedState: account,
    baseState: baseState,
    reflections: ['product1.account', 'product2.account', 'product3.account'],
  });

  useEffect(() => {
    // setTimeout(() => {
    setAccount({ ..._account, accountNumber: 'hellow' });
    // }, 3000);
  }, [_account]);

  return (
    <div className="App">
      <h3>base obj</h3>
      <pre>{JSON.stringify(baseState, null, 2)}</pre>
      <hr />

      <h3>absorped obj</h3>
      <pre>{JSON.stringify(_account, null, 2)}</pre>
      <hr />

      <h3>absorped usestate obj</h3>
      <pre>{JSON.stringify(account, null, 2)}</pre>
      <hr />

      <h3>reflected obj</h3>
      <pre>{JSON.stringify(reflectedState, null, 2)}</pre>
      <hr />

      <input
        name="test"
        value={account && account.accountNumber}
        onChange={e =>
          setAccount({ ..._account, accountNumber: e.target.value })
        }
      />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
