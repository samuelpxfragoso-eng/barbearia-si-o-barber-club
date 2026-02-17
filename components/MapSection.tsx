
import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Star } from 'lucide-react';

const MapSection: React.FC = () => {
  const [activeUnit, setActiveUnit] = useState(0);

  const locations = [
    {
      name: 'Unidade Praia do Francês (Caravelas)',
      subtitle: 'UNIDADE PREMIUM',
      description: 'Localizada na Galeria Caravelas, na Praia do Francês. Nossa unidade principal e referência de luxo no litoral.',
      address: 'Galeria Caravelas, Praia do Francês, Marechal Deodoro - AL',
      phone: '(82) 99388-1114',
      mapEmbedUrl: 'https://www.google.com/maps?q=Si%C3%A3o+Barber+Club+Praia+do+Franc%C3%AAs&output=embed',
      link: 'https://g.page/r/CWufi9YZUFOEEAE/review'
    },
    {
      name: 'Unidade Pedras',
      subtitle: 'UNIDADE TRADICIONAL',
      description: 'Localizada na região das Pedras. Focada na história e na essência da barbearia clássica.',
      address: 'Região das Pedras, Marechal Deodoro - AL',
      phone: '(82) 99146-8648',
      mapEmbedUrl: 'https://www.google.com/maps?q=Si%C3%A3o+Barber+Club+Pedras+Marechal+Deodoro&output=embed',
      link: 'https://g.page/r/CWufi9YZUFOEEAE/review'
    },
    {
      name: 'Unidade Trevo',
      subtitle: 'CONVENIÊNCIA & AGILIDADE',
      description: 'Localizada estrategicamente no Trevo de acesso. Ideal para quem busca qualidade com rapidez.',
      address: 'Trevo de acesso a Marechal Deodoro - AL',
      phone: '(82) 99106-6112',
      mapEmbedUrl: 'https://www.google.com/maps?q=Si%C3%A3o+Barber+Club+Trevo+Marechal+Deodoro&output=embed',
      link: 'https://g.page/r/CWufi9YZUFOEEAE/review'
    }
  ];

  return (
    <section id="onde-estamos" className="py-24 bg-[#0b0d11] relative overflow-hidden">
      {/* Brilho de Fundo */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Seção de Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4">LOGÍSTICA SIÃO</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
            ESTAMOS ONDE VOCÊ <span className="text-gold italic">PRECISA.</span>
          </h3>
          <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Três unidades estrategicamente localizadas em Marechal Deodoro para garantir que o luxo e a precisão estejam sempre ao seu alcance. Clique em uma unidade para ver no mapa.
          </p>
        </div>

        {/* Grid de Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-[1400px] mx-auto">
          {/* Lista de Unidades */}
          <div className="lg:w-[40%] space-y-4 flex flex-col">
            {locations.map((loc, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveUnit(idx)}
                className={`p-8 rounded-[32px] border backdrop-blur-md transition-all text-left flex-1 group ${
                  activeUnit === idx 
                  ? 'bg-gold/10 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]' 
                  : 'bg-white/[0.03] border-white/5 hover:border-gold/30'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all shrink-0 ${
                    activeUnit === idx 
                    ? 'bg-gold text-black border-transparent' 
                    : 'bg-gold/10 text-gold border-gold/20 group-hover:bg-gold group-hover:text-black'
                  }`}>
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-black uppercase text-sm mb-1 transition-colors ${
                      activeUnit === idx ? 'text-gold' : 'text-white group-hover:text-gold'
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
                        <Phone size={12} className="text-gold" />
                        {loc.phone}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a 
                        href={loc.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 bg-gold text-black px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[9px] transition-all gold-glow"
                      >
                        AVALIAR ESSA UNIDADE NO GOOGLE
                        <Star size={12} fill="currentColor" />
                      </a>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Exibição do Mapa */}
          <div className="lg:w-[60%] h-[500px] lg:h-auto min-h-[550px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative grayscale-[60%] contrast-[1.1] invert-[0.9] hue-rotate-[180deg] transition-all">
            <iframe
              key={activeUnit} 
              src={locations[activeUnit].mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa da ${locations[activeUnit].name}`}
            />
            <div className="absolute inset-0 pointer-events-none border-[12px] border-[#0b0d11]/90 rounded-[40px]" />
            
            <div className="absolute top-8 left-8 flex flex-col gap-2 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gold">MARECHAL DEODORO - AL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;