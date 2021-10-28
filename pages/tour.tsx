import { Box, Flex, Grid, GridItem, List, ListItem } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { API_URL } from "../stores";
//COMPONENTs
//	|
//	v
import Layout from "../components/Layout";
import EventItem from "../components/EventItem";

export type Show = {
    id: number;
    Show_Date: string;
    Show_Title: string;
    Show_Desc: string;
    Show_Link?: string;
    show_location?: string;
    published_at?: string;
    created_at?: string;
    updated_at?: string;
};

type EventMap = {
    events: Show[];
};

const SchedulePage = ({ events }: EventMap) => {
    return (
        <Layout>
            <Box background="black" alignItems="center">
                <Grid
                    p={2}
                    paddingTop={12}
                    gridTemplateRows="repeat(4,1fr)"
                    alignItems="center"
                    textAlign="center"
                    width="100%"
                >
                    {events.reverse().map((show: Show) => (
                        <EventItem evt={show} key={show.id}></EventItem>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res: Response = await fetch(`${API_URL}/shows`);
    const events: Show[] = await res.json();

    return {
        props: {
            events,
        },
    };
};

export default SchedulePage;