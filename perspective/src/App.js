import './App.css';
import Opening from './Opening'
import Options from './Options'
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Opening />
      {/* <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Opening} />
        <Route path="/options" component={Options} />
      </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
