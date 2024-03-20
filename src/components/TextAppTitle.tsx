"use client";

import { Poppins } from "next/font/google";
import { Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { useProfileQuery } from "../api/profile";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});


interface ITextAppTitle {
  hideCs: boolean,
  color: string,
  text?: string
  back?: boolean
}
const TextAppTitle = (props: ITextAppTitle) => {

  const { data: profileData, } = useProfileQuery();
  return (
    <>
      <Box display="flex" alignItems="center">
        {props.back && <Box mt={2} mr={5}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" color={props.color ?? "white"} />
        </Box>}
        <Box
          className={poppins.className}
          color={props.color ?? "white"}
          fontSize="23px"
          mt={2}
          flex="1"
        >
          {props.text ?? "Sosial Booster"}
        </Box>
        {!props.hideCs && <Box cursor={"pointer"}>
          <Link href={profileData?.data.config.access.contact_us} isExternal >
            <FontAwesomeIcon icon={faHeadset} size="lg" color={props.color ?? "white"} />
          </Link>
        </Box>}
      </Box>
    </>


  );
};

export default TextAppTitle;
