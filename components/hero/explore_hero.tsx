import { getTranslations } from "next-intl/server";
import "./hero.css";

export default async function ExploreHero() {
  const t = await getTranslations("ExplorePage");
  return (
    <section className="explore-hero">
      <section className="hero">
        <div className="hero-body container is-max-widescreen">
          <h2 className="humanimal-title title is-2">{t("title")}</h2>
          <h2 className="humanimal-title title is-2">{t("subtitle")}</h2>
        </div>
      </section>
    </section>
  );
}
