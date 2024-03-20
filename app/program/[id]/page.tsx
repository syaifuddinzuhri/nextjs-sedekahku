"use client";

import HeaderBar from "@/src/components/HeaderBar";
import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const ProgramDetail = () => {
  const router = useRouter();
  return (
    <AppDashboardLayout>
      <HeaderBar isBack={true} title="Program Detail" />

      <Box width={"full"} my={4}>
        <Image
          objectFit="cover"
          width={"100%"}
          src="https://menara.baznas.go.id/attachments/masjid-musholla/donasi/00dcdf2ab83c5113d1938abf4c89826a.jpg"
          alt="Dan Abramov"
        />
      </Box>

      <Text fontWeight={"bold"} fontSize={"xl"} color={"gray.700"}>
        Program Penggalangan Dana Terbaru
      </Text>

      <Flex
        gap={2}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={3}
      >
        <Flex gap={2}>
          <Text fontSize={"sm"}>Terkumpul :</Text>
          <Text fontSize={"sm"} fontWeight={"medium"} color={"orange.500"}>
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

      <Button
        size="md"
        borderRadius={"20px"}
        w={"100%"}
        mt="5"
        _hover={{ bg: "#CD5A0F" }}
        borderWidth={1}
        background={"orange.500"}
        onClick={() => {
          router.push(`/program/1/payment`);
        }}
      >
        <Text
          color="white"
          fontFamily="Poppins"
          fontWeight={"medium"}
          fontSize={"15px"}
        >
          SEDEKAH SEKARANG
        </Text>
      </Button>

      <Box my={4}>
        <Text fontWeight={"medium"} fontSize={"md"} color={"gray.700"}>
          Deskripsi
        </Text>
        <Text fontSize={"sm"} color={"gray.700"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          numquam veritatis omnis necessitatibus ea quidem praesentium maxime
          error in reprehenderit maiores dolores quia vel, perferendis,
          dignissimos similique nesciunt atque ratione? Dignissimos
          necessitatibus porro nam laboriosam dolorum repellendus reiciendis
          sunt soluta aliquam dolore beatae, rerum velit minus impedit quaerat!
          Deleniti rerum quas nesciunt expedita esse nam eligendi deserunt saepe
          ullam aspernatur voluptas, doloremque aut repellendus alias? Ipsum
          aliquid quis exercitationem consequuntur aperiam alias, laborum, ullam
          maiores eos ab quos odit velit totam unde similique praesentium
          deleniti non cum! Hic fugiat possimus ullam et. Neque corrupti qui
          cumque vero officia omnis voluptatum!
        </Text>
      </Box>
    </AppDashboardLayout>
  );
};

export default ProgramDetail;
