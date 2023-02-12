import React from 'react';
import Layout from '../../components/layouts/Layout';
import { Box, Text } from '@chakra-ui/layout';
import ButtonPrimary from '../../components/button/ButtonPrimary';
import { useNavigate } from 'react-router';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    return (
        <Layout>
            <Box
                shadow={'md'}
                px={'10'}
                py={'10'}
                borderRadius={'xl'}
                bg={'white'}
                textAlign={'center'}
            >
                <Text
                    fontSize={{ base: '40px', sm: '50px', md: '60px', lg: '86px' }}
                    fontWeight={'500'}
                    lineHeight={{ base: '35px', sm: '45px', md: '50px', lg: '60px' }}
                >
                    404
                </Text>
                <Text
                    fontSize={{ base: '16px', sm: '20px', lg: '35px' }}
                    fontWeight={'500'}
                >
                    Page Not Found
                </Text>
                <Text
                    fontSize={{ base: '40px', sm: '50px', md: '60px', lg: '80px' }}
                    fontWeight={'500'}
                    mb={{ base: '20px', lg: '30px' }}
                >
                    🥹
                </Text>
                <Text
                    mb={{ base: '30px', lg: '30px' }}
                    fontSize={{ base: '12px', sm: '14px', md: '16px', lg: '18px' }}
                >
                    Sorry your visited page is not found
                </Text>
                <ButtonPrimary
                    onClick={() => backToHome()}
                >
                    Back
                </ButtonPrimary>
            </Box>
        </Layout>
    );
}

export default NotFoundPage;
