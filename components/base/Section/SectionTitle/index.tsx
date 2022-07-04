import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

interface SubtitleProps {
    children?: React.ReactNode;
}

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
    width: '100%',
    marginBottom: 24,
    textAlign: 'left',
    color: theme.palette.primary.main,
    fontFamily: 'Avenir Next Pro Heavy',
    fontWeight: 700,
    fontSize: 48,
    lineHeight: 1.2,
}));

export const SectionTitle = ({ children }: SubtitleProps) => {
    //@ts-ignore
    return <StyledSectionTitle component="h1">{children}</StyledSectionTitle>;
};
