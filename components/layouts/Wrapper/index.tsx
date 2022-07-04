import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface WrapperProps {
    children?: React.ReactNode;
}

const StyledWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
}));

export const Wrapper = ({ children }: WrapperProps) => {
    return <StyledWrapper>{children}</StyledWrapper>;
};
