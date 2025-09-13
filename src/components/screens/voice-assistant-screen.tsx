'use client';

import { useState, useEffect, useCallback, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Loader2, Mic, Speaker, Volume2 } from 'lucide-react';
import { answerFarmerQuestions } from '@/ai/flows/answer-farmer-questions';
import { useToast } from '@/hooks/use-toast';
import { LanguageContext } from '@/context/language-context';
import { translations } from '@/lib/i18n';

type VoiceAssistantScreenProps = {
  onBack: () => void;
};

export default function VoiceAssistantScreen({ onBack }: VoiceAssistantScreenProps) {
  const [isListening, setIsListening] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const { toast } = useToast();
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleSpeech = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'Hindi' ? 'hi-IN' : 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [language]);

  const processTranscript = async (text: string) => {
    if (!text) return;
    setIsAnswering(true);
    setAiResponse('');
    try {
      const response = await answerFarmerQuestions({question: text, language});
      setAiResponse(response);
      handleSpeech(response);
    } catch (error) {
      console.error('Error getting answer:', error);
      toast({
        title: t.error,
        description: t.answerError,
        variant: 'destructive',
      });
    } finally {
      setIsAnswering(false);
    }
  };
  
  const handleListen = () => {
    if (typeof window === 'undefined') return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast({
        title: t.compatibilityError,
        description: t.voiceNotSupported,
        variant: 'destructive',
      });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === 'Hindi' ? 'hi-IN' : 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      toast({
        title: t.error,
        description: t.listeningError,
        variant: 'destructive',
      });
    };
    recognition.onresult = (event) => {
      const newTranscript = event.results[0][0].transcript;
      setTranscript(newTranscript);
      processTranscript(newTranscript);
    };

    if (isListening) {
      recognition.stop();
    } else {
      setTranscript('');
      setAiResponse('');
      recognition.start();
    }
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background px-4 py-8">
      <div className="w-full max-w-2xl space-y-6">
        <header className="relative flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0"
            onClick={onBack}
            aria-label={t.goBack}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">
            {t.askAQuestion}
          </h1>
        </header>

        <div className="flex justify-center">
          <Button
            onClick={handleListen}
            className="h-32 w-32 rounded-full text-accent-foreground shadow-lg transition-transform duration-200 hover:scale-105"
            size="icon"
            variant="accent"
            aria-label={isListening ? t.stopListening : t.startListening}
          >
            {isListening ? (
              <Volume2 className="h-16 w-16 animate-pulse" />
            ) : (
              <Mic className="h-16 w-16" />
            )}
          </Button>
        </div>

        <div className="min-h-[200px] space-y-4">
          {transcript && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t.yourQuestion}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{transcript}</p>
              </CardContent>
            </Card>
          )}

          {isAnswering && (
            <div className="flex items-center justify-center space-x-2 p-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-lg text-muted-foreground">{t.findingAnswer}</p>
            </div>
          )}

          {aiResponse && (
            <Card className="bg-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">{t.aiAnswer}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">{aiResponse}</p>
                <Button
                  variant="outline"
                  onClick={() => handleSpeech(aiResponse)}
                  aria-label={t.replayAnswer}
                >
                  <Speaker className="mr-2 h-5 w-5" />
                  {t.speakAgain}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
