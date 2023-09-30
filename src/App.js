import './App.css';
import Book from './components/Book';
import data from './json_with_entities/oai:www.e-rara.ch:12963522.json'
//import StepperTimeline from './components/StepperTimeline'
function App() {

  
  return (
    <div className="App">
      <Book data={data}/>
    </div>
  );
}

export default App;
