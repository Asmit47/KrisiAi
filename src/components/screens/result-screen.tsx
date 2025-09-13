'use client';

import type { DiagnoseCropDiseaseOutput } from '@/ai/flows/diagnose-crop-disease';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, RefreshCw, Speaker, Bug, ShieldCheck, Square, Volume2, Wheat, AlertTriangle } from 'lucide-react';
import { useEffect, useContext, useState } from 'react';
import { LanguageContext } from '@/context/language-context';
import { translations } from '@/lib/i18n';
import { cn } from '@/lib/utils';

type ResultScreenProps = {
  diagnosisResult: DiagnoseCropDiseaseOutput;
  onReset: () => void;
  onPucho: () => void;
};

export default function ResultScreen({ diagnosisResult, onReset, onPucho }: ResultScreenProps) {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Stop any speech synthesis when the component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleSpeak = () => {
    if (!diagnosisResult || typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    
    const textToSpeak = `
      ${t.crop}: ${diagnosisResult.cropName}.
      ${t.disease}: ${diagnosisResult.detectedDisease}.
      ${t.severity}: ${diagnosisResult.diseaseSeverity}.
      ${t.diagnosisInfo}: ${diagnosisResult.diagnosis}.
      ${t.solution}: ${diagnosisResult.solution}.
      ${t.precaution}: ${diagnosisResult.precaution}.
    `;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = language === 'Hindi' ? 'hi-IN' : 'en-US';
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => {
        setIsSpeaking(false);
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const getSeverityColor = (severity: string) => {
    const s = severity?.toLowerCase();
    if (s?.includes('high') || s?.includes('उच्च') || s?.includes(' गंभीर')) {
      return 'text-destructive';
    }
    if (s?.includes('medium') || s?.includes('मध्यम')) {
      return 'text-yellow-600';
    }
    return 'text-green-600';
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background px-4 py-8 sm:py-12">
      <div className="w-full max-w-2xl space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">
            {diagnosisResult.cropName} - {diagnosisResult.detectedDisease}
          </h1>
        </header>

        <div className="space-y-4">
          <Card>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              <AlertTriangle className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">{t.severity}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={cn("text-lg font-bold", getSeverityColor(diagnosisResult.diseaseSeverity))}>{diagnosisResult.diseaseSeverity}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              <Bug className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">{t.diagnosis}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground">{diagnosisResult.diagnosis}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              <Wheat className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">{t.solution}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground">{diagnosisResult.solution}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">{t.precaution}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground">{diagnosisResult.precaution}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Button onClick={handleSpeak} className="h-16 text-xl">
            {isSpeaking ? <Square className="mr-2 h-6 w-6" /> : <Speaker className="mr-2 h-6 w-6" />}
            {isSpeaking ? t.stop : t.speak}
          </Button>
          <Button onClick={onPucho} className="h-16 text-xl">
            <Mic className="mr-2 h-6 w-6" />
            {t.ask}
          </Button>
          <Button onClick={onReset} variant="outline" className="h-16 text-xl">
            <RefreshCw className="mr-2 h-6 w-6" />
            {t.newPhoto}
          </Button>
        </div>
      </div>
    </div>
  );
}
