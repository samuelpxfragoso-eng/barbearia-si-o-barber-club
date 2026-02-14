
import React from 'react';

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
            <h2 className="text-[#c2a440] font-black uppercase tracking-[0.4em] text-xs mb-6">
              A ARTE EM MOVIMENTO
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
              A ESSÊNCIA DA <span className="text-[#c2a440] italic">SIÃO</span> EM ALTA DEFINIÇÃO.
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
              Assista ao ritual de excelência que define nossa barbearia. Cada movimento é planejado para proporcionar não apenas um corte, mas uma transformação completa e revigorante.
            </p>
            <a 
              href="#academy"
              className="inline-block px-10 py-4 rounded-full border border-white/20 hover:border-[#c2a440] hover:text-[#c2a440] text-white font-bold text-sm transition-all backdrop-blur-md"
            >
              Conhecer a Academy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicVideo;
