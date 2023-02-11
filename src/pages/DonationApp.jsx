import React from 'react';
import { useForm } from 'react-hook-form';
import *  as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Flex, InputLeftAddon } from '@chakra-ui/react';
import InputField from '../components/InputField';
import CardInput from '../components/CardInput';
import Layout from '../components/Layout';
import { nricValidation } from '../utils/nricValidation';
import TextAreaInput from '../components/TextAreaInput';
import { IoIosSend } from 'react-icons/io'

const unitNumberRegExp = /[0-9]{2}-[0-9a-zA-Z]{2}/g;
const addressRegExp = /[a-zA-Z][0-9]*/;

const schema = Yup.object({
    name: Yup.string().required(),
    donation: Yup.number('Only numbers').required(),
    email: Yup.string().email().required(),
    id_number: Yup.string().test('NRIC validation', function (value) {
        const validation = nricValidation(value);
        if (validation === false) {
            return this.createError({
                path: this.path,
                message: 'NRIC wong',
            });
        } else {
            return true;
        }
    }
    ).required(),
    postal_code: Yup.string().min(6).required(),
    unit_number: Yup.string().matches(unitNumberRegExp, `Must contain a number(or letter) and hyphen symbol`).required(),
    address: Yup.string().optional().matches(addressRegExp, `Don't allowed numbers only`),
    remarks: Yup.string().optional()
}).required();

const DonationApp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => console.log(data);

    return (
        <Layout>
            <CardInput
                title={'Love to hear from you, Donation now 😇'}
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <InputField
                        register={register('donation')}
                        title={'Donation Amount'}
                        errorsName={errors.donation}
                        errorsMessage={errors.donation?.message}
                        icon={
                            <InputLeftAddon
                                color='gray.400'
                                fontSize='1.2em'
                                children='$'
                                fontWeight={400}
                                height={{ base: '30px', md: '40px' }}
                            />
                        }
                    />
                    <Flex
                        flexWrap={'wrap'}
                        columnGap={'10px'}
                        justify={'space-between'}
                        mb={'30px'}
                    >
                        <Box flexBasis={{ base: '100%', lg: '48%' }}>
                            <InputField
                                register={register('name')}
                                title={'Name'}
                                errorsName={errors.name}
                                errorsMessage={errors.name?.message}
                            />
                        </Box>
                        <Box flexBasis={{ base: '100%', lg: '48%' }}>
                            <InputField
                                register={register('email')}
                                title={'Email'}
                                errorsName={errors.email}
                                errorsMessage={errors.email?.message}
                            />
                        </Box>
                        <Box flexBasis={{ base: '30%', lg: '32%' }}>
                            <InputField
                                register={register('id_number')}
                                title={'ID Number'}
                                errorsName={errors.id_number}
                                errorsMessage={errors.id_number?.message}
                            />
                        </Box>
                        <Box flexBasis={{ base: '30%', lg: '32%' }}>
                            <InputField
                                register={register('postal_code')}
                                title={'Postal Code'}
                                errorsName={errors.postal_code}
                                errorsMessage={errors.postal_code?.message}
                            />
                        </Box>
                        <Box flexBasis={{ base: '30%', lg: '32%' }}>
                            <InputField
                                register={register('unit_number')}
                                title={'Unit Number'}
                                errorsName={errors.unit_number}
                                errorsMessage={errors.unit_number?.message}
                            />
                        </Box>
                        <Box flexBasis={{ base: '100%', lg: '48%' }}>
                            <TextAreaInput
                                register={register('address')}
                                title={'Address'}
                                errorsName={errors.address}
                                errorsMessage={errors.address?.message}
                                placeholder={'Type your address'}
                            />
                        </Box>
                        <Box flexBasis={{ base: '100%', lg: '48%' }}>
                            <TextAreaInput
                                register={register('remarks')}
                                title={'Remarks'}
                                errorsName={errors.remarks}
                                errorsMessage={errors.remarks?.message}
                                placeholder={'Convey your message'}
                            />
                        </Box>
                    </Flex>
                    <Box
                        textAlign={{ base: 'center', sm: 'right' }}
                    >
                        <Button
                            type="submit"
                            bg={'#222222'}
                            color={"white"}
                            _hover={{ bg: '#363636' }}
                            width={{ base: 'full', sm: '300px', md: '350px' }}
                            height={{ base: '40px', md: '50px' }}
                            fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                        >
                            Send Your Donation &nbsp; {<IoIosSend size={'30px'} />}
                        </Button>
                    </Box>
                </form>
            </CardInput>
        </Layout>
    );
}

export default DonationApp;
