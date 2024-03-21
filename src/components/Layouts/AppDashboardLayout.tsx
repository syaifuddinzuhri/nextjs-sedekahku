"use client";

import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import BottomNavbar from "../Navbar/BottomNavbar";
import Footer from "./Footer";

interface IAppDashboardLayout {
  children: React.ReactNode;
  headerBar?: {
    children?: React.ReactNode;
  };
}

const propsDefaultValue: Omit<IAppDashboardLayout, "children"> = {};

const AppDashboardLayout = (props: IAppDashboardLayout) => {
  const { children, headerBar } = { ...propsDefaultValue, ...props };
  return (
    <Box bg={"gray.50"} minH={"100vh"} position="relative">
      <Box maxWidth="100%" width="420px" minH={"100vh"} mx="auto" bg={"white"}>
        <Box px={4} pt={4} pb={32}>
          <Flex justifyContent={"center"} mb={3}>
            <Image src="/assets/logo-1.png" alt="Logo" w={40} />
          </Flex>
          <Divider mb={4} />
          {children}
          <Footer />
        </Box>
        <BottomNavbar />
      </Box>
    </Box>
  );
};

export default AppDashboardLayout;
