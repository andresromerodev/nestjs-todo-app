import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/layout';

function NotFoundScreen() {
    return (
        <Box>
            <Center>
                <Heading size='4xl' padding='40'>
                    404: NOT FOUND
                </Heading>
            </Center>
        </Box>
    );
}

export default NotFoundScreen;
