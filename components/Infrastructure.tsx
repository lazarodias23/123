import React from 'react';
import { Utensils, Wifi, Car, LifeBuoy, ShoppingBag, Stethoscope, Gamepad2, Trophy } from 'lucide-react';

const items = [
  { Icon: Utensils, text: "Lanchonetes e Bares" },
  { Icon: LifeBuoy, text: "30+ Monitores e Salva-vidas" },
  { Icon: Car, text: "Estacionamento (900 Vagas)" },
  { Icon: ShoppingBag, text: "Loja de Conveniência" },
  { Icon: Stethoscope, text: "Enfermaria de Plantão" },
  { Icon: Wifi, text: "Wi-Fi (Áreas Comuns)" },
  { Icon: Gamepad2, text: "Sala de Jogos" },
  { Icon: Trophy, text: "Quadras Esportivas" },
];

const Infrastructure: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Infraestrutura Completa</h2>
          <p className="text-blue-200">Segurança, conforto e serviços para um dia perfeito.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                    <div className="bg-blue-800 p-4 rounded-full mb-4 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300">
                        <item.Icon size={32} />
                    </div>
                    <span className="font-medium text-lg">{item.text}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;