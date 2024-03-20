import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Box, Image, Link } from "@chakra-ui/react";
import { css } from "@emotion/react";

type SliderImageProps = {
  images: string[][];
};

const SliderImage = (props: SliderImageProps) => {
  const { images } = props;

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
            background-color: #dd6b20;

            &.swiper-pagination-bullet-active {
              width: 20px;
              background-color: #dd6b20;
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
        className="SliderImage"
      >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            {item[1] != "null" ? (
              <Link href={item[1]}>
                <Image
                  borderRadius={"20px"}
                  src={item[0]}
                  alt="Slide Image"
                  width="100%"
                />
              </Link>
            ) : (
              <Image
                src={item[0]}
                borderRadius={"20px"}
                alt="Slide Image"
                width="100%"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SliderImage;
