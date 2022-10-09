import { GetStaticProps } from "next";
import Layout from "../components/Layout";

// components
import { Box, Flex } from "@chakra-ui/react";

export interface IMusicProps {
    songTitle: string;
    songLink: string;
    songImageURL: string;
    artistTitle: string;
}

function MusicPage() {
    return (
        <Layout>
            <Flex
                alignItems="center"
                justifyContent="center"
                background="black"
                width="100%"
                padding="2rem"
            >
                <Box justifyContent="center" alignItems="center" width="50%">
                    <iframe
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/artist/32GQyTofHn92DwudAFpVf8?utm_source=generator&theme=0"
                        width="100%"
                        height="380"
                        frameBorder="0"
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                </Box>
            </Flex>
        </Layout>
    );
}

export default MusicPage;
