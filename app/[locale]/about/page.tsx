import { getLocale, getTranslations } from "next-intl/server";
import { fetchData } from "@/utils/fetchData";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Page } from "@/types/posts";
import { Metadata } from "next";
import SimpleHero from "@/components/hero/simple_hero";

async function getAboutPage(locale: string) {
  const data = await fetchData(`query AboutPage {
        page(
            locales: ${locale},
            where: {slug: "about" }
        ) {
            title
            content
        }
  
      }`);
  return data?.page;
}

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t2 = await getTranslations("SEO");
  const page: Page = await getAboutPage(locale);
  return {
    title: `${t2("title")} | ${page?.title}`,
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const page: Page = await getAboutPage(locale);

  return (
    <div className="about-page">
      <section className="about-hero">
        <SimpleHero title={page.title} />
      </section>
      <div className="container is-max-tablet pt-6 content markdown">
        <MDXRemote source={page?.content} />
      </div>
    </div>
  );
}
