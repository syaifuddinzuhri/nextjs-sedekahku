"use client";
import { isEmpty } from "@chakra-ui/utils";
import { useProgramDetailQuery } from "@/src/api/program";
import HeaderBar from "@/src/components/HeaderBar";
import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";

const PaymentPage = () => {
  const params = useParams();
  const {
    data: programDetailData,
    refetch: programDetailRefetch,
    isLoading: isLoadingProgramDetail,
  } = useProgramDetailQuery(
    params.id.toString() || "",
    !isEmpty(params.id.toString())
  );

  return (
    <AppDashboardLayout>
      {isLoadingProgramDetail || !programDetailData?.data ? (
        <Center h="70vh">
          <Spinner size="xl" color="secondary.500" />
        </Center>
      ) : (
        <>
          <HeaderBar isBack={true} title={programDetailData?.data.name} />

          <Box width={"full"} my={4}>
            <Image
              objectFit="cover"
              width={"100%"}
              borderRadius={8}
              src={programDetailData?.data.thumbnail}
              alt={programDetailData?.data.name}
            />
          </Box>

          <Box textAlign={"center"}>
            <Text fontWeight={"bold"} fontSize={"xl"} color={"secondary.500"}>
              {programDetailData?.data.name}
            </Text>
            <Text fontSize={"sm"} color={"gray.700"}>
              Masukkan detail anda dibawah untuk bersedekah
            </Text>

            <Box mt={8}>
              <FormControl>
                <FormLabel>Nominal</FormLabel>
                <InputGroup>
                  <InputLeftElement>Rp</InputLeftElement>
                  <Input
                    type={"number"}
                    placeholder={"Masukkan nominal"}
                    pl={12}
                  />
                </InputGroup>
              </FormControl>

              <Flex gap={3} my={4}>
                <Button size={"xs"} variant={"outline"} disabled>
                  10rb
                </Button>
                <Button size={"xs"} variant={"outline"}>
                  25rb
                </Button>
                <Button size={"xs"} variant={"outline"}>
                  50rb
                </Button>
                <Button size={"xs"} variant={"outline"}>
                  100rb
                </Button>
              </Flex>

              <Textarea
                placeholder="Sampaikan doa terbaikmu... (opsional)"
                focusBorderColor="#ff5d00"
                borderColor="#EDEFF2"
                background="#FAFBFC"
                borderRadius={8}
                py={3}
                px={4}
              />

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
              variant={"primary"}
              w={"100%"}
              mt="5"
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
        </>
      )}
    </AppDashboardLayout>
  );
};

export default PaymentPage;
