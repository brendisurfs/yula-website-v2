// SPEC:
// CARD SHOULD BE HIDDEN UNTIL THE USER HITS THE LOGIN PAGE

import {
    Input,
    useColorModeValue,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";

type props = {
    isOpen: boolean;
    onClose: () => void;
};

const LoginCard = ({ isOpen, onClose }: props): JSX.Element => {
    const formBackground = useColorModeValue("gray.100", "gray.700");
    return (
        <Modal onClose={onClose} isOpen={isOpen} colorScheme="teal">
            <ModalContent
                rounded={0}
                backgroundColor="rgb(24,24,24)"
                color="white"
            >
                <ModalHeader>Log In</ModalHeader>
                <ModalCloseButton rounded={0} />
                <ModalBody p={2}>
                    <Input
                        backgroundColor="rgb(32,32,32)"
                        rounded={0}
                        placeholder="admin email"
                        variant="filled"
                        mb={3}
                        type="email"
                    />

                    <Input
                        rounded={0}
                        backgroundColor="rgb(32,32,32)"
                        placeholder="password"
                        variant="filled"
                        mb={3}
                        type="password"
                    />

                    <Button
                        backgroundColor="blue"
                        rounded={0}
                        onClick={() => console.log("nice")}
                    >
                        Log In
                    </Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default LoginCard;
