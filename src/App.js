import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='wrapper' id='grid'>
      <Header/>
        <Navbar/>
        <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
