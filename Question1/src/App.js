import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className='brand'>
        <span className='logo'></span>
        <span className='title'>Url Shortner</span>
       </div>
       <nav className='nav'>
        <a href='#/shortner'>Shortner</a>
        <a href='#/stats'>Statistics</a>
       </nav>
      </header>
    </div>

    
  );
}

export default App;
