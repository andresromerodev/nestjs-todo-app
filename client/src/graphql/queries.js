import { gql } from '@apollo/client';

export const GET_TODO_LISTS = gql`
    query {
        toDoLists {
            id
            name
            description
            tasks {
                description
                state
            }
        }
    }
`;

export const GET_TASKS_BY_TODO_LIST = gql`
    query ($id: Int!) {
        tasksByToDoListId(id: $id) {
            id
            state
            description
            orderInToDoList
            createdAt
            updatedAt
        }
    }
`;

export const CREATE_TASK = gql`
    mutation ($toDoListId: Int, $description: String, $orderInToDoList: Int!) {
        createTask(
            createTaskInput: {
                toDoListId: $toDoListId
                description: $description
                orderInToDoList: $orderInToDoList
            }
        ) {
            id
            state
            description
        }
    }
`;

export const UPDATE_TASK_STATE = gql`
    mutation ($id: Int!, $state: State) {
        updateTask(updateTaskInput: { id: $id, state: $state }) {
            id
            state
            description
        }
    }
`;

export const UPDATE_TASK_DESCRIPTION = gql`
    mutation ($id: Int!, $description: String) {
        updateTask(updateTaskInput: { id: $id, description: $description }) {
            id
            state
            description
        }
    }
`;

export const DELETE_TASK = gql`
    mutation ($id: Int!) {
        removeTask(id: $id) {
            id
            state
            description
            orderInToDoList
            createdAt
            updatedAt
        }
    }
`;
