import { HamburgerIcon } from "@chakra-ui/icons";
import {
  ChakraProvider,
  useDisclosure,
  useColorMode,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Flex,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import PageLink from "./PageLink";
const SideMenu = () => {
  const linkTabs = ["home", "music", "schedule", "about"];

  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const { toggleColorMode } = useColorMode();
  let count = 0;
  return (
    <div>
      {/* HEADER DISPLAY STARTS HERE */}
      <Menu isLazy colorScheme="blackAlpha">
        <MenuButton
          rounded={0}
          as={IconButton}
          aria-label="Menu Options"
          icon={<HamburgerIcon />}
          variant="normal"
        />
        <MenuList
          borderRadius={0}
          alignItems="right"
          backgroundColor="rgb(24,24,24)"
          borderColor="rgb(24,24,24)"
        >
          {linkTabs.map((item) => (
            <MenuItem
              fontWeight="hairline"
              fontSize={18}
              key={(count += 1)}
              _focus={{ color: "orange" }}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SideMenu;
