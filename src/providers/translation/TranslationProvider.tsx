"use client";

import { useState, PropsWithChildren, FC } from "react";

import { translationContext } from "./TranslationContext";
import { DEFAULT_FROM_LANGUAGE, DEFAULT_TO_LANGUAGE } from "@/lib/constants";
import { getFirstNextLanguage } from "@/lib/utils";

export const TranslationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fromLanguage, setFromLanguage] = useState(DEFAULT_FROM_LANGUAGE);
  const [toLanguage, setToLanguage] = useState(DEFAULT_TO_LANGUAGE);

  const handleChangeToLanguage = (toLanguage: string) => {
    setToLanguage(toLanguage);

    if (toLanguage !== fromLanguage) return;

    const language = getFirstNextLanguage(fromLanguage);

    setFromLanguage(language);
  };

  const handleChangeFromLanguage = (fromLanguage: string) => {
    setFromLanguage(fromLanguage);

    if (fromLanguage !== toLanguage) return;

    const language = getFirstNextLanguage(fromLanguage);

    setToLanguage(language);
  };

  const handleSwitchLanguage = () => {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  };

  return (
    <translationContext.Provider
      value={{
        fromLanguage,
        toLanguage,
        handleChangeToLanguage,
        handleChangeFromLanguage,
        handleSwitchLanguage,
      }}
    >
      {children}
    </translationContext.Provider>
  );
};
