import React from "react";
import Image from "next/image";
import logo from "@/public/logos/big_logo.png";
import { footerLinks } from "../navbar/navlinks";
import { getTranslations, getLocale } from "next-intl/server";
import moment from "moment";
import { fetchData } from "@/utils/fetchData";
import { LegalPage } from "@/types/posts";
import { Link } from "@/i18n/routing";

async function getFooterData(locale: string) {
  const data = await fetchData(`query getFooterData {
          legalPages(locales: ${locale}, orderBy: title_ASC) {
            id
            title
            slug
        }
      }`);

  return data;
}

const Footer = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Navigation");
  const footerData = await getFooterData(locale);
  const { legalPages } = footerData || {};
  return (
    <footer className="footer pt-6">
      <div className="container">
        <div className="columns is-multiline">
          {/* Logo Column */}
          <div className="column is-12-mobile is-3-tablet">
            <Link href="/" className="mb-4 d-block">
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={60}
                className="image"
              />
            </Link>
          </div>

          {/* Content Column */}
          <div className="column is-6-mobile is-2-tablet is-offset-5">
            <h3 className="title is-6 mb-3">{t("content")}</h3>
            <ul className="list-unstyled">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="has-text-grey">
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Column
          <div className="column is-6-mobile is-2-tablet">
            <h3 className="title is-6 mb-3">Premium</h3>
            <ul className="list-unstyled">
              <li>
                <Link href="/premium" className="has-text-primary">
                  Become a Member
                </Link>
              </li>
              <li>
                <Link href="/premium/about" className="has-text-grey">
                  About Premium
                </Link>
              </li>
              <li>
                <Link href="/login" className="has-text-grey">
                  Login
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Legal Column */}
          <div className="column is-6-mobile is-2-tablet">
            <h3 className="title is-6 mb-3">{t("legal")}</h3>
            <ul className="list-unstyled">
              {legalPages?.map((page: LegalPage) => (
                <li key={page.slug}>
                  <Link href={`/legal/${page.slug}`} className="has-text-grey">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="columns is-multiline mt-6">
          <div className="column is-12-mobile is-6-tablet">
            <p className="has-text-grey">
              © {moment().year()} Mexar. {t("copyright")}
            </p>
          </div>
          <div className="column is-12-mobile is-6-tablet">
            <div className="buttons is-justify-content-flex-end">
              <a href="https://youtube.com" className="button is-white">
                <span className="icon">
                  <i className="fab fa-youtube"></i>
                </span>
              </a>
              <a href="https://instagram.com" className="button is-white">
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
              <a href="https://twitter.com" className="button is-white">
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span>
              </a>
              <a href="https://facebook.com" className="button is-white">
                <span className="icon">
                  <i className="fab fa-facebook"></i>
                </span>
              </a>
              <a href="https://linkedin.com" className="button is-white">
                <span className="icon">
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
