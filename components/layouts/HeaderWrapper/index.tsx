import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface HeaderWrapperProps {
    children?: React.ReactNode;
}

const StyledHeaderWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '33px 0',
}));

export const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
    return <Box>{children}</Box>;
};
