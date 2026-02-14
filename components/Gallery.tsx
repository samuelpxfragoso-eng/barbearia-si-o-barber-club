
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20213752.png",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20213722.png",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20213655.png",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20213638.png",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20213611.png",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20213549.png"
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="estrutura" className="py-24 bg-[#0b0d11] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-[#c2a440] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
            NOSSA ESTRUTURA
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
            UM AMBIENTE À ALTURA DO <br />
            SEU <span className="text-[#c2a440] italic">ESTILO</span>.
          </h3>
          <p className="text-white/40 max-w-2xl text-lg font-medium leading-relaxed mb-12">
            Cada detalhe da nossa barbearia foi planejado para oferecer não apenas conforto, mas uma imersão total no luxo e na tradição da barbearia clássica.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:border-[#c2a440]/50 hover:text-[#c2a440] transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:border-[#c2a440]/50 hover:text-[#c2a440] transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrolling area */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((src, index) => (
              <div 
                key={index} 
                className="min-w-[300px] md:min-w-[450px] aspect-[4/3] rounded-[32px] overflow-hidden border border-white/5 snap-center transition-all duration-500 hover:border-[#c2a440]/20"
              >
                <img 
                  src={src} 
                  alt={`Estrutura Sião ${index + 1}`}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
