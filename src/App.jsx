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
            Paso 2 de 3: Personaliza tu Orden
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
              <AlertTriangle size={30} /> ¡ESPERA! TU ORDEN AÚN NO ESTÁ COMPLETA
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              (Por favor, no cierres esta página o podrías interrumpir el proceso de tu compra).
            </p>
          </motion.div>

          <motion.h1 variants={fadeInUp} style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
            ¡Felicidades por dar el gran paso!
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Tu sistema de finanzas personales <strong>Cashflow Pro 3D</strong> ya está asegurado y tu acceso te llegará por correo en un par de minutos. Es el mejor sistema del mercado para multiplicar tu patrimonio personal.
          </motion.p>
          <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', marginBottom: '3rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '4px solid var(--accent-blue)' }}>
            <strong>ATENCIÓN:</strong> Si eres un empleado con un salario fijo mensual, haz scroll hasta abajo y salta esta página. No necesitas esto y no quiero hacerte perder tu tiempo.
          </motion.p>
        </motion.div>

        {/* 3. VSL PLACEHOLDER */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ marginBottom: '4rem' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--border-accent)', marginBottom: '2rem', background: '#000' }}>
            <iframe 
              src="https://www.youtube.com/embed/2M3_UeTsJ3g?autoplay=1&mute=0&controls=0&rel=0&modestbranding=1&showinfo=0&loop=1&playlist=2M3_UeTsJ3g" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-center">
            <a href="https://pay.hotmart.com/N106107776G" className="cta-button" style={{ fontSize: '1.15rem', padding: '1.4rem 2rem', boxShadow: '0 15px 40px rgba(59, 130, 246, 0.5)' }}>
              SÍ, AÑADIR EL DASHBOARD BUSINESS A MI ORDEN <ArrowRight size={24} />
            </a>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Solo $27.00 - Un único pago. Cero suscripciones mensuales.
            </p>
          </div>
        </motion.div>

        {/* 4. THE PAIN */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ marginBottom: '4rem' }}>
          <motion.h2 variants={fadeInUp} className="text-center" style={{ marginBottom: '2rem' }}>
            PERO... si eres <span className="text-gradient">freelancer, dueño de negocio o emprendedor</span>, tenemos que hablar del error más destructivo:
          </motion.h2>
          <motion.h3 variants={fadeInUp} className="text-center text-red" style={{ fontSize: '1.8rem', marginBottom: '2rem', background: 'rgba(239, 68, 68, 0.05)', padding: '1rem', borderRadius: '8px' }}>
            Estás mezclando tu dinero personal con el dinero de tu negocio.
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            Usas la cuenta del negocio para pagar la despensa, o sacas de tus ahorros personales para pagar software o anuncios. Es un ciclo agotador y la receta perfecta para el desastre contable. Cuando haces esto, es imposible saber si tu negocio realmente es rentable o si te está desangrando lentamente.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            Claro, podrías intentar duplicar las páginas de tu nuevo sistema personal, cruzar los dedos para no romper las fórmulas y armar un <strong>"Frankenstein" contable</strong>. Pero tu negocio requiere métricas que las finanzas personales simplemente no tienen.
          </motion.p>
        </motion.div>

        {/* 5. THE SOLUTION */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Presentamos el <br/><span className="text-gradient">Modo Corporativo</span></h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>El complemento definitivo diseñado específicamente para separar tu vida personal de la financiera, dándote estatus de CEO.</p>
          <div style={{ display: 'inline-block', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--border-accent)', padding: '0.8rem 1.5rem', borderRadius: '50px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
            <span style={{ marginRight: '8px' }}>🔄</span> <strong>100% Integrado:</strong> Se desbloquea al instante como una pestaña VIP secreta dentro de tu misma app Cashflow Pro 3D. Sin nuevas contraseñas ni instalaciones extras.
          </div>
        </motion.div>

        {/* 6. FEATURES GRID */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
          
          <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <BarChart size={32} className="text-blue" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>DRE (Estado de Resultados Simplificado)</h3>
              <p className="text-muted">Conoce exactamente cuánto entra (Ingreso Bruto), cuánto sale (OPEX) y cuál es el Beneficio Neto real de tu negocio en un solo vistazo, sin lenguaje contable complejo.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <Users size={32} className="text-violet" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>CRM y Directorio de Clientes</h3>
              <p className="text-muted">Mantén toda la información valiosa de tus clientes, el historial de facturación de cada uno (LTV) y el estado de sus pagos organizados en un solo lugar.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <DollarSign size={32} className="text-green" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Botón Mágico de "Pagarse el Sueldo"</h3>
              <p className="text-muted">Deja de adivinar. El sistema te dirá matemáticamente cuánto puedes transferir a tu cuenta personal como sueldo, sin riesgo de llevar tu negocio a la quiebra.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <Calculator size={32} className="text-red" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Cálculo Automático de Impuestos</h3>
              <p className="text-muted">No más ataques de pánico cuando el gobierno toca tu puerta. El dashboard proyecta tus obligaciones fiscales y retenciones de forma 100% automática. <strong>(Totalmente adaptable a la tasa y leyes impositivas de cualquier país).</strong></p>
            </div>
          </motion.div>

        </motion.div>

        {/* 7. CTA SECTION */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center" style={{ background: 'var(--bg-card)', padding: '3rem 2rem', borderRadius: '24px', border: '1px solid var(--border-accent)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Tu Oferta de Bienvenida</h2>
          <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            Otros softwares SaaS te cobrarían entre $30 y $50 DÓLARES AL MES por estas funciones. Hoy tienes la oportunidad de añadir este módulo empresarial por <strong>un único pago de $27.00</strong>.
          </p>
          <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem', color: '#10B981', textShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}>
            $27.00 <span style={{ fontSize: '1.3rem', color: 'var(--accent-red)', fontWeight: 600, textDecoration: 'line-through', textShadow: 'none', marginLeft: '12px' }}>$197.00</span>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '1rem' }}>Así se ve tu nueva base de control corporativa:</p>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-accent)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <img src="/mockup-upsell.jpg" alt="Mockup Dashboard Business" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>

          {/* HOTMART WIDGET CONTAINER */}
          <div id="hotmart-sales-funnel" className="custom-hotmart-wrapper" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}></div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            (Esta es una One-Time-Offer. No estará disponible más adelante a este precio).
          </p>
        </motion.div>

        {/* 8. DECLINE LINK */}
        <div className="text-center" style={{ marginTop: '2rem' }}>
          <a href="#" className="decline-link">
            No gracias. Pasaré por alto esta oferta única. Prefiero intentar adaptar mi rastreador personal para mi negocio, perder horas cuadrando números a fin de mes y seguir adivinando cuánto puedo pagarme de sueldo.
          </a>
        </div>

      </div>

      {/* 9. FOOTER LEGAL & DISCLAIMER */}
      <footer style={{ backgroundColor: '#020203', padding: '4rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
        <div className="container text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.6', opacity: 0.7 }}>
            <strong>DESCARGO DE RESPONSABILIDAD:</strong> Los resultados mostrados no son una garantía de resultados idénticos. Cashflow Business & Freelance Dashboard es una herramienta complementaria de software diseñada para ayudarte a organizar tus finanzas corporativas. El éxito de tu negocio depende enteramente de tu disciplina, modelo de negocio y decisiones. No ofrecemos esquemas de "hacerse rico rápidamente" ni asesoría fiscal o legal directa. Al adquirir este producto digital, aceptas que eres el único responsable de tus acciones, pago de impuestos y resultados.
          </p>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2rem', opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} Cashflow Pro 3D - Modo Corporativo. Todos los derechos reservados.<br/>
            Este sitio no es parte de la web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
