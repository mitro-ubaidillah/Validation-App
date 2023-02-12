import { FormControl, FormErrorMessage, FormLabel, Textarea } from '@chakra-ui/react';
import React from 'react';

const TextAreaInput = ({ errorsName, errorsMessage, register, title, placeholder, value, onChange }) => {
    return (
        <div>
            <FormControl
                isInvalid={errorsName}
                mb={'4'}
            >
                <FormLabel
                    textColor={'#222222'}
                    fontSize={{ base: '12px', sm:'14px', md:'16px' }}
                    fontWeight={'500'}
                >
                    {title}
                </FormLabel>
                <Textarea
                    size={'md'}
                    placeholder={placeholder}
                    outline={''}
                    _focus={{ borderColor:'#222222' }}
                    border={'1px'}    
                    borderColor={'gray.300'}
                    fontSize={{ base:'12px', sm:'14px', md:'16px' }}
                    value={value}
                    onChange={onChange}
                    {...register}
                />
                {errorsName && (
                    <FormErrorMessage>
                        {errorsMessage}
                    </FormErrorMessage>
                )}
            </FormControl>
        </div>
    );
}

export default TextAreaInput;
