export const onTaskDone = (description) => ({
    title: 'Task Completed.',
    description: `"${description}" marked as DONE.`,
    status: 'success',
    duration: 5000,
    isClosable: true,
});

export const onTaskPending = (description) => ({
    title: 'Task Moved to Pending State.',
    description: `"${description}" marked as TODO.`,
    status: 'warning',
    duration: 5000,
    isClosable: true,
});

export const onError = (error) => ({
    title: 'System Error.',
    description: error.message,
    status: 'error',
    duration: 5000,
    isClosable: true,
});
