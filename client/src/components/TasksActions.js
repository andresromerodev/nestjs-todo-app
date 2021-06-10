import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const TasksActions = ({ onClick }) => {
    return (
        <Box flex='1'>
            <Button onClick={onClick} colorScheme='blue' variant='solid' marginRight='5'>
                Create new task
            </Button>
        </Box>
    );
};

export default TasksActions;
