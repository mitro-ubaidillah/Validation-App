import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import React from 'react';

const CardInput = ({ title, children }) => {
    return (
        <Card
            width={{ md:'700px',lg:'900px',xl:'1000px' }}
            shadow={'md'}
            px={{ base: '8', md: '12' }}
            py={'5'}
            borderTopRadius={'md'}
            borderTopLeftRadius={'none'}
            borderBottomLeftRadius={'none'}
            borderLeft={{ base:'none',md:'8px' }}
            borderColor={'#222222'}
        >
            <CardHeader>
                <Text
                    color={'#222222'}
                    fontSize={{ base: '24px', sm: '30px', md: '35px', lg: '40px' }}
                    fontWeight={'500'}
                    width={{ base: 'full', sm: '400px', md: '450px' }}
                >
                    {title}
                </Text>
            </CardHeader>
            <CardBody width={'full'}>
                {children}
            </CardBody>
        </Card>
    );
}

export default CardInput;
