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
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="relative">
      <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
        <SelectTrigger className="w-[140px] h-10 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:border-green-300 focus:border-green-400 focus:ring-green-200 rounded-full shadow-sm transition-all duration-200 hover:shadow-md">
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-green-600" />
            <SelectValue placeholder={t.language} />
          </div>
        </SelectTrigger>
        <SelectContent className="rounded-xl border-green-200 shadow-lg bg-white/95 backdrop-blur-sm">
          <SelectItem 
            value="English" 
            className="rounded-lg hover:bg-green-50 focus:bg-green-50 transition-colors duration-150"
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">🇺🇸</span>
              <span>English</span>
            </div>
          </SelectItem>
          <SelectItem 
            value="Hindi" 
            className="rounded-lg hover:bg-green-50 focus:bg-green-50 transition-colors duration-150"
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">🇮🇳</span>
              <span>हिंदी</span>
            </div>
          </SelectItem>
          <SelectItem 
            value="Hinglish" 
            className="rounded-lg hover:bg-green-50 focus:bg-green-50 transition-colors duration-150"
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">🌐</span>
              <span>Hinglish</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
