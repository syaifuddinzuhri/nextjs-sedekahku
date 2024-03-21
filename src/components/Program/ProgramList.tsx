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
import { ProgramResponse } from "@/src/interfaces/program";

interface IProps {
  datas: ProgramResponse[];
}
const ProgramList = ({ datas }: IProps) => {
  return (
    <Box my={5}>
      {datas.map((item, i) => (
        <ProgramCard key={i} program={item} />
      ))}
    </Box>
  );
};

export default ProgramList;
