'use server';

/**
 * @fileOverview This flow allows farmers to ask follow-up questions about their crop diagnosis using voice input and receive helpful answers from AI.
 *
 * - answerFarmerQuestions - A function that takes a question string as input and returns an AI-generated answer.
 * - AnswerFarmerQuestionsInput - The input type for the answerFarmerQuestions function (a string question).
 * - AnswerFarmerQuestionsOutput - The return type for the answerFarmerQuestions function (a string answer).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerFarmerQuestionsInputSchema = z.object({
  question: z.string().describe('The farmer\'s question about the crop diagnosis.'),
  language: z.string().describe('The language for the response (e.g., "English", "Hindi", "Hinglish").'),
});
export type AnswerFarmerQuestionsInput = z.infer<typeof AnswerFarmerQuestionsInputSchema>;

const AnswerFarmerQuestionsOutputSchema = z.string().describe('The AI-generated answer to the farmer\'s question.');
export type AnswerFarmerQuestionsOutput = z.infer<typeof AnswerFarmerQuestionsOutputSchema>;

export async function answerFarmerQuestions(input: AnswerFarmerQuestionsInput): Promise<AnswerFarmerQuestionsOutput> {
  return answerFarmerQuestionsFlow(input);
}

const answerFarmerQuestionsPrompt = ai.definePrompt({
  name: 'answerFarmerQuestionsPrompt',
  input: {schema: AnswerFarmerQuestionsInputSchema},
  output: {schema: AnswerFarmerQuestionsOutputSchema},
  prompt: `You are an AI assistant helping farmers understand crop diagnoses and solutions.

  The farmer has asked the following question: {{{question}}}
  
  Provide a short, helpful answer in the requested language: {{{language}}}.
  If the language is Hinglish, use a mix of Hindi and English.`,
});

const answerFarmerQuestionsFlow = ai.defineFlow(
  {
    name: 'answerFarmerQuestionsFlow',
    inputSchema: AnswerFarmerQuestionsInputSchema,
    outputSchema: AnswerFarmerQuestionsOutputSchema,
  },
  async input => {
    const {text} = await answerFarmerQuestionsPrompt(input);
    return text!;
  }
);
