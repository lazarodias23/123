import React from 'react';
import { RENTALS } from '../constants';
import { Check, MessageCircle } from 'lucide-react';

const Rentals: React.FC = () => {
  return (
    <section id="alugueis" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Conforto Exclusivo</h2>
          <p className="text-gray-600">Garanta seu espaço VIP e aproveite o dia com mais privacidade.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {RENTALS.map((rental) => (
            <div key={rental.id} className="border border-gray-100 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow bg-white flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={rental.image} 
                  alt={rental.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 font-bold px-3 py-1 rounded-full text-sm shadow-md">
                    {rental.price}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{rental.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{rental.description}</p>
                <div className="mb-6 flex-grow">
                    <p className="font-semibold text-blue-600 mb-2">{rental.capacity}</p>
                    <ul className="space-y-2">
                        {rental.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-600 text-sm">
                                <Check size={16} className="text-green-500 mr-2" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <a 
                    href="https://wa.me/5599999999999?text=Olá, gostaria de reservar um espaço no Sítio do Beto." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                    <MessageCircle size={20} />
                    Reservar no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rentals;