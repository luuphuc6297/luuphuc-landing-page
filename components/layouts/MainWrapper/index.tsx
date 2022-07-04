import { Box } from '@mui/material';
import React from 'react';

interface MainWrapperProps {
    children?: React.ReactNode;
}

export const MainWrapper = ({ children }: MainWrapperProps) => {
    return <Box sx={{ width: '100%', position: 'relative' }}>{children}</Box>;
};
