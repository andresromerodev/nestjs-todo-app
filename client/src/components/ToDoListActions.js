import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const ToDoListActions = () => {
    return (
        <Box flex='1'>
            <Button colorScheme='blue' variant='solid' marginRight='5'>
                Create list
            </Button>
            <Button colorScheme='blue' variant='outline' marginRight='5'>
                Delete lists
            </Button>
        </Box>
    );
};

export default ToDoListActions;
