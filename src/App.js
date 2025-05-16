import './App.css';
import Conditional from './components/Conditional';
import Header from './components/Header';
import Main from './components/Main';
// import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Forms /> */}
      <Conditional />
    </div>
  );
}

export default App;
