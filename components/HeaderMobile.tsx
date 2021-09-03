import { Flex, Grid } from "@chakra-ui/react";
import Link from "next/link";
import SideMenu from "./SideMenu";

const HeaderMobile = () => {
    return (
        <div className="mobile-menu ">
            <Flex
                borderColor="black"
                m={0}
                p={4}
                backgroundColor="#000000"
                color="ivory"
                fontSize="32"
                fontStyle="bold"
                justifyContent="space-between"
            >
                <Grid
                    alignItems="center"
                    textAlign="center"
                    textTransform="uppercase"
                    gridTemplateColumns="repeat(2, 1fr)"
                    className="left"
                    left={0}
                    fontWeight="bold"
                >
                    <Link href="/">Yula</Link>
                </Grid>
                <div className="right">
                    <SideMenu />
                </div>
            </Flex>
        </div>
    );
};

export default HeaderMobile;
