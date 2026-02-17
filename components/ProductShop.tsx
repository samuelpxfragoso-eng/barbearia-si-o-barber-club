
import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, MessageCircle, ChevronDown, ChevronUp, Sparkles, Smartphone, Package } from 'lucide-react';

const ProductShop: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-17%20173826.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMTcgMTczODI2LnBuZyIsImlhdCI6MTc3MTM2MDg3NSwiZXhwIjoxODAyODk2ODc1fQ.kQbJ2XtIbYj-443aCUWc7sRb_UXK9ktbVHjLISiwuBk",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-17%20173811.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMTcgMTczODExLnBuZyIsImlhdCI6MTc3MTM2MDkyNSwiZXhwIjoxODAyODk2OTI1fQ.T63uOE-XgQwAI3dRJjeL9LJ2yYm5OPqEsQZPL5tULyU",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-17%20173755.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMTcgMTczNzU1LnBuZyIsImlhdCI6MTc3MTM2MDk0NCwiZXhwIjoxODAyODk2OTQ0fQ.RpfE3Rc1VhjMfnnbuEV0dENXLJ7504MsAta6aaozq8g",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-17%20173735.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMTcgMTczNzM1LnBuZyIsImlhdCI6MTc3MTM2MDk2MSwiZXhwIjoxODAyODk2OTYxfQ.I0r-CocePeL6Etn3CMX6Y_DFvpIrcsV-416t_KgNrro"
  ];

  const allProducts = [
    { id: '01', name: 'Pomada matte Fox', price: '45' },
    { id: '02', name: 'Pomada matte Embaixador', price: '60' },
    { id: '03', name: 'Pomada efeito brilho Fox', price: '30' },
    { id: '04', name: 'Pomada efeito brilho Embaixador', price: '45' },
    { id: '05', name: 'Pomada em pó Fox', price: '45' },
    { id: '06', name: 'Creme pós-barba Fox', price: '50' },
    { id: '07', name: 'Shampoo anticaspa', price: '35' },
    { id: '08', name: 'Shampoo de biotina', price: '35' },
    { id: '09', name: 'Shampoo 4x1 Fox', price: '35' },
    { id: '10', name: 'Máscara de reposição', price: '50' },
    { id: '11', name: 'Minoxidil Kirkland', price: '85' },
    { id: '12', name: 'Escova mágica', price: '25' },
    { id: '13', name: 'Escova modeladora Marco Bony', price: '55' },
    { id: '14', name: 'Balm Alfalook', price: '35' },
    { id: '15', name: 'Óleo Fox gota a gota', price: '40' },
    { id: '16', name: 'Pente de madeira', price: '25' },
    { id: '17', name: 'Máquina multifuncional Kemei', price: '135' },
    { id: '18', name: 'Máquina de acabamento Kemei', price: '65' },
    { id: '19', name: 'Desfrisante', price: '50' },
    { id: '20', name: 'Shampoo matizador Fox', price: '45' },
    { id: '21', name: 'Fonte USB-C 20W (Power Adapter)', price: '40' },
    { id: '22', name: 'Cabo iOS Turbo 18W', price: '20' },
    { id: '23', name: 'Cabo Turbo Tipo-C', price: '20' },
    { id: '24', name: 'Fone de ouvido TWS (8–11h)', price: '100' },
    { id: '25', name: 'Suporte de carro com sucção', price: '35' },
    { id: '26', name: 'Carregador inteligente 45W', price: '60' },
    { id: '27', name: 'Carregador rápido 5.1A CAR-3257A', price: '50' },
    { id: '28', name: 'Carregador rápido 3.1A CAR-3229A', price: '50' },
    { id: '29', name: 'Cabo Turbo 18W Tipo-C para iOS', price: '22' },
    { id: '30', name: 'Cabo USB rápido transmissão CA-8612', price: '15' },
    { id: '31', name: 'Carregador veicular USB duplo', price: '25' },
    { id: '32', name: 'Carregador portátil (Power Bank)', price: '90' },
    { id: '33', name: 'Carregador magnético sem fio 10W', price: '100' },
    { id: '34', name: 'Carregador magnético PD 20W', price: '180' },
    { id: '35', name: 'Fone de ouvido sem fio TWS', price: '90' },
    { id: '36', name: 'Rádio USB Mini Star', price: '90' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: activeIndex * scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <section id="produtos" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4">MANTENHA O PADRÃO EM CASA</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            NOSSOS <span className="text-gold italic">PRODUTOS.</span>
          </h3>
          <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed mb-12">
            Uma seleção rigorosa do que há de melhor em estética masculina e acessórios tecnológicos para o seu dia a dia.
          </p>
        </div>

        {/* Auto-scrolling Images */}
        <div className="max-w-6xl mx-auto mb-16 relative group">
          <div 
            ref={scrollRef}
            className="flex overflow-hidden rounded-[40px] border border-white/5"
          >
            {images.map((src, idx) => (
              <div key={idx} className="min-w-full aspect-video md:aspect-[21/9]">
                <img 
                  src={src} 
                  alt={`Produto ${idx + 1}`} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>
          
          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${activeIndex === idx ? 'w-8 bg-gold' : 'w-4 bg-white/20'}`}
              />
            ))}
          </div>
        </div>

        {/* Toggle Button */}
        <div className="flex flex-col items-center gap-8">
          <button 
            onClick={() => setShowList(!showList)}
            className="group flex items-center gap-4 bg-gold hover:bg-gold-light text-black px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all gold-glow"
          >
            <Package size={22} />
            {showList ? 'Ocultar Catálogo' : 'Ver Catálogo Completo'}
            {showList ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
          </button>

          {/* Collapsible Product List */}
          {showList && (
            <div className="w-full max-w-4xl animate-in fade-in slide-in-from-top-10 duration-700">
              <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-[40px] p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {allProducts.map((prod) => (
                    <div key={prod.id} className="flex items-center justify-between group/item border-b border-white/5 pb-4 last:border-0 md:[&:nth-last-child(-n+2)]:border-0">
                      <div className="flex flex-col">
                        <span className="text-white/80 font-bold text-sm md:text-base group-hover/item:text-gold transition-colors leading-tight">
                          {prod.name}
                        </span>
                        <span className="text-[10px] text-white/30 font-black uppercase tracking-widest mt-1">#{prod.id}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-gold font-black text-lg">R$ {prod.price},00</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-10 border-t border-white/5 text-center">
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-8">
                    * Preços sujeitos a alteração sem aviso prévio. Consulte estoque.
                  </p>
                  <a 
                    href="https://wa.me/5582993881114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-xl"
                  >
                    <MessageCircle size={20} fill="currentColor" />
                    Fazer Pedido Agora
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="mt-20 text-center opacity-40">
           <p className="text-[10px] text-white font-black uppercase tracking-[0.4em]">
            VISITE UMA DE NOSSAS UNIDADES PARA CONHECER A LINHA COMPLETA
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShop;
