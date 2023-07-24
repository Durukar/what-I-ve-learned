import { useState } from 'react'
import { CardFull } from './components/Card/CardFull';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Conta } from './pages/Conta';
import Layout from './components/Layout/Layout';


export function App() {
  const [value, setValue] = useState(0)
  const [outroValor, setOutroValor] = useState(999)
  return (
    <Layout />
  );
}