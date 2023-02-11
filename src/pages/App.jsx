import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import DonationApp from './DonationApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
        <DonationApp />
    </ChakraProvider>
  )
}

export default App
