import { Box, Flex, Grid, List, ListItem } from "@chakra-ui/react";
import { GetStaticProps } from "next";

//COMPONENTs
//	|
//	v
import Layout from "../components/Layout";
import EventItem from "../components/EventItem";

export type Show = {
    id: number;
    Show_Dates: string;
    Show_Desc: string;
    Show_Title: string;
    show_link?: string;
    published_at?: string;
    created_at?: string;
    updated_at?: string;
};

type EventMap = {
    events: Show[];
};

const SchedulePage = ({ events }: EventMap) => {
    events.map((show: Show) => {
        console.log(show.Show_Title);
    });
    return (
        <Layout>
            <Box background="black" alignItems="center">
                <Grid
                    p={16}
                    gridTemplateRows="repeat(4,1fr)"
                    alignItems="center"
                >
                    {events.map((show: Show) => (
                        <EventItem evt={show} key={show.id}></EventItem>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res: Response = await fetch("http://localhost:1337/shows");
    const events: Show[] = await res.json();
    return {
        props: {
            events,
        },
    };
};

export default SchedulePage;
