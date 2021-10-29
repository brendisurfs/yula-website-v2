import {
    useDisclosure,
    Button,
    Flex,
    Image,
    Heading,
    Grid,
} from "@chakra-ui/react";
//CUSTOM COMPONENTS:
//	|
//	v
import PageLink from "./PageLink";
import LoginCard from "./LoginCard";
import YulaFontSVG from "./YulaLogoFontSVG";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <meta name="website" content="yula.com"></meta>
            <meta
                name="description"
                content="Website for electronic musician Yula."
            ></meta>

            {/* HEADER DISPLAY STARTS HERE */}
            <div className="desktop-menu">
                <Heading backgroundColor="black" p={4} m={0} title="yula">
                    <Flex justifyContent="space-between">
                        <Grid
                            // if I want the logo to line up again, this is it right here.
                            // alignItems="center"
                            textAlign="center"
                            textTransform="uppercase"
                            gridTemplateColumns="repeat(5, 1fr)"
                            className="left"
                            left={0}
                            fontSize={52}
                        >
                            {/* BRAND */}
                            <div className="page-link">
                                {/* <YulaSVG scale={64} /> */}
                                <YulaFontSVG />
                            </div>
                            {/* END BRAND */}
                        </Grid>
                        <div className="right">
                            <Grid
                                color="white"
                                p={1}
                                alignItems="center"
                                textAlign="right"
                                //NOTE
                                //	|
                                //	v
                                // reload this is you want a long layout
                                // gridTemplateColumns="repeat(4,1fr)"
                                justifySelf="space-around"
                            >
                                <PageLink
                                    pageRoute="/music"
                                    text="Music"
                                ></PageLink>
                                <PageLink
                                    pageRoute="/tour"
                                    text="Tour"
                                ></PageLink>
                                <PageLink
                                    pageRoute="/about"
                                    text="About"
                                ></PageLink>
                                <PageLink
                                    pageRoute="/contact"
                                    text="Contact"
                                ></PageLink>
                            </Grid>
                        </div>
                    </Flex>
                </Heading>
                <LoginCard onClose={onClose} isOpen={isOpen} />
            </div>
        </div>
    );
};

export default Header;
