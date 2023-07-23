import { useState } from 'react'
import { CardFull } from './components/Card/CardFull';


export function App() {
  const [value, setValue] = useState(0)
  const [outroValor, setOutroValor] = useState(999)
  return (
      <CardFull />
  );
}

export default App;
