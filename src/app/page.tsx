import getHomePage from '@/api/api'
import Head from 'next/head'
import { Content } from '@/components/Content'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const data = await getHomePage()
    const {
        metaTitle,
        metaDescription,
        metaImage,
        metaSocial,
        keywords,
        metaRobots,
        structuredData,
        metaViewport,
        canonicalURL,
    } = data.seo

    return {
        title: metaTitle,
        description: metaDescription,
        openGraph: {
            title: metaTitle,
            description: metaDescription,
        },
    }
}

export default async function Home() {
    const data = await getHomePage()
    return (
        <main>
            <Header data={data} />
            <Content data={data} />
            <Footer data={data} />
        </main>
    )
}
