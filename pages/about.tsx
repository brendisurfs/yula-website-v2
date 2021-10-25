import { Box, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import _Layout from "../components/Layout";
import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import TextGL from "../components/WebGLComponents/TextGL";
import Model from "../components/WebGLComponents/webgl_deps/Test-gltf-scene";
import { Canvas } from "@react-three/fiber";
import { PointLight } from "three";
interface AboutType {
    id: number;
    About: string;
    published_at?: string;
    created_at?: string;
    updated_at?: string;
}

type Info = {
    aboutInfo: AboutType;
};

const AboutPage = ({ aboutInfo }: Info, { pics }) => {
    const aboutText = aboutInfo.About;
    return (
        <Layout>
            <TextGL>{aboutText}</TextGL>
        </Layout>
    );
};

// <Layout>
{
    /* <Flex flexDir="column" background="black" color="ivory"> */
}
{
    /* <Box alignSelf="center" width="30em" m={10}> */
}
{
    /* <Box textTransform="uppercase" p={2} fontSize={72}> */
}
{
    /* About */
}
{
    /* </Box> */
}
{
    /* <TextGL>{aboutText}</TextGL> */
}
{
    /* </Box> */
}
{
    /* <Box alignSelf="center" m={4} className="image"> */
}
{
    /* <p>AN IMAGE WILL GO HERE</p> */
}
{
    /* <img src="" alt="no pic" /> */
}
{
    /* </Box> */
}
{
    /* </Flex> */
}
{
    /* </Layout> */
}
export const getStaticProps: GetStaticProps = async () => {
    const aboutResponse: Response = await fetch("http://localhost:1337/about");
    const pictureResponse: Response = await fetch(
        "http://localhost:1337/picture"
    );
    const aboutInfo: AboutType = await aboutResponse.json();
    const pics = await pictureResponse.json();
    return {
        props: {
            aboutInfo,
            pics,
        },
    };
};

export default AboutPage;
