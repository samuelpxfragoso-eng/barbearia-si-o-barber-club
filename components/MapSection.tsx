
import React, { useState } from 'react';
import { MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';

const MapSection: React.FC = () => {
  const [activeUnit, setActiveUnit] = useState(0);

  const locations = [
    {
      name: 'Unidade Praia do Francês (Caravelas)',
      subtitle: 'UNIDADE PREMIUM',
      description: 'Localizada na Galeria Caravelas, na Praia do Francês. Nossa unidade principal e referência de luxo no litoral.',
      address: 'Galeria Caravelas, Praia do Francês, Marechal Deodoro - AL',
      phone: '(82) 99388-1114',
      // Using a more direct search query embed for better focus
      mapEmbedUrl: 'https://www.google.com/maps?q=Si%C3%A3o+Barber+Club+Praia+do+Franc%C3%AAs&output=embed',
      link: 'https://maps.google.com/?q=Si%C3%A3o+Barber+Club+Praia+do+Franc%C3%AAs'
    },
    {
      name: 'Unidade Pedras',
      subtitle: 'UNIDADE TRADICIONAL',
      description: 'Localizada na região das Pedras. Focada na história e na essência da barbearia clássica.',
      address: 'Região das Pedras, Marechal Deodoro - AL',
      phone: '(82) 99146-8648',
      mapEmbedUrl: 'https://www.google.com/maps?q=Si%C3%A3o+Barber+Club+Pedras+Marechal+Deodoro&output=embed',
      link: 'https://maps.google.com/?q=Si%C3%A3o+Barber+Club+Pedras'
    },
    {
      name: 'Unidade Trevo',
      subtitle: 'CONVENIÊNCIA & AGILIDADE',
      description: 'Localizada estrategicamente no Trevo de acesso. Ideal para quem busca qualidade com rapidez.',
      address: 'Trevo de acesso a Marechal Deodoro - AL',
      phone: '(82) 99106-6112',
      mapEmbedUrl: 'https://www.google.com/maps?q=Si%C3%A3o+Barber+Club+Trevo+Marechal+Deodoro&output=embed',
      link: 'https://maps.google.com/?q=Si%C3%A3o+Barber+Club+Trevo'
    }
  ];

  return (
    <section id="onde-estamos" className="py-24 bg-[#0b0d11] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#c2a440]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#c2a440] font-black uppercase tracking-[0.4em] text-[10px] mb-4">LOGÍSTICA SIÃO</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
            ESTAMOS ONDE VOCÊ <span className="text-[#c2a440] italic">PRECISA.</span>
          </h3>
          <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Três unidades estrategicamente localizadas em Marechal Deodoro para garantir que o luxo e a precisão estejam sempre ao seu alcance. Clique em uma unidade para ver no mapa.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-[1400px] mx-auto">
          {/* Units List */}
          <div className="lg:w-[40%] space-y-4 flex flex-col">
            {locations.map((loc, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveUnit(idx)}
                className={`p-8 rounded-[32px] border backdrop-blur-md transition-all text-left flex-1 group ${
                  activeUnit === idx 
                  ? 'bg-[#c2a440]/10 border-[#c2a440]/50 shadow-[0_0_30px_rgba(194,164,64,0.1)]' 
                  : 'bg-white/[0.03] border-white/5 hover:border-[#c2a440]/30'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all shrink-0 ${
                    activeUnit === idx 
                    ? 'bg-[#c2a440] text-black border-transparent' 
                    : 'bg-[#c2a440]/10 text-[#c2a440] border-[#c2a440]/20 group-hover:bg-[#c2a440] group-hover:text-black'
                  }`}>
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-black uppercase text-sm mb-1 transition-colors ${
                      activeUnit === idx ? 'text-[#c2a440]' : 'text-white group-hover:text-[#c2a440]'
                    }`}>
                      {loc.name}
                    </h4>
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest block mb-3">
                      {loc.subtitle}
                    </span>
                    <p className={`text-[11px] leading-relaxed mb-6 transition-colors ${
                      activeUnit === idx ? 'text-white/70' : 'text-white/40'
                    }`}>
                      {loc.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center gap-2 text-[10px] text-white/60">
                        <Phone size={12} className="text-[#c2a440]" />
                        {loc.phone}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a 
                        href={loc.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 bg-[#c2a440] text-black px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[9px] transition-all gold-glow"
                      >
                        NAVEGAR
                        <Navigation size={12} />
                      </a>
                      <a 
                        href={loc.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 border border-white/10 hover:bg-white/5 text-white/60 hover:text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[9px] transition-all"
                      >
                        VER NO GOOGLE
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Map Display */}
          <div className="lg:w-[60%] h-[500px] lg:h-auto min-h-[550px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative grayscale-[60%] contrast-[1.1] invert-[0.9] hue-rotate-[180deg] transition-all">
            <iframe
              key={activeUnit} // Force re-render of iframe for smooth content loading
              src={locations[activeUnit].mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa da ${locations[activeUnit].name}`}
            />
            {/* Visual Frame Overlay */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-[#0b0d11]/90 rounded-[40px]" />
            
            {/* Overlay UI for context */}
            <div className="absolute top-8 left-8 flex flex-col gap-2 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#c2a440] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#c2a440]">MARECHAL DEODORO - AL</span>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/5 px-6 py-2 rounded-full">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">{locations[activeUnit].name}</span>
              </div>
            </div>

            {/* Hint for interaction */}
            <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/5 text-[9px] font-black uppercase tracking-[0.2em] text-white/30 pointer-events-none">
              MAPA INTERATIVO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
