
import './App.css';
import Navigation from './components/Navigation.jsx';
import ContactHeader from './components/ContactHeader.jsx';
import Contactform from './components/Contactform.jsx';
function App() {
  return (
    <>
    <div className='app'>
    <Navigation />
    <ContactHeader />
    <Contactform />
    </div>
    </>
  )
}

export default App;
