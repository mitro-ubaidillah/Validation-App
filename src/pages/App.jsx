import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import DonationApp from './DonationApp'
import RouterApp from '../router/RouterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
        <RouterApp />
    </ChakraProvider>
  )
}

export default App
