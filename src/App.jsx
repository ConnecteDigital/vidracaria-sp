import React from 'react';
import './App.css';
import { Phone, Shield, Clock, Users, Star, MapPin, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

// Importar imagens
import logoImg from './assets/logo.png';
import manutencaoVidro1 from './assets/manutencao_vidro_1.jpg';
import manutencaoVidro2 from './assets/manutencao_vidro_2.jpg';
import sacadaVidro1 from './assets/sacada_vidro_1.jpg';
import sacadaVidro2 from './assets/sacada_vidro_2.jpg';
import boxBanheiro1 from './assets/box_banheiro_1.jpg';
import boxBanheiro2 from './assets/box_banheiro_2.jpeg';
import janelaVidro1 from './assets/janela_vidro_1.jpg';
import janelaVidro2 from './assets/janela_vidro_2.jpg';
import espelhoSobMedida1 from './assets/espelho_sob_medida_1.jpg';
import espelhoSobMedida2 from './assets/espelho_sob_medida_2.jpg';
import vidroApartamento1 from './assets/vidro_apartamento_1.jpg';
import vidroApartamento2 from './assets/vidro_apartamento_2.jpeg';
import vidroSacada1 from './assets/vidro_sacada_1.jpg';
import vidroSacada2 from './assets/vidro_sacada_2.jpg';
import portaVidro1 from './assets/porta_vidro_1.jpg';
import portaVidro2 from './assets/porta_vidro_2.jpg';
import vidroTemperado1 from './assets/vidro_temperado_1.jpg';
import vidroTemperado2 from './assets/vidro_temperado_2.jpg';
import vidroJateado1 from './assets/vidro_jateado_1.jpg';
import backgroundImage from './assets/background.jpg'; // Nova imagem de fundo

// Ícone do WhatsApp (substituir por SVG ou componente)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="inline-block">
    <path d="M12.04 2C7.34 2 3.58 5.76 3.58 10.46c0 1.95.64 3.8 1.77 5.3L3 21.02l5.5-1.45c1.49.81 3.19 1.25 4.54 1.25 4.7 0 8.46-3.76 8.46-8.46S16.74 2 12.04 2zm.04 1.64c3.88 0 7.04 3.16 7.04 7.04 0 3.88-3.16 7.04-7.04 7.04-.98 0-1.95-.2-2.82-.57l-.66-.25-2.76.73.74-2.69-.27-.68c-.62-.93-.96-2.02-.96-3.17 0-3.88 3.16-7.04 7.04-7.04zm-2.88 4.68c-.2-.09-.4-.14-.6-.14-.2 0-.4.05-.6.14-.2.09-.4.2-.5.35-.1.15-.2.3-.2.45s.05.3.14.45c.09.15.2.3.35.45.15.15.3.2.45.2s.3-.05.45-.14c.15-.09.3-.2.45-.35.15-.15.2-.3.2-.45s-.05-.3-.14-.45zm2.88 4.68c-.2-.09-.4-.14-.6-.14-.2 0-.4.05-.6.14-.2.09-.4.2-.5.35-.1.15-.2.3-.2.45s.05.3.14.45c.09.15.2.3.35.45.15.15.3.2.45.2s.3-.05.45-.14c.15-.09.3-.2.45-.35.15-.15.2-.3.2-.45s-.05-.3-.14-.45zm2.88 4.68c-.2-.09-.4-.14-.6-.14-.2 0-.4.05-.6.14-.2.09-.4.2-.5.35-.1.15-.2.3-.2.45s.05.3.14.45c.09.15.2.3.35.45.15.15.3.2.45.2s.3-.05.45-.14c.15-.09.3-.2.45-.35.15-.15.2-.3.2-.45s-.05-.3-.14-.45z"/>
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const whatsappNumber = "5511943844000";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para serviços de vidraçaria.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  const phoneNumber = "(11) 94384-4000";

  const services = [
    {
      title: "Manutenção e Conserto de Parede de Vidro",
      description: "Serviços especializados em manutenção e reparo de paredes de vidro para residências e empresas.",
      image: manutencaoVidro1,
      features: ["Reparo sem quebra", "Garantia de 90 dias", "Equipamentos modernos"]
    },
    {
      title: "Sacadas de Vidro",
      description: "Instalação e manutenção de sacadas de vidro com máxima segurança e qualidade.",
      image: sacadaVidro1,
      features: ["Vidro temperado", "Instalação segura", "Design moderno"]
    },
    {
      title: "Box para Banheiro",
      description: "Box de vidro temperado sob medida para seu banheiro com acabamento perfeito.",
      image: boxBanheiro1,
      features: ["Sob medida", "Vidro temperado", "Instalação rápida"]
    },
    {
      title: "Janelas de Vidro",
      description: "Janelas de vidro com excelente isolamento térmico e acústico.",
      image: janelaVidro1,
      features: ["Isolamento térmico", "Fácil limpeza", "Durabilidade"]
    },
    {
      title: "Espelhos Sob Medida",
      description: "Espelhos personalizados para qualquer ambiente com corte preciso.",
      image: espelhoSobMedida1,
      features: ["Corte preciso", "Qualidade superior", "Instalação profissional"]
    },
    {
      title: "Vidros para Apartamento",
      description: "Soluções completas em vidros para apartamentos e condomínios.",
      image: vidroApartamento1,
      features: ["Projeto completo", "Entrega rápida", "Pós-venda garantido"]
    },
    {
      title: "Portas de Vidro",
      description: "Portas de vidro elegantes e funcionais para ambientes modernos.",
      image: portaVidro1,
      features: ["Design elegante", "Segurança máxima", "Acabamento premium"]
    },
    {
      title: "Vidros Temperados",
      description: "Vidros temperados de alta resistência para máxima segurança.",
      image: vidroTemperado1,
      features: ["Alta resistência", "Segurança total", "Certificação INMETRO"]
    },
    {
      title: "Vidros Jateados",
      description: "Vidros jateados para privacidade e decoração com acabamento sofisticado.",
      image: vidroJateado1,
      features: ["Privacidade total", "Acabamento sofisticado", "Fácil manutenção"]
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      location: "Vila Madalena",
      text: "Atendimento excelente! Chegaram em 30 minutos e resolveram o problema rapidamente."
    },
    {
      name: "João Silva",
      location: "Mooca",
      text: "Serviço muito eficiente. Preço justo e profissionais qualificados."
    },
    {
      name: "Ana Costa",
      location: "Santo André",
      text: "Recomendo! Equipe pontual e trabalho bem feito. Problema resolvido sem quebra."
    }
  ];

  const areas = [
    {
      zone: "Zona Norte",
      neighborhoods: ["Santana", "Tucuruvi", "Vila Guilherme", "Casa Verde", "Freguesia do Ó", "Brasilândia"]
    },
    {
      zone: "Zona Sul",
      neighborhoods: ["Vila Madalena", "Pinheiros", "Brooklin", "Vila Olímpia", "Moema", "Jabaquara"]
    },
    {
      zone: "Zona Leste",
      neighborhoods: ["Mooca", "Tatuapé", "Vila Formosa", "Penha", "Itaquera", "São Mateus"]
    },
    {
      zone: "Zona Oeste",
      neighborhoods: ["Lapa", "Perdizes", "Barra Funda", "Vila Leopoldina", "Jaguaré", "Butantã"]
    },
    {
      zone: "Centro",
      neighborhoods: ["Sé", "República", "Liberdade", "Bela Vista", "Consolação", "Santa Cecília"]
    },
    {
      zone: "ABC",
      neighborhoods: ["Santo André", "São Bernardo", "São Caetano", "Diadema", "Mauá", "Ribeirão Pires"]
    }
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoImg} alt="JR Manutenções" className="h-12 w-auto" />
              <span className="text-xl font-bold text-blue-900">JR Manutenções</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">Início</button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('areas')} className="text-gray-700 hover:text-blue-600 transition-colors">Áreas de Atendimento</button>
              <button onClick={() => scrollToSection('por-que-escolher')} className="text-gray-700 hover:text-blue-600 transition-colors">Por que escolher?</button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors">Contato</button>
            </nav>

            {/* Contact Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href={`tel:${phoneNumber}`} className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Phone size={16} />
                <span>{phoneNumber}</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-3 mt-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Início</button>
                <button onClick={() => scrollToSection('servicos')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Serviços</button>
                <button onClick={() => scrollToSection('areas')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Áreas de Atendimento</button>
                <button onClick={() => scrollToSection('por-que-escolher')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Por que escolher?</button>
                <button onClick={() => scrollToSection('depoimentos')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Contato</button>
                <div className="flex flex-col space-y-2 mt-4">
                  <a href={`tel:${phoneNumber}`} className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <Phone size={16} />
                    <span>{phoneNumber}</span>
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    <WhatsAppIcon />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative hero-section text-white pt-20 pb-16" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay para escurecer a imagem */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              Vidraçaria Especializada em São Paulo
            </h1>
            <p className="text-xl md:text-2xl mb-8 fade-in">
              Manutenção e conserto de vidros com qualidade e garantia. Atendimento em toda Grande São Paulo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href={`tel:${phoneNumber}`} className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold">
                <Phone size={20} />
                <span>Ligar Agora: {phoneNumber}</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em vidraçaria com tecnologia avançada e equipe especializada. Atendimento em toda Grande São Paulo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <span>Solicitar Orçamento</span>
                    <ArrowRight size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="por-que-escolher" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher a JR Manutenções?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em vidraçaria com anos de experiência no mercado paulistano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atendimento Rápido</h3>
              <p className="text-gray-600">
                Atendimento ágil e eficiente para resolver seus problemas com vidros o mais rápido possível.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equipe Especializada</h3>
              <p className="text-gray-600">
                Técnicos treinados e certificados para resolver qualquer problema com vidros e espelhos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garantia Total</h3>
              <p className="text-gray-600">
                Todos os nossos serviços possuem garantia para sua total tranquilidade e segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Atendemos Toda Grande São Paulo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cobertura completa em todas as regiões de São Paulo e cidades metropolitanas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <MapPin className="text-blue-600" size={24} />
                  <span>{area.zone}</span>
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {area.neighborhoods.map((neighborhood, idx) => (
                    <li key={idx}>{neighborhood}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-4">
              Não encontrou sua região? Entre em contato conosco!
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Consultar Atendimento
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center">
                <Star className="text-yellow-500 mx-auto mb-4" size={32} fill="currentColor" />
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precisa de atendimento? Fale conosco agora mesmo!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ligue Agora</h3>
              <p className="text-gray-600 mb-4">Atendimento rápido e personalizado</p>
              <a href={`tel:${phoneNumber}`} className="text-blue-600 hover:underline text-lg font-semibold">
                {phoneNumber}
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <WhatsAppIcon className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Resposta rápida e atendimento personalizado</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-lg font-semibold">
                Enviar Mensagem
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-4">
              Não espere o problema piorar! Entre em contato e receba atendimento imediato.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Solicitar Orçamento Agora
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-110 z-50 animate-pulse">
        <WhatsAppIcon size={32} />
      </a>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 JR Manutenções. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Desenvolvido com <span className="text-red-500">❤️</span> por Manus
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;


