"use client";

import HeaderBar from "@/src/components/HeaderBar";
import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const PaymentPage = () => {
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

      <Box textAlign={"center"}>
        <Text fontWeight={"bold"} fontSize={"xl"} color={"gray.700"}>
          Program Penggalangan Dana Terbaru
        </Text>
        <Text fontSize={"sm"} color={"gray.700"}>
          Masukkan detail anda dibawah untuk bersedekah
        </Text>

        <Box mt={8}>
          <FormControl>
            <FormLabel>Nominal</FormLabel>
            <InputGroup>
              <InputLeftAddon>Rp</InputLeftAddon>
              <Input type="number" />
            </InputGroup>
          </FormControl>

          <Flex gap={3} my={4}>
            <Button>10rb</Button>
            <Button>25rb</Button>
            <Button>50rb</Button>
            <Button>100rb</Button>
          </Flex>

          <Textarea placeholder="Sampaikan doa terbaikmu... (opsional)" />

          <FormControl my={3}>
            <FormLabel>Nama</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl my={3}>
            <FormLabel>Nomor HP</FormLabel>
            <Input type="number" />
          </FormControl>

          <FormControl my={3}>
            <Checkbox>Kirim sebagai Hamba Allah</Checkbox>
          </FormControl>
        </Box>

        <Button
          size="md"
          borderRadius={"20px"}
          w={"100%"}
          mt="5"
          _hover={{ bg: "#CD5A0F" }}
          borderWidth={1}
          background={"orange.500"}
          onClick={() => {
            // router.push(`/program/1/payment`);
          }}
        >
          <Text
            color="white"
            fontFamily="Poppins"
            fontWeight={"medium"}
            fontSize={"15px"}
          >
            BAYAR SEDEKAH
          </Text>
        </Button>
      </Box>
    </AppDashboardLayout>
  );
};

export default PaymentPage;
