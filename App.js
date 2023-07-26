import React from 'react';

const NumberList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const numbers = data.numbers;

  return (
    <div>
      <h1>Output</h1>
      <NumberList numbers={numbers} />
    </div>
  );
};

export default App;