import { useTranslations } from "next-intl";
import "./hero.css";

export default function MainHero() {
  const t = useTranslations("HomePage");
  return (
    <section className="main-hero">
      <section className="hero box is-medium">
        <div className="hero-body has-text-centered">
          <h1 className="humanimal-title title">{t("title")}</h1>
          <p className="subtitle">{t("subtitle")}</p>
        </div>
      </section>
    </section>
  );
}
