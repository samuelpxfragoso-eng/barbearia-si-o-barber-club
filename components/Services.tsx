
import React from 'react';
import { Scissors, Zap, Sparkles, Star, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  const categories = [
    {
      title: 'CABELO',
      icon: <Scissors size={18} className="text-gold" />,
      items: [
        { name: 'Corte (a partir de 7 anos)', price: 'R$ 35,00' },
        { name: 'Penteado', price: 'a partir de R$ 25,00' },
        { name: 'Progressiva', price: 'a partir de R$ 100,00' },
        { name: 'Relaxamento', price: 'a partir de R$ 55,00' },
        { name: 'Luzes', price: 'a partir de R$ 80,00' },
        { name: 'Pigmentação de Cabelo', price: 'R$ 30,00' },
        { name: 'Descoloração Global', price: 'A consultar' },
      ]
    },
    {
      title: 'BARBA',
      icon: <Zap size={18} className="text-gold" />,
      items: [
        { name: 'Barba Expressa', price: 'R$ 15,00' },
        { name: 'Barba Simples', price: 'R$ 25,00' },
        { name: 'Barba Terapia', price: 'R$ 35,00' },
        { name: 'Pigmentação de Barba', price: 'R$ 20,00' },
      ]
    },
    {
      title: 'ESTÉTICA & TRATAMENTOS',
      icon: <Sparkles size={18} className="text-gold" />,
      items: [
        { name: 'Limpeza de Pele', price: 'R$ 40,00' },
        { name: 'Depilação Nasal / Orelha', price: 'R$ 20,00' },
        { name: 'Sobrancelha', price: 'R$ 10,00' },
        { name: 'Hidratação Cabelo / Barba', price: 'R$ 15,00' },
      ]
    },
    {
      title: 'ESPECIAIS & ACABAMENTOS',
      icon: <Star size={18} className="text-gold" />,
      items: [
        { name: 'Acabamento de Pezinho', price: 'R$ 10,00' },
        { 
          name: 'Dia de Noivo', 
          price: 'A consultar', 
          highlight: true,
          subtitle: 'SERVIÇO EXCLUSIVO'
        },
      ]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-[#0b0d11] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">
            EXPERIÊNCIA SIÃO
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
            TABELA DE <span className="text-gold">SERVIÇOS.</span>
          </h3>
          <p className="text-white/40 max-w-2xl text-lg font-medium leading-relaxed">
            Oferecemos uma seleção completa de serviços focada na estética masculina contemporânea, unindo técnicas clássicas à inovação constante de nossa equipe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-black/40 border border-white/5 backdrop-blur-md p-8 md:p-10 rounded-[32px] transition-all hover:border-gold/20 group">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/20">
                  {cat.icon}
                </div>
                <h4 className="text-lg font-black uppercase tracking-widest text-white group-hover:text-gold transition-colors">
                  {cat.title}
                </h4>
              </div>

              <div className="space-y-6">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex flex-col gap-1 group/item">
                    <div className="flex items-end justify-between">
                      <span className={`text-sm md:text-base font-bold ${item.highlight ? 'text-gold' : 'text-white/90'}`}>
                        {item.name}
                      </span>
                      <div className="flex-1 border-b border-white/5 mx-4 mb-1.5" />
                      <span className={`text-sm md:text-base font-black ${item.highlight ? 'text-gold' : 'text-white/70'}`}>
                        {item.price}
                      </span>
                    </div>
                    {item.subtitle && (
                      <span className="text-[10px] font-black text-gold/50 uppercase tracking-widest">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info & CTA */}
        <div className="mt-20 text-center">
          <p className="text-[10px] md:text-xs text-white/30 font-medium uppercase tracking-[0.2em] mb-12 max-w-2xl mx-auto leading-relaxed">
            * Os valores "a partir de" podem variar conforme o comprimento do cabelo e a complexidade do serviço. <br />
            Consulte seu barbeiro para um orçamento personalizado.
          </p>
          
          <a 
            href="https://wa.me/5582993881114"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm transition-all gold-glow group"
          >
            <MessageCircle size={20} fill="currentColor" />
            Agendar Serviço via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
