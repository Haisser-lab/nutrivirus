import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure } from '@chakra-ui/react'
import React from "react";

function Menu (){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
    <>
    <svg ref={btnRef} colorScheme='teal' onClick={onOpen} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter-right" viewBox="0 0 16 16">
        <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
    </svg>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        style={{
            width: 80
        }}
    >
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>
        <DrawerBody>
            lalala
        </DrawerBody>
        <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
        </DrawerFooter>
        </DrawerContent>
    </Drawer>
    </>
    )
};

export default Menu;