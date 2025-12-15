import React from 'react';
import { ShieldCheck, Trees, Smile } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Sobre Nós</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">O maior centro de lazer de Gravataí - RS</h3>
            <p className="text-gray-600 leading-relaxed">
              O Sítio do Beto é referência em diversão e natureza. Com uma estrutura impressionante que conta com 
              <strong> 17 piscinas para adultos e 5 piscinas infantis</strong>, oferecemos opções para todos os gostos, 
              desde o relaxamento até a adrenalina radical.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossa missão é proporcionar um ambiente seguro e familiar, cercado por natureza preservada. 
              Aqui você encontra infraestrutura completa, segurança monitorada e rigorosos padrões de qualidade.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl">
                <ShieldCheck className="text-blue-600 w-8 h-8 mb-2" />
                <span className="font-semibold text-blue-900">Segurança</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl">
                <Trees className="text-green-600 w-8 h-8 mb-2" />
                <span className="font-semibold text-green-900">Natureza</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-xl">
                <Smile className="text-yellow-600 w-8 h-8 mb-2" />
                <span className="font-semibold text-yellow-900">22 Piscinas</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              poster="https://images.unsplash.com/photo-1533315760438-662325ce4f5b?auto=format&fit=crop&q=80&w=800"
            >
                <source src="https://videos.pexels.com/video-files/3619623/3619623-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block z-10">
              <p className="text-4xl font-bold text-blue-600">10+</p>
              <p className="text-gray-600 text-sm">Anos de História</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;