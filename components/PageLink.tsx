// Links for each sub page, NOT for home page link.

import { Box, chakra, ChakraProvider, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
type LinkProps = {
  text: string;
  pageRoute: string;
};

const PageLink = (props: LinkProps) => {
  return (
    <ChakraProvider>
      <Box fontSize="18">
        <Link href={props.pageRoute}>{props.text}</Link>
      </Box>
    </ChakraProvider>
  );
};

export default PageLink;
