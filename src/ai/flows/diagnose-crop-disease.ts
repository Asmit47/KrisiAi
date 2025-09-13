// diagnose-crop-disease.ts
'use server';
/**
 * @fileOverview A crop disease diagnosis AI agent.
 *
 * - diagnoseCropDisease - A function that handles the crop disease diagnosis process.
 * - DiagnoseCropDiseaseInput - The input type for the diagnoseCropDisease function.
 * - DiagnoseCropDiseaseOutput - The return type for the diagnoseCropDisease function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DiagnoseCropDiseaseInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a crop, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
    language: z.string().describe('The language for the response (e.g., "English", "Hindi", "Hinglish").'),
});
export type DiagnoseCropDiseaseInput = z.infer<typeof DiagnoseCropDiseaseInputSchema>;

const DiagnoseCropDiseaseOutputSchema = z.object({
  cropName: z.string().describe('The name of the crop.'),
  detectedDisease: z.string().describe('The detected disease, if any.'),
  diseaseSeverity: z.string().describe('The severity of the disease (Low, Medium, or High) in the specified language.'),
  diagnosis: z.string().describe('A short diagnosis of the problem in the specified language.'),
  solution: z.string().describe('Steps to solve the problem in the specified language.'),
  precaution: z.string().describe('Precautionary measures in the specified language.'),
});
export type DiagnoseCropDiseaseOutput = z.infer<typeof DiagnoseCropDiseaseOutputSchema>;

export async function diagnoseCropDisease(input: DiagnoseCropDiseaseInput): Promise<DiagnoseCropDiseaseOutput> {
  return diagnoseCropDiseaseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'diagnoseCropDiseasePrompt',
  input: {schema: DiagnoseCropDiseaseInputSchema},
  output: {schema: DiagnoseCropDiseaseOutputSchema},
  prompt: `You are an expert agricultural advisor specializing in diagnosing crop diseases and providing solutions.

Analyze the provided image of the crop and identify any diseases or issues.
Determine the severity of the disease (Low, Medium, or High).
Provide a diagnosis, solution, and precaution in the requested language: {{{language}}}.

If the language is Hinglish, use a mix of Hindi and English.

Photo: {{media url=photoDataUri}}

Output the crop name, detected disease (if any), disease severity, diagnosis, solution, and precaution.
`,
});

const diagnoseCropDiseaseFlow = ai.defineFlow(
  {
    name: 'diagnoseCropDiseaseFlow',
    inputSchema: DiagnoseCropDiseaseInputSchema,
    outputSchema: DiagnoseCropDiseaseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
