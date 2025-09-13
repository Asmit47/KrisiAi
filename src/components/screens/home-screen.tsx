'use client';

import { useRef, type ChangeEvent, useContext } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { LanguageContext } from '@/context/language-context';
import { translations } from '@/lib/i18n';
import LanguageSwitcher from '@/components/common/language-switcher';

type HomeScreenProps = {
  onImageSelect: (file: File) => void;
};

export default function HomeScreen({ onImageSelect }: HomeScreenProps) {
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  
  const backgroundImage = PlaceHolderImages.find(img => img.id === 'home-background');

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
    event.target.value = '';
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center p-4 text-center">
      {backgroundImage && (
          <Image
            src={backgroundImage.imageUrl}
            alt={backgroundImage.description}
            fill
            className="object-cover z-0 opacity-20"
            data-ai-hint={backgroundImage.imageHint}
            priority
          />
      )}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        <header className="space-y-2">
          <h1 className="text-5xl font-bold text-primary sm:text-6xl md:text-7xl">
            {t.appName}
          </h1>
          <p className="text-lg text-muted-foreground">{t.appTagline}</p>
        </header>

        <div className="grid w-full max-w-sm grid-cols-1 gap-4">
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            onChange={handleFileSelect}
            className="hidden"
            aria-hidden="true"
          />
          <Button
            className="h-20 w-full text-2xl font-semibold"
            onClick={() => cameraInputRef.current?.click()}
            aria-label={t.takePhoto}
          >
            <Camera className="mr-4 h-8 w-8" />
            {t.photo}
          </Button>

          <input
            type="file"
            accept="image/*"
            ref={galleryInputRef}
            onChange={handleFileSelect}
            className="hidden"
            aria-hidden="true"
          />
          <Button
            variant="secondary"
            className="h-20 w-full text-2xl font-semibold"
            onClick={() => galleryInputRef.current?.click()}
            aria-label={t.uploadPhoto}
          >
            <Upload className="mr-4 h-8 w-8" />
            {t.uploadPhoto}
          </Button>
        </div>
      </div>
      <footer className="absolute bottom-4 z-10 text-sm text-muted-foreground">
        {t.footer}
      </footer>
    </div>
  );
}
