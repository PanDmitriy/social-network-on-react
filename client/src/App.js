import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { UserCard } from './components/Profile/UserCard/UserCard';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';

function App(props) {
  return (
    <Router>
      <div className='wrapper'>
        <Header/>
        <UserCard/>
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path='/social-network-on-react'>
              <Main/>
            </Route>
            <Route 
              path='/profile' 
              render={
                () =><Profile/>
              } 
            />
            <Route 
              path='/dialogs' 
              render={
                () => <DialogsContainer /> 
              }
            />
            <Route 
              path='/news'
              render={
                () => <News/>
              }
            />
            <Route 
              path='/users'
              render={
                () => <UsersContainer/>
              }
            />
            <Route 
              path='/music'
              render={
                () => <Music/>
              }
            />
            <Route 
              path='/settings'
              render={
                () =>  <Settings/>
              }
            />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
