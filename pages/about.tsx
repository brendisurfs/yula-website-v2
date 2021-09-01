import { ChakraProvider, Flex } from "@chakra-ui/react";
import TextSection from "../components/TextSection";
import _Layout from "../components/Layout";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <Flex>
        <TextSection></TextSection>
      </Flex>
    </Layout>
  );
};

export default AboutPage;
