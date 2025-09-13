export type Language = 'English' | 'Hindi' | 'Hinglish';

type Translations = {
  [key in Language]: {
    appName: string;
    appTagline: string;
    photo: string;
    takePhoto: string;
    uploadPhoto: string;
    footer: string;
    checkingImage: string;
    diagnosis: string;
    solution: string;
    precaution: string;
    speak: string;
    ask: string;
    newPhoto: string;
    askAQuestion: string;
    yourQuestion: string;
    aiAnswer: string;
    findingAnswer: string;
    speakAgain: string;
    goBack: string;
    startListening: string;
    stopListening: string;
    error: string;
    diagnosisError: string;
    unknownError: string;
    imageError: string;
    answerError: string;
    compatibilityError: string;
    voiceNotSupported: string;
    listeningError: string;
    crop: string;
    disease: string;
    diagnosisInfo: string;
    language: string;
    stop: string;
    severity: string;
  };
};

export const translations: Translations = {
  English: {
    appName: 'Kisan AI',
    appTagline: 'Your Crop Assistant',
    photo: 'Photo',
    takePhoto: 'Take a photo of your crop',
    uploadPhoto: 'Upload Photo',
    footer: 'Powered by AI – Your Helper',
    checkingImage: 'Checking image...',
    diagnosis: 'Diagnosis',
    solution: 'Solution',
    precaution: 'Precaution',
    speak: 'Listen',
    ask: 'Ask',
    newPhoto: 'New Photo',
    askAQuestion: 'Ask a Question',
    yourQuestion: 'Your Question',
    aiAnswer: 'AI\'s Answer',
    findingAnswer: 'Finding an answer...',
    speakAgain: 'Listen Again',
    goBack: 'Go back to results',
    startListening: 'Start listening',
    stopListening: 'Stop listening',
    error: 'Error',
    diagnosisError: 'Could not get a diagnosis from the AI.',
    unknownError: 'An unknown error occurred.',
    imageError: 'Error checking image',
    answerError: 'Could not get an answer.',
    compatibilityError: 'Compatibility Error',
    voiceNotSupported: 'Your browser does not support voice input.',
    listeningError: 'There was a problem hearing your question.',
    crop: 'Crop',
    disease: 'Disease',
    diagnosisInfo: 'Diagnosis Information',
    language: 'Language',
    stop: 'Stop',
    severity: 'Severity',
  },
  Hindi: {
    appName: 'किसान AI',
    appTagline: 'आपका फसल सहायक',
    photo: 'फोटो',
    takePhoto: ' अपनी फसल का फोटो लें',
    uploadPhoto: 'फोटो अपलोड करें',
    footer: 'AI द्वारा संचालित – आपका मददगार',
    checkingImage: 'तस्वीर जाँची जा रही है...',
    diagnosis: 'रोग-निदान',
    solution: 'समाधान',
    precaution: 'सावधानी',
    speak: 'सुनो',
    ask: 'पूछो',
    newPhoto: 'नई फोटो',
    askAQuestion: 'सवाल पूछो',
    yourQuestion: 'आपका सवाल',
    aiAnswer: 'AI का जवाब',
    findingAnswer: 'जवाब ढूंढ रहे हैं...',
    speakAgain: 'दोबारा सुनो',
    goBack: 'परिणाम पर वापस जाएं',
    startListening: 'सुनना शुरू करें',
    stopListening: 'सुनना बंद करें',
    error: 'त्रुटि',
    diagnosisError: 'एआई से निदान प्राप्त नहीं हो सका।',
    unknownError: 'एक अज्ञात त्रुटि हुई।',
    imageError: 'तस्वीर की जांच में समस्या',
    answerError: 'सवाल का जवाब नहीं मिल पाया।',
    compatibilityError: 'संगतता त्रुटि',
    voiceNotSupported: 'आपका ब्राउज़र वॉयस इनपुट का समर्थन नहीं करता है।',
    listeningError: 'सवाल सुनने में समस्या हुई।',
    crop: 'फसल',
    disease: 'बीमारी',
    diagnosisInfo: 'बीमारी की जानकारी',
    language: 'भाषा',
    stop: 'बंद करो',
    severity: 'गंभीरता',
  },
  Hinglish: {
    appName: 'Kisan AI',
    appTagline: 'Aapka Fasal Sahayak',
    photo: 'Photo',
    takePhoto: 'Apni fasal ka photo lo',
    uploadPhoto: 'Photo Upload Karo',
    footer: 'Powered by AI – Aapka Madadgaar',
    checkingImage: 'Tasveer check ho rahi hai…',
    diagnosis: 'Bimari (Diagnosis)',
    solution: 'Solution',
    precaution: 'Precaution',
    speak: 'Sunao',
    ask: 'Pucho',
    newPhoto: 'Nayi Photo',
    askAQuestion: 'Sawal Pucho',
    yourQuestion: 'Aapka Sawal',
    aiAnswer: 'AI ka Jawab',
    findingAnswer: 'Jawab dhoond rahe hain...',
    speakAgain: 'Sunao Dobara',
    goBack: 'Go back to results',
    startListening: 'Start listening',
    stopListening: 'Stop listening',
    error: 'Error',
    diagnosisError: 'Could not get a diagnosis from the AI.',
    unknownError: 'An unknown error occurred.',
    imageError: 'Tasveer check karne mein samasya',
    answerError: 'Sawal ka jawab nahi mil paya.',
    compatibilityError: 'Compatibility Error',
    voiceNotSupported: 'Aapka browser voice input support nahi karta.',
    listeningError: 'Sawal sunne mein samasya hui.',
    crop: 'Fasal',
    disease: 'Bimari',
    diagnosisInfo: 'Bimari ki jaankari',
    language: 'Language',
    stop: 'Stop',
    severity: 'Gambhirta (Severity)',
  },
};
