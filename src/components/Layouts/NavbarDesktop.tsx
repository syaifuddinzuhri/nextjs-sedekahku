import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";

const menus = [
  {
    link: "/",
    label: "Beranda",
  },
  {
    link: "/program",
    label: "Program",
  },
  {
    link: "/about",
    label: "Tentang",
  },
];

const NavbarDesktop = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(pathname);
  const activeMenuItemPos = useMemo(() => {
    const findIndex = menus.findIndex((item) => item.link === activeMenu);
    return findIndex;
  }, [activeMenu]);

  return (
    <Box px={4} py={5} color="white">
      <Flex align="center">
        <Box>
          <Image src="/assets/logo-1.png" alt="Logo" w={40} />
        </Box>
        <Spacer />
        <Flex gap={10}>
          {menus.map((menu, idx) => (
            <Box
              key={idx}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={2}
              cursor={"pointer"}
              color={
                `/${activeMenu.split("/")[1]}` === menu.link
                  ? "secondary.500"
                  : "gray.500"
              }
              onClick={() => {
                setActiveMenu(menu.link);
                router.push(menu.link);
              }}
            >
              <Text _hover={{ color: "secondary.500" }}>{menu.label}</Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavbarDesktop;
