import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PARK_CONTEXT } from '../constants';

const API_KEY = process.env.API_KEY || ''; // Ensure this environment variable is set

// Initialize the Gemini AI client
// Note: In a real production app, you should proxy requests through a backend
// to avoid exposing the API_KEY in the client bundle.
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const sendMessageToGemini = async (message: string, history: string[]): Promise<string> => {
  if (!API_KEY) {
    return "Desculpe, meu sistema de IA não está configurado no momento (Chave de API ausente). Por favor, contate-nos via WhatsApp.";
  }

  try {
    const prompt = `
      ${PARK_CONTEXT}
      
      Histórico da conversa:
      ${history.join('\n')}
      
      Usuário: ${message}
      Resposta:
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        // maxOutputTokens is removed to avoid issues with thinking models (Gemini 2.5) 
        // consuming tokens for thinking, leading to empty or truncated responses.
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não entendi. Pode repetir?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tive um problema técnico momentâneo. Tente novamente ou chame no WhatsApp!";
  }
};