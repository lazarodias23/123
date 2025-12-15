import React from 'react';
import { ATTRACTIONS } from '../constants';

const Attractions: React.FC = () => {
  return (
    <section id="atracoes" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nossas Atrações</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Da adrenalina dos toboáguas ao relaxamento do rio lento, temos opções para todas as idades.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto space-x-6 pb-8 hide-scroll px-2 snap-x">
          {ATTRACTIONS.map((attraction) => (
            <div 
              key={attraction.id} 
              className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden snap-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{attraction.title}</h3>
                <p className="text-gray-600 text-sm">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;