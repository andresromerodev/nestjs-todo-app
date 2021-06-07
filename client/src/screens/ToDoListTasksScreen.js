import React from 'react';

import EditableTask from '../components/EditableTask';
import { useMutation, useQuery } from '@apollo/client';
import { Box, Divider, Heading, ListItem, OrderedList } from '@chakra-ui/layout';

import { GET_TASKS_BY_TODO_LIST_ID, UPDATE_TASK_STATE, UPDATE_TASK_DESCRIPTION } from '../graphql/queries';

const ToDoListTasksScreen = ({ location, match }) => {
    const toDoListId = parseInt(match.params.id);
    const toDoListName = new URLSearchParams(location.search).get('name');
    const toDoListTasksVars = { variables: { id: toDoListId } };

    const { loading, error, data } = useQuery(GET_TASKS_BY_TODO_LIST_ID, toDoListTasksVars);

    const [markTaskAsDone] = useMutation(UPDATE_TASK_STATE);
    const [updateTaskDescription] = useMutation(UPDATE_TASK_DESCRIPTION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <Box padding='20'>
            <Box>
                <Heading color='purple' paddingBottom='10'>
                    {toDoListName}
                </Heading>
            </Box>

            <Box>
                <OrderedList fontSize='2xl'>
                    {data.tasksByToDoListId.map(({ id, description, state, createdAt, updatedAt }) => (
                        <ListItem key={id}>
                            <Divider orientation='horizontal' width='6xl' />
                            <EditableTask
                                id={id}
                                description={description}
                                state={state}
                                createdAt={createdAt}
                                updatedAt={updatedAt}
                                markTaskAsDone={markTaskAsDone}
                                updateTaskDescription={updateTaskDescription}
                            />
                        </ListItem>
                    ))}
                </OrderedList>
            </Box>
        </Box>
    );
};

export default ToDoListTasksScreen;
