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

export const GET_TASKS_BY_TODO_LIST_ID = gql`
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

export const UPDATE_TASK_STATE = gql`
    mutation ($id: Int!, $state: State) {
        updateTask(updateTaskInput: { id: $id, state: $state }) {
            id
            state
            description
        }
    }
`;
