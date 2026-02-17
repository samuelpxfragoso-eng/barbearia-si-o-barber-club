
import React from 'react';

const ShortVideos: React.FC = () => {
  const videos = [
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/SnapInsta.to_AQM92rzqH1ZC1APYpnEDq6z6s54kbOcyCc4qxZ0iYSVonAQaZ6tgFyQiTpV8o-uhEzeFjL1qG03NyXtHrSOEZxZ6vGpXxSR9rnX_4Bs.mp4",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/SnapInsta.to_AQOuHky4XBLmmD9KtPMltfy8UJJPdZSgkryeLAcw7dIDbMxalyovozc4vvKFDa16aE93BoFfPvhe8hgLZljEA_k-lBN7FHkY9_G_KcQ.mp4"
  ];
  
  return (
    <section className="py-24 bg-[#0b0d11]">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">
            A ARTE EM FOCO
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
            MODERNIDADE E <span className="text-gold italic">TRADIÇÃO</span> EM CADA DETALHE.
          </h3>
          <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Confira os detalhes de precisão e a transformação completa que entregamos em cada atendimento.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-[900px] mx-auto">
          {videos.map((vid, idx) => (
            <div 
              key={idx} 
              className="relative w-full md:w-1/2 aspect-[9/16] rounded-[32px] overflow-hidden border border-white/10 group shadow-2xl transition-all hover:border-gold/30"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={vid} type="video/mp4" />
              </video>
              
              {/* Subtle dark overlay to match the reference look */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortVideos;