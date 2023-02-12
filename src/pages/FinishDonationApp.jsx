import React from 'react';
import Layout from '../components/Layout';
import { Box, Text } from '@chakra-ui/react';
import ButtonPrimary from '../components/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

const FinishDonationApp = () => {
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
                    fontSize={{ base: '24px', sm: '26px', md: '30px', lg: '35px' }}
                    fontWeight={'500'}
                    mb={'10px'}
                >
                    Thank you for the Donation 🥰
                </Text>
                <Text
                    mb={'70px'}
                >
                    Your donation helps us. We make sure to distribute it properly. Thank you and Have a Great Day
                </Text>
                <ButtonPrimary
                    onClick={() => backToHome()}
                >
                    Donation Again
                </ButtonPrimary>
            </Box>
        </Layout>
    );
}

export default FinishDonationApp;
