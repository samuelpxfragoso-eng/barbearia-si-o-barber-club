
import React from 'react';
import { Calendar, GraduationCap, ChevronDown } from 'lucide-react';

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
          <div className="w-2 h-2 rounded-full bg-gold" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Experiência Premium em Alagoas
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight md:leading-none mb-8">
          MODERNIDADE E <span className="text-gold italic">TRADIÇÃO</span> <br />
          EM CADA DETALHE.
        </h1>
        
        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/60 font-light mb-10 leading-relaxed px-4">
          Muito mais do que um corte comum. Um ritual de precisão, sofisticação e cuidado no coração de Marechal Deodoro.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.link/q20rlq"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gold text-black hover:bg-gold-light font-black text-lg transition-all gold-glow group"
          >
            Agendar Horário
            <Calendar size={20} className="group-hover:-translate-y-1 transition-transform" />
          </a>
          <a
            href="https://wa.link/6a32w7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-gold text-black hover:bg-gold-light px-10 py-5 rounded-full font-black text-lg transition-all gold-glow group"
          >
            Academy
            <GraduationCap size={22} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>

      {/* Explorer scroll indicator with custom animation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
        <span className="text-[10px] font-black uppercase text-gold animate-[tracking-glow_2.5s_ease-in-out_infinite]">
          Explorar
        </span>
        <div className="animate-bounce">
          <ChevronDown size={20} className="text-gold/50" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes tracking-glow {
          0%, 100% { letter-spacing: 0.3em; opacity: 0.4; transform: scale(1); }
          50% { letter-spacing: 0.6em; opacity: 1; transform: scale(1.05); }
        }
      `}} />
    </section>
  );
};

export default Hero;
