
import React from 'react';
import { Check, Crown, Zap, ShieldCheck, Star, AlertTriangle, Info } from 'lucide-react';

const Plans: React.FC = () => {
  const plans = [
    {
      name: 'PLANO DE CORTE ILIMITADO',
      price: '59,99',
      icon: <Zap className="text-[#c2a440]" size={24} />,
      features: ['Cortes de cabelo ilimitados', 'Acesso a todas as unidades (exceto Trevo)', 'Shampoo e Finalização inclusos'],
      badge: null,
    },
    {
      name: 'PLANO DE CORTE E BARBA TERAPIA',
      price: '129,99',
      icon: <Crown className="text-[#c2a440]" size={24} />,
      features: ['Cortes ilimitados', 'Barba Terapia ilimitada', 'Massagem facial inclusa', 'Priority Service'],
      badge: 'RESTAM 78 VAGA(S)',
    },
    {
      name: 'PLANO DE CORTE E BARBA SIMPLES',
      price: '110,99',
      icon: <ShieldCheck className="text-[#c2a440]" size={24} />,
      features: ['Cortes ilimitados', 'Barba simples ilimitada', 'Acabamento de pezinho'],
      badge: null,
    },
    {
      name: 'PLANO DE BARBA ILIMITADO',
      price: '63,00',
      icon: <Star className="text-[#c2a440]" size={24} />,
      features: ['Barba simples e pigmentação', 'Manutenção ilimitada', 'Hidratação de barba'],
      badge: null,
    },
  ];

  return (
    <section id="planos" className="py-24 bg-[#0b0d11]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black text-[#c2a440] uppercase tracking-[0.4em] mb-4">ASSINATURA EXCLUSIVE</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            PLANO DE CORTE <span className="italic text-[#c2a440]">ILIMITADO.</span>
          </h3>
          <p className="max-w-2xl mx-auto text-white/40 text-sm md:text-base font-medium leading-relaxed">
            Mantenha seu visual impecável todos os dias com economia e praticidade.<br />
            Escolha o plano que melhor se adapta ao seu estilo de vida.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative flex flex-col p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/10"
            >
              {/* Badge for Limited Spots */}
              {plan.badge && (
                <div className="absolute top-6 right-6 bg-red-900/40 text-red-500 text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-md border border-red-500/20">
                  {plan.badge}
                </div>
              )}

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-10">
                {plan.icon}
              </div>

              {/* Plan Title */}
              <h4 className="text-lg font-black uppercase tracking-tight leading-tight mb-6 h-12">
                {plan.name}
              </h4>

              {/* Pricing */}
              <div className="mb-10">
                <div className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-2">POR APENAS</div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-black text-[#c2a440] mr-1">R$</span>
                  <span className="text-5xl font-black tracking-tighter">{plan.price.split(',')[0]}</span>
                  <span className="text-2xl font-black tracking-tighter">,{plan.price.split(',')[1]}</span>
                  <span className="text-white/40 text-[10px] font-bold ml-1 uppercase">/mês</span>
                </div>
              </div>

              {/* Validity Info */}
              <div className="mb-10">
                <div className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">TEMPO DE VIGÊNCIA:</div>
                <div className="text-[10px] text-white/60 font-black uppercase">INDETERMINADO</div>
              </div>

              <div className="h-px bg-white/10 mb-10" />

              {/* Features List */}
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-xs font-bold text-white/80">
                    <Check size={14} className="text-[#c2a440] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full py-5 rounded-full bg-[#d4b550] text-black font-black uppercase tracking-widest text-xs transition-all hover:bg-[#e6c762] gold-glow mb-8">
                Assinar Agora
              </button>

              {/* Bottom Links */}
              <div className="flex justify-between items-center px-2">
                <a href="#" className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em] hover:text-white transition-colors">CONFIRA AS VANTAGENS</a>
                <a href="#" className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em] hover:text-white transition-colors">TERMOS DE USO</a>
              </div>
            </div>
          ))}
        </div>

        {/* Observation Block */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-black/40 border border-[#c2a440]/20 rounded-2xl p-6 md:p-8 flex items-center gap-6 md:gap-8 backdrop-blur-md">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#c2a440]/10 flex items-center justify-center border border-[#c2a440]/20">
              <Info className="text-[#c2a440]" size={28} />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={16} className="text-[#c2a440]" />
                <h5 className="text-[#c2a440] font-black uppercase tracking-widest text-sm md:text-base">
                  OBSERVAÇÃO IMPORTANTE:
                </h5>
              </div>
              <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed">
                Os planos de assinatura ainda não estão disponíveis na <span className="text-white font-bold">Sede Trevo</span>. Verifique a disponibilidade diretamente com nossos barbeiros nas unidades Praia do Francês e Pedras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
