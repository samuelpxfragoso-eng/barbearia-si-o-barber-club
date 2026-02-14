
import React from 'react';
import { Star, Clock, Phone, Quote } from 'lucide-react';

const Locations: React.FC = () => {
  const units = [
    {
      name: 'Praia do Francês (Caravelas)',
      subtitle: 'A UNIDADE PREMIUM',
      rating: '4.8',
      reviews: '175 avaliações',
      openUntil: '20:00',
      phone: '(82) 99388-1114',
      quote: 'Atendimento de excelência, corte de cabelo impecável, recomendo demais.'
    },
    {
      name: 'Unidade Pedras',
      subtitle: 'A TRADICIONAL',
      rating: '4.7',
      reviews: '68 avaliações',
      openUntil: '18:00',
      phone: '(82) 99146-8648',
      quote: 'Melhor barbearia de Marechal Deodoro, sem dúvidas.'
    },
    {
      name: 'Unidade Trevo',
      subtitle: 'CONVENIÊNCIA E QUALIDADE',
      rating: '4.1',
      reviews: '13 avaliações',
      openUntil: '20:00',
      phone: '(82) 99106-6112',
      quote: 'Lugar excelente com profissionais de alto nível.'
    }
  ];

  return (
    <section id="unidades" className="py-24 bg-[#0b0d11]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-[#c2a440] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
            NOSSA PRESENÇA ESTRATÉGICA
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
            ONDE A <span className="text-[#c2a440]">TRADIÇÃO</span> ENCONTRA <br /> O ESTILO.
          </h3>
          <p className="text-white/40 max-w-2xl text-lg font-medium leading-relaxed">
            Com mais de uma década de história em Marechal Deodoro - AL, a Rede Sião domina os principais pontos da região com maestria e precisão técnica.
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {units.map((unit, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all hover:border-[#c2a440]/20 flex flex-col min-h-[420px]"
            >
              {/* Unit Title and Subtitle */}
              <div className="mb-8">
                <h4 className="text-xl md:text-2xl font-black text-white uppercase mb-1">
                  {unit.name}
                </h4>
                <p className="text-[#c2a440] text-[10px] font-black uppercase tracking-widest">
                  {unit.subtitle}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-10">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#c2a440" stroke="#c2a440" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-white/80 ml-1">{unit.rating}</span>
                <span className="text-[10px] font-medium text-white/30">({unit.reviews})</span>
              </div>

              {/* Info List */}
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-4 text-white/60">
                  <Clock size={18} className="text-[#c2a440]" />
                  <span className="text-sm font-medium">Aberto até as {unit.openUntil}</span>
                </div>
                <div className="flex items-center gap-4 text-white/60">
                  <Phone size={18} className="text-[#c2a440]" />
                  <span className="text-sm font-medium">{unit.phone}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5 w-full mb-10" />

              {/* Quote Section */}
              <div className="mt-auto relative">
                <p className="text-white/40 text-xs italic leading-relaxed pr-8">
                  "{unit.quote}"
                </p>
                <div className="absolute top-0 right-0">
                   <Quote size={24} className="text-white/5 rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
