import '../App.css';
import Header from './Header';
import Head from './Head';
import Cbir from './Cbir'
import Realizedby from './Realizedby'
import Conclusion from './Conclusion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <br/>
       <Head/>
       <br/>
       <br/>
       <Cbir/>
       <br/>
       <br/>
       <Realizedby/>
       <br/>
       <br/>
       <Conclusion/>

      </header>
    </div>
  );
}

export default App;
