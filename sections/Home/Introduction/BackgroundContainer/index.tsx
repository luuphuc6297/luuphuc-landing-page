import { CustomizedSwiper, Images, SectionTitle } from '@/components/index';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import NextImage from 'next/image';
import { SwiperSlide } from 'swiper/react';
import introductions from './introductions.json';

const StyledImagesBox = styled(Box)(({ theme }) => ({
    width: '1280px',
    height: '600px',
    position: 'relative',
}));

export const BackgroundContainer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                position: 'relative',
                marginBottom: '72px',
                '& .swiper-container': {
                    width: '100%',
                },
            }}
        >
            <CustomizedSwiper slidesPerView={1}>
                {introductions.map((item) => (
                    <SwiperSlide key={item?.id}>
                        <SectionTitle>{item?.title}</SectionTitle>
                        <Typography variant="caption">{item?.caption}</Typography>
                        <Typography variant="caption">{item?.caption}</Typography>
                        <Typography variant="caption">{item?.caption}</Typography>
                    </SwiperSlide>
                ))}
            </CustomizedSwiper>
            <StyledImagesBox>
                <NextImage
                    src="/images/team-work-background.svg"
                    objectFit="contain"
                    objectPosition="top right"
                    layout="fill"
                />
            </StyledImagesBox>
        </Box>
    );
};
