
import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const ReviewsFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    { 
      name: 'João Cavalcante', 
      role: 'CLIENTE PREMIUM', 
      text: 'A melhor experiência de barbearia que já tive em Alagoas. O atendimento é impecável e o ambiente é extremamente sofisticado. O ritual de toalha quente é revigorante.', 
      rating: 5 
    },
    { 
      name: 'Ricardo Santos', 
      role: 'EMPRESÁRIO', 
      text: 'Profissionais de altíssimo nível. A precisão no corte e o cuidado com a barba são diferenciais que não encontro em outro lugar. Vale cada centavo pela exclusividade.', 
      rating: 5 
    },
    { 
      name: 'Lucas Oliveira', 
      role: 'ALUNO ACADEMY', 
      text: 'Fiz o curso na Sião Academy e saí pronto para o mercado de luxo. A metodologia prática e o suporte dos instrutores são excepcionais. Recomendo demais!', 
      rating: 5 
    },
    { 
      name: 'Marcos Lima', 
      role: 'CLIENTE FIEL', 
      text: 'Sou cliente há anos e a consistência na qualidade é o que me prende. É mais que um corte, é um momento de cuidado pessoal em um refúgio masculino de elite.', 
      rating: 5 
    },
    { 
      name: 'André Torres', 
      role: 'ARQUITETO', 
      text: 'O design do espaço já diz tudo sobre a marca. Bom gosto, técnica apurada e um café excelente. O lugar perfeito para o homem que valoriza seu tempo.', 
      rating: 5 
    },
  ];

  const faqs = [
    { q: 'Preciso agendar horário ou posso ir direto?', a: 'Sempre recomendamos o agendamento prévio pelo nosso site ou WhatsApp para garantir sua vaga e evitar esperas.' },
    { q: 'Quais as formas de pagamento aceitas?', a: 'Aceitamos todas as bandeiras de cartão (crédito/débito), Pix e dinheiro. Para planos, usamos recorrência no cartão.' },
    { q: 'As unidades possuem estacionamento?', a: 'Sim, todas as nossas 3 unidades contam com vagas de estacionamento exclusivas e seguras para nossos clientes.' },
    { q: 'Como funciona o cancelamento do plano?', a: 'Nossos planos não possuem fidelidade. Você pode cancelar quando quiser através da nossa central de atendimento.' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-24 bg-[#0b0d11] relative overflow-hidden">
      {/* Background Aurora Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c2a440]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Reviews Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#c2a440] font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            VOZES DA EXPERIÊNCIA
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
            O QUE DIZEM NOSSOS <span className="text-[#c2a440] italic">CLIENTES.</span>
          </h3>
          <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed mb-10">
            Gostou do nosso atendimento? Deixe seu comentário de 5 estrelas, conte um pouco sobre a sua experiência e compartilhe uma foto.
          </p>
          
          <a 
            href="https://google.com/search?q=siao+barber+club+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d4b550] hover:bg-[#e6c762] text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] transition-all gold-glow"
          >
            Avaliar no Google
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-24 group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center text-white/50 hover:border-[#c2a440]/50 hover:text-[#c2a440] transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center text-white/50 hover:border-[#c2a440]/50 hover:text-[#c2a440] transition-all"
          >
            <ChevronRight size={20} />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((r, i) => (
              <div 
                key={i} 
                className="min-w-[300px] md:min-w-[400px] snap-center p-8 md:p-10 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-xl flex flex-col transition-all hover:border-[#c2a440]/20 group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#c2a440" stroke="#c2a440" />
                  ))}
                </div>
                
                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-2 w-10 h-10 text-white/[0.03] pointer-events-none" />
                  <p className="text-white/70 italic text-sm md:text-base leading-relaxed relative z-10">
                    "{r.text}"
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5">
                  <h4 className="text-white font-black text-sm uppercase mb-1 tracking-tight">{r.name}</h4>
                  <p className="text-[#c2a440] font-black uppercase text-[10px] tracking-widest">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#c2a440] font-black uppercase tracking-[0.4em] text-[10px] mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              DÚVIDAS <span className="text-[#c2a440] italic">COMUNS.</span>
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                  openFaq === idx ? 'bg-white/[0.03] border-[#c2a440]/30' : 'bg-black/40 border-white/5'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-7 text-left group"
                >
                  <span className={`font-black uppercase text-xs md:text-sm tracking-widest transition-colors ${
                    openFaq === idx ? 'text-[#c2a440]' : 'text-white/80 group-hover:text-white'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full transition-all ${
                    openFaq === idx ? 'bg-[#c2a440] text-black' : 'bg-white/5 text-white/40'
                  }`}>
                    {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-7 pb-7 text-sm md:text-base text-white/50 font-medium leading-relaxed animate-in fade-in slide-in-from-top-4 duration-500">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsFAQ;
