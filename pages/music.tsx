import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import _Layout from "../components/Layout";

export interface IMusicProps {
    songTitle: string;
    songLink: string;
    songImageURL: string;
    artistTitle: string;
}

const musicTabs: IMusicProps[] = [
    {
        songTitle: "Everything You Feel",
        songLink:
            "https://open.spotify.com/track/7r4cZWIXy6ChgO9arBIfGA?si=564874bd3abc4094",
        songImageURL:
            "https://i.scdn.co/image/ab67616d00001e0235547783541b0e0ef45490af",
        artistTitle: "Yula",
    },
    {
        songTitle: "A Narrow Road",
        songLink:
            "https://open.spotify.com/track/3rRuewnnd90C05vlLhUuRE?si=b3d6d914a2454a9f",
        songImageURL:
            "https://i.scdn.co/image/ab67616d00001e025c22c36fef94a544fc403f64",
        artistTitle: "Yula",
    },
    {
        songTitle: "Final Level",
        songLink:
            "https://open.spotify.com/track/2yd4gwwXzruCjErTbOPgCv?si=ecb0e05a7c2045a8",
        songImageURL:
            "https://i.scdn.co/image/ab67616d00001e0246ccb842e55fddc1307a67a6",
        artistTitle: "Yula",
    },
];

// components
import { Box, Grid } from "@chakra-ui/react";
import MusicCard from "../components/MusicCard";
function MusicPage() {
    return (
        <Layout>
            <Box background="black" alignItems="center">
                <Grid
                    p={2}
                    paddingTop={12}
                    gridTemplateRows="repeat(4,1fr)"
                    alignItems="center"
                    textAlign="left"
                    width="100%"
                >
                    {musicTabs.map((music: IMusicProps) => (
                        <MusicCard key={music.songTitle} {...music} />
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
}

export default MusicPage;
