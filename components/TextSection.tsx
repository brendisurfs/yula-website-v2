import { ChakraProvider, Flex } from "@chakra-ui/react";

const TextSection = ({ children }) => {
    return (
        <ChakraProvider>
            <Flex
                backgroundColor="rgb(12,12,12)"
                color="ivory"
                alignContent="center"
                padding="2rem"
                height={800}
                width="100%"
            >
                {children}
            </Flex>
        </ChakraProvider>
    );
};

export default TextSection;
