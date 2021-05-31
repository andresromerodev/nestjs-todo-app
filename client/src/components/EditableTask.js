import React from 'react';
import { Box, Flex, SimpleGrid } from '@chakra-ui/layout';
import { ButtonGroup, IconButton } from '@chakra-ui/button';
import { CheckCircleIcon, CheckIcon, CloseIcon, DeleteIcon, EditIcon, TimeIcon } from '@chakra-ui/icons';
import { Editable, EditableInput, EditablePreview, useEditableControls } from '@chakra-ui/editable';

function EditableTask({ description }) {
    function EditableControls() {
        const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } = useEditableControls();

        return isEditing ? (
            <ButtonGroup justifyContent='left' size='sm'>
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='left'>
                <IconButton size='sm' margin='2' icon={<CheckCircleIcon />} {...getEditButtonProps()} />
                <IconButton size='sm' margin='2' icon={<EditIcon />} {...getEditButtonProps()} />
                <IconButton size='sm' margin='2' icon={<DeleteIcon />} {...getEditButtonProps()} />
                <IconButton size='sm' margin='2' icon={<TimeIcon />} {...getEditButtonProps()} />
            </Flex>
        );
    }

    return (
        <Editable textAlign='left' defaultValue={description} fontSize='2xl' isPreviewFocusable={false}>
            <SimpleGrid columns={2} spacing={5}>
                <Box height='80px'>
                    <EditableInput />
                    <EditablePreview />
                </Box>
                <Box height='80px'>
                    <EditableControls />
                </Box>
            </SimpleGrid>
        </Editable>
    );
}

export default EditableTask;
