import React from 'react';
import Layout from '../../components/layouts/Layout';
import { Box, Text } from '@chakra-ui/react';
import ButtonPrimary from '../../components/button/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

const FinishDonationPage = () => {
    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    return (
        <Layout>
            <Box
                shadow={'md'}
                px={{ base:'5',md:'10' }}
                py={{ base:'5',md:'10' }}
                borderRadius={'xl'}
                bg={'white'}
                textAlign={'center'}
                maxWidth={{ base:'300px', sm:'350px',md:'500px' }}
            >
                <Text
                    fontSize={{ base: '24px', sm: '26px', md: '35px', lg: '40px' }}
                    fontWeight={'500'}
                    mb={'10px'}
                >
                    Thank you for the Donation 🥰
                </Text>
                
                <Text
                    mb={'40px'}
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

export default FinishDonationPage;
