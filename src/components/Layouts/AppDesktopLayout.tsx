"use client";

import { Box, Container, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import Footer from "./Footer";

interface IAppDesktopLayout {
  children: React.ReactNode;
}

const propsDefaultValue: Omit<IAppDesktopLayout, "children"> = {};

const AppDesktopLayout = (props: IAppDesktopLayout) => {
  const { children } = { ...propsDefaultValue, ...props };
  return (
    <Box width="100%" minH={"100vh"} mx="auto" bg={"white"}>
      <Container maxW="container.sm">
        <NavbarDesktop />
        <Box minH={"60vh"}>{children}</Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default AppDesktopLayout;
