import React from 'react';
import { Box, Typography } from '@mui/material';
import { SectionTitle } from '@/components/index';

import { styled } from '@mui/system';

const StyledCaption = styled(Typography)(({ theme }) => ({
    marginBottom: 48,
}));

export const HelloContainer = () => {
    return (
        <Box>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <SectionTitle>Hello! We're New Generation</SectionTitle>
            <StyledCaption variant="caption">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                If you’re looking for a software company to transform your business to the next level, you've found the
                right partner to help.
            </StyledCaption>
            <StyledCaption variant="caption">
                We are strongly recommended by technical and non-technical leaders in various industries including
                retail, commerce, real estate, legal, travel & hospitality,...
            </StyledCaption>
        </Box>
    );
};
