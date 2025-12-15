import { Attraction, Rental, Testimonial, FaqItem, PriceItem } from './types';

export const ATTRACTIONS: Attraction[] = [
  {
    id: 1,
    title: "Complexo de Piscinas",
    description: "Incríveis 17 piscinas para adultos e 5 piscinas infantis espalhadas pelo parque.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Toboáguas Radicais",
    description: "Emoção garantida com descidas de até 15m de altura, 65m de comprimento e velocidade de 40km/h.",
    image: "https://images.unsplash.com/photo-1528659550290-7cb53f4fd87b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Kamikaze e Free-Fall",
    description: "Para quem busca adrenalina máxima nas descidas verticais.",
    image: "https://images.unsplash.com/photo-1563720970030-244242337775?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Rampas Molhadas",
    description: "Diversão clássica para deslizar e cair na água com a família.",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Esportes e Jogos",
    description: "Quadras de futebol e vôlei de areia, além de sala de jogos com ping-pong e snooker.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  }
];

export const RENTALS: Rental[] = [
  {
    id: 1,
    title: "Quiosque com Churrasqueira",
    description: "Espaço reservado à beira do lago ou morro para seu churrasco.",
    capacity: "Até 12 pessoas",
    price: "R$ 70,00 / dia",
    image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=800",
    features: ["Churrasqueira", "Pia", "Mesa e Bancos", "Luz 220V"]
  },
  {
    id: 2,
    title: "Hospedagem / Pousada",
    description: "Pacote com pernoite para aproveitar o parque por 2 dias.",
    capacity: "Consulte quartos",
    price: "A partir de R$ 140/pessoa",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    features: ["Ingresso Incluso", "Cozinha Equipada", "Wi-Fi", "Ventilador"]
  },
  {
    id: 3,
    title: "Locação para Eventos",
    description: "Áreas exclusivas para excursões e grandes grupos (fora de temporada).",
    capacity: "Sob consulta",
    price: "Sob consulta",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
    features: ["Área Privativa", "Infraestrutura", "Atendimento Personalizado"]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Quais são os horários de funcionamento?",
    answer: "Alta Temporada (Nov-Mar): Segunda a Sábado das 09h às 18h. Domingos e Feriados das 08h às 18h."
  },
  {
    question: "Posso levar comida e bebida?",
    answer: "Permitido apenas para consumo nas áreas de churrasqueiras autorizadas. É proibido circular com alimentos nas piscinas. Vidro é totalmente proibido."
  },
  {
    question: "Qual o traje permitido?",
    answer: "Uso obrigatório de trajes de banho. É proibido o uso de calçados dentro das piscinas."
  },
  {
    question: "Quais as restrições dos toboáguas?",
    answer: "Toboáguas maiores são permitidos apenas para maiores de 10 anos ou com mais de 1,40m de altura."
  },
  {
    question: "Aceitam animais?",
    answer: "Não é permitida a entrada de animais no parque."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Souza",
    text: "Estrutura gigante! Muitas piscinas, não fica aquela aglomeração. O churrasco no quiosque foi top.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    id: 2,
    name: "Ana Clara",
    text: "As crianças amaram a parte infantil. E o preço durante a semana vale muito a pena.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ana"
  },
  {
    id: 3,
    name: "Marcos Oliveira",
    text: "Segurança muito boa, monitores em todas as piscinas. Recomendo chegar cedo.",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=marcos"
  }
];

export const PRICES: PriceItem[] = [
  { category: "Crianças (0 a 4 anos)", price: "Grátis", detail: "Acompanhadas de responsável" },
  { category: "Crianças (5 a 9 anos)", price: "R$ 20,00", detail: "Valor único" },
  { category: "Adulto (Segunda a Sexta)", price: "R$ 30,00", detail: "Exceto feriados" },
  { category: "Adulto (Sábados)", price: "R$ 35,00", detail: "" },
  { category: "Adulto (Domingos e Feriados)", price: "R$ 40,00", detail: "" },
  { category: "Estacionamento", price: "R$ 12,00", detail: "Capacidade 900 carros" },
  { category: "Quiosque (Churrasqueira)", price: "R$ 70,00", detail: "Até 12 pessoas" },
  { category: "Tirolesa (Extra)", price: "R$ 25,00", detail: "Por descida" }
];

// Context string for the AI Agent
export const PARK_CONTEXT = `
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

REGRAS IMPORTANTES:
- Comida/Bebida: SÓ nas churrasqueiras. Proibido vidro.
- Traje: Roupa de banho obrigatória. Proibido calçados na piscina.
- Som: Proibido som automotivo ou caixas grandes.
- Animais: Proibido.
- Toboáguas radicais: Apenas > 10 anos ou > 1,40m.
- Natureza: Proibido cortar plantas ou agredir a natureza (Crime ambiental).

Seja simpático, objetivo e use emojis de verão. Se não souber, peça para contatar no WhatsApp.
`;