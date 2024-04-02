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
  isMobile?: boolean;
}
const ProgramList = ({ datas, isMobile = true }: IProps) => {
  return (
    <Box my={5}>
      {isMobile ? (
        datas.map((item, i) => <ProgramCard key={i} program={item} />)
      ) : (
        <Flex gap={3} flexWrap={"wrap"} justifyContent={"space-between"}>
          {datas.map((item, i) => (
            <Box width={"48%"} key={i}>
              <ProgramCard program={item} />
            </Box>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default ProgramList;
