import { styled } from '@mui/system';
import Link from 'next/link';
import React from 'react';
interface NavItemsProps {
    active?: boolean;
    href?: string | any;
    children?: React.ReactNode;
}

const StyledNavItems = styled(Link)<{ active?: boolean }>(({ theme, active }) => ({
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Avenir Next Pro',
    fontSize: '16px',
    color: '#969696',
    cursor: 'pointer',
    '&:hover': {
        color: theme.palette.primary.main,
        transitionTimingFunction: 'cubic-bezier(.25,.25,.75,.75)',
    },
}));

export const NavItems = ({ active, children, href }: NavItemsProps) => {
    return (
        <StyledNavItems href={href} active={active}>
            {children}
        </StyledNavItems>
    );
};
