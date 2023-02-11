import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const InputField = ({ errorsName, title, register, errorsMessage }) => {
    return (
        <FormControl
            isInvalid={errorsName}
            mb={'4'}
        >
            <FormLabel>{title}</FormLabel>
            <Input
                height={'50px'}
                border={'1px'}
                borderColor={'gray.300'}
                {...register}

            />
            {errorsName && (
                <FormErrorMessage>
                    {errorsMessage}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}

export default InputField;
