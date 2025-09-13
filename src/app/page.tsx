"use client";

import { useState, useContext } from 'react';
import type { DiagnoseCropDiseaseOutput } from '@/ai/flows/diagnose-crop-disease';
import { diagnoseCropDisease } from '@/ai/flows/diagnose-crop-disease';
import { useToast } from '@/hooks/use-toast';
import HomeScreen from '@/components/screens/home-screen';
import LoadingScreen from '@/components/screens/loading-screen';
import ResultScreen from '@/components/screens/result-screen';
import VoiceAssistantScreen from '@/components/screens/voice-assistant-screen';
import { LanguageContext } from '@/context/language-context';
import { translations } from '@/lib/i18n';

export type View = 'HOME' | 'LOADING' | 'RESULT' | 'VOICE_ASSISTANT';

const fileToDataUri = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export default function Home() {
  const [view, setView] = useState<View>('HOME');
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnoseCropDiseaseOutput | null>(null);
  const { toast } = useToast();
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleImageSelect = async (file: File) => {
    if (!file) return;

    setView('LOADING');
    try {
      const photoDataUri = await fileToDataUri(file);
      const result = await diagnoseCropDisease({ photoDataUri, language });

      if (result) {
        setDiagnosisResult(result);
        setView('RESULT');
      } else {
        throw new Error(t.diagnosisError);
      }
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : t.unknownError;
      toast({
        title: t.error,
        description: `${t.imageError}: ${errorMessage}`,
        variant: 'destructive',
      });
      setView('HOME');
    }
  };

  const resetApp = () => {
    setView('HOME');
    setDiagnosisResult(null);
  };

  const showVoiceAssistant = () => {
    if (diagnosisResult) {
      setView('VOICE_ASSISTANT');
    }
  };

  const showResultScreen = () => {
    if (diagnosisResult) {
      setView('RESULT');
    }
  };

  const renderView = () => {
    switch (view) {
      case 'LOADING':
        return <LoadingScreen />;
      case 'RESULT':
        return (
          <ResultScreen
            diagnosisResult={diagnosisResult!}
            onReset={resetApp}
            onPucho={showVoiceAssistant}
          />
        );
      case 'VOICE_ASSISTANT':
        return <VoiceAssistantScreen onBack={showResultScreen} />;
      case 'HOME':
      default:
        return <HomeScreen onImageSelect={handleImageSelect} />;
    }
  };

  return (
    <div className="w-full bg-background text-foreground">
      {renderView()}
    </div>
  );
}
