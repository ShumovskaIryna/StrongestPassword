import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="text-center my-5">Password Form</h3>
        <div className="form-group mb-1">
          <input
            type="password"
            className="form-control shadow-none"
            placeholder="Password"
          />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
