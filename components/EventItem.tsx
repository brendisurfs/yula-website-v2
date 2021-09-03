import Image from "next/image";
import { Show } from "../pages/schedule";
import { Center, Flex, Text } from "@chakra-ui/react";

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
        <a href="/">
            <Center>
                <Flex
                    width="85%"
                    justifyContent="space-between"
                    boxShadow="-1px 0 "
                    background="black"
                    color="ivory"
                    p={4}
                    m={1}
                    className={evt.Show_Title}
                >
                    <Flex flexDir="column" className="left-event-stack">
                        <Text color="orange" fontSize={24} fontWeight="bold">
                            {evt.Show_Title}
                        </Text>
                        <p>{evt.show_location}</p>
                    </Flex>
                    {/* dates go here */}
                    <Flex
                        padding={4}
                    >{`${dateDay} | ${dateMonth} | ${dateYear}`}</Flex>
                </Flex>
            </Center>
        </a>
    );
}
