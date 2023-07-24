import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Badge,
  Tooltip,
} from "@chakra-ui/react";
import { login } from "../../services/login";
import { useState, useEffect } from "react";
import { api } from '../../api/api'

interface UserData {
  email: string
  password: string
  name: string
}

export function Form() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [userData, setUserData] = useState<null | UserData>()

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    getData()
  }, [])

  return (
    <Flex my={4} width='full' align='center' justifyContent='center'>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Tooltip label='Visite meu github: github.com/durukar'><Badge variant='outline' colorScheme='yellow'>
          Alpha Build
        </Badge>
        </Tooltip>
        <Divider mt={1} />
        <Flex>
          <Box ml={3}>
            <Heading>Dio Bank </Heading> 
          </Box>
        </Flex>
        <Box my={4} textAlign='left'>
          <form>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='test@test.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type='password' placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button onClick={() => login(email, password)} type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}

// Event prevent
//onClick={(e):any =>{e.preventDefault()}}
// // condicional rendering
// {
//   userData === null || 
//   userData === undefined && 
//   <CircularProgress isIndeterminate color='green.300' />
// }
