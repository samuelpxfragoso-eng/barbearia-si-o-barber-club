
import React from 'react';
import { Instagram, Plus } from 'lucide-react';

const Community: React.FC = () => {
  const images = [
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20210924.png", // Grande Vertical
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20210823.png",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20210755.png",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20210726.png",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20210659.png",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20210634.png",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20210614.png"
  ];

  return (
    <section className="py-24 bg-[#0b0d11]">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Instagram size={14} className="text-gold" />
            <span className="text-[10px] font-black text-gold uppercase tracking-widest">CONECTE-SE CONOSCO</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-8">
            SIGA-NOS NO <span className="text-gold italic">INSTAGRAM</span>.
          </h3>
          
          <p className="text-white/40 max-w-3xl mx-auto text-sm md:text-base font-medium leading-relaxed mb-12">
            Acompanhe nossas redes sociais para ficar por dentro das atualizações, promoções, eventos e muito mais. Junte-se à nossa comunidade!
          </p>

          <a 
            href="https://instagram.com/siaobarberclub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs transition-all hover:bg-gold mb-16 shadow-xl"
          >
            <Plus size={16} strokeWidth={3} />
            Seguir no Instagram
          </a>
        </div>

        {/* Custom Grid Layout */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
          {/* Main Large Image */}
          <div className="col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden border border-white/5 group">
            <img 
              src={images[0]} 
              alt="Community 1" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          
          {/* Small Images Grid */}
          {images.slice(1).map((src, idx) => (
            <div 
              key={idx} 
              className="aspect-square rounded-2xl overflow-hidden border border-white/5 group"
            >
              <img 
                src={src} 
                alt={`Community ${idx + 2}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />
            </div>
          ))}
        </div>

        <a 
          href="https://instagram.com/siaobarberclub" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-white/30 font-black uppercase tracking-[0.3em] text-[10px] hover:text-gold transition-colors"
        >
          VER MAIS NO @SIAOBARBERCLUB
        </a>
      </div>
    </section>
  );
};

export default Community;
