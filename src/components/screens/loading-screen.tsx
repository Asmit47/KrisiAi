import { useContext } from 'react';
import { Leaf } from 'lucide-react';
import { LanguageContext } from '@/context/language-context';
import { translations } from '@/lib/i18n';

export default function LoadingScreen() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-4 bg-background">
      <Leaf className="h-16 w-16 animate-spin text-primary" />
      <p className="text-2xl font-semibold text-foreground">
        {t.checkingImage}
      </p>
    </div>
  );
}
