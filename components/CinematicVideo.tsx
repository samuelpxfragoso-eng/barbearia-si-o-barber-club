
import React from 'react';
import { MessageCircle } from 'lucide-react';

const CinematicVideo: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Coluna do Vídeo */}
          <div className="w-full lg:w-[55%]">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 aspect-video group shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Create_a_5second_1080p_202601111209.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-4 right-4 text-[10px] text-white/40 font-bold tracking-widest uppercase">
                Veo
              </div>
            </div>
          </div>

          {/* Coluna do Texto */}
          <div className="w-full lg:w-[45%]">
            <h2 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6">
              MODERNIDADE E TRADIÇÃO EM CADA DETALHE
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
              SAIBA COMO <span className="text-gold italic">TRABALHAR</span> CONOSCO.
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
              Seja como barbeiro ou colaborador, nosso time aguarda por você. Mande uma mensagem caso tenha interesse em fazer parte da equipe Sião Barber Club.
            </p>
            <a 
              href="https://wa.me/5582993881114"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-gold hover:bg-gold hover:text-black text-gold font-black uppercase tracking-widest text-xs transition-all backdrop-blur-md"
            >
              <MessageCircle size={18} fill="currentColor" />
              Trabalhe Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicVideo;