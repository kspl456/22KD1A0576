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

      <main className='content'>
        {/*Page placeholder*/}
        <section id="shortner" className='card'>
          <h2>Shorten your URL</h2>
          <p className='helper'>

          </p>
        </section>

        <section id="stats" className='card'>
          <h2>Statistics</h2>
          <p className='helper'>
            
          </p>
        </section>

      </main>
    </div>
    
  );
}

export default App;
