"use client";

import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import { Card, CardBody, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiHome, BiLogoGmail, BiPhone } from "react-icons/bi";

const AboutPage = () => {
  return (
    <AppDashboardLayout>
      <Text textAlign={"center"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        eveniet aliquam a voluptatem, tenetur magni ex maiores dicta quas
        facilis in laborum corporis magnam recusandae esse saepe fugiat aperiam
        ea aliquid blanditiis? Minus, labore ipsa minima deleniti earum vel
        dicta, similique reprehenderit veniam magnam beatae corrupti recusandae
        delectus repellat ea quas. Nisi temporibus animi tempora incidunt
        consequuntur maiores dolores saepe, perspiciatis quidem, quos eveniet
        nihil doloremque soluta numquam porro eos, assumenda impedit vel debitis
        explicabo. Iusto voluptatem aperiam amet facere dicta atque quis
        officiis ut, aspernatur eveniet ea, quia laboriosam libero repudiandae
        iste pariatur voluptates quo tempora vel! Accusantium, fugit.
      </Text>
      <Divider my={5} />
      <Flex flexDirection={"column"} gap={4} alignItems={"center"}>
        <Flex gap={1} alignItems={"center"} color={"gray.600"}>
          <BiHome />
          <Text>Jakarta, Indonesia</Text>
        </Flex>
        <Flex gap={1} alignItems={"center"} color={"gray.600"}>
          <BiLogoGmail />
          <Text>sedekahku@gmail.com</Text>
        </Flex>
        <Flex gap={1} alignItems={"center"} color={"gray.600"}>
          <BiPhone />
          <Text>08512345678</Text>
        </Flex>
      </Flex>
      <Divider my={5} />
    </AppDashboardLayout>
  );
};

export default AboutPage;
