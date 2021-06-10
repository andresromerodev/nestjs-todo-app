import React from 'react';
import { Box, Stack, Heading, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            padding={6}
            bg='facebook.800'
            color='white'
            {...props}
        >
            <Flex align='center' mr={5}>
                <Link to={'/'}>
                    <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                        TODO-FY
                    </Heading>
                </Link>
            </Flex>

            <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
                <HamburgerIcon />
            </Box>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems='center'
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >
                <Text>
                    <small>(Like Spotify but for TODOs)</small>
                </Text>
            </Stack>
        </Flex>
    );
};

export default NavigationBar;
