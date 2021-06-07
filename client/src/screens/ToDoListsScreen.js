import React from 'react';

import { Heading } from '@chakra-ui/layout';
import { Wrap } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';

import ToDoListActions from '../components/ToDoListActions';
import ToDoListCard from '../components/ToDoListCard';

import { useQuery } from '@apollo/client';
import { GET_TODO_LISTS } from '../graphql/queries';

const ToDoListsScreen = () => {
    const { loading, error, data } = useQuery(GET_TODO_LISTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <Box padding='10'>
            <Heading as='h5' paddingBottom='10' color='purple'>
                Hi! These are Your TODO Lists
            </Heading>

            <ToDoListActions />

            <Wrap direction={['column', 'row']} spacing='20px' marginTop='10'>
                {data.toDoLists.map(({ id, name, description, tasks }) => (
                    <ToDoListCard key={id} id={id} name={name} description={description} tasks={tasks} />
                ))}
            </Wrap>
        </Box>
    );
};

export default ToDoListsScreen;
