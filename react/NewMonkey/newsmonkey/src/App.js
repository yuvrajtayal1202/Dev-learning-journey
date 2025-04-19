
import './App.css';
import Header from './components/Header';
import News from './components/News';

function App() {
  return (
 <>
 <Header/>
 <News pageSize = {6} country = "us"/>
  </>
  );
}

export default App;
