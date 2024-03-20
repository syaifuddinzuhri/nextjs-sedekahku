import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ProgramCard from "./ProgramCard";

interface IProps {
  isLatest: boolean;
}
const ProgramList = ({ isLatest = false }: IProps) => {
  return (
    <Box my={5}>
      {Array.from({ length: 10 }).map((item, i) => (
        <ProgramCard key={i} />
      ))}

      {isLatest && (
        <Button
          size="md"
          borderRadius={"20px"}
          w={"100%"}
          _hover={{ bg: "gray.600" }}
          borderWidth={1}
          background={"gray.500"}
          onClick={() => {
            // router.push(`/program/1/payment`);
          }}
        >
          <Text color="white" fontFamily="Poppins" fontWeight={"normal"}>
            Tampilkan Lebih Banyak
          </Text>
        </Button>
      )}
    </Box>
  );
};

export default ProgramList;
