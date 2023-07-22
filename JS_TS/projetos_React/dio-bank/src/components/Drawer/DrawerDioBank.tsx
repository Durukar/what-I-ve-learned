import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Divider,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import React from 'react'

export function DrawerDioBank() {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize: any) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['sm']

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          m={4}
        >{`Releases`}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`Relase`}</DrawerHeader>
          <DrawerBody>

          <Box>
            <Divider/>
            <UnorderedList>
              <h2><strong>Alpha 0.0.1</strong></h2>
              <ListItem>Pagina de login simples</ListItem>
              <ListItem>Botao para conferir as ultimas releases</ListItem>
              </UnorderedList>
            </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}