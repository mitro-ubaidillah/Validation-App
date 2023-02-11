import { Center } from '@chakra-ui/react';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <Center
            alignContent={'center'}
            minHeight={'100vh'}
            width={'full'}
        >
            {children}
        </Center>
    );
}

export default Layout;
