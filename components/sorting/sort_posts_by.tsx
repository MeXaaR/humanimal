"use client";

import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";

export default function SortPostsBy() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "DESC";
  const type = searchParams.get("type") || "";
  const t = useTranslations("AllPostsPage");
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    router.push(`?sort=${sort}${type ? `&type=${type}` : ""}`);
  };
  return (
    <nav className="level section">
      <div className="level-left" />
      <div className="level-right">
        <div className="level-item">
          <div className="select is-rounded">
            <select onChange={handleSort} value={sort}>
              <option value="DESC">{t("newest_first")}</option>
              <option value="ASC">{t("oldest_first")}</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
