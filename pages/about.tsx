import { Text, Image, Flex } from "@chakra-ui/react";
import _Layout from "../components/Layout";
import Layout from "../components/Layout";
import { GetStaticProps } from "next";

// API CONFIG
import { API_URL } from "../stores";
import TextSection from "../components/TextSection";

interface AboutType {
    id: number;
    About: string;
    published_at?: string;
    created_at?: string;
    updated_at?: string;
}

type Info = {
    aboutInfo: AboutType;
    picture?: string;
};

const AboutPage = ({ aboutInfo, picture }: Info) => {
    //
    // parse for easier splitting
    const aboutText = aboutInfo.About;
    let textSplit = aboutText.split(".");

    return (
        <Layout>
            <Flex
                boxShadow="1px 0px solid white"
                background="black"
                p={4}
                justifyContent="center"
                alignItems="center"
                flexDir="column"
            >
                {textSplit.map((line) => (
                    <Text
                        boxShadow="-1px 0"
                        px={4}
                        color="white"
                        background="black"
                        fontSize={24}
                        lineHeight={1.5}
                        width="60%"
                        key={line.length}
                    >
                        {line}.
                        <br />
                        <br />
                    </Text>
                ))}
            </Flex>
        </Layout>
    );
};

//GET API TO LOAD STATIC PROPS
//	|
//	v
// NOTE: will add pictures later.
export const getStaticProps: GetStaticProps = async () => {
    let aboutResponse: Response = await fetch(`${API_URL}/about`);

    let aboutInfo: AboutType = await aboutResponse.json();

    // let pictureResponse: Response = await fetch(`${API_URL}/picture`);
    // let pics = await pictureResponse.json();

    return {
        props: {
            aboutInfo,
        },
    };
};

export default AboutPage;
