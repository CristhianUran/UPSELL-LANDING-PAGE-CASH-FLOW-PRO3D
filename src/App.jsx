import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, PlayCircle, BarChart, Users, DollarSign, Calculator, ArrowRight
} from 'lucide-react';
import './index.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const YOUTUBE_VIDEO_ID = "ZqkC0fF4n2k";

  useEffect(() => {
    if (window.checkoutElements) {
      window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
    } else {
      const timer = setTimeout(() => {
        if (window.checkoutElements) {
          window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <div style={{ paddingBottom: '4rem', position: 'relative' }}>
      
      {/* BACKGROUND IMAGE */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'url(/upsell-bg.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center top', 
          opacity: 0.4,
          filter: 'contrast(120%) blur(4px)'
        }}></div>
        {/* Fade gradients */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--bg-dark) 0%, transparent 20%, transparent 80%, var(--bg-dark) 100%)' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 0%, var(--bg-dark) 90%)', opacity: 0.9 }}></div>
        
        {/* Shooting Stars */}
        <div className="shooting-stars-container">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>

      {/* 1. PROGRESS BAR */}
      <div className="progress-container text-center">
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px', margin: '0 auto 0.5rem auto', alignItems: 'flex-end', padding: '0 10px' }}>
          <p style={{ fontWeight: 800, fontSize: '0.9rem', margin: 0, color: 'var(--text-muted)' }}>
            Passo 2 de 3: Personalize o seu Acesso
          </p>
          <p style={{ fontWeight: 900, fontSize: '1.2rem', margin: 0, color: 'var(--accent-green)', textShadow: '0 0 10px rgba(16, 185, 129, 0.4)' }}>
            66%
          </p>
        </div>
        <div className="progress-bar-wrapper">
          <div className="progress-bar-fill"></div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '3rem', maxWidth: '800px' }}>
        
        {/* 2. ALERT & HOOK */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
          <motion.div variants={fadeInUp} className="alert-box">
            <h2 className="text-red" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.8rem' }}>
              <AlertTriangle size={30} /> ESPERE! SEU PEDIDO AINDA NÃO FOI CONCLUÍDO
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              (Por favor, não feche esta janela para não interromper a liberação da sua assinatura).
            </p>
          </motion.div>

          <motion.h1 variants={fadeInUp} style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
            Parabéns por dar este grande passo!
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Seu sistema de finanças pessoais <strong>Cashflow Pro 3D</strong> já está garantido e os dados de acesso chegarão no seu e-mail em instantes. Você está com a ferramenta mais moderna para blindar seu patrimônio.
          </motion.p>
          <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', marginBottom: '3rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '4px solid var(--accent-blue)' }}>
            <strong>ATENÇÃO:</strong> Se você é um funcionário CLT com renda 100% fixa e sem nenhum trabalho autônomo, role até o final e pule esta página. Você não precisa disto e não quero tomar seu tempo.
          </motion.p>
        </motion.div>

        {/* 3. VSL PLACEHOLDER */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ marginBottom: '4rem' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--border-accent)', marginBottom: '2rem', background: '#000' }}>
            {isVideoLoaded ? (
              <iframe 
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=0&controls=0&rel=0&modestbranding=1&showinfo=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}`} 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            ) : (
              <div 
                onClick={() => setIsVideoLoaded(true)}
                style={{ 
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                  backgroundImage: `url(https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg), url(https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg)`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }}></div>
                <PlayCircle 
                  size={80} 
                  color="#3B82F6" 
                  style={{ position: 'relative', zIndex: 2, filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.6))', transition: 'transform 0.2s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} 
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                />
              </div>
            )}
          </div>

          <div className="text-center">
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('buy-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cta-button" 
              style={{ fontSize: '1.15rem', padding: '1.4rem 2rem', boxShadow: '0 15px 40px rgba(59, 130, 246, 0.5)', width: '100%', maxWidth: '540px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
            >
              SIM, ADICIONAR O MODO BUSINESS AO MEU ACESSO <ArrowRight size={24} />
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Apenas R$ 97,00 à vista (ou 12x) — Pagamento Único sem mensalidades.
            </p>
          </div>
        </motion.div>

        {/* 4. THE PAIN */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ marginBottom: '4rem' }}>
          <motion.h2 variants={fadeInUp} className="text-center" style={{ marginBottom: '2rem' }}>
            MAS... se você é <span className="text-gradient">freelancer, autônomo, MEI ou dono de negócio</span>, precisamos falar do erro mais perigoso:
          </motion.h2>
          <motion.h3 variants={fadeInUp} className="text-center text-red" style={{ fontSize: '1.8rem', marginBottom: '2rem', background: 'rgba(239, 68, 68, 0.05)', padding: '1rem', borderRadius: '8px' }}>
            Você está misturando o dinheiro da sua Pessoa Física com o da Pessoa Jurídica.
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            Usa a conta do negócio para pagar o mercado, ou tira das reservas pessoais para bancar ferramentas, estoque ou anúncios. É uma bola de neve desgastante e a receita perfeita para a quebra contábil. Quando você mistura tudo, é impossível saber se sua empresa realmente dá lucro ou se está drenando seu patrimônio.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            Você até poderia tentar duplicar as páginas do seu sistema pessoal e criar um <strong>"Frankenstein contábil"</strong>. Mas a sua empresa exige métricas comerciais de verdade que o controle doméstico não atende.
          </motion.p>
        </motion.div>

        {/* 5. THE SOLUTION */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Apresentamos o <br/><span className="text-gradient">Modo Corporativo & Business</span></h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>O complemento definitivo desenvolvido especificamente para separar seu bolso pessoal da sua empresa, colocando você na postura de CEO.</p>
          <div style={{ display: 'inline-block', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--border-accent)', padding: '0.8rem 1.5rem', borderRadius: '50px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
            <span style={{ marginRight: '8px' }}>🔄</span> <strong>100% Integrado:</strong> Desbloqueia instantaneamente como uma aba VIP dentro do seu próprio aplicativo Cashflow Pro 3D. Sem novas senhas nem programas extras.
          </div>
        </motion.div>

        {/* 6. FEATURES GRID */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
          
          <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <BarChart size={32} className="text-blue" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>DRE (Demonstrativo de Resultado Simplificado)</h3>
              <p className="text-muted">Saiba exatamente quanto entra (Receita Bruta), quanto sai (Custos e OPEX) e qual é o Lucro Líquido real do seu negócio em um único gráfico, sem vocabulário contábil enrolado.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <Users size={32} className="text-violet" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>CRM e Diretório de Clientes</h3>
              <p className="text-muted">Guarde o histórico completo de faturamento de cada cliente (LTV), prazos de pagamento e contratos ativos organizados em um único lugar.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <DollarSign size={32} className="text-green" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Cálculo Matemático de Pró-Labore</h3>
              <p className="text-muted">Pare de adivinhar seu salário. O sistema calcula com precisão matemática quanto você pode retirar para sua conta pessoal sem estrangular o fluxo de caixa da empresa.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <Calculator size={32} className="text-red" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Previsão de Impostos (MEI / Simples Nacional)</h3>
              <p className="text-muted">Zero surpresas no final do mês ou com o leão do Fisco. O painel projeta suas provisões tributárias e guias fiscais de forma 100% automática.</p>
            </div>
          </motion.div>

        </motion.div>

        {/* 7. CTA SECTION */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" style={{ background: 'var(--bg-card)', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid var(--border-accent)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sua Oferta Única de Boas-Vindas</h2>
          <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            ERPs e softwares corporativos tradicionais no Brasil cobram de R$ 120 a R$ 250 POR MÊS. Hoje você garante este módulo empresarial vital por <strong>um único pagamento de R$ 97,00</strong>.
          </p>
          <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem', color: '#10B981', textShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}>
            R$ 97,00 <span style={{ fontSize: '1.3rem', color: 'var(--accent-red)', fontWeight: 600, textDecoration: 'line-through', textShadow: 'none', marginLeft: '12px' }}>R$ 497,00</span>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '1rem' }}>Veja como fica o seu novo painel de controle executivo:</p>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-accent)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <img src="/mockup-upsell.jpg" alt="Mockup Dashboard Business" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" id="buy-section" style={{ marginBottom: '2rem' }}>
            {/* HOTMART SALES FUNNEL WIDGET */}
            <div id="hotmart-sales-funnel" className="custom-hotmart-wrapper" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}></div>

            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              (Esta é uma condição exclusiva de 1 clique. Não estará disponível posteriormente por este valor).
            </p>
          </motion.div>
        </motion.div>

        {/* 8. DECLINE LINK */}
        <div className="text-center" style={{ marginTop: '2rem' }}>
          <a href="https://landing-de-gracias-cash-flow-pro-3d-icw5frszq.vercel.app" className="decline-link">
            Não, obrigado. Prefiro abrir mão desta oportunidade única. Continuarei misturando meu dinheiro pessoal com o da empresa, perdendo horas fechando o mês no escuro e tentando adivinhar quanto posso retirar de pró-labore.
          </a>
        </div>

      </div>

      {/* 9. FOOTER LEGAL & DISCLAIMER */}
      <footer style={{ backgroundColor: '#020203', padding: '4rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
        <div className="container text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.6', opacity: 0.7 }}>
            <strong>AVISO LEGAL:</strong> Os resultados e projeções apresentados dependem da aplicação prática das rotinas de gestão de cada empresa. O Cashflow Business é uma ferramenta de apoio gerencial. O sucesso do seu negócio depende da sua disciplina, vendas e tomadas de decisão. Ao adquirir, você reconhece que é o único responsável pela gestão financeira e fiscal da sua operação.
          </p>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2rem', opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} Cashflow Pro 3D - Modo Corporativo. Todos os direitos reservados.<br/>
            Este site não é afiliado à Meta Platforms, Inc. nem ao Facebook.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
