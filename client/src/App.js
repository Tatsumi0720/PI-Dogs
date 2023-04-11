import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={'/'} component ={LandingPage}/>
          <Route exact path={'/home'} component ={Home}/>
          <Route exact path={'/createDogs'} component={Create}/>
          <Route exact path={'/dogs/:id'} component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
