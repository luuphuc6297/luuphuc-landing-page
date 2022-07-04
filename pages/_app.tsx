import axiosClient from '@/api/axios-client';
import { theme } from '@/configs/index';
import { AppPropsWithLayout } from '@/models/index';
import { createEmotionCache } from '@/utils/index';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import 'swiper/css';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    return (
        <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
                    <Component {...pageProps} />
                </SWRConfig>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
