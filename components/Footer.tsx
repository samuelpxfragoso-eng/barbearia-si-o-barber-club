
import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
             <span className="text-3xl font-black tracking-tighter text-white uppercase italic mb-8 block">
              SIÃO <span className="text-gold">BARBER CLUB</span>
            </span>
            <p className="text-white/40 font-light mb-8 leading-relaxed">
              Elevando o conceito de cuidado masculino em Alagoas através de técnica, tradição e luxo.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/siao_barber_club?igsh=MWgwOHkwZ2xtbWRjaQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              {[Facebook, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Navegação</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre o Legado</a></li>
              <li><a href="#unidades" className="hover:text-gold transition-colors">Unidades</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Menu de Serviços</a></li>
              <li><a href="#academy" className="hover:text-gold transition-colors">Academy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Contatos</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-center gap-3"><Phone size={16} className="text-gold" /> (82) 99388-1114</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-gold" /> contato@siaobarberclub.com.br</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> Marechal Deodoro, Alagoas</li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Institucional</h4>
             <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Políticas de Privacidade</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Seja um Franqueado</a></li>
              <li><a href="https://wa.link/g6ngx7" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
            © 2024 SIÃO BARBER CLUB. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 opacity-20 hover:opacity-100 transition-opacity">
            <span className="text-[10px] uppercase tracking-widest">Powered by</span>
            <span className="text-[10px] font-black italic">PROSPERE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;