import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { UserCard } from './components/Profile/UserCard/UserCard';
import { Dialogs} from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='wrapper' id='grid'>
        <Header/>
          <UserCard/>
          <Navbar/>
          <div className='content'>
            <Switch>
              <Route path='/profile'>
                <Profile/>
              </Route>
              <Route path='/dialogs'>
                <Dialogs/>
              </Route>
              <Route path='/news'>
                <News/>
              </Route>
              <Route path='/music'>
                <Music/>
              </Route>
              <Route path='/settings'>
                <Settings/>
              </Route>
            </Switch>
          </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
