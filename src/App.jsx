import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonationPage from './views/pages/DonationPage';
import FinishDonationPage from './views/pages/FinishDonationPage';
import NotFoundPage from './views/pages/NotFoundPage';

function App() {
  return (
    <ChakraProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DonationPage />} />
                <Route path='/finish' element={<FinishDonationPage />} />
                <Route path='/*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
