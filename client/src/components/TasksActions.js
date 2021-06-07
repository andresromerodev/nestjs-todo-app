import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const TasksActions = () => {
    return (
        <Box flex='1'>
            <Button colorScheme='teal' variant='solid' marginRight='5'>
                Create new task
            </Button>
        </Box>
    );
};

export default TasksActions;
