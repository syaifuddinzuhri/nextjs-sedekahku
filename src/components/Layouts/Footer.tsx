import { Box, Card, CardBody, Divider, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiLockAlt } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";

const Footer = () => {
  return (
    <Box
      mt={10}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Divider mb={5} />
      <Card w={"full"}>
        <CardBody>
          <Box display={"flex"} alignItems={"center"} gap={4}>
            <Icon as={MdOutlineSecurity} boxSize={10} color={"green.500"} />
            <Box display={"flex"} flexDirection={"column"}>
              <Text>Pembayaran Aman</Text>
              <Text fontSize={"x-small"}>
                Semua pembayaran menggunakan enkripsi keamanan RSA
              </Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
      <Box w={"full"} bg={"gray.100"} borderRadius={3} p={4} mt={5}>
        <Text fontSize={"sm"} color={"gray.500"}>
          Disclamer: <br /> Informasi dan opini yang tertulis di halaman
          campaign ini adalah milik campaigner (pihak yang menggalang dana) dan
          tidak mewakili Mayar sebagai pemroses pembayaran.
        </Text>
      </Box>
      <Box display={"flex"} mt={5} alignItems={"center"} gap={1}>
        <BiLockAlt />
        <Text fontSize={"x-small"}>POWERED BY SEDEKAHKUY.COM </Text>
      </Box>
    </Box>
  );
};

export default Footer;
