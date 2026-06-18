import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Film, 
  CheckCircle2,
  Clock,
  Globe,
  BarChart3,
  Users
} from 'lucide-react';

export const Company: React.FC = () => {
  const [activeYear, setActiveYear] = useState<number>(2018);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('vision');
  
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const labInsights = [
    {
      title: 'The 3-Second Rule',
      desc: 'Drivers on fast-speed roads have under 3 seconds to absorb a billboard message. Our layouts prioritize copy under 5 words and clear contrast.',
      icon: Clock
    },
    {
      title: 'Natural Bilingual Copy',
      desc: 'Instead of dry translations, we craft copywriter-driven Arabic & English copy that respects cultural sensitivities and regional idioms.',
      icon: Globe
    },
    {
      title: 'Multi-Channel Lift',
      desc: 'Coordinating highway billboard footprints with digital mobile search triggers elevates conversion rates by up to 140% compared to isolated ads.',
      icon: BarChart3
    },
    {
      title: 'Fractional CMO Speed',
      desc: 'Onboarding fractional chief marketing officers into your leadership circles bypasses traditional hiring and agency layers by up to 90%.',
      icon: Users
    }
  ];

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Video play error:', err));
      }
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMute = !isMuted;
      videoRef.current.muted = nextMute;
      setIsMuted(nextMute);
    }
  };

  const companyValues = {
    vision: {
      tagline: 'Leading the regional expansion blueprint.',
      title: 'Our Vision',
      desc: 'To establish Ivah Media as the undisputed commercial growth accelerator in the GCC. We aim to merge state-of-the-art Out-of-Home (OOH) media infrastructure with performance-driven digital frameworks, guiding international and local enterprises to market dominance.'
    },
    mission: {
      tagline: 'Eliminating the gap between strategy and execution.',
      title: 'Our Mission',
      desc: 'To empower organizations by delivering objective-driven marketing consulting, elite brand strategy, and high-impact media exposure. We dedicate ourselves to 100% cost transparency, speed, and eliminating bureaucratic delays from regional entry campaigns.'
    },
    values: {
      tagline: 'Fiercely independent strategic advocates.',
      title: 'Our Core Values',
      desc: 'We are client-funded and entirely autonomous. We answers to no external holdings, ensuring that our rate negotiations are pure and conflict-free. We anchor every creative, media, and fractional resource strictly in customer ROI metrics.'
    }
  };

  const historyMilestones = [
    {
      year: 2018,
      title: 'The Inception in Dubai',
      headline: 'Establishing the Independent Agency Collective',
      desc: 'Ivah Media was founded in Dubai with a mission to bridge the gap between creative execution and raw commercial strategy. We started as a core group of senior advisors servicing GCC hospitality and retail sectors.',
      stat: '5+ Corporate Clients'
    },
    {
      year: 2020,
      title: 'OOH Concession Access',
      headline: 'Securing High-Traffic Arteries',
      desc: 'We expanded operations into physical media buying, securing direct volume concessions across key highway assets including Sheikh Zayed Road (SZR) and Al Khail Road bridge banners, optimizing media rates for our partners.',
      stat: '40% Media Cost Reduction'
    },
    {
      year: 2022,
      title: 'Fractional CMO Model Launch',
      headline: 'Integrating Senior Growth Advisors',
      desc: 'To better serve expanding B2B SaaS and high-volume real estate developers, we launched our fractional executive model, placing veteran GCC CMOs and product strategists directly into client leadership structures.',
      stat: '8-15+ Years Avg. Expert Experience'
    },
    {
      year: 2024,
      title: 'The 10-Step OOH Blueprint',
      headline: 'Pioneering Regional Entry Frameworks',
      desc: 'We formalized our OOH Market Entry Blueprint, streamlining government permitting, bilingual compliance guidelines, and driver-focused creative audits under one comprehensive in-house pipeline.',
      stat: '0 Bureaucratic Delays'
    },
    {
      year: 2026,
      title: 'Global Redesign & Integration',
      headline: 'Omni-Channel Unified Platform',
      desc: 'Ivah Media launches its upgraded unified system, coordinating physical billboard exposures natively with hyper-velocity search, social funnels, Shopify automations, and ad film productions.',
      stat: '1M+ Successful Impressions'
    }
  ];

  const leadershipBoard = [
    {
      name: 'Tariq Al Mansoor',
      role: 'Co-Founder & Chief Brand Officer',
      exp: '15+ Years GCC Experience',
      image: '/ind_real_estate.png',
      focus: 'Brand Strategy, Corporate GTM & Government Relations',
      bio: 'Tariq has guided brand identity programs for regional developers and public entities in the UAE. He specializes in aligning narrative strategies with broader commercial expansion targets.'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Partner & Head of Outdoor Media',
      exp: '12+ Years OOH Experience',
      image: '/dubai_ooh_billboard.png',
      focus: 'OOH Logistics, Concessions & Permitting',
      bio: 'Sarah leads Ivah\'s physical billboard division. Her direct connections with public and private media owners enable Ivah to bypass brokers and secure premium highway placements.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director of Digital & Performance',
      exp: '10+ Years Digital Growth',
      image: '/digital_marketing.png',
      focus: 'Fractional Marketing, SEO & Conversion Design',
      bio: 'Rajesh integrates physical exposures with digital analytics. He builds responsive web apps, designs localized search campaigns, and optimizes CAC/LTV funnels.'
    },
    {
      name: 'Layla Al Marzooqi',
      role: 'Partner & Public Relations Director',
      exp: '14+ Years Permitting & PR',
      image: '/bridge_banner.png',
      focus: 'Municipality Compliance & Arabic Localization',
      bio: 'Layla directs municipality clearances and cultural audits. Her department ensures all campaign copy meets bilingual standards and navigates permit approvals rapidly.'
    },
    {
      name: 'Marcus Sterling',
      role: 'Head of Cinematic Production',
      exp: '9+ Years Film & Ad Creative',
      image: '/events_film_production_detail.png',
      focus: 'Ad Film Production, Commercials & VIP Events',
      bio: 'Marcus oversees scriptwriting, production, and editing for premium commercials. He engineers visual storytelling formats that drive emotional recall and digital search spikes.'
    }
  ];

  const activeMilestone = historyMilestones.find(m => m.year === activeYear) || historyMilestones[0];

  return (
    <div className="page-company fade-in">
      {/* COMPANY STYLES SHEET */}
      <style dangerouslySetInnerHTML={{ __html: `
        .page-company {
          background-color: #080808;
          color: #f3f4f6;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        .page-company h1, .page-company h2, .page-company h3, .page-company h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .page-company .section-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px;
        }

        /* Insights Lab White Theme Section */
        .page-company .insights-lab-section {
          background-color: #ffffff;
          color: #0b0d11;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          position: relative;
        }
        .page-company .insights-lab-section .section-header h2 {
          color: #0b0d11 !important;
        }
        .page-company .insights-lab-section .section-header p {
          color: #475569 !important;
        }
        .page-company .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .page-company .insight-lab-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .page-company .insight-lab-card:hover {
          background-color: #ffffff;
          border-color: #f97316;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          transform: translateY(-4px);
        }
        .page-company .insight-lab-card h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0b0d11 !important;
          margin: 0;
        }
        .page-company .insight-lab-card p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #475569 !important;
          margin: 0;
        }
        .page-company .insight-icon-box {
          align-self: flex-start;
          padding: 8px;
          background: rgba(249, 115, 22, 0.08);
          border-radius: 8px;
          color: #f97316;
        }

        /* ---------------------------------------------------- */
        /* HERO SECTION                                         */
        /* ---------------------------------------------------- */
        .page-company .company-hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #000000;
          border-bottom: 1px solid rgba(249, 115, 22, 0.1);
        }

        .page-company .hero-video-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0.45;
          filter: grayscale(40%);
        }

        .page-company .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(8, 8, 8, 0.8) 0%, #080808 100%);
          z-index: 2;
        }

        .page-company .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(249, 115, 22, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 3;
        }

        .page-company .hero-glow-blob {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%);
          filter: blur(100px);
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
          pointer-events: none;
        }

        .page-company .hero-content-wrapper {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 0 20px;
        }

        .page-company .company-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: #f97316;
          letter-spacing: 3px;
          text-transform: uppercase;
          background: rgba(249, 115, 22, 0.08);
          border: 1px solid rgba(249, 115, 22, 0.25);
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 24px;
        }

        .page-company .hero-title-main {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 24px;
          font-weight: 800;
        }
        .page-company .hero-title-main span {
          color: #f97316;
        }

        .page-company .hero-desc-main {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #94a3b8;
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .page-company .orange-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #f97316;
          color: #000000;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 30px -10px rgba(249, 115, 22, 0.5);
        }
        .page-company .orange-btn:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -10px rgba(255, 255, 255, 0.2);
        }

        /* ---------------------------------------------------- */
        /* CORPORATE CHARTER (TABS)                             */
        /* ---------------------------------------------------- */
        .page-company .charter-section {
          background-color: #0d0f12;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          position: relative;
        }

        .page-company .charter-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 991px) {
          .page-company .charter-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .page-company .charter-tabs-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .page-company .charter-tab-header {
          text-align: left;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 20px 24px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .page-company .charter-tab-header:hover {
          background: rgba(259, 115, 22, 0.02);
          border-color: rgba(249, 115, 22, 0.15);
        }
        .page-company .charter-tab-header.active {
          background: rgba(249, 115, 22, 0.04);
          border-color: #f97316;
          box-shadow: inset 0 0 15px rgba(249, 115, 22, 0.05);
        }

        .page-company .charter-tab-header h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #94a3b8;
          transition: color 0.3s;
        }
        .page-company .charter-tab-header.active h3 {
          color: #f97316;
        }

        .page-company .charter-tab-header span {
          color: #475569;
          transition: transform 0.3s, color 0.3s;
        }
        .page-company .charter-tab-header.active span {
          color: #f97316;
          transform: rotate(45deg);
        }

        .page-company .charter-display-box {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 48px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .page-company .charter-display-tagline {
          font-size: 1.15rem;
          color: #f97316;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .page-company .charter-display-box h2 {
          font-size: 2.2rem;
          margin-bottom: 20px;
        }
        .page-company .charter-display-box p {
          color: #94a3b8;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ---------------------------------------------------- */
        /* INTERACTIVE HISTORY TIMELINE                         */
        /* ---------------------------------------------------- */
        .page-company .history-section {
          background-color: #080808;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .page-company .timeline-flow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          margin-bottom: 60px;
          padding: 0 40px;
        }
        @media (max-width: 768px) {
          .page-company .timeline-flow {
            flex-direction: column;
            gap: 24px;
            padding: 0;
          }
        }

        .page-company .timeline-line-horizontal {
          position: absolute;
          left: 40px;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
          height: 2px;
          background: rgba(255, 255, 255, 0.05);
          z-index: 1;
        }
        @media (max-width: 768px) {
          .page-company .timeline-line-horizontal {
            display: none;
          }
        }

        .page-company .timeline-node {
          position: relative;
          z-index: 2;
          background-color: #080808;
          border: 2px solid rgba(255, 255, 255, 0.1);
          width: 72px;
          height: 72px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #94a3b8;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .page-company .timeline-node:hover {
          border-color: rgba(249, 115, 22, 0.5);
          color: #ffffff;
        }
        .page-company .timeline-node.active {
          border-color: #f97316;
          color: #f97316;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          transform: scale(1.1);
        }

        .page-company .timeline-content-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 40px;
          align-items: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: 991px) {
          .page-company .timeline-content-card {
            grid-template-columns: 1fr;
          }
        }

        .page-company .timeline-text-side h3 {
          font-size: 2rem;
          margin-bottom: 8px;
        }
        .page-company .timeline-text-side span {
          display: inline-block;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: #f97316;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .page-company .timeline-text-side p {
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }

        .page-company .timeline-stat-side {
          border-left: 2px solid rgba(249, 115, 22, 0.15);
          padding-left: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .page-company .timeline-stat-side {
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-left: 0;
            padding-top: 30px;
          }
        }

        .page-company .timeline-stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .page-company .timeline-stat-value {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        /* ---------------------------------------------------- */
        /* LEADERSHIP BOARD (GRAYSCALE HOVER CARDS)             */
        /* ---------------------------------------------------- */
        .page-company .leadership-section {
          background-color: #0d0f12;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .page-company .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }

        .page-company .leader-card {
          background: #080808;
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          min-height: 480px;
        }
        .page-company .leader-card:hover {
          border-color: #f97316;
          box-shadow: 0 25px 50px -12px rgba(249, 115, 22, 0.15);
          transform: translateY(-8px);
        }

        .page-company .leader-img-frame {
          height: 220px;
          position: relative;
          background-color: #161a22;
          overflow: hidden;
        }

        .page-company .leader-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          opacity: 0.35;
          transition: all 0.5s ease;
        }
        .page-company .leader-card:hover .leader-bg-img {
          filter: grayscale(0%);
          opacity: 0.75;
          transform: scale(1.05);
        }

        .page-company .leader-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(8, 8, 8, 0) 40%, #080808 100%);
          z-index: 2;
        }

        .page-company .leader-badge-role {
          position: absolute;
          top: 24px;
          left: 24px;
          background-color: #000000;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 30px;
          z-index: 10;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .page-company .leader-card:hover .leader-badge-role {
          border-color: #f97316;
          color: #f97316;
        }

        .page-company .leader-info-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: flex-start;
          position: relative;
          z-index: 5;
        }

        .page-company .leader-info-content h3 {
          font-size: 1.5rem;
          margin-bottom: 4px;
        }
        
        .page-company .leader-exp-label {
          font-size: 0.75rem;
          font-family: monospace;
          color: #94a3b8;
          margin-bottom: 16px;
        }
        .page-company .leader-card:hover .leader-exp-label {
          color: #f97316;
        }

        .page-company .leader-focus-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: #ffffff;
          border-left: 2px solid #f97316;
          padding-left: 10px;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .page-company .leader-bio {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 0;
        }

        /* ---------------------------------------------------- */
        /* CINEMATIC WORKFLOW VIDEO HUB                        */
        /* ---------------------------------------------------- */
        .page-company .workflow-section {
          background-color: #080808;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .page-company .cinematic-viewport {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          max-height: 600px;
          background-color: #000;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 25px 60px rgba(0,0,0,0.6);
        }
        .page-company .cinematic-viewport:hover {
          border-color: rgba(249, 115, 22, 0.3);
        }

        .page-company .video-player-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .page-company .video-player-wrap video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .page-company .cinematic-hud {
          position: absolute;
          inset: 0;
          z-index: 5;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.85) 100%);
          opacity: 0.9;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .page-company .cinematic-viewport:hover .cinematic-hud {
          opacity: 1;
        }

        .page-company .hud-top, .page-company .hud-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: auto;
        }

        .page-company .hud-tag-title {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: #f97316;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .page-company .sound-control-btn {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .page-company .sound-control-btn:hover {
          border-color: #f97316;
          color: #f97316;
          transform: scale(1.05);
        }

        .page-company .play-overlay-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          background: rgba(249, 115, 22, 0.12);
          border: 2px solid #f97316;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f97316;
          transition: all 0.3s;
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.2);
          opacity: 0;
          pointer-events: none;
        }
        .page-company .cinematic-viewport:hover .play-overlay-center {
          opacity: 1;
        }
        .page-company .cinematic-viewport.paused .play-overlay-center {
          opacity: 1;
          background: #f97316;
          color: #000000;
        }

        .page-company .hud-play-status {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(0, 0, 0, 0.5);
          padding: 8px 16px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
        }
        .page-company .hud-play-status:hover {
          border-color: #f97316;
          color: #f97316;
        }

        .page-company .hud-time {
          font-family: monospace;
          font-size: 0.8rem;
          color: #94a3b8;
        }

        /* ---------------------------------------------------- */
        /* COLLABORATION CTA                                    */
        /* ---------------------------------------------------- */
        .page-company .collab-section {
          background: linear-gradient(180deg, #0d0f12 0%, #000000 100%);
          text-align: center;
          border-top: 1px solid rgba(249, 115, 22, 0.05);
        }
        
        .page-company .collab-wrap {
          max-width: 800px;
          margin: 0 auto;
        }
        .page-company .collab-wrap h2 {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          margin-bottom: 20px;
          font-weight: 800;
        }
        .page-company .collab-wrap p {
          font-size: 1.15rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 36px;
        }
      ` }} />

      {/* 1. HERO SECTION */}
      <section className="company-hero">
        <video 
          className="hero-video-bg"
          src="/hero1.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        <div className="hero-overlay" />
        <div className="hero-grid-lines" />
        <div className="hero-glow-blob" />

        <div className="hero-content-wrapper">
          <span className="company-tag">
            <Sparkles size={13} /> Corporate Showcase
          </span>
          <h1 className="hero-title-main">
            Engineering Regional Growth <br />
            & <span>Outdoor Domination.</span>
          </h1>
          <p className="hero-desc-main">
            Ivah Media is an elite multi-disciplinary collective. We coordinate premium, high-traffic physical OOH campaigns and deploy fractional executive marketing leadership to drive authentic commercial returns.
          </p>
          <button 
            className="orange-btn"
            onClick={() => {
              document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Meet Our Leaders <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 2. CORPORATE CHARTER (TABS) */}
      <section className="charter-section">
        <div className="section-container">
          <div className="charter-grid">
            <div className="charter-tabs-container">
              <span className="company-tag" style={{ alignSelf: 'flex-start' }}>
                Charter & Directives
              </span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Strategic Alignment</h2>
              
              <div 
                className={`charter-tab-header ${activeTab === 'vision' ? 'active' : ''}`}
                onClick={() => setActiveTab('vision')}
              >
                <h3>Corporate Vision</h3>
                <span><ChevronRight size={16} /></span>
              </div>

              <div 
                className={`charter-tab-header ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveTab('mission')}
              >
                <h3>Corporate Mission</h3>
                <span><ChevronRight size={16} /></span>
              </div>

              <div 
                className={`charter-tab-header ${activeTab === 'values' ? 'active' : ''}`}
                onClick={() => setActiveTab('values')}
              >
                <h3>Core Values</h3>
                <span><ChevronRight size={16} /></span>
              </div>
            </div>

            <div className="charter-display-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="charter-display-box"
                >
                  <div className="charter-display-tagline">{companyValues[activeTab].tagline}</div>
                  <h2>{companyValues[activeTab].title}</h2>
                  <p>{companyValues[activeTab].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE HISTORY TIMELINE */}
      <section className="history-section" id="milestones">
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="company-tag">Track Record</span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '10px' }}>Our Chronological Evolution</h2>
          </div>

          <div className="timeline-flow">
            <div className="timeline-line-horizontal" />
            {historyMilestones.map((m) => (
              <div 
                key={m.year}
                className={`timeline-node ${activeYear === m.year ? 'active' : ''}`}
                onClick={() => setActiveYear(m.year)}
              >
                {m.year}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="timeline-content-card"
            >
              <div className="timeline-text-side">
                <span>{activeMilestone.title}</span>
                <h3>{activeMilestone.headline}</h3>
                <p>{activeMilestone.desc}</p>
              </div>

              <div className="timeline-stat-side">
                <div className="timeline-stat-label">Milestone Impact</div>
                <div className="timeline-stat-value">{activeMilestone.stat}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. TEAM LEADERS (GRAYSCALE HOVER) */}
      <section className="leadership-section" id="leadership">
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="company-tag">Executive Board</span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '10px' }}>Our Leadership Circle</h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '16px auto 0 auto', lineHeight: 1.5 }}>
              Veterans of GCC branding, outdoor advertising concessions, municipality logistics, and performance-driven digital structures.
            </p>
          </div>

          <div className="team-grid">
            {leadershipBoard.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-img-frame">
                  <span className="leader-badge-role">{leader.role}</span>
                  <img src={leader.image} alt={leader.name} className="leader-bg-img" />
                  <div className="leader-img-overlay" />
                </div>

                <div className="leader-info-content">
                  <h3>{leader.name}</h3>
                  <div className="leader-exp-label">{leader.exp}</div>
                  <div className="leader-focus-tag">Focus: {leader.focus}</div>
                  <p className="leader-bio">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White themed random section: Insights Lab */}
      <section className="insights-lab-section">
        <div className="section-container">
          <div className="section-header">
            <span className="hero-tag" style={{ color: '#f97316', background: 'rgba(249, 115, 22, 0.08)', borderColor: 'rgba(249, 115, 22, 0.15)' }}>
              Ivah Lab
            </span>
            <h2>Regional Playbook Insights</h2>
            <p>Practical performance benchmarks and OOH strategy insights built from years of GCC market exposure.</p>
          </div>

          <div className="insights-grid">
            {labInsights.map((insight, idx) => {
              const Icon = insight.icon;
              return (
                <div key={idx} className="insight-lab-card">
                  <div className="insight-icon-box">
                    <Icon size={20} />
                  </div>
                  <h4>{insight.title}</h4>
                  <p>{insight.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CINEMATIC WORKFLOW VIDEO HUB */}
      <section className="workflow-section">
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="company-tag">Operational Showcase</span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '10px' }}>Execution in Motion</h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '16px auto 0 auto', lineHeight: 1.5 }}>
              Tap below to play our corporate visualizer. Witness how our unified offline billboard networks and digital strategies operate in harmony.
            </p>
          </div>

          <div 
            className={`cinematic-viewport ${!isPlaying ? 'paused' : ''}`}
            onClick={handleTogglePlay}
          >
            <div className="video-player-wrap">
              <video 
                ref={videoRef}
                src="/hero.mp4"
                loop
                autoPlay
                muted={isMuted}
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <div className="play-overlay-center">
              {isPlaying ? <Pause size={30} fill="currentColor" /> : <Play size={30} fill="currentColor" />}
            </div>

            <div className="cinematic-hud">
              <div className="hud-top">
                <span className="hud-tag-title">IVAH MEDIA EXECUTION HUD</span>
                <div className="sound-control-btn" onClick={handleToggleMute}>
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </div>
              </div>

              <div className="hud-bottom">
                <div className="hud-play-status">
                  {isPlaying ? <CheckCircle2 size={12} style={{ color: '#f97316' }} /> : <Film size={12} />}
                  <span>{isPlaying ? 'PLAYING PREVIEW' : 'PAUSED'}</span>
                </div>
                <div className="hud-time">
                  IVAH_EXEC_V1.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COLLABORATION CTA */}
      <section className="collab-section">
        <div className="section-container" style={{ padding: '120px 24px' }}>
          <div className="collab-wrap">
            <h2>Let's construct your commercial roadmap.</h2>
            <p>Ready to deploy senior fractional growth leaders and high-impact physical assets for your business? Start a direct dialogue with our partners today.</p>
            <a href="/contact" className="orange-btn">
              Get Started With Us <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
