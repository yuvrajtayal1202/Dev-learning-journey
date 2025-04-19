
import './App.css';
import Header from './components/Header';
import News from './components/News';

function App() {
  return (
 <>
 <Header/>
 <News pageSize = {3}/>
  </>
  );
}

export default App;
