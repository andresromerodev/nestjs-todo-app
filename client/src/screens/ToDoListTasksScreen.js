import React from 'react';
import { useToast } from '@chakra-ui/toast';
import EditableTask from '../components/EditableTask';
import { useMutation, useQuery } from '@apollo/client';
import { Box, Divider, Heading, ListItem, OrderedList } from '@chakra-ui/layout';
import { onError, onTaskDelete, onTaskDone, onTaskPending } from '../events/eventNotifications';

import {
    GET_TASKS_BY_TODO_LIST_ID,
    UPDATE_TASK_STATE,
    UPDATE_TASK_DESCRIPTION,
    DELETE_TASK,
} from '../graphql/queries';

const ToDoListTasksScreen = ({ location, match }) => {
    const toDoListId = parseInt(match.params.id);
    const toDoListName = new URLSearchParams(location.search).get('name');
    const toDoListTasksVars = { variables: { id: toDoListId } };

    const toast = useToast();

    const [markTaskAsDone] = useMutation(UPDATE_TASK_STATE);
    const [updateTaskDescription] = useMutation(UPDATE_TASK_DESCRIPTION);
    const [deleteTask] = useMutation(DELETE_TASK);

    const { loading, error, data, refetch } = useQuery(GET_TASKS_BY_TODO_LIST_ID, toDoListTasksVars);

    const done = (id, state, description) => {
        try {
            state = state === 'DONE' ? 'TODO' : 'DONE';
            markTaskAsDone({ variables: { id, state } });
            if (state === 'DONE') {
                toast(onTaskDone(description));
            } else {
                toast(onTaskPending(description));
            }
        } catch (error) {
            toast(onError);
        }
    };

    const update = (id, description) => updateTaskDescription({ variables: { id, description } });

    const remove = (id, description) => {
        try {
            deleteTask({ variables: { id } });
            toast(onTaskDelete(description));
            refetch(); // update cached data
        } catch (error) {
            toast(onError);
        }
    };

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
                                done={done}
                                update={update}
                                remove={remove}
                            />
                        </ListItem>
                    ))}
                </OrderedList>
            </Box>
        </Box>
    );
};

export default ToDoListTasksScreen;
