import { gql } from '@apollo/client';

export const GET_TODO_LISTS = gql`
    query GetToDoLists {
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

export const GET_TASKS_BY_TODO_LIST_ID = (id) => gql`
    query GetTasksByToDoListId {
        tasksByToDoListId (id: ${id}) {
            state
            description
            orderInToDoList
            createdAt
            updatedAt
        }
    }
`;
