"use client";

import { useLanguage } from "../i18n/LanguageProvider";
import type { Locale } from "../i18n/translations";

const FLAGS: Record<Locale, string> = {
  en: "🇬🇧",
  ru: "🇷🇺",
};

const CODES: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
};

export function LanguageSwitcher() {
  const { locale, toggleLocale, t } = useLanguage();
  const nextLocale: Locale = locale === "en" ? "ru" : "en";

  return (
    <button
      type="button"
      className="lang-switch"
      onClick={toggleLocale}
      aria-label={`${t.langSwitch.label} (${CODES[nextLocale]})`}
      title={t.langSwitch.label}
      data-cursor-light
    >
      <span className="lang-switch__flag" aria-hidden="true">
        {FLAGS[nextLocale]}
      </span>
      <span className="lang-switch__code">{CODES[nextLocale]}</span>
    </button>
  );
}
