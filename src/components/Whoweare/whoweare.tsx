import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Target, 
  Eye, 
  ArrowUpRight,
  CheckCircle2,
  Play,
  Volume2
} from 'lucide-react';

const pillars = [
  {
    id: 'story',
    title: 'Brand Vision',
    icon: Eye,
    tagline: 'We find your story and help you tell it.',
    description: 'Every great marketing campaign begins with a structural narrative blueprint. Our vision centers around finding what makes a brand irreplaceable and engineering that into a massive omnichannel media presence.',
    highlight: 'Narrative Discovery'
  },
  {
    id: 'omni',
    title: 'Omni-Channel Approach',
    icon: Compass,
    tagline: 'Delivering strategic multi-touchpoint value.',
    description: 'We execute unified, highly targeted corporate blueprints natively across Outdoor Marketing, elite Brand Strategy, Event Management, and highly performance-driven Digital Marketing paths.',
    highlight: 'Integrated Ecosystems'
  },
  {
    id: 'execution',
    title: 'Execution Excellence',
    icon: Target,
    tagline: 'Eliminating the gap between strategy and growth.',
    description: 'Even the most beautiful brand strategy fails without premium execution. We anchor every creative, media, or consulting choice strictly in business metrics to drive authentic, scalable commercial ROI.',
    highlight: 'Measurable Value'
  }
];

const highlights = [
  { label: 'Outdoor OOH Experts', value: 'UAE Market Leader' },
  { label: 'Consultant Experience', value: '8 - 15+ Years' },
  { label: 'Strategy Framework', value: '10-Step Omni-Channel' },
];

export const WhoWeAreSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section className="ivah-container">
      {/* INTERNAL CSS BLOCK - MERGES VIDEO PORT AND GLASS CARD DESIGNS */}
      <style dangerouslySetInnerHTML={{__html: `
        .ivah-container {
          position: relative;
          min-height: 100vh;
          background-color: #0c0c0c;
          color: #e5e7eb;
          padding: 5rem 2rem;
          font-family: system-ui, -apple-system, sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }

        .ivah-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Header Styling */
        .ivah-header {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid #1f2937;
          padding-bottom: 2rem;
          margin-bottom: 4rem;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .ivah-header { flex-direction: row; align-items: flex-end; }
        }

        .ivah-title-area h2 {
          font-size: 2.5rem;
          font-weight: 900;
          color: #ffffff;
          margin: 0.5rem 0 0 0;
          letter-spacing: -0.05em;
        }

        .ivah-subtitle {
          color: #9ca3af;
          max-width: 450px;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Core Three Column Main Layout Grid */
        .ivah-three-col-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 4rem;
        }
        @media (min-width: 1024px) {
          .ivah-three-col-grid { grid-template-columns: 3.5fr 4.5fr 4fr; gap: 2rem; }
        }

        /* Left Column Stack - Tabs Navigation */
        .ivah-tabs-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ivah-tab-item {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          padding: 1.15rem;
          border-radius: 0.85rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #181818;
        }

        .ivah-tab-item.active {
          background: linear-gradient(135deg, #161616 0%, #121212 100%);
          border-color: rgba(249, 115, 22, 0.4);
          box-shadow: 0 10px 30px -10px rgba(249, 115, 22, 0.1);
        }
        .ivah-tab-item.inactive { background-color: #111111; }
        .ivah-tab-item.inactive:hover { border-color: #374151; }

        .ivah-tab-icon {
          padding: 0.65rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .ivah-tab-item.active .ivah-tab-icon { background-color: #f97316; color: #000000; }
        .ivah-tab-item.inactive .ivah-tab-icon { background-color: #1a1a1a; color: #6b7280; }

        .ivah-tab-text { flex: 1; }
        .ivah-tab-text h3 { margin: 0; font-size: 1.05rem; font-weight: 700; transition: color 0.3s; }
        .ivah-tab-item.active .ivah-tab-text h3 { color: #f97316; }
        .ivah-tab-item.inactive .ivah-tab-text h3 { color: #e5e7eb; }
        .ivah-tab-text p { margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #6b7280; }

        /* Middle Column - Creative Video Port Card */
        .ivah-video-viewport {
          position: relative;
          background: radial-gradient(circle at 80% 20%, #1e3a8a 0%, #020617 100%);
          border: 1px solid #1e2937;
          border-radius: 1.25rem;
          min-height: 400px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          box-sizing: border-box;
        }

        .ivah-video-marquee-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-1: 1;
          height: 100%;
          gap: 0.5rem;
          margin: auto 0;
        }

        .ivah-marquee-text {
          font-size: 2.25rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1.1;
        }
        .ivah-marquee-text.outline {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.25);
        }
        .ivah-marquee-text.solid {
          color: #ffffff;
        }

        .ivah-video-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.75rem;
          font-variant-numeric: tabular-nums;
          z-index: 5;
        }

        /* Right Column - Premium Content Display Box */
        .ivah-display-canvas {
          background-color: #121212;
          border: 1px solid #1f2937;
          border-radius: 1.25rem;
          padding: 2.5rem;
          min-height: 400px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;
        }

        .ivah-badge {
          display: inline-block;
          background-color: rgba(249, 115, 22, 0.1);
          color: #fdba74;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.85rem;
          border-radius: 0.375rem;
          border: 1px solid rgba(249, 115, 22, 0.2);
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }

        .ivah-canvas-tagline {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.3;
          margin: 0 0 1rem 0;
        }

        .ivah-canvas-desc {
          color: #9ca3af;
          font-size: 0.925rem;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          font-weight: 300;
        }

        /* What We Do / Non-Negotiables Section Injection */
        .ivah-non-negotiables-box {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.25rem;
          margin-top: auto;
        }
        
        .ivah-nn-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #6b7280;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }

        .ivah-nn-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .ivah-nn-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #e5e7eb;
          font-weight: 500;
        }
        .ivah-nn-item svg {
          color: #f97316;
          flex-shrink: 0;
        }

        /* Fixed Metrics Bar Layout */
        .ivah-metrics-bar {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          background-color: #111111;
          border: 1px solid #1f2937;
          border-radius: 1.25rem;
          padding: 2rem;
        }
        @media (min-width: 640px) {
          .ivah-metrics-bar { grid-template-columns: repeat(3, 1fr); }
        }

        .ivah-metric-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0.5rem 0;
        }
        @media (min-width: 640px) {
          .ivah-metric-card {
            border-right: 1px solid #1f2937;
            padding-right: 1.5rem;
          }
          .ivah-metric-card:last-child { border-right: none; padding-right: 0; }
        }

        .ivah-metric-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #6b7280;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .ivah-metric-value {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 0.35rem;
          transition: color 0.2s;
        }
        .ivah-metric-card:hover .ivah-metric-value { color: #f97316; }

        .ivah-ambient-glow {
          position: absolute;
          top: 20%;
          right: -10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }
      `}} />
      
      {/* Background Glow Overlay */}
      <div className="ivah-ambient-glow" />

      <div className="ivah-wrapper">
        
        {/* Section Header Area */}
        <div className="ivah-header">
          <div className="ivah-title-area">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f97316', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: '#f97316', borderRadius: '50%' }} />
              Corporate Identity 
            </div>
            <h2>WHO WE ARE</h2>
          </div>
          <p className="ivah-subtitle">
            Ivah Media is an elite multidisciplinary marketing, branding, and design management collective built to transform business objectives into unforgettable consumer connections[cite: 7, 14].
          </p>
        </div>

        {/* Core 3-Column Interactive Content Block */}
        <div className="ivah-three-col-grid">
          
          {/* Column 1: Tabs Navigation Stack */}
          <div className="ivah-tabs-stack">
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#4b5563', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'block' }}>
              Our Functional Core [cite: 15]
            </span>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activeTab === pillar.id;
              
              return (
                <motion.div
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`ivah-tab-item ${isSelected ? 'active' : 'inactive'}`}
                  whileHover={{ x: isSelected ? 0 : 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="ivah-tab-icon">
                    <Icon size={16} />
                  </div>
                  <div className="ivah-tab-text">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.tagline}</p>
                  </div>
                  <ArrowUpRight 
                    size={14} 
                    style={{ 
                      transition: 'transform 0.3s, color 0.3s',
                      transform: isSelected ? 'rotate(45deg)' : 'rotate(0deg)',
                      color: isSelected ? '#f97316' : '#4b5563'
                    }} 
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Column 2: Creative Video Port Component View */}
          <div className="ivah-video-viewport">
            {/* Ambient Video Interlayer Pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.01) 1px, transparent 1px)',
              backgroundSize: '12px 12px',
              pointerEvents: 'none'
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 5 }}>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 700, letterSpacing: '0.05em' }}>
                SHOW VIDEOS 
              </span>
              <Volume2 size={14} style={{ color: 'rgba(255,255,255,0.4)' }} />
            </div>

            {/* Typography Video Grid Overlay Block */}
            <div className="ivah-video-marquee-box">
              <span className="ivah-marquee-text outline">LAMPPOSTS</span>
              <span className="ivah-marquee-text outline">LAMPPOSTS</span>
              <span className="ivah-marquee-text solid">LAMPPOSTS</span>
              <span className="ivah-marquee-text outline">LAMPPOSTS</span>
              <span className="ivah-marquee-text outline">LAMPPOSTS</span>
            </div>

            {/* Video Controls Footer Line */}
            <div className="ivah-video-controls">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Play size={10} fill="currentColor" />
                <span>0:20 / 0:49</span>
              </div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <span style={{ width: '3px', height: '3px', backgroundColor: 'currentColor', borderRadius: '50%' }} />
                <span style={{ width: '3px', height: '3px', backgroundColor: 'currentColor', borderRadius: '50%' }} />
                <span style={{ width: '3px', height: '3px', backgroundColor: 'currentColor', borderRadius: '50%' }} />
              </div>
            </div>
          </div>

          {/* Column 3: Premium Dynamic Info & Business Core Values Card */}
          <div className="ivah-display-canvas">
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              pointerEvents: 'none'
            }} />
            
            <AnimatePresence mode="wait">
              {pillars.map((pillar) => {
                if (pillar.id !== activeTab) return null;

                return (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', flex: 1 }}
                  >
                    <div>
                      <div className="ivah-badge">
                        {pillar.highlight}
                      </div>
                      <h4 className="ivah-canvas-tagline">
                        {pillar.tagline}
                      </h4>
                      <p className="ivah-canvas-desc">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Business Non-Negotiables Injection Layer */}
                    <div className="ivah-non-negotiables-box">
                      <div className="ivah-nn-title">Our Business Non-Negotiables</div>
                      <div className="ivah-nn-list">
                        <div className="ivah-nn-item">
                          <CheckCircle2 size={14} />
                          <span>Speed that respects your time</span>
                        </div>
                        <div className="ivah-nn-item">
                          <CheckCircle2 size={14} />
                          <span>Prices that respect your budget</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Metrics Bar Component */}
        <div className="ivah-metrics-bar">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              className="ivah-metric-card"
            >
              <span className="ivah-metric-label">{item.label}</span>
              <span className="ivah-metric-value">{item.value}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};