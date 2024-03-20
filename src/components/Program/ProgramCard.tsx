"use client";

import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const ProgramCard = () => {
  const router = useRouter();
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      my={3}
      cursor={"pointer"}
      onClick={() => {
        router.push(`/program/1`);
      }}
    >
      <Image
        objectFit="contain"
        maxW={{ base: "100%", sm: "170px" }}
        ml={{ base: 0, sm: 4 }}
        src="https://menara.baznas.go.id/attachments/masjid-musholla/donasi/00dcdf2ab83c5113d1938abf4c89826a.jpg"
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading size="sm" color={"gray.600"}>
            Program 1
          </Heading>
          <Flex gap={2} flexDirection={"column"} mt={3}>
            <Flex gap={2}>
              <Text fontSize={"sm"}>Terkumpul :</Text>
              <Text fontSize={"sm"} fontWeight={"medium"}>
                Rp 100.000
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize={"sm"}>Sisa Hari :</Text>
              <Text fontSize={"sm"} fontWeight={"medium"}>
                Tidak Terbatas
              </Text>
            </Flex>
          </Flex>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ProgramCard;
