import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { UserCard } from './components/Profile/UserCard/UserCard'

function App() {
  return (
    <div className='wrapper' id='grid'>
      <Header/>
        <UserCard/>
        <Navbar/>
        <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
