"use client";

import { ProgramResponse } from "@/src/interfaces/program";
import { formatToRupiah } from "@/src/utils/RupiahFormatter";
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

interface IProps {
  program: ProgramResponse;
}
const ProgramCard = ({ program }: IProps) => {
  const router = useRouter();
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      my={3}
      cursor={"pointer"}
      onClick={() => {
        router.push(`/program/${program?.slug}`);
      }}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "140px" }}
        src={program?.thumbnail}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading size="sm" color={"gray.600"}>
            {program?.name}
          </Heading>
          <Flex gap={2} flexDirection={"column"} mt={3}>
            <Flex gap={2}>
              <Text fontSize={{ base: "sm", sm: "x-small" }}>Terkumpul :</Text>
              <Text
                fontSize={{ base: "sm", sm: "x-small" }}
                fontWeight={"medium"}
              >
                {formatToRupiah(program?.total)}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize={{ base: "sm", sm: "x-small" }}>Sisa Waktu :</Text>
              <Text
                fontSize={{ base: "sm", sm: "x-small" }}
                fontWeight={"medium"}
              >
                {program?.duration}
              </Text>
            </Flex>
          </Flex>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ProgramCard;
