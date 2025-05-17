import './App.css';
// import Conditional from './components/Conditional';
import Header from './components/chefClaudeComponents/Header';
import Main from './components/chefClaudeComponents/Main';
import PadsMain from './components/padsChallenge/PadsMain';
// import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Forms /> */}
      {/* <Conditional /> */}

      <PadsMain />
    </div>
  );
}

export default App;
