import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import React from 'react';

const InputField = ({ errorsName, title, register, errorsMessage, icon, placeholder }) => {
    return (
        <FormControl
            isInvalid={errorsName}
            mb={'4'}
        >
            <FormLabel
                textColor={'#222222'}
                fontSize={{ base: '12px', sm: '14px', md: '16px' }}
                fontWeight={'500'}
            >
                {title}
            </FormLabel>
            <InputGroup>
                {icon}
                <Input
                    outline={''}
                    _focus={{ borderColor:'#222222' }}                    
                    height={{ base:'30px', md:'40px' }}
                    border={'1px'}
                    borderColor={'gray.300'}
                    placeholder={placeholder}
                    {...register}
                />
            </InputGroup>
            {errorsName && (
                <FormErrorMessage>
                    {errorsMessage}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}

export default InputField;
