import logo from './logo.svg';
import './App.css';
import Assign from './components/Assign';
import data from './data/user'
function App() {
  return (
    <div className="App">
      <Assign data={data } />
    </div>
  );
}

export default App;
