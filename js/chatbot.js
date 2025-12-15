import { GoogleGenAI } from "@google/genai";

// ATENÇÃO: Em um site estático real, expor a API Key aqui não é seguro para produção.
// O ideal é usar um backend proxy. Para testes locais/pessoais, funciona.
const API_KEY = ""; // INSIRA SUA API KEY AQUI SE QUISER TESTAR

const chatBtn = document.getElementById('chat-btn');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const messagesContainer = document.getElementById('chat-messages');

// Controle de Janela
chatBtn.addEventListener('click', () => {
    chatWindow.classList.remove('hidden');
    chatBtn.classList.add('hidden');
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
    chatBtn.classList.remove('hidden');
});

// Contexto do Parque
const PARK_CONTEXT = `
Você é o assistente virtual do "Sítio do Beto", um grande parque aquático e de lazer em Gravataí, RS.
Use as seguintes informações para responder aos usuários:

LOCALIZAÇÃO: Gravataí, Rio Grande do Sul.
TEMPORADA: De 15 de novembro a março.
HORÁRIO: Seg-Sáb 09h-18h | Dom/Feriados 08h-18h.

ESTRUTURA:
- 17 Piscinas Adulto e 5 Infantis.
- Toboáguas (até 15m altura, 40km/h), Kamikaze, Free-fall, Rampas.
- Quadras de futebol e vôlei de areia (bola fornecida), Sala de Jogos.
- Estacionamento para 900 carros (R$ 12).
- Loja de conveniência, Enfermaria, Segurança.

VALORES (Temporada 2025/2026):
- 0-4 anos: Grátis.
- 5-9 anos: R$ 20,00.
- Adulto (Seg-Sex): R$ 30,00.
- Adulto (Sábado): R$ 35,00.
- Adulto (Dom/Feriado): R$ 40,00.
- Quiosque Churrasqueira: R$ 70,00 (até 12 pessoas, ordem de chegada dia de semana, reserva fds).
- Hospedagem: Pacote 2 dias (Sáb/Dom) R$ 160/pessoa. Seg-Sex R$ 140/pessoa. (Ingresso incluso).

REGRAS:
- Comida/Bebida: SÓ nas churrasqueiras. Proibido vidro.
- Traje: Roupa de banho obrigatória.
- Animais: Proibido.
`;

let history = [];

// Função de Envio
async function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    // Adiciona msg do usuário
    appendMessage(text, 'user');
    chatInput.value = '';
    
    // Loading
    const loadingId = appendLoading();

    try {
        if(!API_KEY) {
             throw new Error("API Key não configurada");
        }

        const ai = new GoogleGenAI({ apiKey: API_KEY });
        const prompt = `${PARK_CONTEXT}\n\nHistórico:\n${history.join('\n')}\nUsuário: ${text}\nResposta:`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: { temperature: 0.7 }
        });

        const botReply = response.text;
        
        removeLoading(loadingId);
        appendMessage(botReply, 'model');
        
        // Atualiza histórico
        history.push(`Usuário: ${text}`);
        history.push(`Modelo: ${botReply}`);

    } catch (error) {
        removeLoading(loadingId);
        console.error(error);
        appendMessage(API_KEY ? "Erro de conexão com o Gemini." : "Configure a API_KEY no arquivo js/chatbot.js", 'model');
    }
}

function appendMessage(text, role) {
    const div = document.createElement('div');
    div.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
    
    div.innerHTML = `
        <div class="max-w-[80%] p-3 rounded-2xl text-sm ${role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'}">
            ${text}
        </div>
    `;
    
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function appendLoading() {
    const id = 'loading-' + Date.now();
    const div = document.createElement('div');
    div.id = id;
    div.className = 'flex justify-start';
    div.innerHTML = `
        <div class="bg-gray-200 text-gray-500 text-xs p-3 rounded-2xl animate-pulse">
            Digitando...
        </div>
    `;
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return id;
}

function removeLoading(id) {
    const el = document.getElementById(id);
    if(el) el.remove();
}

// Event Listeners
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') sendMessage();
});
