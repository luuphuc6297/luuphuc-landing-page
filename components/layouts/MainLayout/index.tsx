import { HeaderWrapper, MainWrapper, NavigationBar, SEOHead, SEOHeadProps, Wrapper } from '@/components/index';
import { Container } from '@mui/material';
import React from 'react';
export type MainLayoutProps = {
    headProps?: SEOHeadProps;
    children?: React.ReactNode;
};

export const MainLayout = ({ headProps, children }: MainLayoutProps) => {
    return (
        <Wrapper>
            {/* SEO */}
            <SEOHead {...headProps} />

            {/* Header */}
            <HeaderWrapper>
                <Container maxWidth="lg" sx={{ width: '100%', margin: '0 auto' }}>
                    <NavigationBar />
                </Container>
            </HeaderWrapper>

            {/* Layout content */}
            <MainWrapper>{children}</MainWrapper>
        </Wrapper>
    );
};
