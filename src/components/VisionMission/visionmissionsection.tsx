import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Target, 
  Sparkles, 
  TrendingUp, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<'vision' | 'mission' | null>(null);

  return (
    <section className="ivah-vm-container">
      {/* INTERNAL PREMIUM LIGHT THEME CSS BLOCK */}
      <style dangerouslySetInnerHTML={{__html: `
        .ivah-vm-container {
          position: relative;
          min-height: 90vh;
          background-color: #ffffff;
          color: #374151;
          padding: 6rem 2rem;
          font-family: system-ui, -apple-system, sans-serif;
          overflow: hidden;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }

        .ivah-vm-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        /* Two Column Layout Grid */
        .ivah-vm-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 1024px) {
          .ivah-vm-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 3.5rem;
          }
        }

        /* Card Base Styles - Configured for Premium White Surfaces */
        .ivah-vm-card {
          position: relative;
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 1.5rem;
          padding: 3.5rem 2.5rem;
          cursor: pointer;
          overflow: hidden;
          box-sizing: border-box;
          transition: border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                      box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.4s ease,
                      filter 0.4s ease;
        }

        /* Hover Interaction Enhancements */
        .ivah-vm-card.active-hover {
          border-color: rgba(249, 115, 22, 0.3);
          background-color: #ffffff;
          box-shadow: 0 25px 60px -15px rgba(249, 115, 22, 0.12);
        }

        .ivah-vm-card.inactive-hover {
          opacity: 0.5;
          filter: blur(0.5px);
        }

        /* Geometric Card Glow Backplates */
        .ivah-card-bg-glow {
          position: absolute;
          right: -10%;
          bottom: -10%;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%);
          pointer-events: none;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .ivah-vm-card.active-hover .ivah-card-bg-glow {
          transform: scale(1.6) translate(-10%, -10%);
        }

        /* Dynamic Functional Icon Badge Component */
        .ivah-vm-icon-box {
          width: 3.75rem;
          height: 3.75rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: #f3f4f6;
          color: #4b5563;
        }
        .ivah-vm-card.active-hover .ivah-vm-icon-box {
          background-color: #f97316;
          color: #ffffff;
          transform: scale(1.05) rotate(6deg);
        }

        /* Typography Styling structures */
        .ivah-vm-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #e65f00;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .ivah-vm-card h3 {
          font-size: 2.25rem;
          font-weight: 900;
          color: #111111;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.03em;
        }

        .ivah-vm-card p {
          color: #4b5563;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0 0 2.5rem 0;
          font-weight: 400;
        }

        /* Sublist Pillar Items Alignment */
        .ivah-vm-pillars {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          border-top: 1px solid #e5e7eb;
          padding-top: 2rem;
        }

        .ivah-vm-pillar-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          font-size: 0.925rem;
          color: #374151;
          font-weight: 500;
          transition: transform 0.3s ease;
        }
        .ivah-vm-card.active-hover .ivah-vm-pillar-item {
          transform: translateX(6px);
        }
        
        .ivah-vm-pillar-item svg {
          color: #f97316;
          opacity: 0.6;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .ivah-vm-card.active-hover .ivah-vm-pillar-item svg {
          opacity: 1;
          transform: scale(1.1);
        }

        /* Dynamic Ambient Decorative Background Lights */
        .ivah-global-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          filter: blur(50px);
          transition: opacity 0.6s ease;
          opacity: 0;
        }
        .glow-left {
          top: -10%;
          left: -10%;
          background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 75%);
        }
        .glow-right {
          bottom: -10%;
          right: -10%;
          background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 75%);
        }
        .ivah-vm-grid.has-hover-vision ~ .glow-left { opacity: 1; }
        .ivah-vm-grid.has-hover-mission ~ .glow-right { opacity: 1; }
      `}} />

      <div className="ivah-vm-wrapper">
        <div className={`ivah-vm-grid ${hoveredCard ? `has-hover-${hoveredCard}` : ''}`}>
          
          {/* THE STRATEGIC VISION CARD */}
          <motion.div 
            className={`ivah-vm-card ${hoveredCard === 'vision' ? 'active-hover' : hoveredCard === 'mission' ? 'inactive-hover' : ''}`}
            onMouseEnter={() => setHoveredCard('vision')}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            {/* Card Background Glow */}
            <div className="ivah-card-bg-glow" />
            
            {/* Icon Box */}
            <div className="ivah-vm-icon-box">
              <Eye size={24} />
            </div>
            
            {/* Content Core */}
            <span className="ivah-vm-tag">Strategic Direction</span>
            <h3>OUR VISION</h3>
            <p>
              To dominate the premium corporate expansion landscape by constructing unmistakable, highly targeted omni-channel frameworks that bridge the gap between abstract creative positioning and commercial market authority[cite: 1].
            </p>

            {/* Micro Pillars Sublist */}
            <div className="ivah-vm-pillars">
              <div className="ivah-vm-pillar-item">
                <Sparkles size={16} />
                <span>10-Step UAE Market Entry Blueprint Optimization[cite: 1]</span>
              </div>
              <div className="ivah-vm-pillar-item">
                <Compass size={16} />
                <span>Omni-channel presence with localized cultural relevance[cite: 1]</span>
              </div>
            </div>
          </motion.div>

          {/* THE OPERATIONAL MISSION CARD */}
          <motion.div 
            className={`ivah-vm-card ${hoveredCard === 'mission' ? 'active-hover' : hoveredCard === 'vision' ? 'inactive-hover' : ''}`}
            onMouseEnter={() => setHoveredCard('mission')}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            {/* Card Background Glow */}
            <div className="ivah-card-bg-glow" />
            
            {/* Icon Box */}
            <div className="ivah-vm-icon-box">
              <Target size={24} />
            </div>
            
            {/* Content Core */}
            <span className="ivah-vm-tag">Operational Commitment</span>
            <h3>OUR MISSION</h3>
            <p>
              To empower growth-minded brands through expert Outdoor Marketing, elite Design Strategy, and Fractional CMO solutions that integrate flawlessly into operations from week one to generate measurable ROI[cite: 1].
            </p>

            {/* Micro Pillars Sublist */}
            <div className="ivah-vm-pillars">
              <div className="ivah-vm-pillar-item">
                <TrendingUp size={16} />
                <span>Deploying 8–15+ year expert media consultants directly into your leadership[cite: 1]</span>
              </div>
              <div className="ivah-vm-pillar-item">
                <ArrowUpRight size={16} />
                <span>Executing high-fidelity Ad Film Productions and corporate workshops natively[cite: 1]</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Dynamic Screen Ambient Glow Systems */}
      <div className="ivah-global-glow glow-left" />
      <div className="ivah-global-glow glow-right" />
    </section>
  );
};