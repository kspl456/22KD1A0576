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
            Add up to 5 URLs to shorten them. Customize the shortened URL if you want, or leave it blank for a random one. By default, shortened URLs will expire after 30 days.<br/>
            Add your URL below to shorten it.
          </p>
          <form className='shortner-form' onSubmit={(e) => e.preventDefault()}>

            {/*Row 1*/}
            <div className='row wrap gap form-row'>
              <label className='field grow'>
                <span>Enter URL to shorten</span>
                {/* Input field for URL */}
                <input type="text" inputMode='url'/>
              </label>
              <label className='field mini'>
                <span>Custom URL</span>
                {/* Input field for custom URL */}
                <input type="text" placeholder="optional" className='code-input' maxLength={24}/>
              </label>
            <label className='field mini'>
              <span>Expiration</span>
              {/* Input field for expiration date */}
              <input className='validity-input' type="number" min="1" max="365" defaultValue="30" placeholder='30'/>
              </label>
            </div>

            {/*Row 2*/}
            <div className='row wrap gap form-row'>
              <label className='field grow'>
                <span>Enter URL to shorten</span>
                {/* Input field for URL */}
                <input type="text" inputMode='url'/>
              </label>
              <label className='field mini'>
                <span>Custom URL</span>
                {/* Input field for custom URL */}
                <input type="text" placeholder="optional" className='code-input' maxLength={24}/>
              </label>
            <label className='field mini'>
              <span>Expiration</span>
              {/* Input field for expiration date */}
              <input className='validity-input' type="number" min="1" max="365" defaultValue="30" placeholder='30'/>
              </label>
            </div>

            {/*Row 3*/}
            <div className='row wrap gap form-row'>
              <label className='field grow'>
                <span>Enter URL to shorten</span>
                {/* Input field for URL */}
                <input type="text" inputMode='url'/>
              </label>
              <label className='field mini'>
                <span>Custom URL</span>
                {/* Input field for custom URL */}
                <input type="text" placeholder="optional" className='code-input' maxLength={24}/>
              </label>
            <label className='field mini'>
              <span>Expiration</span>
              {/* Input field for expiration date */}
              <input className='validity-input' type="number" min="1" max="365" defaultValue="30" placeholder='30'/>
              </label>
            </div>

            {/*Row 4*/}
            <div className='row wrap gap form-row'>
              <label className='field grow'>
                <span>Enter URL to shorten</span>
                {/* Input field for URL */}
                <input type="text" inputMode='url'/>
              </label>
              <label className='field mini'>
                <span>Custom URL</span>
                {/* Input field for custom URL */}
                <input type="text" placeholder="optional" className='code-input' maxLength={24}/>
              </label>
            <label className='field mini'>
              <span>Expiration</span>
              {/* Input field for expiration date */}
              <input className='validity-input' type="number" min="1" max="365" defaultValue="30" placeholder='30'/>
              </label>
            </div>

            {/*Row 5*/}
            <div className='row wrap gap form-row'>
              <label className='field grow'>
                <span>Enter URL to shorten</span>
                {/* Input field for URL */}
                <input type="text" inputMode='url'/>
              </label>
              <label className='field mini'>
                <span>Custom URL</span>
                {/* Input field for custom URL */}
                <input type="text" placeholder="optional" className='code-input' maxLength={24}/>
              </label>
            <label className='field mini'>
              <span>Expiration</span>
              {/* Input field for expiration date */}
              <input className='validity-input' type="number" min="1" max="365" defaultValue="30" placeholder='30'/>
              </label>
            </div>
            
            <div className='row end gap'>
              <button className="btn" type="submit" disabled>Shorten</button>
            </div>
          </form>

          <div className='results' id="results"/>
        </section>

        <br/>

        
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
