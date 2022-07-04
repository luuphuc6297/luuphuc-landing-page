import type { NextPage } from 'next';
import { MainLayout } from '@/components/index';
import Introduction from '@/sections/Home/Introduction';

const Home: NextPage = () => {
    return (
        <MainLayout>
            <Introduction />
        </MainLayout>
    );
};

export default Home;
