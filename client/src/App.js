import logo from './logo.svg';
import './App.css';
import data from './data';
import Card from './components/card';


function App() {
  console.log(data);
  return (
    <div className="App">
      <h1>
        NEW APP
      </h1>
      <Card />
      <Card />

    </div>
  );
}

export default App;
