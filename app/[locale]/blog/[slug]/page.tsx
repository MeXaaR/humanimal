import { getLocale } from "next-intl/server";
import { fetchData } from "@/utils/fetchData";
import { InferGetStaticPropsType, Metadata, ResolvingMetadata } from "next";

import "./style.css";
import { PostHero } from "@/components/hero/post_hero";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SITE_NAME, SITE_URL } from "@/data/constants";
import { Sources } from "@/components/sources/sources";
import { getStaticProps } from "next/dist/build/templates/pages";

async function getSinglePost(locale: string, slug: string) {
  const data = await fetchData(`query SinglePost {
        post(
            locales: ${locale}, 
            where: {slug: "${slug}"}
        ) {
            date
            publishedAt
            updatedAt
            createdAt
            slug
            title
            content
            postType {
                title
                class
                slug
            }
            updatedAt
            excerpt
            author {
                title
                name
            }
            category {
                name
                slug
            }
            coverImage(locales: en) {
                url
            }
            seoOverride {
                title
                description
                image {
                    url
                }
            }
            sources {
                url
                name
                description
            }
         }
      }`);
  return data?.post;
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

// Generate metadata for the page
export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = await getLocale();
  const post = await getSinglePost(locale, params.slug);

  // optionally get parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${SITE_NAME} | ${post.seoOverride?.title || post.title}`,
    description: post.seoOverride?.description || post.excerpt,
    authors: post.author ? [{ name: post.author.name }] : undefined,
    openGraph: {
      title: post.seoOverride?.title || post.title,
      description: post.seoOverride?.description || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.author?.name,
      images: [
        {
          url: post.seoOverride?.image?.url || post.coverImage?.url || "",
          width: 1200,
          height: 630,
          alt: post.title,
        },
        ...previousImages,
      ],
      locale: locale,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.seoOverride?.description || post.excerpt,
      images: [post.seoOverride?.image?.url || post.coverImage?.url || ""],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    category: post.category?.name,
    keywords: [post.category?.name, post.postType?.title].filter(Boolean),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function SinglePostPage({ params }: PageProps) {
  const locale = await getLocale();
  const { slug } = await params;
  const post = await getSinglePost(locale, slug);

  return (
    <div className="single-post">
      <PostHero post={post} />
      <div className="posts-list container is-max-tablet content markdown pt-6">
        <MDXRemote source={post.content} />
        <Sources sources={post.sources} />
      </div>
    </div>
  );
}
