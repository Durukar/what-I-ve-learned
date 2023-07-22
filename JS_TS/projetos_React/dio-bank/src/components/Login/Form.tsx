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
  Tooltip
} from "@chakra-ui/react";
import { login } from "../../services/login";

import {DrawerDioBank} from '../Drawer/DrawerDioBank'

export function Form() {
  return (
    <Flex my={4} width='full' align='center' justifyContent='center'>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Tooltip label='Visite meu github: github.com/durukar'><Badge variant='outline' colorScheme='yellow'>
          Alpha Build
        </Badge>
        </Tooltip>
        <DrawerDioBank/>
        <Divider mt={1} />
        <Flex>
          <Box ml={3}>
            <Heading>Dio Bank</Heading>
          </Box>
        </Flex>
        <Box my={4} textAlign='left'>
          <form>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='test@test.com' />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type='password' placeholder='*****' />
            </FormControl>
            <Button onClick={login} type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
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
