import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_TASKS_BY_TODO_LIST_ID } from '../graphql/queries';
import { Box, Divider, Heading, ListItem, OrderedList } from '@chakra-ui/layout';
import EditableTask from '../components/EditableTask';

const ToDoListTasksScreen = ({ location, match }) => {
    const { id } = match.params;
    const name = new URLSearchParams(location.search).get('name');

    const { loading, error, data } = useQuery(GET_TASKS_BY_TODO_LIST_ID(id));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <Box padding='20'>
            <Box>
                <Heading color='purple' paddingBottom='10'>
                    {name}
                </Heading>
            </Box>

            <Box>
                <OrderedList fontSize='2xl'>
                    {data.tasksByToDoListId.map(({ description }) => (
                        <ListItem>
                            <Divider orientation='horizontal' width='6xl' />
                            <EditableTask description={description} />
                        </ListItem>
                    ))}
                </OrderedList>
            </Box>
        </Box>
    );
};

export default ToDoListTasksScreen;
