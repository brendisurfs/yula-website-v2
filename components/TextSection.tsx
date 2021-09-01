import { ChakraProvider, Flex } from "@chakra-ui/react";

const TextSection = () => {
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
        <div></div>
      </Flex>
    </ChakraProvider>
  );
};

export default TextSection;
