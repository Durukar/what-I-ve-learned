import { HamburgerIcon, QuestionOutlineIcon } from "@chakra-ui/icons"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Text, ModalFooter, UnorderedList, ListItem } from "@chakra-ui/react"
import React from "react"

export function BackdropExample() {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <>
      <Button leftIcon={<QuestionOutlineIcon />} colorScheme='purple'
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      > Releases</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Releases</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UnorderedList>
              <Text fontSize='2xl'>0.0.3</Text>
              <ListItem>Layout de login estabelecido como roxo</ListItem>
              <ListItem>Organizado os testes unitários</ListItem>
            </UnorderedList>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="purple">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}