import { SectionWrapper } from '@/components/index';
import { Container } from '@mui/material';
import { styled } from '@mui/system';
import { BackgroundContainer } from './BackgroundContainer';
import { HelloContainer } from './HelloContainer';

const StyledSectionWrapper = styled(SectionWrapper)(({ theme }) => ({
    padding: '100px 0',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
}));

const Introduction = () => {
    return (
        <SectionWrapper id="introduction">
            <StyledContainer>
                <BackgroundContainer />
                <HelloContainer />
            </StyledContainer>
        </SectionWrapper>
    );
};
export default Introduction;
