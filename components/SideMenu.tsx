import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
const SideMenu = () => {
    const linkTabs = ["music", "tour", "about", "contact"];

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
                    alignItems="center"
                    backgroundColor="rgb(24,24,24)"
                    borderColor="rgb(24,24,24)"
                >
                    {linkTabs.map((item) => (
                        <Link passHref href={`/${item}`}>
                            <MenuItem
                                fontSize={24}
                                key={(count += 1)}
                                _focus={{ color: "orange" }}
                                width="100%"
                            >
                                {item}
                            </MenuItem>
                        </Link>
                    ))}
                </MenuList>
            </Menu>
        </div>
    );
};

export default SideMenu;
