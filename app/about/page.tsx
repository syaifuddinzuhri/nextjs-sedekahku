"use client";

import { useSettingQuery } from "@/src/api/setting";
import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import AppDesktopLayout from "@/src/components/Layouts/AppDesktopLayout";
import {
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  Spinner,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { BiHome, BiLogoGmail, BiPhone } from "react-icons/bi";

const AboutPage = () => {
  const [isBreakpoint] = useMediaQuery("(min-width: 48rem)");

  const {
    data: settingData,
    refetch: settingRefetch,
    isLoading: isLoadingSetting,
  } = useSettingQuery({});

  return isBreakpoint ? (
    <AppDesktopLayout>
      {isLoadingSetting ? (
        <Center h="70vh">
          <Spinner size="xl" color="secondary.500" />
        </Center>
      ) : (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: settingData?.data.about || "",
            }}
          ></div>
          <Divider my={5} />
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Flex gap={1} alignItems={"center"} color={"gray.600"}>
              <BiPhone />
              <Text>{settingData?.data.phone || ""}</Text>
            </Flex>
            <Flex gap={1} alignItems={"center"} color={"gray.600"}>
              <BiLogoGmail />
              <Text>{settingData?.data.email || ""}</Text>
            </Flex>
            <Flex gap={1} alignItems={"center"} color={"gray.600"}>
              <BiHome />
              <Text>{settingData?.data.address || ""}</Text>
            </Flex>
          </Flex>
          <Divider my={5} />
        </>
      )}
    </AppDesktopLayout>
  ) : (
    <AppDashboardLayout>
      {isLoadingSetting ? (
        <Center h="70vh">
          <Spinner size="xl" color="secondary.500" />
        </Center>
      ) : (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: settingData?.data.about || "",
            }}
          ></div>
          <Divider my={5} />
          <Flex flexDirection={"column"} gap={4} alignItems={"center"}>
            <Flex gap={1} alignItems={"center"} color={"gray.600"}>
              <BiPhone />
              <Text>{settingData?.data.phone || ""}</Text>
            </Flex>
            <Flex gap={1} alignItems={"center"} color={"gray.600"}>
              <BiLogoGmail />
              <Text>{settingData?.data.email || ""}</Text>
            </Flex>
            <Flex gap={1} alignItems={"center"} color={"gray.600"}>
              <BiHome />
              <Text>{settingData?.data.address || ""}</Text>
            </Flex>
          </Flex>
          <Divider my={5} />
        </>
      )}
    </AppDashboardLayout>
  );
};

export default AboutPage;
