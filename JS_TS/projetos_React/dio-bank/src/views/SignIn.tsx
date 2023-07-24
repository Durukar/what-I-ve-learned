import { Badge,Button, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Image, Input, Link, Stack, Tooltip } from '@chakra-ui/react'
import React from 'react'

import { login } from "../services/login";
import { useState, useEffect } from "react";
import { api } from '../api/api'

interface UserData {
  user: string
  password: string
  name: string
}

export function SignIn() {
  const [user, setUser] = useState<string>('')
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
    <HStack w='full' h='100vh' >
      <Flex w='full' h='full' borderRightWidth={1} display={{ base: 'none', md: 'flex' }}>
        <Image objectFit='cover' w='full' h='full' src='https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' />
      </Flex>
      <Flex w='full' h='full' alignItems='center' justifyContent='center'>
        <Stack w='full' maxW='md' spacing={4} p={6}>
          <Heading fontSize='2xl' color='purple.500'>
            Sign in to your SepStation account
          </Heading>
          <FormControl id='user'>
            <FormLabel>Usuario</FormLabel>
            <Input placeholder='username' value={user} onChange={(e) => setUser(e.target.value)} />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Senha</FormLabel>
            <Input type='senha' placeholder='******' />
          </FormControl>
          <Stack spacing={4} direction='row' align='start' justify='space-between'>
            <Checkbox colorScheme='purple'>Lembrar Usuario</Checkbox>
            <Link color='purple.500'>Esqueceu a senha?</Link>
          </Stack>
          <Button colorScheme='purple' mt={1}>Login</Button>
          <Stack spacing={2} direction='row' align='start' justify='space-between'>
            <Tooltip label='Visite meu github: github.com/durukar'>
              <Badge variant='outline' colorScheme='yellow'>
                Alpha Build
              </Badge>
            </Tooltip>
          </Stack>
        </Stack>
      </Flex>
    </HStack>
  )
}