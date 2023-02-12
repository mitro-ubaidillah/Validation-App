import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Flex, InputLeftAddon, Text, useToast } from '@chakra-ui/react';
import InputField from '../../components/form/InputField';
import CardInput from '../../components/card/CardInput';
import Layout from '../../components/layouts/Layout';
import TextAreaInput from '../../components/form/TextAreaInput';
import { IoIosSend } from 'react-icons/io'
import ButtonPrimary from '../../components/button/ButtonPrimary';
import { useNavigate } from 'react-router-dom';
import ToastSuccess from '../../components/toast/ToastSuccess';
import { inputValidation } from '../../validations/InputValidaito';

const DonationPage = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const toastIdRef = useRef();

    const initialValues = {
        name: '',
        donation: null,
        email: '',
        id_number: '',
        postal_code: '',
        unit_number: '',
        address: '',
        remarks: '',
    };

    const [initialValue, setInitialValue] = useState(initialValues);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(inputValidation),
        defaultValues: initialValue,
    });

    const SuccessToast = (data) => {
        toastIdRef.current = toast({
            position: 'top',
            duration: 2000,
            render: () => (
                <ToastSuccess data={data} onClose={() => closeToast()} />
            )
        })
    }

    const closeToast = () => {
        if (toastIdRef.current) {
            toast.close(toastIdRef.current);
            setTimeout(() => {
                navigate('/finish')
            }, 700)
            setValue('name', '');
            setValue('donation', null);
            setValue('address', '');
            setValue('email', '');
            setValue('id_number', '');
            setValue('postal_code', '');
            setValue('unit_number', '');
        }
    }

    const onSubmit = (data) => {
        SuccessToast(data);
        setValue('name', '');
        setValue('donation', null);
        setValue('address', '');
        setValue('email', '');
        setValue('id_number', '');
        setValue('postal_code', '');
        setValue('unit_number', '');
        setTimeout(() => {
            navigate('/finish')
        }, 3000)
    }


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
                        placeholder={'Your Nominal Donation'}
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
                                placeholder={'Your Name'}
                            />
                        </Box>
                        <Box flexBasis={{ base: '100%', lg: '48%' }}>
                            <InputField
                                register={register('email')}
                                title={'Email'}
                                errorsName={errors.email}
                                errorsMessage={errors.email?.message}
                                placeholder={'Your Email'}
                            />
                        </Box>
                        <Box flexBasis={{ base: '100%', sm: '31%', lg: '32%' }}>
                            <InputField
                                register={register('id_number')}
                                title={'ID Number'}
                                errorsName={errors.id_number}
                                errorsMessage={errors.id_number?.message}
                                placeholder={'Your ID Number'}
                            />
                        </Box>
                        <Box flexBasis={{ base: '48%', sm: '31%', lg: '32%' }}>
                            <InputField
                                register={register('postal_code')}
                                title={'Postal Code'}
                                errorsName={errors.postal_code}
                                errorsMessage={errors.postal_code?.message}
                                placeholder={'Your Postal Code'}
                            />
                        </Box>
                        <Box flexBasis={{ base: '48%', sm: '31%', lg: '32%' }}>
                            <InputField
                                register={register('unit_number')}
                                title={'Unit Number'}
                                errorsName={errors.unit_number}
                                errorsMessage={errors.unit_number?.message}
                                placeholder={'Your Unit Number'}
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
                        <ButtonPrimary
                            type={'submit'}
                        >
                            Send Your Donation &nbsp;<IoIosSend size={'30px'} />
                        </ButtonPrimary>
                    </Box>
                </form>
            </CardInput>
        </Layout>
    );
}

export default DonationPage;
