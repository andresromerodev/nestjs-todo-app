import React, { useState } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import { Heading, Wrap, Box } from '@chakra-ui/layout';

import CreateListModal from '../components/CreateListModal';
import ToDoListActions from '../components/ToDoListActions';
import ToDoListCard from '../components/ToDoListCard';

import { useQuery } from '@apollo/client';
import { GET_TODO_LISTS } from '../graphql/queries';

const ToDoListsScreen = () => {
    const [deleting, setDeleting] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { loading, error, data } = useQuery(GET_TODO_LISTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <Box padding='10'>
            <Heading as='h5' paddingBottom='10' color='blue.600'>
                Hi! These are Your TODO Lists
            </Heading>

            <ToDoListActions onCreateClick={onOpen} onDeleteClick={() => setDeleting(!deleting)} />

                <Wrap direction={['column', 'row']} spacing='20px' marginTop='10'>
                {data.toDoLists.map(({ id, name, description, tasks }) => (
                    <ToDoListCard
                        id={id} 
                        key={id} 
                        name={name} 
                        description={description} 
                        tasks={tasks}
                        deleting={deleting} 
                    />
                ))}
            </Wrap>

            <CreateListModal isOpen={isOpen} onClose={onClose} onSave={() => console.log('click')} />
        </Box>
    );
};

export default ToDoListsScreen;
