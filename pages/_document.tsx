import { createEmotionCache } from '@/utils/index'
import createEmotionServer from '@emotion/server/create-instance'
import { ServerStyleSheets as MuiServerStyleSheets } from '@mui/styles'
import Document, {
    DocumentContext,
    DocumentInitialProps,
    DocumentProps,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document'
import React from 'react'

type Props = {
    lang: string
    locale: string
}

class AppDocument extends Document<Props & DocumentProps> {
    static async getInitialProps(ctx: DocumentContext): Promise<Props & DocumentInitialProps> {
        const muiSheet = new MuiServerStyleSheets()
        const originalRenderPage = ctx.renderPage
        const cache = createEmotionCache()
        const { extractCriticalToChunks } = createEmotionServer(cache)

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: any) => (props) => muiSheet.collect(<App emotionCache={cache} {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)

            const hasLocaleFromUrl = !!ctx.query?.locale
            const locale = hasLocaleFromUrl ? (ctx.query?.locale as string) : 'en'
            const lang = locale.split('-')?.[0]

            return {
                ...initialProps,
                lang,
                locale,
                styles: [...React.Children.toArray(initialProps.styles), muiSheet.getStyleElement()],
            }
        } finally {
            muiSheet.toString()
        }
    }

    render(): JSX.Element {
        const { lang } = this.props

        return (
            <Html lang={lang}>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument
