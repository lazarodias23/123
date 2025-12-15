import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Quem foi, amou!</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-2xl shadow-md relative">
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                             <Star key={i} size={18} className={`${i < t.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                        <span className="font-bold text-gray-800">{t.name}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;