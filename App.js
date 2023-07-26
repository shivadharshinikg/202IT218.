import './App.css';

    function App() {
      const NumberList = ({ numbers }) => {
        return (
          <div classnmae="App">
          <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
        </div>
      );

    }

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
