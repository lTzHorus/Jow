/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Bus, 
  ShieldCheck, 
  Clock, 
  Users, 
  Phone, 
  Instagram, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Frota', href: '#fleet' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 sm:p-2 rounded-lg ${isScrolled ? 'bg-amber-500 text-white' : 'bg-white text-slate-900'}`}>
            <Bus size={20} className="sm:w-6 sm:h-6" />
          </div>
          <span className={`text-lg sm:text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Expresso <span className="text-amber-500">MC Tur</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5511961534810" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-amber-500/20"
          >
            Orçamento Grátis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-slate-100">
                <span className="text-xl font-bold text-slate-900">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-slate-900">
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-semibold text-slate-700 py-4 px-4 rounded-2xl hover:bg-slate-50 hover:text-amber-500 transition-all flex justify-between items-center group"
                    >
                      {link.name}
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-slate-100">
                <a 
                  href="https://wa.me/5511961534810"
                  className="flex items-center justify-center gap-2 bg-amber-500 text-white w-full py-4 rounded-2xl font-bold text-lg shadow-xl shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <Phone size={20} />
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-[100svh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Bus" 
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6">
            <Star size={14} fill="currentColor" />
            Líder em Transporte Executivo
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Sua Viagem com <span className="text-amber-500">Conforto</span> e Segurança.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-lg">
            A Expresso MC Tur oferece a melhor frota de micro-ônibus para excursões, turismo e fretamento empresarial em São Paulo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5511961534810"
              className="group bg-amber-500 hover:bg-amber-600 active:scale-95 text-white px-8 py-4 rounded-2xl sm:rounded-full font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
            >
              Falar no WhatsApp
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#fleet"
              className="bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-2xl sm:rounded-full font-bold text-base sm:text-lg transition-all text-center"
            >
              Ver Nossa Frota
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats - Visible on all screens with different layouts */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
            {[
              { label: 'Frota', value: '5+', icon: Bus },
              { label: 'Exp.', value: '10+', icon: Star },
              { label: 'Suporte', value: '24h', icon: Clock },
              { label: 'Clientes', value: '1000+', icon: Users },
            ].map((stat, i) => (
              <div key={i} className={`flex items-center gap-3 sm:gap-4 ${i % 2 === 0 ? 'border-r border-white/10 lg:border-r' : 'lg:border-r'} last:border-0`}>
                <div className="p-2 sm:p-3 bg-amber-500/20 rounded-xl sm:rounded-2xl text-amber-500">
                  <stat.icon size={18} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold text-white leading-none mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Journey" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-amber-500 p-6 sm:p-8 rounded-3xl shadow-xl text-white max-w-[200px] sm:max-w-[240px]">
              <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">24h</div>
              <div className="text-xs sm:text-sm font-medium opacity-90">Disponibilidade total para atender sua empresa ou evento.</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="text-amber-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">Nossa História</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              De um Sonho a uma <span className="text-amber-500">Frota de Elite</span>.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
              Fundada por dois irmãos visionários, a Expresso MC Tur nasceu da paixão pelo transporte e do desejo de oferecer um serviço diferenciado em São Paulo.
            </p>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              O que começou com apenas um micro-ônibus evoluiu para uma frota moderna e diversificada. Hoje, atendemos grandes empresas como a RUMO e diversas prefeituras.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-10">
              {[
                'Motoristas altamente treinados',
                'Veículos revisados e higienizados',
                'Atendimento personalizado',
                'Seguro total para passageiros'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-4 transition-all text-sm sm:text-base"
            >
              Saiba mais sobre nós <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Fretamento Empresarial',
      desc: 'Soluções eficientes para o transporte de funcionários, garantindo pontualidade e produtividade.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Turismo e Excursões',
      desc: 'Viagens inesquecíveis com total conforto. Ideal para grupos religiosos, escolares e famílias.',
      icon: Bus,
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Eventos e Traslados',
      desc: 'Logística completa para casamentos, congressos e transfer de aeroportos com discrição.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-amber-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">O Que Fazemos</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">Serviços Especializados</h2>
          <p className="text-base sm:text-lg text-slate-600">
            Oferecemos soluções de transporte sob medida para atender às necessidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="h-48 sm:h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl text-amber-600 shadow-lg">
                  <service.icon size={24} className="sm:w-7 sm:h-7" />
                </div>
              </div>
              <div className="p-6 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <a 
                  href="https://wa.me/5511961534810"
                  className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-amber-600 transition-colors text-sm sm:text-base"
                >
                  Solicitar Cotação <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fleet = () => {
  return (
    <section id="fleet" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-amber-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">Nossa Frota</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Tecnologia e <span className="text-amber-500">Conforto</span> em Cada Detalhe.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Nossos micro-ônibus são equipados com o que há de mais moderno para garantir uma experiência superior.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="flex-1 sm:flex-none p-3 sm:p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center min-w-[100px] sm:min-w-[120px]">
              <div className="text-xl sm:text-2xl font-bold text-slate-900">Ar Cond.</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Digital</div>
            </div>
            <div className="flex-1 sm:flex-none p-3 sm:p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center min-w-[100px] sm:min-w-[120px]">
              <div className="text-xl sm:text-2xl font-bold text-slate-900">Wi-Fi</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Alta Vel.</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1562620644-65bb4d9948ff?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1518491755954-ad53338672c6?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800',
          ].map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
            >
              <img 
                src={img} 
                alt={`Fleet ${i}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20">
          <div>
            <div className="text-amber-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">Contato</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Vamos Planejar sua <span className="text-amber-500">Próxima Viagem?</span>
            </h2>
            <p className="text-base sm:text-xl text-slate-400 mb-8 sm:mb-12 leading-relaxed">
              Estamos prontos para atender você. Entre em contato para orçamentos rápidos ou dúvidas sobre nossos serviços.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-white/5 rounded-2xl text-amber-500 border border-white/10 shrink-0">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-sm text-slate-400 uppercase font-bold tracking-widest mb-1">Telefone / WhatsApp</div>
                  <div className="text-xl sm:text-2xl font-bold">(11) 96153-4810</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-white/5 rounded-2xl text-amber-500 border border-white/10 shrink-0">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-sm text-slate-400 uppercase font-bold tracking-widest mb-1">E-mail</div>
                  <div className="text-lg sm:text-2xl font-bold break-all">contato@expressomctur.com.br</div>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-white/5 rounded-2xl text-amber-500 border border-white/10 shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-sm text-slate-400 uppercase font-bold tracking-widest mb-1">Endereço</div>
                  <div className="text-base sm:text-lg font-medium text-slate-300">
                    Rua Ouro Verde, 47 - Jd. Paulistano<br />
                    São Paulo - SP, 02812-270
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-14 text-slate-900 shadow-2xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Peça seu Orçamento</h3>
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Nome Completo</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm sm:text-base" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-sm font-bold text-slate-500 uppercase tracking-wider">WhatsApp</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm sm:text-base" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Tipo de Serviço</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none text-sm sm:text-base">
                  <option>Fretamento Empresarial</option>
                  <option>Turismo / Excursão</option>
                  <option>Eventos / Traslados</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Mensagem</label>
                <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm sm:text-base" placeholder="Conte-nos sobre sua necessidade..."></textarea>
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-600 active:scale-95 text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-amber-500/20 transition-all transform md:hover:-translate-y-1">
                Enviar Solicitação
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-amber-500 text-white">
                <Bus size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Expresso <span className="text-amber-500">MC Tur</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Especialistas em transporte de passageiros com foco em segurança, conforto e pontualidade. Atendendo São Paulo e região com excelência desde a fundação.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/expresso.mc" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-amber-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Serviços</a></li>
              <li><a href="#fleet" className="hover:text-amber-500 transition-colors">Nossa Frota</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Acessibilidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Expresso MC Transportes e Turismo LTDA. Todos os direitos reservados.</p>
          <p>Desenvolvido com excelência.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button for Mobile */}
      <a 
        href="https://wa.me/5511961534810" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all md:hidden flex items-center gap-2"
      >
        <Phone size={24} fill="currentColor" />
        <span className="font-bold pr-2">Orçamento</span>
      </a>
    </div>
  );
}
