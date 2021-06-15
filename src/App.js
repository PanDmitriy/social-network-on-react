import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { UserCard } from './components/Profile/UserCard/UserCard';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './components/Main/Main';

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
              render={() => 
                <Profile 
                  state={props.state.profilePage}
                  addNewPost={props.addNewPost}
                />
              } 
            />
            <Route 
              path='/dialogs' 
              render={ () => 
                <Dialogs 
                  state={props.state.dialogsPage}
                  sendMessage={props.sendMessage}
                /> 
                }
            />
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