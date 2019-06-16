import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import useAbsorption from './useAbsorption';
import useRefection from './useRefection';

function App() {
  const test = {
    product1: {
      id: 'product1',
      color: 'red',
      account: {
        accountNumber: '',
      },
    },
    product2: {
      id: '',
      color: 'green',
      account: {
        accountNumber: '',
      },
    },
    product3: {
      color: 'blue',
      account: {
        accountNumber: '',
      },
    },
  };

  useEffect(() => {}, [aanvraag]);

  const betaling = useAbsorption({
    state: aanvraag,
    absorbs: [
      'aanvraag.opstal.betaling',
      'aanvraag.inboedel.betaling',
      'aanvraag.aansprakelijkheid.betaling',
    ],
  });

  const aanvraag = useRefection({
    state: betaling,
    reflections: [
      'aanvraag.opstal.betaling',
      'aanvraag.inboedel.betaling',
      'aanvraag.aansprakelijkheid.betaling',
    ],
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
