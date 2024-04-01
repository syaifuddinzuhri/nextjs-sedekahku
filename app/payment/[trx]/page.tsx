"use client";

import { usePaymentDetailQuery } from "@/src/api/payment";
import { useParams } from "next/navigation";
import React from "react";
import { isEmpty } from "@chakra-ui/utils";
import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  Icon,
  Image,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { formatToRupiah } from "@/src/utils/RupiahFormatter";
import { BiCopy } from "react-icons/bi";
import { MdCopyAll } from "react-icons/md";

const PaymentDetail = () => {
  const params = useParams();
  const toast = useToast();
  const {
    data: paymentDetailData,
    refetch: paymentDetailRefetch,
    isLoading: isLoadingPaymentDetail,
  } = usePaymentDetailQuery(
    params.trx.toString() || "",
    !isEmpty(params.trx.toString())
  );
  const copyText = async (text: string, notif: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: notif,
        status: "success",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Gagal menyalin",
        status: "error",
        variant: "subtle",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <AppDashboardLayout>
      {isLoadingPaymentDetail || !paymentDetailData?.data ? (
        <Center h="70vh">
          <Spinner size="xl" color="secondary.500" />
        </Center>
      ) : (
        <>
          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"2xl"}
            color={"secondary.500"}
          >
            PEMBAYARAN SEDEKAH
          </Text>

          <Card my={2}>
            <CardBody>
              <Flex flexDirection={"column"} gap={4}>
                <Flex
                  gap={3}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Text fontSize={"sm"}>Nama Program</Text>
                  <Text fontWeight={"medium"}>
                    {paymentDetailData?.data.program?.name}
                  </Text>
                </Flex>
                <Flex
                  gap={3}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Text fontSize={"sm"}>Nama</Text>
                  <Text fontWeight={"medium"}>
                    {paymentDetailData?.data.name}
                  </Text>
                </Flex>
                <Flex
                  gap={3}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Text fontSize={"sm"}>Nomor HP</Text>
                  <Text fontWeight={"medium"}>
                    {paymentDetailData?.data.phone || "-"}
                  </Text>
                </Flex>
                <Flex
                  gap={3}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Text fontSize={"sm"}>Doa</Text>
                  <Text fontWeight={"medium"}>
                    {paymentDetailData?.data.notes || "-"}
                  </Text>
                </Flex>
                <Flex
                  gap={3}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Text fontSize={"sm"}>Nominal</Text>
                  <Flex alignItems={"center"} gap={3}>
                    <Text fontWeight={"medium"}>
                      {formatToRupiah(paymentDetailData?.data.nominal)}
                    </Text>
                    <Icon
                      as={MdCopyAll}
                      boxSize={5}
                      cursor={"pointer"}
                      color={"secondary.500"}
                      onClick={() =>
                        copyText(
                          paymentDetailData?.data?.nominal.toString() || "",
                          "Nominal berhasil disalin"
                        )
                      }
                    />
                  </Flex>
                </Flex>
                <Flex
                  gap={3}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Text fontSize={"sm"}>Akun Pembayaran</Text>
                  <Flex
                    gap={1}
                    flexDirection={"column"}
                    alignItems={"start"}
                    justifyContent={"center"}
                  >
                    <Flex alignItems={"center"} gap={3}>
                      <Text fontWeight={"medium"}>
                        {paymentDetailData?.data.payment_account?.name}{" "}
                        {
                          paymentDetailData?.data.payment_account
                            ?.account_number
                        }{" "}
                      </Text>
                      <Icon
                        as={MdCopyAll}
                        boxSize={5}
                        cursor={"pointer"}
                        color={"secondary.500"}
                        onClick={() =>
                          copyText(
                            paymentDetailData?.data?.payment_account
                              ?.account_number || "",
                            "Nomor rekening berhasil disalin"
                          )
                        }
                      />
                    </Flex>
                    {/* <Text>
                      A.n{" "}
                      {paymentDetailData?.data.payment_account?.account_name}
                    </Text> */}
                  </Flex>
                </Flex>
              </Flex>
            </CardBody>
          </Card>

          <Text textAlign={"center"} mt={3} fontSize={"sm"}>
            Simpan link halaman ini untuk proses pembayaran Anda.
          </Text>
          <Button
            size="sm"
            variant={"primary"}
            w={"100%"}
            mt="2"
            onClick={() => {
              copyText(
                window.location.href || "",
                "Link halaman pembayaran berhasil disalin"
              );
            }}
          >
            <Text color="white" fontFamily="Poppins">
              SALIN DAN SIMPAN LINK
            </Text>
          </Button>
        </>
      )}
    </AppDashboardLayout>
  );
};

export default PaymentDetail;
