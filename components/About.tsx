
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { value: '10+', label: 'ANOS DE HISTÓRIA' },
    { value: '3', label: 'UNIDADES ATIVAS' },
    { value: '4.8', label: 'MÉDIA DE AVALIAÇÕES' },
  ];

  return (
    <section id="sobre" className="py-24 relative bg-[#0b0d11]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Coluna do Texto (Esquerda) */}
          <div className="lg:w-1/2">
            <h2 className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-6">
              LEGADO DE EXCELÊNCIA
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
              A HISTÓRIA POR TRÁS DA <span className="text-gold italic">LÂMINA</span>.
            </h3>
            <p className="text-lg text-white/40 font-medium leading-relaxed mb-16 max-w-xl">
              Nascida em Marechal Deodoro, Alagoas, a Sião Barber Club transcende o conceito de barbearia. É um refúgio para o homem que valoriza o tempo, a tradição e a autoexpressão por meio de uma estética impecável, consolidada por mais de uma década de maestria.
            </p>

            {/* Stats Horizontais */}
            <div className="flex flex-wrap gap-12 lg:gap-20">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-black text-gold mb-1">{stat.value}</div>
                  <div className="text-[10px] text-white/40 font-black uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna da Imagem (Direita) */}
          <div className="lg:w-1/2 relative">
            <div className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
              <img
                src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-14%20161335.png"
                alt="Barbeiro Sião em ação"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;