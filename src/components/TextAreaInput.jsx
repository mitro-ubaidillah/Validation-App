import { FormControl, FormErrorMessage, FormLabel, Textarea } from '@chakra-ui/react';
import React from 'react';

const TextAreaInput = ({ errorsName, errorsMessage, register, title, placeholder }) => {
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
                    fontSize={{ base:'12px', sm:'14px', md:'16px' }}
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
