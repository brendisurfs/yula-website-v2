// Links for each sub page, NOT for home page link.

import { Box, chakra, ChakraProvider, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
type LinkProps = {
  text: string;
  pageRoute: string;
};

const PageLink = (props: LinkProps) => {
  return (
    <div className="page-link">
      <Box
        _focus={{ color: "orange" }}
        fontWeight="hairline"
        textTransform="uppercase"
        fontSize="19"
      >
        <Link href={props.pageRoute}>{props.text}</Link>
      </Box>
    </div>
  );
};

export default PageLink;
