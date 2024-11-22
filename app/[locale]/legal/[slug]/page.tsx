import { getLocale, getTranslations } from "next-intl/server";
import { fetchData } from "@/utils/fetchData";

import { MDXRemote } from "next-mdx-remote/rsc";
import { LegalPage } from "@/types/posts";
import { Metadata } from "next";
import SimpleHero from "@/components/hero/simple_hero";
import { PageProps } from "@/types/pages";

async function getSingleLegalPage(locale: string, slug: string) {
  const data = await fetchData(`query SingleLegalPage {
        legalPage(
            locales: ${locale},
            where: {slug: "${slug}" }
        ) {
            title
            content
        }
  
      }`);
  return data?.legalPage;
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await getLocale();
  const t2 = await getTranslations("SEO");
  const { slug } = await params;
  const legalPage: LegalPage = await getSingleLegalPage(locale, slug);
  return {
    title: `${t2("title")} | ${legalPage.title}`,
  };
}

export default async function SingleLegalPage({ params }: PageProps) {
  const locale = await getLocale();
  const { slug } = await params;
  const legalPage: LegalPage = await getSingleLegalPage(locale, slug);

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <SimpleHero title={legalPage.title} />
      </div>
      <div className="container is-max-tablet pt-6 content markdown">
        <MDXRemote source={legalPage.content} />
      </div>
    </div>
  );
}
