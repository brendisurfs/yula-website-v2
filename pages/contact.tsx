import {
    AlertTitle,
    Box,
    Center,
    extendTheme,
    Stack,
    VStack,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import TextSection from "../components/TextSection";

interface ContactType {
    id: number;
    name: string;
    title: string;
    contact_email: string;
    published_at: string;
    created_at: string;
    updated_at: string;
}

type ContactJSON = {
    contactObj: ContactType;
};

function ContactPage({ contactObj }: ContactJSON) {
    return (
        <Layout>
            <Center background="black" h="50vh" color="white">
                <VStack boxShadow="-1px 0" p={4} textAlign="center">
                    <Box className="brand" fontWeight="bold" fontSize="36px">
                        {contactObj.name}
                    </Box>
                    <Box>{contactObj.title}</Box>
                    <Box className="contact-email" color="orange">
                        <h3>{contactObj.contact_email}</h3>
                    </Box>
                </VStack>
            </Center>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("http://localhost:1337/contact");
    const contactObj: ContactType = await response.json();

    return {
        props: {
            contactObj,
        },
    };
};

export default ContactPage;
