"use client";
import { isEmpty } from "@chakra-ui/utils";
import { useProgramDetailQuery } from "@/src/api/program";
import HeaderBar from "@/src/components/HeaderBar";
import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { formatToRupiah } from "@/src/utils/RupiahFormatter";

const ProgramDetail = () => {
  const router = useRouter();
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

          <Text fontWeight={"bold"} fontSize={"xl"} color={"secondary.500"}>
            {programDetailData?.data.name}
          </Text>

          <Flex
            gap={2}
            flexDirection={"column"}
            justifyContent={"space-between"}
            mt={3}
          >
            <Flex gap={2}>
              <Text fontSize={"sm"}>Terkumpul :</Text>
              <Text
                fontSize={"sm"}
                fontWeight={"medium"}
                color={"secondary.500"}
              >
                {formatToRupiah(programDetailData?.data.total)}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize={"sm"}>Sisa Hari :</Text>
              <Text fontSize={"sm"} fontWeight={"medium"}>
                {programDetailData?.data.duration}
              </Text>
            </Flex>
          </Flex>

          <Button
            mt={3}
            size="md"
            variant={"primary"}
            onClick={() => {
              router.push(`/program/${programDetailData?.data.slug}/payment`);
            }}
          >
            <Text color="white">SEDEKAH SEKARANG</Text>
          </Button>

          <Box my={4}>
            <Text
              mb={3}
              fontWeight={"medium"}
              fontSize={"md"}
              color={"gray.700"}
            >
              Deskripsi Program
            </Text>
            <div
              dangerouslySetInnerHTML={{
                __html: programDetailData?.data.description,
              }}
            ></div>
          </Box>
        </>
      )}
    </AppDashboardLayout>
  );
};

export default ProgramDetail;
