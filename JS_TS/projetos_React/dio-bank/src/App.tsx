import { Layout } from './components/Layout/Layout';
import styled from 'styled-components'
import { LoginForm } from './components/Login/LoginForm';

const Box = styled.div`
  background-c olor: orange;
  border-radius: 25px;
  padding-left: 15px
`

export function App() {
  return (
    <Layout>
      <Box>
        <h1>Faça o Login</h1>
      </Box>
      <LoginForm />
    </Layout>
  );
}

export default App;
