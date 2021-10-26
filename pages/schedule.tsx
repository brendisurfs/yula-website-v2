import env from "react-dotenv";
import { Box, Flex, Grid, GridItem, List, ListItem } from "@chakra-ui/react";
import { GetStaticProps } from "next";

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
                    p={16}
                    gridTemplateRows="repeat(4,1fr)"
                    alignItems="center"
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
    const res: Response = await fetch(`${env.YULA_URL}/shows`);
    const events: Show[] = await res.json();

    return {
        props: {
            events,
        },
    };
};

export default SchedulePage;
