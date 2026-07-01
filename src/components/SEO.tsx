import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string,
    description?: string,
    image?: string,
    url?: string
}

export default function SEO({
    title = 'BookClub - 함께 읽고 나누는 즐거움',
    description = 'BookClub은 독서를 좋아하는 사람들이 모여 나만의 서재를 채우고 독서 토론을 진행할 수 있는 자유로운 커뮤니티입니다.',
    image = '/default-og.jpg',
    url = 'https://bookclub.example.com'
}: SEOProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    )
}