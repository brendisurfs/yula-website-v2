import { useDisclosure, Button, Flex, Heading, Grid } from "@chakra-ui/react";
import Link from "next/link";

//CUSTOM COMPONENTS:
//	|
//	v
import PageLink from "./PageLink";
import LoginCard from "./LoginCard";

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
        <Heading
          backgroundColor="black"
          color="ivory"
          p={6}
          m={0}
          title="yula"
          justifyContent="space-between"
        >
          <Flex justifyContent="space-between">
            <Grid
              alignItems="center"
              textAlign="center"
              textTransform="uppercase"
              gridTemplateColumns="repeat(5, 1fr)"
              className="left"
              left={0}
            >
              <Link href="/">Yula</Link>
              <p>|</p>
              <PageLink pageRoute="/music" text="Music"></PageLink>
              <PageLink pageRoute="/schedule" text="Schedule"></PageLink>
              <PageLink pageRoute="/about" text="About"></PageLink>
            </Grid>
            <div className="right">
              <Button
                onClick={onOpen}
                rounded={0}
                variant="normal"
                // backgroundColor="blue"
                // fontWeight="light"
              >
                Log In
              </Button>
            </div>
          </Flex>
        </Heading>
        <LoginCard onClose={onClose} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Header;
