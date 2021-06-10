import React from 'react';

import { useToast } from '@chakra-ui/toast';
import { useDisclosure } from '@chakra-ui/hooks';
import { Spacer, Flex, Box, Divider, Heading, ListItem, OrderedList } from '@chakra-ui/layout';

import TasksActions from '../components/TasksActions';
import EditableTask from '../components/EditableTask';
import CreateTaskModal from '../components/CreateTaskModal';

import { onSuccess, onError, onTaskDelete, onTaskDone, onTaskPending } from '../events/eventNotifications';

import { useMutation, useQuery } from '@apollo/client';
import {
    GET_TASKS_BY_TODO_LIST,
    CREATE_TASK,
    UPDATE_TASK_STATE,
    UPDATE_TASK_DESCRIPTION,
    DELETE_TASK,
} from '../graphql/queries';

const ToDoListTasksScreen = ({ location, match }) => {
    const toDoListId = parseInt(match.params.id);
    const toDoListName = new URLSearchParams(location.search).get('name');

    // UI Hooks
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    // GraphQL Mutation Hooks
    const [markTaskAsDone] = useMutation(UPDATE_TASK_STATE);
    const [createTask] = useMutation(CREATE_TASK);
    const [updateTaskDescription] = useMutation(UPDATE_TASK_DESCRIPTION);
    const [deleteTask] = useMutation(DELETE_TASK);

    // GraphQL Query Hooks
    const { loading, error, data } = useQuery(GET_TASKS_BY_TODO_LIST, { variables: { id: toDoListId } });

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

    const create = (description) => {
        try {
            const orderInToDoList = data.tasksByToDoListId.length + 1;
            createTask({
                variables: { toDoListId, description, orderInToDoList },
                refetchQueries: [
                    {
                        query: GET_TASKS_BY_TODO_LIST,
                        variables: { id: toDoListId },
                    },
                ],
            });
            toast(onSuccess());
        } catch (error) {
            toast(onError);
        }
    };

    const update = (id, description) => {
        try {
            updateTaskDescription({ variables: { id, description } });
        } catch (error) {
            toast(onError);
        }
    };

    const remove = (id, description) => {
        try {
            deleteTask({
                variables: { id },
                refetchQueries: [
                    {
                        query: GET_TASKS_BY_TODO_LIST,
                        variables: { id: toDoListId },
                    },
                ],
            });
            toast(onTaskDelete(description));
        } catch (error) {
            toast(onError);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <Box padding='10'>
            <Box w='63%' mb='14'>
                <Flex>
                    <Box>
                        <Heading color='blue.600'>{toDoListName}</Heading>
                    </Box>
                    <Spacer />
                    <Box>
                        <TasksActions onClick={onOpen} />
                    </Box>
                </Flex>
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
            <CreateTaskModal isOpen={isOpen} onClose={onClose} onSave={create} />
        </Box>
    );
};

export default ToDoListTasksScreen;
