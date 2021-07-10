import React, { useState } from 'react';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/modal';

function CreateListModal({ isOpen, onClose, onSave }) {
    const initialRef = React.useRef();
    const finalRef = React.useRef();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const save = () => {
        onSave(description);
        onClose();
    };

    return (
        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create new list</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>List name</FormLabel>
                        <Input
                            ref={initialRef}
                            placeholder='List name'
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                    </FormControl>
                    <br />
                    <FormControl>
                        <FormLabel>List description</FormLabel>
                        <Input
                            placeholder='List description'
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

export default CreateListModal;
