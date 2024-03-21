"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import { BiHome, BiInfoCircle, BiStar } from "react-icons/bi";

const menus = [
  {
    link: "/",
    label: "Beranda",
    icon: <BiHome width={20} height={20} />,
  },
  {
    link: "/program",
    label: "Program",
    icon: <BiStar width={20} height={20} />,
  },
  {
    link: "/about",
    label: "Tentang",
    icon: <BiInfoCircle width={20} height={20} />,
  },
];

const BottomNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(pathname);
  const activeMenuItemPos = useMemo(() => {
    const findIndex = menus.findIndex((item) => item.link === activeMenu);
    return findIndex;
  }, [activeMenu]);

  return (
    <Box>
      <Flex
        borderTopWidth="1px"
        bg="white"
        align="center"
        justify="space-around"
        position="fixed"
        bottom="0"
        maxWidth="100%"
        width="420px"
        py={3}
      >
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
            {menu.icon}
            <Text fontSize={"sm"}>{menu.label}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default BottomNavbar;
