import { Box, Flex, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ToastSuccess = ({ data, onClose }) => {
    return (
        <Box
            color={'white'}
            bg={'#38A169'}
            borderRadius={'xl'}
            fontWeight={'400'}
            position={'relative'}
        >
            <Box
                position={'absolute'}
                top={'5'}
                right={'5'}
                onClick={onClose}
                cursor={'pointer'}
            >
                <AiOutlineClose fontSize={'20px'} />
            </Box>
            <Box
                px={'10'}
                pt={'10'}
            >
                <Text
                    fontSize={'20px'}
                    textAlign={'center'}
                    borderBottom={'1px'}
                >
                    Send Data Success
                </Text>
                <TableContainer
                    pt={'3'}
                    px={'3'}
                    pb={'10'}
                >
                    <Table variant={'unstyled'}>
                        <Tbody>
                            <Tr border={'none'}>
                                <Td fontWeight={'500'}>Donation:</Td>
                                <Td>{data.donation}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'500'}>Name:</Td>
                                <Td>{data.name}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'500'}>Email:</Td>
                                <Td>{data.email}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'500'}>ID Number:</Td>
                                <Td>{data.id_number}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'500'}>Postal Code:</Td>
                                <Td>{data.postal_code}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'500'}>Unit Number:</Td>
                                <Td>{data.unit_number}</Td>
                            </Tr>
                            <Tr>
                                <Td fontWeight={'500'}>Address:</Td>
                                <Td>{data.address}</Td>
                            </Tr>
                            {
                                data.remarks && (
                                    <Tr>
                                        <Td fontWeight={'500'}>Remarks:</Td>
                                        <Td>{data.remarks}</Td>
                                    </Tr>
                                )
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default ToastSuccess;
