import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1582653291997-079a1c04c792?auto=format&fit=crop&q=80"
            alt="Sítio do Beto Vista Aérea"
            className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg tracking-tight">
          Sítio do Beto
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
          Diversão, água e natureza para toda a família!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#atracoes" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Ver Atrações
          </a>
          <a 
            href="#valores" 
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Comprar Ingressos
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 z-20 animate-bounce text-white">
        <a href="#sobre">
            <ChevronDown size={48} />
        </a>
      </div>
    </section>
  );
};

export default Hero;