// import './App.css';
import{BrouserRouter as Router,Route,Switch,Link} from "react-router-dom";
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { HomePage } from './components/Home.page';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Tradicional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-herois'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/super-herois'>
            <SuperHeroesPage/>
          </Route>
          <Route path='/rq-super-herois'>
            <RQSuperHeroesPage/>
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
