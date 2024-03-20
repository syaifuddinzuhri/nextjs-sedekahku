"use client";

import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import ProgramCard from "@/src/components/Program/ProgramCard";
import ProgramList from "@/src/components/Program/ProgramList";
import {
  Box,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProgramPage = () => {
  return (
    <AppDashboardLayout>
      <Box my={5}>
        <Text fontWeight={"bold"} fontSize={"xl"} color={"gray.700"}>
          Semua Program Penggalangan Dana
        </Text>

        <Box my={4}>
          <FormControl my={3}>
            <Input type="text" placeholder="Cari program..." />
          </FormControl>
        </Box>
        <ProgramList isLatest={true} />
      </Box>
    </AppDashboardLayout>
  );
};

export default ProgramPage;
