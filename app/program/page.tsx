"use client";

import { useProgramQuery } from "@/src/api/program";
import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import AppDesktopLayout from "@/src/components/Layouts/AppDesktopLayout";
import ProgramCard from "@/src/components/Program/ProgramCard";
import ProgramList from "@/src/components/Program/ProgramList";
import { useSearchStore } from "@/src/store/search";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Spinner,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

const ProgramPage = () => {
  const { search, filter, pagination } = useSearchStore();
  const [isBreakpoint] = useMediaQuery("(min-width: 48rem)");

  const {
    data: programData,
    refetch: programRefetch,
    isLoading: isLoadingProgram,
    isFetching: isFetchingProgram,
  } = useProgramQuery({
    keyword: search,
    page: pagination?.page || 1,
    perPage: 1000,
  });

  const setSearch = useSearchStore((state) => state.setSearch);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };

  useEffect(() => {
    if (
      search !== undefined ||
      filter !== undefined ||
      (pagination?.page !== undefined && pagination.perPage !== undefined)
    ) {
      programRefetch();
    }
  }, [programRefetch, search, filter, pagination?.perPage, pagination?.page]);

  return isBreakpoint ? (
    <AppDesktopLayout>
      <Box my={5}>
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "lg", sm: "xl" }}
          color={"gray.700"}
        >
          Semua Program Penggalangan Dana
        </Text>

        <Box my={4}>
          <FormControl my={3}>
            <Input
              type="text"
              placeholder="Cari program..."
              onChange={handleInputChange}
            />
          </FormControl>
        </Box>
        {isLoadingProgram || isFetchingProgram ? (
          <Center h="70vh">
            <Spinner size="xl" color="secondary.500" />
          </Center>
        ) : (
          <ProgramList datas={programData?.data.data || []} isMobile={false} />
        )}
        {/* <Button
          size="md"
          borderRadius={"20px"}
          w={"100%"}
          _hover={{ bg: "gray.600" }}
          borderWidth={1}
          background={"gray.500"}
          onClick={() => {}}
        >
          <Text color="white" fontFamily="Poppins" fontWeight={"normal"}>
            Tampilkan Lebih Banyak
          </Text>
        </Button> */}
      </Box>
    </AppDesktopLayout>
  ) : (
    <AppDashboardLayout>
      <Box my={5}>
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "lg", sm: "xl" }}
          color={"gray.700"}
        >
          Semua Program Penggalangan Dana
        </Text>

        <Box my={4}>
          <FormControl my={3}>
            <Input
              type="text"
              placeholder="Cari program..."
              onChange={handleInputChange}
            />
          </FormControl>
        </Box>
        {isLoadingProgram || isFetchingProgram ? (
          <Center h="70vh">
            <Spinner size="xl" color="secondary.500" />
          </Center>
        ) : (
          <ProgramList datas={programData?.data.data || []} />
        )}
        {/* <Button
          size="md"
          borderRadius={"20px"}
          w={"100%"}
          _hover={{ bg: "gray.600" }}
          borderWidth={1}
          background={"gray.500"}
          onClick={() => {}}
        >
          <Text color="white" fontFamily="Poppins" fontWeight={"normal"}>
            Tampilkan Lebih Banyak
          </Text>
        </Button> */}
      </Box>
    </AppDashboardLayout>
  );
};

export default ProgramPage;
