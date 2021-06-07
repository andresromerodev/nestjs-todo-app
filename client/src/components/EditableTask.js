import React, { useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import { Box, Flex, SimpleGrid } from '@chakra-ui/layout';
import { ButtonGroup, IconButton } from '@chakra-ui/button';
import { CheckCircleIcon, CheckIcon, CloseIcon, DeleteIcon, EditIcon, TimeIcon } from '@chakra-ui/icons';
import { Editable, EditableInput, EditablePreview, useEditableControls } from '@chakra-ui/editable';
import { Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/popover';
import { dateWithoutSecs } from '../utilities/dateUtils';
import { onError, onTaskDone, onTaskPending } from '../events/eventNotifications';

function EditableTask({ id, description, state, createdAt, updatedAt, markTaskAsDone, updateTaskDescription }) {
    const toast = useToast();
    const [taskColor, setTaskColor] = useState(state === 'DONE' ? 'green' : '');

    const markDone = () => {
        try {
            const newTaskState = state === 'DONE' ? 'TODO' : 'DONE';
            markTaskAsDone({
                variables: {
                    id,
                    state: newTaskState,
                },
            });
            if (newTaskState === 'DONE') {
                setTaskColor('green');
                toast(onTaskDone(description));
            } else {
                setTaskColor('');
                toast(onTaskPending(description));
            }
        } catch (error) {
            toast(onError);
        }
    };

    const updateDescription = (description) => {
        updateTaskDescription({
            variables: {
                id,
                description,
            },
        });
    };

    function EditableControls() {
        const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } = useEditableControls();

        return isEditing ? (
            <ButtonGroup justifyContent='left' size='sm'>
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='left'>
                <IconButton size='sm' margin='2' icon={<CheckCircleIcon color={taskColor} />} onClick={markDone} />
                <IconButton size='sm' margin='2' icon={<EditIcon />} {...getEditButtonProps()} />
                <IconButton size='sm' margin='2' icon={<DeleteIcon />} {...getEditButtonProps()} />
                <Popover placement='right'>
                    <PopoverTrigger>
                        <IconButton size='sm' margin='2' icon={<TimeIcon />} />
                    </PopoverTrigger>
                    <PopoverContent fontSize='15'>
                        <PopoverBody>
                            <b>Created at</b>: {dateWithoutSecs(createdAt)}
                            <br />
                            <b>Last updated at</b>: {dateWithoutSecs(updatedAt)}
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
        );
    }

    return (
        <Editable
            textAlign='left'
            defaultValue={description}
            fontSize='2xl'
            isPreviewFocusable={false}
            onSubmit={updateDescription}
        >
            <SimpleGrid columns={2} spacing={5}>
                <Box height='80px'>
                    <EditableInput />
                    <EditablePreview textDecoration={state === 'DONE' ? 'line-through' : 'none'} />
                </Box>
                <Box height='80px'>
                    <EditableControls />
                </Box>
            </SimpleGrid>
        </Editable>
    );
}

export default EditableTask;
