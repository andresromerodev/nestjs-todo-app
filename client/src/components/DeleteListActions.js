import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const ToDoListActions = ({ onSaveClick, onCancelClick }) => {
    return (
        <Box flex='1'>
            <Button onClick={onSaveClick} colorScheme='blue' variant='solid' marginRight='5'>
                Save
            </Button>
            <Button onClick={onCancelClick} colorScheme='blue' variant='outline' marginRight='5'>
                Cancel
            </Button>
        </Box>
    );
};

export default ToDoListActions;
