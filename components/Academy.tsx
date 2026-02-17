
import React, { useRef, useState } from 'react';
import { Award, BookOpen, GraduationCap, MessageCircle, Volume2, VolumeX, Play, Pause } from 'lucide-react';

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
          <h2 className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            ACADEMY
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
            TORNE-SE UM BARBEIRO <br />
            <span className="text-gold italic">COMPLETO</span>.
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
              <button className="w-20 h-20 rounded-full bg-gold text-black flex items-center justify-center gold-glow transform transition-transform active:scale-90">
                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
              </button>
            </div>

            {/* Mute/Unmute Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="absolute top-6 right-6 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 hover:text-gold transition-all"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* "Com Áudio" Label */}
            <div className="absolute top-6 left-6 px-3 py-1.5 rounded-md bg-gold/20 border border-gold/30 backdrop-blur-md flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[8px] font-black text-gold uppercase tracking-widest">COM ÁUDIO</span>
            </div>
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm text-left flex gap-6">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
              <Award className="text-gold" size={24} />
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-sm mb-2">Certificação</h4>
              <p className="text-white/40 text-xs leading-relaxed">
                Diploma premium reconhecido em todo o território nacional para sua carreira de sucesso.
              </p>
            </div>
          </div>
          
          <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 backdrop-blur-sm text-left flex gap-6">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
              <BookOpen className="text-gold" size={24} />
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-sm mb-2">Metodologia</h4>
              <p className="text-white/40 text-xs leading-relaxed">
                Foco total em resultados reais: 80% de prática assistida em modelos reais.
              </p>
            </div>
          </div>
        </div>

        {/* Interest Section (WhatsApp) */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 md:p-16 relative overflow-hidden">
          <div className="mb-10">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 px-5 py-2 rounded-full mb-8">
              <GraduationCap size={20} className="text-gold" />
              <div className="text-left">
                <span className="block text-[8px] font-black text-gold uppercase tracking-widest leading-none mb-1">INSCRIÇÕES ABERTAS</span>
                <span className="block text-xs font-black text-white uppercase tracking-tight">Vagas Limitadas</span>
              </div>
            </div>
            <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6">
              Deseja se tornar um profissional de sucesso?
            </h4>
            <p className="text-white/40 text-sm md:text-base mb-10 max-w-xl mx-auto">
              Fale conosco agora pelo WhatsApp para manifestar seu interesse, tirar dúvidas e garantir sua vaga na próxima turma.
            </p>
          </div>

          <a 
            href="https://wa.me/5582993881114"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-4 bg-gold hover:bg-gold-light text-black px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all gold-glow"
          >
            <MessageCircle size={20} fill="currentColor" />
            Manifestar Interesse via WhatsApp
          </a>
          
          <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] pt-10">
            METODOLOGIA DE ALTA PERFORMANCE PARA QUEM BUSCA O TOPO DO MERCADO.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Academy;