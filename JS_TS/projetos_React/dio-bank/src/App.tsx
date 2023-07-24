import { useState } from 'react'
import { CardFull } from './components/Card/CardFull';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Conta } from './pages/Conta';
import { SignIn } from './views/SignIn';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { BackdropExample } from './components/Modal/Modal';


export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box justifySelf='flex-end' position='absolute' top={4} right={3}>
      <BackdropExample />
      </Box>
      <SignIn/>
    </ChakraProvider>
  );
}