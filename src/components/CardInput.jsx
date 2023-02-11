import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import React from 'react';

const CardInput = ({ title, children }) => {
    return (
        <Card width={'700px'}>
            <CardHeader>
                <Text color={''} textAlign={'center'} fontSize={'30px'} fontWeight={'700'}>
                    {title}
                </Text>
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
}

export default CardInput;
