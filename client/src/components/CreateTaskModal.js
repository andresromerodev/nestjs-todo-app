import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/modal';

function CreateTaskModal({ isOpen, onClose, onSave }) {
    const initialRef = React.useRef();
    const finalRef = React.useRef();

    const [description, setDescription] = useState('');

    const save = () => {
        onSave(description);
        onClose();
    };

    return (
        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create new task</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Task description</FormLabel>
                        <Input
                            ref={initialRef}
                            placeholder='Task description'
                            value={description}
                            onChange={({ target }) => setDescription(target.value)}
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={save} colorScheme='blue' mr={3}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default CreateTaskModal;
