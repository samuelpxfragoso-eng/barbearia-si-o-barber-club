
import React, { useRef, useState } from 'react';
import { Award, BookOpen, GraduationCap, Send, Volume2, VolumeX, Play, Pause } from 'lucide-react';

const Academy: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="academy" className="py-24 bg-[#0b0d11] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-[#c2a440] font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            SIÃO ACADEMY
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
            TORNE-SE UM BARBEIRO <br />
            <span className="text-[#c2a440] italic">COMPLETO</span>.
          </h3>
          <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            O curso mais completo de Alagoas. Evolua do zero à maestria com certificação reconhecida e suporte para inserção no mercado de luxo.
          </p>
        </div>

        {/* Video Player Section */}
        <div className="relative max-w-[340px] mx-auto mb-16 group">
          <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[9/16] bg-black">
            <video
              ref={videoRef}
              playsInline
              className="w-full h-full object-cover"
              src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/SnapInsta.to_AQMPXPvh17YFW61JJDTj11oUoJxkl36RAms6egC1XDIv0Zfg084CnNCwiJLY4RoWOBswmz4zS08263HuxudhfIve0geRTkVitHjG9m4.mp4"
            />
            
            {/* Play/Pause Overlay */}
            <div 
              className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
              onClick={togglePlay}
            >
              <button className="w-20 h-20 rounded-full bg-[#c2a440] text-black flex items-center justify-center gold-glow transform transition-transform active:scale-90">
                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
              </button>
            </div>

            {/* Mute/Unmute Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="absolute top-6 right-6 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 hover:text-[#c2a440] transition-all"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* "Com Áudio" Label as seen in screenshot */}
            <div className="absolute top-6 left-6 px-3 py-1.5 rounded-md bg-[#c2a440]/20 border border-[#c2a440]/30 backdrop-blur-md flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c2a440] animate-pulse" />
              <span className="text-[8px] font-black text-[#c2a440] uppercase tracking-widest">COM ÁUDIO</span>
            </div>
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm text-left flex gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#c2a440]/10 flex items-center justify-center shrink-0 border border-[#c2a440]/20">
              <Award className="text-[#c2a440]" size={24} />
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-sm mb-2">Certificação</h4>
              <p className="text-white/40 text-xs leading-relaxed">
                Diploma premium reconhecido em todo o território nacional para sua carreira de elite.
              </p>
            </div>
          </div>
          
          <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm text-left flex gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#c2a440]/10 flex items-center justify-center shrink-0 border border-[#c2a440]/20">
              <BookOpen className="text-[#c2a440]" size={24} />
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-sm mb-2">Metodologia</h4>
              <p className="text-white/40 text-xs leading-relaxed">
                Foco total em resultados reais: 80% de prática assistida em modelos reais.
              </p>
            </div>
          </div>
        </div>

        {/* Interest Form Section */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 md:p-16 relative overflow-hidden">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-[#c2a440]/10 border border-[#c2a440]/20 px-5 py-2 rounded-full mb-8">
              <GraduationCap size={20} className="text-[#c2a440]" />
              <div className="text-left">
                <span className="block text-[8px] font-black text-[#c2a440] uppercase tracking-widest leading-none mb-1">INSCRIÇÕES ABERTAS</span>
                <span className="block text-xs font-black text-white uppercase tracking-tight">Próxima Turma: Março 2025</span>
              </div>
            </div>
            <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4">
              Manifeste seu interesse agora
            </h4>
          </div>

          <form className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Nome completo" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c2a440]/50 text-sm font-medium transition-all"
              />
              <input 
                type="text" 
                placeholder="Seu WhatsApp" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c2a440]/50 text-sm font-medium transition-all"
              />
            </div>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#c2a440]/50 text-sm font-medium transition-all"
            />
            
            <button 
              type="submit" 
              className="w-full bg-[#d4b550] hover:bg-[#e6c762] text-black py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all gold-glow flex items-center justify-center gap-3"
            >
              Receber Cronograma Completo
              <Send size={16} />
            </button>
            
            <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] pt-4">
              VAGAS LIMITADAS PARA GARANTIR O APRENDIZADO PERSONALIZADO DE ALTA PERFORMANCE.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Academy;
