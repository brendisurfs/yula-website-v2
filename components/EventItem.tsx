import Image from "next/image";
import { Show } from "../pages/tour";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

interface EvtType {
    evt: Show;
}

export default function EventItem({ evt }: EvtType) {
    console.log(evt.Show_Date);
    let dateYear: string = evt.Show_Date.slice(0, 4);
    let dateMonth: string = evt.Show_Date.slice(5, 7);
    let dateDay: string = evt.Show_Date.slice(8, 10);
    console.log(dateYear, dateMonth, dateDay);

    return (
        <Box className="event-card" backgroundColor="rgb(24,24,24)">
            <a target="_blank" rel="noreferrer" href={evt.Show_Link}>
                <Center background="rgb(4,4,4)">
                    <Flex
                        background="rgb(10,10,10)"
                        width="85%"
                        justifyContent="space-between"
                        boxShadow="-1px 0 "
                        color="ivory"
                        p={7}
                        m={1}
                        className={evt.Show_Title ? evt.Show_Title : "/"}
                        _hover={{ bg: "rgb(20,20,20)" }}
                    >
                        <Flex flexDir="column" className="left-event-stack">
                            <Text
                                color="orange"
                                fontSize={38}
                                fontWeight="bold"
                            >
                                {evt.Show_Title}
                            </Text>
                            <p>{evt.show_location}</p>
                        </Flex>
                        {/* dates go here */}
                        <Flex
                            padding={4}
                            fontSize={24}
                        >{`${dateDay} | ${dateMonth} | ${dateYear}`}</Flex>
                    </Flex>
                </Center>
            </a>
        </Box>
    );
}
