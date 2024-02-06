import { useState } from 'react';
import './App.css';
import Title from './components/Title';

function App() {
  const [name, setName] = useState('');
  return (
    <>
      <Title name={name} setName={setName} />
    </>
  );
}

export default App;
