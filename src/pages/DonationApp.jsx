import React from 'react';
import { useForm } from 'react-hook-form';
import *  as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@chakra-ui/react';
import InputField from '../components/InputField';
import CardInput from '../components/CardInput';
import Layout from '../components/Layout';
import { nricValidation } from '../utils/nricValidation';

const unitNumberRegExp = /[0-9]{2}-[0-9a-zA-Z]{2}/g;
const addressRegExp = /[a-zA-Z][0-9]*/;

const schema = Yup.object({
    name: Yup.string().required(),
    donation: Yup.number().required(),
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
    unit_number: Yup.string().matches(unitNumberRegExp).required(),
    address: Yup.string().matches(addressRegExp).optional(),
    remarks: Yup.string().optional()
}).required();

const DonationApp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => console.log(data);

    return (
        <Layout>
            <CardInput title={'Form Validation useForm + Yup'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField register={register('donation')} title={'Donation Amount'} errorsName={errors.donation} errorsMessage={errors.donation?.message} />
                    <InputField register={register('name')} title={'name'} errorsName={errors.name} errorsMessage={errors.name?.message} />
                    <InputField register={register('email')} title={'Email'} errorsName={errors.email} errorsMessage={errors.email?.message} />
                    <InputField register={register('id_number')} title={'ID Number'} errorsName={errors.id_number} errorsMessage={errors.id_number?.message} />
                    <InputField register={register('postal_code')} title={'Postal Code'} errorsName={errors.postal_code} errorsMessage={errors.postal_code?.message} />
                    <InputField register={register('unit_number')} title={'Unit Number'} errorsName={errors.unit_number} errorsMessage={errors.unit_number?.message} />
                    <InputField register={register('address')} title={'Address'} errorsName={errors.address} errorsMessage={errors.address?.message} />
                    <InputField register={register('remarks')} title={'Remarks'} errorsName={errors.remarks} errorsMessage={errors.remarks?.message} />
                    <Button type="submit" bg={'blue.400'} color={"white"} _hover={{ color: 'black' }}>Submit</Button>
                </form>
            </CardInput>
        </Layout>
    );
}

export default DonationApp;
