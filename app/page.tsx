"use client";

import HeaderBar from "@/src/components/HeaderBar";
import AppDashboardLayout from "@/src/components/Layouts/AppDashboardLayout";
import ProgramList from "@/src/components/Program/ProgramList";
import SliderImage from "@/src/components/SliderImageLink";
import { Text, useToast } from "@chakra-ui/react";
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

  return (
    <AppDashboardLayout>
      <SliderImage images={images} />
      <Text fontWeight={"bold"} fontSize={"xl"} color={"gray.700"} mt={5}>
        Program Penggalangan Dana Terbaru
      </Text>
      <ProgramList isLatest={false} />
    </AppDashboardLayout>
  );
}

export default Home;
