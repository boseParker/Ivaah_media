import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Target, 
  Eye, 
  ArrowUpRight,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';

import videoStory from '../../assets/videos/15164860_1920_1080_30fps.mp4';
import videoOmni from '../../assets/videos/18450247-uhd_3840_2160_30fps.mp4';
import videoExecution from '../../assets/videos/3087312-uhd_3840_2160_30fps.mp4';

const pillars = [
  {
    id: 'story',
    title: 'Brand Vision',
    icon: Eye,
    tagline: 'We find your story and help you tell it.',
    description: 'Every great marketing campaign begins with a structural narrative blueprint. Our vision centers around finding what makes a brand irreplaceable and engineering that into a massive omnichannel media presence.',
    highlight: 'Narrative Discovery',
    video: videoStory
  },
  {
    id: 'omni',
    title: 'Omni-Channel Approach',
    icon: Compass,
    tagline: 'Delivering strategic multi-touchpoint value.',
    description: 'We execute unified, highly targeted corporate blueprints natively across Outdoor Marketing, elite Brand Strategy, Event Management, and highly performance-driven Digital Marketing paths.',
    highlight: 'Integrated Ecosystems',
    video: videoOmni
  },
  {
    id: 'execution',
    title: 'Execution Excellence',
    icon: Target,
    tagline: 'Eliminating the gap between strategy and growth.',
    description: 'Even the most beautiful brand strategy fails without premium execution. We anchor every creative, media, or consulting choice strictly in business metrics to drive authentic, scalable commercial ROI.',
    highlight: 'Measurable Value',
    video: videoExecution
  }
];

const highlights = [
  { label: 'Outdoor OOH Experts', value: 'UAE Market Leader' },
  { label: 'Consultant Experience', value: '8 - 15+ Years' },
  { label: 'Strategy Framework', value: '10-Step Omni-Channel' },
];


export const WhoWeAreSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [videoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  // Synchronize play state and load new video on tab switch
  useEffect(() => {
    setVideoReady(false);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.muted = isMuted;
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setVideoReady(true);
        })
        .catch((error) => {
          console.log("Video auto-play failed or was interrupted:", error);
          setIsPlaying(false);
        });
    }
  }, [activeTab]);

  // Synchronize mute state on the video element if isMuted changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Handle manual play/pause toggle
  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setVideoReady(true);
          })
          .catch((error) => {
            console.error("Video play failed:", error);
          });
      }
    }
  };

  // Handle volume toggle
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMute = !isMuted;
      videoRef.current.muted = nextMute;
      setIsMuted(nextMute);
    }
  };

  // Handle time update event from video element
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Handle loaded metadata event to capture duration
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Format time
  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };


  return (
    <section className="ivah-container">
      <style dangerouslySetInnerHTML={{__html: `
        .ivah-container {
          position: relative;
          min-height: 100vh;
          background-color: #080808;
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

        .ivah-header {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 2rem;
          margin-bottom: 4rem;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .ivah-header { flex-direction: row; align-items: flex-end; }
        }

        .ivah-title-area h2 {
          font-size: 2.8rem;
          font-weight: 900;
          color: #ffffff;
          margin: 0.5rem 0 0 0;
          letter-spacing: -0.05em;
        }

        .ivah-subtitle {
          color: #9ca3af;
          max-width: 500px;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .ivah-three-col-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 4rem;
        }
        @media (min-width: 1024px) {
          .ivah-three-col-grid { grid-template-columns: 3.5fr 4.5fr 4fr; gap: 2rem; }
        }

        .ivah-tabs-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ivah-tab-item {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          padding: 1.25rem;
          border-radius: 0.85rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.04);
          background-color: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(8px);
        }

        .ivah-tab-item.active {
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.12) 0%, rgba(249, 115, 22, 0.02) 100%);
          border-color: rgba(249, 115, 22, 0.5);
          box-shadow: 0 10px 30px -10px rgba(249, 115, 22, 0.2), inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .ivah-tab-item.inactive:hover { 
          border-color: rgba(255, 255, 255, 0.15); 
          background-color: rgba(255, 255, 255, 0.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .ivah-tab-icon {
          padding: 0.65rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .ivah-tab-item.active .ivah-tab-icon { background-color: #f97316; color: #000000; }
        .ivah-tab-item.inactive .ivah-tab-icon { background-color: rgba(255, 255, 255, 0.05); color: #9ca3af; }

        .ivah-tab-text { flex: 1; }
        .ivah-tab-text h3 { margin: 0; font-size: 1.1rem; font-weight: 700; transition: color 0.3s; }
        .ivah-tab-item.active .ivah-tab-text h3 { color: #f97316; }
        .ivah-tab-item.inactive .ivah-tab-text h3 { color: #e5e7eb; }
        .ivah-tab-text p { margin: 0.25rem 0 0 0; font-size: 0.8rem; color: #9ca3af; opacity: 0.7; }

        .ivah-video-viewport {
          position: relative;
          background: #0d0d0d;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          min-height: 400px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          box-sizing: border-box;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
        }

        /* ── Video placeholder shown until video loads ── */
        .ivah-video-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: radial-gradient(circle at 60% 40%, rgba(15, 31, 61, 0.8) 0%, #0c0d12 100%);
          backdrop-filter: blur(10px);
          transition: opacity 0.4s ease;
          z-index: 3;
          cursor: pointer;
        }
        .ivah-video-placeholder.hidden {
          opacity: 0;
          pointer-events: none;
        }
        .ivah-play-ring {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1.5px solid rgba(249,115,22,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f97316;
          background-color: rgba(249, 115, 22, 0.1);
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.2);
          transition: all 0.3s ease;
        }
        .ivah-video-placeholder:hover .ivah-play-ring {
          transform: scale(1.1);
          background-color: #f97316;
          color: #000000;
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.4);
        }
        .ivah-placeholder-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .ivah-video-wrap {
          position: absolute;
          inset: 0;
          z-index: 2;
        }
        .ivah-video-wrap video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ivah-video-hud {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          pointer-events: none;
        }

        .ivah-video-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
          font-weight: 500;
          font-variant-numeric: tabular-nums;
        }

        .ivah-display-canvas {
          background: rgba(18, 18, 18, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          padding: 2.5rem;
          min-height: 400px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
        }

        .ivah-badge {
          display: inline-block;
          background-color: rgba(249, 115, 22, 0.1);
          color: #fdba74;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.85rem;
          border-radius: 0.375rem;
          border: 1px solid rgba(249, 115, 22, 0.25);
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .ivah-canvas-tagline {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.35;
          margin: 0 0 1.25rem 0;
          background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ivah-canvas-desc {
          color: #a1a1aa;
          font-size: 0.95rem;
          line-height: 1.65;
          margin: 0 0 1.5rem 0;
          font-weight: 300;
        }

        .ivah-non-negotiables-box {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 1.5rem;
          margin-top: auto;
        }
        
        .ivah-nn-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #71717a;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 0.85rem;
        }

        .ivah-nn-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .ivah-nn-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: #e4e4e7;
          font-weight: 500;
        }
        .ivah-nn-item svg {
          color: #f97316;
          flex-shrink: 0;
        }

        .ivah-metrics-bar {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          background-color: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.06);
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
            border-right: 1px solid rgba(255, 255, 255, 0.06);
            padding-right: 1.5rem;
          }
          .ivah-metric-card:last-child { border-right: none; padding-right: 0; }
        }

        .ivah-metric-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #71717a;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .ivah-metric-value {
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
          margin-top: 0.35rem;
          transition: color 0.3s;
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
      
      <div className="ivah-ambient-glow" />

      <div className="ivah-wrapper">
        
        {/* Section Header */}
        <div className="ivah-header">
          <div className="ivah-title-area">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f97316', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: '#f97316', borderRadius: '50%' }} />
              Corporate Identity
            </div>
            <h2>WHO WE ARE</h2>
          </div>
          <p className="ivah-subtitle">
            Ivah Media is an elite multidisciplinary marketing, branding, and design management collective built to transform business objectives into unforgettable consumer connections.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="ivah-three-col-grid">

          {/* Column 1: Tab Navigation */}
          <div className="ivah-tabs-stack">
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#71717a', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'block' }}>
              Our Functional Core
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
                      color: isSelected ? '#f97316' : '#71717a'
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Column 2: Video Viewport */}
          <div className="ivah-video-viewport" onClick={handleTogglePlay} style={{ cursor: 'pointer' }}>
            {/* Grid dot overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.01) 1px, transparent 1px)',
              backgroundSize: '12px 12px',
              pointerEvents: 'none',
              zIndex: 1
            }} />

            {/* Placeholder — Fades out when video is ready */}
            <div 
              className={`ivah-video-placeholder${videoReady ? ' hidden' : ''}`}
            >
              <div className="ivah-play-ring">
                <Play size={18} fill="currentColor" />
              </div>
              <span className="ivah-placeholder-label">Show Reel</span>
            </div>

            {/* Actual video */}
            <div className="ivah-video-wrap">
              <AnimatePresence mode="wait">
                <motion.video
                  key={activeTab}
                  ref={videoRef}
                  src={activePillar.video}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onCanPlay={() => setVideoReady(true)}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '3px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              zIndex: 5,
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: `${(currentTime / (duration || 1)) * 100}%`,
                backgroundColor: '#f97316',
                transition: 'width 0.1s linear'
              }} />
            </div>

            {/* HUD overlay */}
            <div className="ivah-video-hud">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pointerEvents: 'auto' }}>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', fontWeight: 700, letterSpacing: '0.08em' }}>
                  {activePillar.title.toUpperCase()} REEL
                </span>
                <div 
                  onClick={handleToggleMute}
                  style={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    alignItems: 'center', 
                    padding: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </div>
              </div>

              <div className="ivah-video-controls" style={{ pointerEvents: 'auto' }}>
                <div 
                  onClick={(e) => { e.stopPropagation(); handleTogglePlay(); }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    cursor: 'pointer',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0,0,0,0.3)'
                  }}
                >
                  {isPlaying ? <Pause size={10} fill="currentColor" /> : <Play size={10} fill="currentColor" />}
                  <span>{formatTime(currentTime)} / {formatTime(duration || 20)}</span>
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <span style={{ width: '3px', height: '3px', backgroundColor: 'currentColor', borderRadius: '50%' }} />
                  <span style={{ width: '3px', height: '3px', backgroundColor: 'currentColor', borderRadius: '50%' }} />
                  <span style={{ width: '3px', height: '3px', backgroundColor: 'currentColor', borderRadius: '50%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Dynamic Info Card */}
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

        {/* Bottom Metrics Bar */}
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