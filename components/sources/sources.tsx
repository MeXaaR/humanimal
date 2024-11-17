import React from "react";
import "./sources.css";
import { useTranslations } from "next-intl";

type Source = {
  url: string;
  name: string;
  description?: string;
};

interface SourcesProps {
  sources: Source[];
}

export function Sources({ sources }: SourcesProps) {
  const t = useTranslations("PostPage");
  if (!sources || sources.length === 0) return null;

  return (
    <div className="sources-section mt-6">
      <h2>{t("sources")}</h2>
      <ul role="list">
        {sources.map((source, index) => (
          <li key={index}>
            <a href={source.url}>{source.name}</a>
            <p>{source.description && <em> {source.description}</em>}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
