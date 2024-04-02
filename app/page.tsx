"use client";

import { useBannerQuery } from "@/src/api/banner";
import { useProgramQuery } from "@/src/api/program";
import HeaderBar from "@/src/components/HeaderBar";
import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import AppDesktopLayout from "@/src/components/Layouts/AppDesktopLayout";
import ProgramList from "@/src/components/Program/ProgramList";
import SliderImage from "@/src/components/SliderImageLink";
import {
  Center,
  Spinner,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
function Home() {
  const router = useRouter();

  const toast = useToast();

  const images = [
    [
      "https://menara.baznas.go.id/attachments/masjid-musholla/donasi/00dcdf2ab83c5113d1938abf4c89826a.jpg",
      "",
    ],
    [
      "https://lazismupekalongan.or.id/wp-content/uploads/2021/05/IMG-20210519-WA0054.jpg",
      "",
    ],
  ];

  const [isBreakpoint] = useMediaQuery("(min-width: 48rem)");
  const {
    data: programData,
    refetch: programRefetch,
    isLoading: isLoadingProgram,
  } = useProgramQuery({
    perPage: 10,
  });

  return isBreakpoint ? (
    <AppDesktopLayout>
      <SliderImage isMobile={false} />
      <Text fontWeight={"bold"} fontSize={"xl"} color={"gray.700"} mt={5}>
        Program Penggalangan Dana Terbaru
      </Text>
      {isLoadingProgram ? (
        <Center h="50vh">
          <Spinner size="xl" color="secondary.500" />
        </Center>
      ) : (
        <ProgramList datas={programData?.data.data || []} isMobile={false} />
      )}
    </AppDesktopLayout>
  ) : (
    <AppDashboardLayout>
      <SliderImage />
      <Text fontWeight={"bold"} fontSize={"xl"} color={"gray.700"} mt={5}>
        Program Penggalangan Dana Terbaru
      </Text>
      {isLoadingProgram ? (
        <Center h="50vh">
          <Spinner size="xl" color="secondary.500" />
        </Center>
      ) : (
        <ProgramList datas={programData?.data.data || []} />
      )}
    </AppDashboardLayout>
  );
}

export default Home;
