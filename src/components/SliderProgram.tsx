import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Box, Image, Link } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useBannerQuery } from "../api/banner";
import { BannerResponse } from "../interfaces/banner";

const SliderProgram = ({ images }: any) => {
  console.log(images);
  return (
    <Box
      css={css`
        .swiper-pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;

          .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            display: inline-block;
            border-radius: 3px;
            transition: 0.3s all;
            background-color: #ff5d00;

            &.swiper-pagination-bullet-active {
              width: 20px;
              background-color: #ff5d00;
            }
          }
        }
      `}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
        }}
        speed={2000}
        className="SliderProgram"
      >
        {images &&
          images.map((item: any, i: number) => (
            <SwiperSlide key={i}>
              <Image
                src={item.image}
                borderRadius={"20px"}
                alt="Slide Image"
                width="100%"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default SliderProgram;
