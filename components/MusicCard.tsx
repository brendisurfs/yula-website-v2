import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { IMusicProps } from "../pages/music";

const MusicCard = ({ ...songInfo }: IMusicProps) => {
    return (
        <Box className="event-card" backgroundColor="rgb(24,24,24)">
            <a target="_blank" rel="noreferrer" href={songInfo.songLink}>
                <Center background="rgb(4,4,4)">
                    <Flex
                        background="rgb(10,10,10)"
                        width="85%"
                        justifyContent="space-between"
                        boxShadow="-1px 0 "
                        color="ivory"
                        p={7}
                        m={1}
                        className={
                            songInfo.songTitle ? songInfo.songTitle : "/"
                        }
                        _hover={{ bg: "rgb(20,20,20)" }}
                    >
                        <Flex flexDir="column" className="left-event-stack">
                            <Text
                                color="orange"
                                fontSize={38}
                                fontWeight="bold"
                            >
                                {songInfo.songTitle}
                            </Text>
                            <p>{songInfo.artistTitle}</p>
                        </Flex>
                        {/* images here */}
                        <Box className="song-image">
                            <img
                                src={songInfo.songImageURL}
                                alt={songInfo.songTitle}
                            />
                        </Box>
                    </Flex>
                </Center>
            </a>
        </Box>
    );
};

export default MusicCard;
