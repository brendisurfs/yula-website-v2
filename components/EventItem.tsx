import Link from "next/link";
import Image from "next/image";
import { Show } from "../pages/schedule";
import { ReactElement } from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

interface EvtType {
    key: number;
    evt: Show;
}

export default function EventItem({ key, evt }: EvtType) {
    return (
        <GridItem
            background="black"
            color="ivory"
            p={4}
            textAlign="left"
            className={evt.Show_Title}
        >
            <Text fontSize={24} fontWeight="bold">
                {evt.Show_Title}
            </Text>
            <p>{evt.Show_Desc}</p>
            {/* <Link key={evt.id} href="_" /> */}
        </GridItem>
    );
}
