import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Layers, 
  Award, 
  Briefcase, 
  Globe 
} from 'lucide-react';

// Structured data directly referencing value propositions from the "IVAH MEDIA WEBSITE CONTENT.pdf"[cite: 1]
const reasons = [
  {
    id: 1,
    icon: Layers,
    title: "Omni-Channel Strategy",
    description: "We deliver exceptional value by providing deep strategy and executing multi-faceted marketing plans with an omni-channel approach across outdoor, digital, and live events.",
    tag: "Execution"
  },
  {
    id: 2,
    icon: Users,
    title: "Fractional Executive Expertise",
    description: "Gain access to senior-level brand and product marketing leadership harboring 8 to 15 years of premium industry experience on a flexible, fractional basis.",
    tag: "Leadership"
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Strategic Extension of Your Team",
    description: "Unlike traditional agencies that prioritize basic execution, we work seamlessly alongside your leadership team to drive sustainable market growth.",
    tag: "Partnership"
  },
  {
    id: 4,
    icon: Globe,
    title: "UAE Market Specialists",
    description: "Expertly navigate the unique UAE OOH market layout—efficiently executing everything from strict cultural regulations down to required government permit pipelines.",
    tag: "Local Insight"
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Commercial & ROI Focused",
    description: "Every campaign pathway, ad film track, or digital roadmap is heavily engineered with clear objectives, maximizing real-world commercial effectiveness.",
    tag: "Results"
  },
  {
    id: 6,
    icon: Award,
    title: "Cinematic Storytelling",
    description: "From conceptualization to absolute post-production, we engineer powerful visual stories that evoke deep emotional connections and premium brand recall.",
    tag: "Creative"
  }
];

export default function WhyChooseUs() {
  // Container cascading effect settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  // Card reveal settings 
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 16 }
    }
  };

  return (
    <section 
      style={{
        position: 'relative',
        backgroundColor: '#0d0f12',
        color: '#ffffff',
        padding: '6rem 1.5rem',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* Internal CSS / Styled Injected Blur Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.15); opacity: 0.15; }
        }
        .ambient-glow-1 {
          animation: pulseGlow 8s ease-in-out infinite alternate;
        }
        .ambient-glow-2 {
          animation: pulseGlow 12s ease-in-out infinite alternate-reverse;
        }
        .glass-grid-bg {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}} />

      {/* Premium Background Ambient Elements */}
      <div 
        className="ambient-glow-1"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} 
      />
      <div 
        className="ambient-glow-2"
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '15%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }} 
      />
      
      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(8px)',
              marginBottom: '1.5rem'
            }}
          >
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              background: 'linear-gradient(to right, #a5b4fc, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Why Choose Us
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              color: '#f3f4f6'
            }}
          >
            Elevating Brands Through <br />
            <span style={{ color: '#9ca3af' }}>Intentional & Strategic Marketing</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              color: '#9ca3af',
              maxWidth: '42rem',
              margin: '0 auto',
              fontSize: '1.125rem',
              lineHeight: 1.6
            }}
          >
            We combine high-impact creative direction with rigorous business strategy to solve complex market challenges and establish deep consumer connections.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {reasons.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  borderColor: 'rgba(139, 92, 246, 0.45)',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7)'
                }}
                style={{
                  position: 'relative',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  backdropFilter: 'blur(12px)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden'
                }}
              >
                <div>
                  {/* Card Header Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{
                      padding: '0.75rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      color: '#d1d5db'
                    }}>
                      <IconComponent size={22} strokeWidth={1.5} />
                    </div>
                    <span style={{
                      fontSize: '0.65rem',
                      fontFamily: 'monospace',
                      letterSpacing: '0.1em',
                      color: '#6b7280',
                      textTransform: 'uppercase'
                    }}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Text Details */}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#f9fafb' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', lineHeight: 1.6, color: '#9ca3af', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Dynamic Interactive Call-To-Action Footer Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-grid-bg"
          style={{
            marginTop: '5rem',
            position: 'relative',
            borderRadius: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            backgroundColor: '#111317',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem'
          }}
        >
          <div style={{ maxWidth: '36rem', zIndex: 2 }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#ffffff' }}>
              Are you looking to expand your brand presence?
            </h4>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
              Get in touch with our team today and let's have an intentional conversation about mapping out your next omni-channel master plan.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: '#f3f4f6' }}
            whileTap={{ scale: 0.98 }}
            style={{
              zIndex: 2,
              padding: '1rem 2rem',
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: 600,
              border: 'none',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              fontSize: '0.9rem',
              boxShadow: '0 10px 25px -5px rgba(255,255,255,0.1)',
              transition: 'background-color 0.2s ease'
            }}
          >
            Get Started With Us
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}