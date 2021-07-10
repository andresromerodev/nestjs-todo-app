import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const ToDoListActions = ({ onCreateClick, onDeleteClick }) => {
    return (
        <Box flex='1' hidden={false}>
            <Button onClick={onCreateClick} colorScheme='blue' variant='solid' marginRight='5'>
                Create list
            </Button>
            <Button onClick={onDeleteClick} colorScheme='blue' variant='outline' marginRight='5'>
                Delete lists
            </Button>
        </Box>
    );
};

export default ToDoListActions;
