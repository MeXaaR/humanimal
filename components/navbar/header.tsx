import Image from "next/image";
import logo from "@/public/logos/big_logo.png";
import { getTranslations } from "next-intl/server";
import { Locale } from "./locale";
import { Link } from "@/i18n/routing";
import "./header.css";
import { links } from "./navlinks";
import ThemeSwitcher from "../theme/theme_switcher";

export const Header = async () => {
  const t = await getTranslations("Navigation");
  return (
    <nav
      className="navbar container is-max-widescreen"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <Image src={logo} alt="Humanimal" width={150} height={30} />
        </Link>

        <label
          htmlFor="navbar-toggle"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </label>
      </div>

      <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />

      <div className="navbar-menu">
        <div className="navbar-start">
          {links.map((link) =>
            link.subitems ? (
              <div
                className="navbar-item has-dropdown is-hoverable "
                key={link.label}
              >
                <Link className="navbar-link" href={link.href}>
                  {t(link.label)}
                </Link>
                <div className="navbar-dropdown is-boxed">
                  {link.subitems.map((subitem) => (
                    <Link
                      className="navbar-item"
                      href={subitem.href}
                      key={subitem.label}
                    >
                      {t(subitem.label)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link className="navbar-item" href={link.href} key={link.label}>
                {t(link.label)}
              </Link>
            )
          )}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <ThemeSwitcher />
              <Locale />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
