import Link from "next/link";
import Image from "next/image";
import { Show } from "../pages/schedule";
import { ReactElement } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

interface EvtType {
  key: number;
  evt: Show;
}

export default function EventItem({ key, evt }: EvtType) {
  return (
    <Flex background="black" color="white">
      <Box p={4} align="center" textAlign="center" key={key}>
        <Text fontWeight="bold">{evt.Show_Title}</Text>
        <h4>{evt.Show_Desc}</h4>
        {/* <Link key={evt.id} href="_" /> */}
      </Box>
    </Flex>
  );
}
