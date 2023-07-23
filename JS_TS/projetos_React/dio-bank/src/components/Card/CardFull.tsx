import { Card, CardBody,ChakraProvider, Box} from '@chakra-ui/react'
import { Form } from '../Login/Form'
import { Footer } from '../Footer/Footer'

export const CardFull = () => {
  return (
    <Card>
      <CardBody>
          <ChakraProvider>
            <Box>
              <Form />
            </Box>
            <Footer />
          </ChakraProvider>
      </CardBody>
    </Card>
  )
}