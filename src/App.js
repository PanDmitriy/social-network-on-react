import './App.css';
import { ProfilePage } from './components/ProfilePage';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='wrapper' id='grid'>
      <Header/>
        <Navbar/>
        <ProfilePage/>
      <Footer/>
    </div>
  );
}

export default App;
