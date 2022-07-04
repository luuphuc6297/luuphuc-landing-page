import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Images, SectionWrapper } from 'components';
import { NavItems } from './NavItems';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import items from './items.json';

const StyledNavigationContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));

export const NavigationBar = () => {
    const router = useRouter();
    return (
        <SectionWrapper id="navbar">
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <NextLink href="/">
                    <Images>
                        <NextImage
                            alt="familia-logo"
                            src="/images/familia-logo.svg"
                            objectFit="contain"
                            objectPosition="center"
                            layout="fill"
                        />
                    </Images>
                </NextLink>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
                    {items.map((link) => (
                        <NextLink key={link.title} href={link.pathname} passHref>
                            <NavItems active={router.pathname === link.pathname}>{link.title}</NavItems>
                        </NextLink>
                    ))}
                </Box>
                <Button>Contact us</Button>
            </Box>
        </SectionWrapper>
    );
};
