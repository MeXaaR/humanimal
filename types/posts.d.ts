export type Author = {
    title: string;
    name: string;
    biography: string;
    createdAt: string;
    id: string;
    publishedAt: string;
    stage: string;
    updatedAt: string;
};

export type Category = {
    name: string;
    slug: string;
    description: string;
    id: string;
    publishedAt: string;
    stage: string;
    updatedAt: string;
    createdAt: string;
    icon: HygraphImage;
};

export type HygraphImage = {
    altText: string;
    fileName: string;
    height: number;
    id: string;
    mimeType: string;
    size: number;
    stage: string;
    url: string;
};

export type Post = {
    content: string;
    createdAt: string;
    date: string;
    id: string;
    locale: string;
    publishedAt: string;
    slug: string;
    stage: string;
    title: string;
    updatedAt: string;
    author: Author;
    featured: boolean;
    category: Category[];
    postType: PostType;
    coverImage: HygraphImage;
    excerpt: string;
    seoOverride: SEOOverride;
    sources: Source[];
};

export type Source = {
    url: string;
    name: string;
    description: string;
};

export type PostType = {
    title: string;
    slug: string;
    class: string;
};

export type LegalPage = {
    id: string;
    title: string;
    slug: string;
    content: string;
};

export type Page = {
    id: string;
    title: string;
    slug: string;
    content: string;
};

export type SEOOverride = {
    title: string;
    description: string;
    image: HygraphImage;
}