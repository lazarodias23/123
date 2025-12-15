import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Sítio do Beto</h3>
                <p className="text-blue-200">
                    O destino perfeito para o seu verão. Venha viver momentos inesquecíveis com quem você ama.
                </p>
            </div>
            <div>
                <h4 className="text-xl font-bold mb-4">Contato</h4>
                <ul className="space-y-2 text-blue-200">
                    <li>(99) 99999-9999</li>
                    <li>contato@sitiodobeto.com.br</li>
                </ul>
            </div>
            <div>
                 <h4 className="text-xl font-bold mb-4">Redes Sociais</h4>
                 <div className="flex justify-center md:justify-start gap-4">
                    <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                        <Instagram />
                    </a>
                    <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                        <Facebook />
                    </a>
                    <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-500 transition-colors">
                        <MessageCircle />
                    </a>
                 </div>
            </div>
        </div>
        <div className="border-t border-blue-800 pt-8 text-center text-blue-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Sítio do Beto Parque Aquático. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;