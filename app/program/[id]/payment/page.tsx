"use client";
import { isEmpty } from "@chakra-ui/utils";
import { useProgramDetailQuery } from "@/src/api/program";
import HeaderBar from "@/src/components/HeaderBar";
import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import {
  Box,
  Button,
  Card,
  CardBody,
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
  List,
  ListItem,
  Spinner,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { usePaymentAccountQuery } from "@/src/api/payment-account";
import { PaymentAccountResponse } from "@/src/interfaces/payment_account";
import { useAddPaymentMutation } from "@/src/api/payment";
import { generateErrorOptions } from "@/src/utils/common";

const PaymentPage = () => {
  const params = useParams();
  const router = useRouter();
  const toast = useToast();
  const [nominal, setNominal] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isAnonim, setIsAnonim] = useState<number>(0);
  const [paymentAccountId, setPaymentAccountId] = useState<number>(0);
  const [isOption, setIsOption] = useState<boolean>(false);

  const {
    data: programDetailData,
    refetch: programDetailRefetch,
    isLoading: isLoadingProgramDetail,
  } = useProgramDetailQuery(
    params.id.toString() || "",
    !isEmpty(params.id.toString())
  );

  const {
    data: paymentAccountData,
    refetch: paymentAccountRefetch,
    isLoading: isLoadingPaymentAccount,
  } = usePaymentAccountQuery();

  const { mutate: addPayment, isLoading: isLoadingAddPayment } =
    useAddPaymentMutation({
      name,
      program: programDetailData?.data.id || 0,
      nominal: nominal || 0,
      phone,
      anonim: isAnonim,
      payment_account_id: paymentAccountId,
      onSuccess: (data: any) => {
        toast({
          title: "Berhasil",
          status: "success",
          variant: "subtle",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        router.push(`/payment/${data.data.no_transaction}`);
      },
      onError: (e: any) => toast(generateErrorOptions(e)),
    });

  const handleSubmit = () => {
    addPayment();
  };

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
                    value={nominal || ""}
                    onChange={(e) => {
                      setIsOption(false);
                      setNominal(
                        isNaN(parseFloat(e.target.value))
                          ? 0
                          : parseFloat(e.target.value)
                      );
                    }}
                    type={"number"}
                    placeholder={"Masukkan nominal"}
                    pl={12}
                  />
                </InputGroup>
              </FormControl>

              <Flex gap={3} my={4}>
                <Button
                  size={"xs"}
                  variant={"outline"}
                  onClick={() => {
                    setIsOption(true);
                    setNominal(10000);
                  }}
                  bg={isOption && nominal === 10000 ? "gray.200" : ""}
                >
                  10rb
                </Button>
                <Button
                  size={"xs"}
                  variant={"outline"}
                  onClick={() => {
                    setIsOption(true);
                    setNominal(25000);
                  }}
                  bg={isOption && nominal === 25000 ? "gray.200" : ""}
                >
                  25rb
                </Button>
                <Button
                  size={"xs"}
                  variant={"outline"}
                  onClick={() => {
                    setIsOption(true);
                    setNominal(50000);
                  }}
                  bg={isOption && nominal === 50000 ? "gray.200" : ""}
                >
                  50rb
                </Button>
                <Button
                  size={"xs"}
                  variant={"outline"}
                  onClick={() => {
                    setIsOption(true);
                    setNominal(100000);
                  }}
                  bg={isOption && nominal === 100000 ? "gray.200" : ""}
                >
                  100rb
                </Button>
              </Flex>

              <Textarea
                placeholder="Sampaikan doa terbaikmu... (opsional)"
                focusBorderColor="#ff5d00"
                borderColor="#EDEFF2"
                background="#FAFBFC"
                borderRadius={8}
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
                py={3}
                px={4}
              />

              <FormControl my={3}>
                <Checkbox
                  isChecked={isAnonim === 1 ? true : false}
                  onChange={(e) => {
                    setIsAnonim(e.target.checked ? 1 : 0);
                  }}
                >
                  Kirim sebagai Hamba Allah
                </Checkbox>
              </FormControl>

              {isAnonim === 0 && (
                <>
                  <FormControl my={3}>
                    <FormLabel>Nama</FormLabel>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </FormControl>

                  <FormControl my={3}>
                    <FormLabel>Nomor HP</FormLabel>
                    <Input
                      type="number"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </FormControl>
                </>
              )}

              <FormControl>
                <FormLabel>Akun pembayaran</FormLabel>
                {paymentAccountData?.data &&
                  paymentAccountData?.data.length > 0 &&
                  paymentAccountData?.data.map(
                    (item: PaymentAccountResponse, i: number) => (
                      <Card
                        key={i}
                        my={2}
                        cursor={"pointer"}
                        _hover={{
                          bg: "gray.100",
                        }}
                        bg={item.id === paymentAccountId ? "gray.100" : ""}
                        border={
                          item.id === paymentAccountId
                            ? "1px solid #ff5d00"
                            : ""
                        }
                        onClick={() => {
                          setPaymentAccountId(item.id);
                        }}
                      >
                        <CardBody>
                          <Flex gap={3} alignItems={"center"}>
                            <Image src={item.logo} alt="Logo" w={50} />
                            <Flex
                              gap={1}
                              flexDirection={"column"}
                              alignItems={"start"}
                              justifyContent={"center"}
                            >
                              <Text fontWeight={"bold"}>{item.name}</Text>
                              <Text>
                                {item.account_number}
                                {/* {item.account_number} A.n {item.account_name} */}
                              </Text>
                            </Flex>
                          </Flex>
                        </CardBody>
                      </Card>
                    )
                  )}
              </FormControl>
            </Box>

            {isLoadingAddPayment && (
              <Button
                isLoading
                loadingText="Submitting"
                colorScheme="teal"
                variant="outline"
              >
                Proses...
              </Button>
            )}

            {!isLoadingAddPayment && (
              <Button
                size="md"
                variant={"primary"}
                w={"100%"}
                mt="5"
                onClick={() => {
                  handleSubmit();
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
            )}
          </Box>
        </>
      )}
    </AppDashboardLayout>
  );
};

export default PaymentPage;
