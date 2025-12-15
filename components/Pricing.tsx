import React from 'react';
import { PRICES } from '../constants';
import { Ticket, Calendar } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="valores" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Valores e Ingressos</h2>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-2">
                <Calendar size={16} /> Temporada 2025/2026: Nov a Março
            </div>
            <p className="text-gray-600">Confira nossa tabela para a temporada de verão.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-blue-600 p-4 text-white text-center font-bold text-lg">
                Tabela de Preços
            </div>
            {PRICES.map((item, index) => (
                <div 
                    key={index} 
                    className={`flex flex-col sm:flex-row justify-between items-center p-5 ${index !== PRICES.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors`}
                >
                    <div className="text-center sm:text-left mb-2 sm:mb-0">
                        <h4 className="text-lg font-bold text-gray-800">{item.category}</h4>
                        {item.detail && <p className="text-sm text-gray-500">{item.detail}</p>}
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                        {item.price}
                    </div>
                </div>
            ))}
            <div className="p-8 bg-gray-50 text-center">
                 <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 mx-auto text-lg">
                    <Ticket />
                    Comprar Ingresso Online
                </button>
                <p className="text-xs text-gray-500 mt-4 max-w-lg mx-auto">
                    *Aceitamos cartões de crédito, débito e PIX. Valores sujeitos a alteração sem aviso prévio. 
                    Em caso de chuvas leves, o parque funciona normalmente.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;