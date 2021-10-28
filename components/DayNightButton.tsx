import {
    Button,
    ChakraProvider,
    IconButton,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { NextComponentType } from "next";

import React from "react";

type toggleType = {
    toggle: () => void;
};

const DayNightButton = ({ toggle }: toggleType) => {
    return (
        <ChakraProvider>
            <IconButton
                margin={2}
                borderRadius={0}
                aria-label="day night switch"
                icon={<MoonIcon />}
                onClick={toggle}
            >
                Day/Night
            </IconButton>
        </ChakraProvider>
    );
};

export default DayNightButton;
