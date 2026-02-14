
import React from 'react';
import { Play, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Create_a_5second_1080p_202601111209.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11] via-transparent to-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-[#c2a440]" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Experiência Premium em Alagoas
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight md:leading-none mb-6">
          REDEFININDO O <br />
          <span className="text-[#c2a440] italic">ESTILO</span> MASCULINO.
        </h1>
        
        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/60 font-light mb-10 leading-relaxed px-4">
          Muito mais do que um corte comum. Um ritual de precisão, sofisticação e cuidado no coração de Marechal Deodoro.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#agendar"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#c2a440] hover:bg-[#d4b550] text-black px-10 py-5 rounded-full font-bold text-lg transition-all gold-glow group"
          >
            Agendar Horário
            <Play size={20} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#academy"
            className="w-full md:w-auto px-10 py-5 rounded-full border border-white/20 hover:bg-white/5 text-white font-bold text-lg transition-all backdrop-blur-md"
          >
            Sião Academy
          </a>
        </div>
      </div>

      {/* Explorer scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse opacity-50">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Explorar</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
