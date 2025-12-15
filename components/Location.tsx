import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 md:p-10 shadow-lg">
            <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                    <MapPin className="text-red-500" />
                    Como Chegar
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                    Estamos localizados em uma área privilegiada de fácil acesso.
                    <br />
                    <strong className="text-xl text-gray-800">Gravataí, Rio Grande do Sul</strong>
                    <br />
                    <span className="text-sm text-gray-500">Consulte o mapa para a rota exata.</span>
                </p>
                
                <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
                >
                    <Navigation size={20} />
                    Traçar Rota no Waze/Maps
                </a>
            </div>
            
            <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md bg-gray-200">
                {/* Embed Placeholder - Points to Gravataí generic location for demo */}
                <iframe 
                    title="Map Location"
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    loading="lazy" 
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.864389146908!2d-50.9856!3d-29.9431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zGravataí!5e0!3m2!1sen!2sbr"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Location;