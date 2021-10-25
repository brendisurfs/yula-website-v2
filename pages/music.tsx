import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import _Layout from "../components/Layout";

// components
import { Box } from "@chakra-ui/react";
function MusicPage() {
    return (
        <Layout>
            <Box background={"black"} color={"white"} textAlign={"center"}>
                music coming soon
            </Box>
        </Layout>
    );
}

export default MusicPage;
