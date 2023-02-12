import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonPrimary = ({ type, children, onClick }) => {
    return (
        <Button
            type={type}
            bg={'#222222'}
            color={"white"}
            _hover={{ bg: '#363636' }}
            width={{ base: 'full', sm: '300px', md: '350px' }}
            height={{ base: '40px', md: '50px' }}
            fontSize={{ base: '12px', md: '14px', lg: '16px' }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}

export default ButtonPrimary;
