import './App.css';
import { useState } from 'react';
import Foodcontainer from './components/Foodcontainer';
import Navigation from './components/Navigation';

function App() {
  const [search,setsearch] = useState('');
  const handlesearch = ((e) => {
    setsearch(e.target.value);
  })
  return (
    <div>
      <Navigation />
      <div>
        <Foodcontainer search = {search}/>
      </div>
    </div>
  );
}

export default App;
