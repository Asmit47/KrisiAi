"use client";

import { useContext } from 'react';
import { LanguageContext } from '@/context/language-context';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { translations, Language } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t.language} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="English">English</SelectItem>
        <SelectItem value="Hindi">हिंदी</SelectItem>
        <SelectItem value="Hinglish">Hinglish</SelectItem>
      </SelectContent>
    </Select>
  );
}
