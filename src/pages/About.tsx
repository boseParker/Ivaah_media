import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Compass, 
  Target, 
  Clock, 
  Coins, 
  BarChart3, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Building2, 
  Landmark, 
  ShoppingBag, 
  Car, 
  Plane, 
  UtensilsCrossed, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  ChevronRight,
  Network,
  HeartHandshake,
  Users
} from 'lucide-react';

// Count-up helper component that triggers on scroll
function Counter({ to, duration = 1500 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setVal(Math.round(eased * to));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{val.toLocaleString()}</span>;
}

export const About: React.FC = () => {
  const [activeValue, setActiveValue] = useState<'independent' | 'client' | 'solutions'>('independent');
  const [activeStep, setActiveStep] = useState<number>(0);

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

  const coreValues = [
    {
      id: 'independent' as const,
      title: 'Fiercely Independent',
      icon: Target,
      tagline: 'Autonomous strategic advocacy.',
      desc: 'We answer only to our clients, not to external networks or holding companies. This independence allows us to negotiate the best possible media rates across all UAE media owners without inventory conflicts.'
    },
    {
      id: 'client' as const,
      title: 'Client Focused',
      icon: Eye,
      tagline: 'Your commercial success is our only metric.',
      desc: 'We build deep partnerships. Our senior consultants embed within your operations, aligning every outdoor placement or digital lead funnel to your real-world sales cycles and cost-of-acquisition targets.'
    },
    {
      id: 'solutions' as const,
      title: 'Solutions Led',
      icon: Compass,
      tagline: 'Active execution over simple placement.',
      desc: 'We do not just hand off reports. We secure the permits, manage the Arabic translation compliance, supervise installation, verify visibility with photo-audits, and optimize campaigns in real-time.'
    }
  ];

  const dashboardStats = [
    {
      value: 60,
      unit: 'min',
      label: 'Quote Turnaround',
      desc: 'Rapid responsive pricing for high-intent campaigns.',
      icon: Clock
    },
    {
      value: 100,
      unit: '%',
      label: 'Cost Transparency',
      desc: 'Zero hidden margins or double-broker fees.',
      icon: Coins
    },
    {
      value: 97,
      unit: '%',
      label: 'On-Budget Delivery',
      desc: 'Pre-negotiated volume agreements protect your investment.',
      icon: BarChart3
    },
    {
      value: 0,
      unit: '',
      label: 'Bureaucratic Delays',
      desc: 'Fractional executive speed bypassing traditional layers.',
      icon: ShieldAlert
    }
  ];

  const roadmapSteps = [
    {
      title: 'Define Objectives',
      desc: 'Establish clear, measurable targets for your campaign.',
      photo: '/design_consulting.png',
      details: [
        'Align on brand awareness vs direct response targets',
        'Set key performance indicators (KPIs) like footfall lift or search interest',
        'Establish baseline metrics before launch'
      ],
      insight: 'In the UAE, high highway speeds mean drivers have ~3 seconds to view a billboard. Having a clear objective dictates your layout and copy density.'
    },
    {
      title: 'Budget Planning',
      desc: 'Allocate resources strategically across media categories.',
      photo: '/digital_marketing_detail.png',
      details: [
        'Compare rates between digital (DOOH) and traditional static assets',
        'Provision for municipality permits, prints, and installation overheads',
        'Structure flight schedules (2-week vs 4-week intervals)'
      ],
      insight: 'OOH permits in Dubai/Abu Dhabi require upfront fee allocations that must be factored into your baseline media buying model.'
    },
    {
      title: 'Identify Key Locations',
      desc: 'Select high-traffic arteries matching target demographics.',
      photo: '/billboard.png',
      details: [
        'Map key routes like Sheikh Zayed Road (SZR), Hessa St, or Al Khail Road',
        'Identify spots near business hubs like DIFC, Downtown, or DMCC',
        'Evaluate traffic flow direction and visual blockages'
      ],
      insight: 'Sheikh Zayed Road captures daily commuters, but secondary arteries like Hessa St capture high-intent residential shoppers.'
    },
    {
      title: 'Cultural Awareness',
      desc: 'Ensure messaging aligns with regional regulations.',
      photo: '/design_consulting_detail.png',
      details: [
        'Review copy compliance with UAE municipality guidelines',
        'Implement natural, high-readability Arabic and English translations',
        'Align imagery with regional values and cultural sensitivities'
      ],
      insight: 'All OOH assets in the UAE must contain both Arabic and English text, with the Arabic copy matching or exceeding the prominence of the English version.'
    },
    {
      title: 'Select the Right Format',
      desc: 'Choose the media format matching your objectives.',
      photo: '/transit.png',
      details: [
        'Traditional billboards for permanent brand authority',
        'Programmatic DOOH (PDOOH) for time-of-day or weather-triggered ads',
        'Transit wraps (Dubai Metro) for massive urban frequency'
      ],
      insight: 'Bridge banners offer excellent long-range visibility on major highways, whereas metro wrappers are highly effective for high-frequency urban dwelling.'
    },
    {
      title: 'Work with Local Experts',
      desc: 'Partner with consultants who negotiate premium rates.',
      photo: '/events_film_production_detail.png',
      details: [
        'Leverage existing relationships with private and public media owners',
        'Obtain unlisted inventory and cancellation slots',
        'Audit media owner invoices for transparency'
      ],
      insight: 'Media buyers with established volume histories can secure up to 40% discount off standard card rates from major concessionaires.'
    },
    {
      title: 'Secure Permits Early',
      desc: 'Navigate government approvals and municipal clearances.',
      photo: '/bridge_banner.png',
      details: [
        'Submit artwork to the Dubai Municipality or Abu Dhabi Department of Municipalities',
        'Obtain structural safety clearances for large format builds',
        'Manage payment of advertising taxes and permit fees'
      ],
      insight: 'Permit approvals generally take 5 to 7 business days, but content containing regional references or special activations may require up to 2 weeks.'
    },
    {
      title: 'Develop Localized Creative',
      desc: 'Draft high-contrast layouts readable in 3 seconds.',
      photo: '/events_and_films.png',
      details: [
        'Maintain high-contrast color choices (e.g. black text on yellow/white background)',
        'Keep copy under 5-7 words',
        'Ensure contact details (e.g. web URL or QR code) are highly visible'
      ],
      insight: 'Avoid using QR codes on high-speed highways like SZR; instead, use easy-to-remember domains or clear brand terms.'
    },
    {
      title: 'Launch & Monitor',
      desc: 'Deploy campaigns and verify billboard visibility.',
      photo: '/dubai_ooh_billboard.png',
      details: [
        'Verify installation is completed on the scheduled date',
        'Receive photographic installation reports from the field',
        'Conduct independent driving audits to verify visual clarity'
      ],
      insight: 'Ivah Media conducts direct site inspections within 24 hours of launch to verify lighting, alignment, and lack of visual obstructions.'
    },
    {
      title: 'ROI & Optimization',
      desc: 'Refine future campaigns based on commercial lift metrics.',
      photo: '/digital_marketing.png',
      details: [
        'Track correlation between billboard locations and web search lifts',
        'Measure digital attribution using geo-fenced mobile footfall analytics',
        'Review learnings to optimize next flight locations'
      ],
      insight: 'Combining OOH with local mobile search marketing creates a multi-touchpoint synergy that increases conversion rates by up to 2.4x.'
    }
  ];

  const comparisonRows = [
    {
      feature: 'Strategic Direction',
      traditional: 'Project-based execution with static media plans',
      ivah: 'Fractional executive alignment with core business KPIs'
    },
    {
      feature: 'Fee Model',
      traditional: 'Hidden markups, double-brokered invoices, commissions',
      ivah: '100% cost transparency, flat consult rates, net media billing'
    },
    {
      feature: 'Leadership Support',
      traditional: 'Account managed by junior staff, rare partner involvement',
      ivah: 'Direct access to senior partners with 8-15+ years GCC expertise'
    },
    {
      feature: 'Services Depth',
      traditional: 'Siloed departments (either offline OOH or digital)',
      ivah: 'Unified omni-channel (OOH, Digital, Events & Ad Films)'
    },
    {
      feature: 'Local Permitting',
      traditional: 'Outsourced government permits causing launch delays',
      ivah: 'Direct, rapid municipality permit handling in-house'
    }
  ];

  const industrySectors = [
    {
      name: 'Real Estate',
      icon: Building2,
      image: '/ind_real_estate.png',
      desc: 'Premium property launches & developer branding.',
      playbook: 'Large-format Sheikh Zayed Road billboards combined with hyper-local digital lead acquisition.'
    },
    {
      name: 'Government',
      icon: Landmark,
      image: '/bridge_banner.png',
      desc: 'Public campaigns & national day activations.',
      playbook: 'Transit wraps, bridge banners, and culturally compliant bilingual event campaigns.'
    },
    {
      name: 'Retail',
      icon: ShoppingBag,
      image: '/ind_retail.png',
      desc: 'Footfall campaigns for malls & stores.',
      playbook: 'Programmatic DOOH (PDOOH) triggers matched to shopping mall locations.'
    },
    {
      name: 'Automotive',
      icon: Car,
      image: '/ind_automotive.png',
      desc: 'New model rollouts & dealership campaigns.',
      playbook: 'High-impact airport advertising combined with cinematic ad film productions.'
    },
    {
      name: 'Travel & Tourism',
      icon: Plane,
      image: '/transit.png',
      desc: 'Destination branding & airlines campaigns.',
      playbook: 'Dwell-time airport DOOH formats and digital performance funnels.'
    },
    {
      name: 'Hospitality',
      icon: UtensilsCrossed,
      image: '/ind_hospitality.png',
      desc: 'Hotel openings & culinary promotions.',
      playbook: 'Local neighborhood DOOH and geo-fenced social campaigns.'
    },
    {
      name: 'Industrial / B2B',
      icon: Network,
      image: '/design_consulting.png',
      desc: 'Enterprise service & supply chain campaigns.',
      playbook: 'Fractional CMO advisory paired with targeted SEO content acquisition.'
    },
    {
      name: 'International Brands',
      icon: Globe,
      image: '/dubai_ooh_billboard.png',
      desc: 'Global brand market entry into the GCC.',
      playbook: '10-Step OOH Market Entry Roadmap including full municipality permits.'
    },
    {
      name: 'Non-profit',
      icon: HeartHandshake,
      image: '/events_and_films.png',
      desc: 'Fundraising drives & awareness initiatives.',
      playbook: 'High-visibility community bridge banners and viral social campaigns.'
    },
    {
      name: 'Ecommerce',
      icon: Sparkles,
      image: '/digital_marketing.png',
      desc: 'Direct-to-consumer sales scaling.',
      playbook: 'Social commerce integration, Shopify optimizations, and email performance flows.'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Tariq Al Mansoor',
      role: 'Co-Founder & Chief Brand Officer',
      exp: '15+ Years GCC Experience',
      focus: 'Brand Architecture & Government Relations',
      bio: 'Tariq has designed brand systems for major real estate and government clients in the UAE. He specializes in aligning brand strategy with corporate GTM structures.'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Partner & Head of Outdoor Media',
      exp: '12+ Years OOH Experience',
      focus: 'OOH Strategy & Municipality Permitting',
      bio: 'Sarah managed regional portfolios at top OOH agencies. She knows the UAE media inventory inside-out and negotiates optimal rates and high-traffic locations.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director of Digital & Performance',
      exp: '10+ Years Digital Growth',
      focus: 'SEO, Web Design & Fractional Marketing',
      bio: 'Rajesh specializes in building high-conversion ecommerce web apps and setting up fractional digital marketing funnels that lower customer acquisition costs.'
    }
  ];

  const activeValueDetail = coreValues.find(v => v.id === activeValue) || coreValues[0];
  const ValueIcon = activeValueDetail.icon;

  return (
    <div className="page-about fade-in">
      {/* LOCAL STYLES SHEET */}
      <style dangerouslySetInnerHTML={{ __html: `
        .page-about {
          background-color: #0b0d11;
          color: #cbd5e1;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        .page-about h1, .page-about h2, .page-about h3, .page-about h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .page-about .section-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        /* Insights Lab White Theme Section - Keeping it white for nice design hierarchy or changing to dark? We change to dark for unified dark theme */
        .page-about .insights-lab-section {
          background-color: #080a0d;
          color: #cbd5e1;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }
        .page-about .insights-lab-section .section-header h2 {
          color: #ffffff !important;
        }
        .page-about .insights-lab-section .section-header p {
          color: #94a3b8 !important;
        }
        .page-about .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .page-about .insight-lab-card {
          background-color: rgba(30, 41, 59, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .page-about .insight-lab-card:hover {
          background-color: rgba(30, 41, 59, 0.3);
          border-color: #f97316;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transform: translateY(-4px);
        }
        .page-about .insight-lab-card h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff !important;
          margin: 0;
        }
        .page-about .insight-lab-card p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #94a3b8 !important;
          margin: 0;
        }
        .page-about .insight-icon-box {
          align-self: flex-start;
          padding: 8px;
          background: rgba(249, 115, 22, 0.08);
          border-radius: 8px;
          color: #f97316;
        }

        /* ---------------------------------------------------- */
        /* HERO SECTION                                         */
        /* ---------------------------------------------------- */
        .page-about .about-hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          background-image: linear-gradient(to right, rgba(11, 13, 17, 0.75) 30%, rgba(11, 13, 17, 0.45) 100%), url('/dubai_ooh_billboard.png');
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .page-about .about-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .page-about .hero-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }
        .page-about .glow-red {
          top: 10%;
          right: -10%;
          background: rgba(192, 57, 43, 0.06);
        }
        .page-about .glow-green {
          bottom: -10%;
          left: -10%;
          background: rgba(39, 174, 96, 0.06);
        }

        .page-about .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 2;
          width: 100%;
        }
        @media (max-width: 991px) {
          .page-about .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        .page-about .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: #c0392b;
          letter-spacing: 2px;
          text-transform: uppercase;
          background-color: rgba(192, 57, 43, 0.1);
          padding: 6px 16px;
          border-radius: 30px;
          border: 1px solid rgba(192, 57, 43, 0.2);
          margin-bottom: 24px;
        }

        .page-about .hero-headline {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .page-about .hero-headline span {
          background: linear-gradient(135deg, #ffffff 40%, #888888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-about .hero-bio {
          font-size: 1.15rem;
          line-height: 1.6;
          color: #94a3b8;
          max-width: 650px;
          margin-bottom: 36px;
        }
        @media (max-width: 991px) {
          .page-about .hero-bio {
            margin-left: auto;
            margin-right: auto;
          }
        }

        .page-about .hero-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #ffffff;
          color: #0b0d11;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s, background-color 0.2s;
          border: none;
          cursor: pointer;
        }
        .page-about .hero-cta-btn:hover {
          background-color: #e2e8f0;
          transform: translateY(-2px);
        }

        /* Compass Card */
        .page-about .compass-card {
          background: rgba(30, 41, 59, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 32px;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          text-align: left;
        }

        .page-about .compass-header {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 2px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .page-about .compass-tabs {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .page-about .compass-tab {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .page-about .compass-tab:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .page-about .compass-tab.active {
          background: rgba(39, 174, 96, 0.08);
          border-color: rgba(39, 174, 96, 0.4);
        }
        .page-about .compass-tab span {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: #cbd5e1;
        }
        .page-about .compass-tab.active span {
          color: #27ae60;
        }

        .page-about .compass-display {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 24px;
          min-height: 180px;
        }

        .page-about .compass-icon-box {
          display: inline-flex;
          padding: 8px;
          background: rgba(39, 174, 96, 0.1);
          border-radius: 8px;
          color: #27ae60;
          margin-bottom: 12px;
        }

        .page-about .compass-display-tagline {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .page-about .compass-display-desc {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #94a3b8;
        }

        /* ---------------------------------------------------- */
        /* STATS DASHBOARD                                      */
        /* ---------------------------------------------------- */
        .page-about .stats-dashboard {
          background-color: #080a0d;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-about .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .page-about .stat-bento-card {
          background: rgba(30, 41, 59, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.2s, border-color 0.2s;
        }
        .page-about .stat-bento-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .page-about .stat-icon-wrapper {
          align-self: flex-start;
          padding: 10px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          color: #94a3b8;
        }
        .page-about .stat-bento-card:hover .stat-icon-wrapper {
          color: #27ae60;
          background: rgba(39, 174, 96, 0.05);
        }

        .page-about .stat-number-wrapper h3 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1;
          color: #ffffff;
        }
        .page-about .stat-number-wrapper .unit {
          font-size: 1.8rem;
          font-weight: 400;
          color: #94a3b8;
          vertical-align: super;
          margin-left: 2px;
        }

        .page-about .stat-bento-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
        }
        .page-about .stat-bento-card p {
          font-size: 0.85rem;
          line-height: 1.5;
          color: #94a3b8;
          margin: 0;
        }

        /* ---------------------------------------------------- */
        /* OOH ROADMAP METHODOLOGY                              */
        /* ---------------------------------------------------- */
        .page-about .roadmap-section {
          background-color: #0b0d11;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-about .section-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 60px auto;
        }
        .page-about .section-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 16px;
        }
        .page-about .section-header p {
          color: #94a3b8;
          font-size: 1.1rem;
        }

        .page-about .roadmap-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .page-about .roadmap-container {
            grid-template-columns: 1fr;
          }
        }

        .page-about .timeline-track {
          position: relative;
          padding-left: 36px;
        }
        .page-about .timeline-line {
          position: absolute;
          left: 14px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: rgba(255, 255, 255, 0.06);
        }
        .page-about .timeline-progress-line {
          position: absolute;
          left: 14px;
          top: 8px;
          width: 2px;
          background: linear-gradient(to bottom, #27ae60, #c0392b);
          transition: height 0.4s ease;
        }

        .page-about .timeline-step-btn {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 20px;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          text-align: left;
          width: 100%;
          margin-bottom: 16px;
          transition: all 0.2s ease;
        }
        .page-about .timeline-step-btn:last-child {
          margin-bottom: 0;
        }
        .page-about .timeline-step-btn:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        .page-about .timeline-step-btn.active {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.06);
          box-shadow: 0 10px 25px -10px rgba(0,0,0,0.5);
        }

        .page-about .step-dot {
          position: absolute;
          left: -32px;
          top: 20px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0b0d11;
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 2;
        }
        .page-about .timeline-step-btn.active .step-dot {
          border-color: #27ae60;
          box-shadow: 0 0 10px rgba(39, 174, 96, 0.4);
        }
        .page-about .step-dot::after {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: transparent;
          transition: all 0.3s ease;
        }
        .page-about .timeline-step-btn.active .step-dot::after {
          background: #27ae60;
        }

        .page-about .step-number {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #c0392b;
          letter-spacing: 1px;
        }
        .page-about .timeline-step-btn.active .step-number {
          color: #27ae60;
        }

        .page-about .step-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 4px;
        }
        .page-about .step-summary {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.4;
        }

        /* Blueprint Card */
        .page-about .blueprint-card {
          background: rgba(30, 41, 59, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 40px;
          backdrop-filter: blur(16px);
          position: sticky;
          top: 120px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .page-about .blueprint-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 20px;
          margin-bottom: 24px;
        }
        .page-about .blueprint-header span {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #27ae60;
          font-size: 0.85rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .page-about .blueprint-header h3 {
          font-size: 1.6rem;
          margin-top: 4px;
          color: #ffffff;
        }

        .page-about .blueprint-list-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 16px;
        }

        .page-about .blueprint-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }
        .page-about .blueprint-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.95rem;
          color: #e2e8f0;
          line-height: 1.4;
        }
        .page-about .blueprint-item svg {
          color: #27ae60;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .page-about .blueprint-insight {
          background: rgba(192, 57, 43, 0.06);
          border: 1px solid rgba(192, 57, 43, 0.15);
          border-radius: 10px;
          padding: 20px;
        }
        .page-about .blueprint-insight-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          color: #c0392b;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }
        .page-about .blueprint-insight-text {
          font-size: 0.85rem;
          line-height: 1.5;
          color: #cbd5e1;
        }

        /* ---------------------------------------------------- */
        /* DIFFERENTIATORS                                      */
        /* ---------------------------------------------------- */
        .page-about .diff-section {
          background-color: #080a0d;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-about .comparison-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 40px;
        }
        @media (max-width: 768px) {
          .page-about .comparison-table {
            display: block;
          }
        }

        .page-about .comparison-header-row th {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          padding: 20px;
          text-align: left;
          border-bottom: 2px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }
        @media (max-width: 768px) {
          .page-about .comparison-header-row {
            display: none;
          }
        }
        .page-about .comparison-header-row th:first-child {
          width: 25%;
        }
        .page-about .comparison-header-row th:nth-child(2) {
          width: 37.5%;
          color: #94a3b8;
        }
        .page-about .comparison-header-row th:nth-child(3) {
          width: 37.5%;
          color: #27ae60;
        }

        .page-about .comparison-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          transition: background-color 0.2s;
        }
        .page-about .comparison-row:hover {
          background-color: rgba(255, 255, 255, 0.01);
        }
        @media (max-width: 768px) {
          .page-about .comparison-row {
            display: flex;
            flex-direction: column;
            padding: 20px 0;
            gap: 12px;
          }
        }

        .page-about .comparison-cell {
          padding: 24px 20px;
          font-size: 0.95rem;
          line-height: 1.5;
          vertical-align: top;
          color: #cbd5e1;
        }
        @media (max-width: 768px) {
          .page-about .comparison-cell {
            padding: 0;
          }
        }

        .page-about .comparison-cell.feature-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          color: #ffffff;
        }
        .page-about .comparison-cell.traditional-val {
          color: #94a3b8;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .page-about .comparison-cell.traditional-val svg {
          color: #c0392b;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .page-about .comparison-cell.ivah-val {
          color: #e2e8f0;
          font-weight: 500;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .page-about .comparison-cell.ivah-val svg {
          color: #27ae60;
          flex-shrink: 0;
          margin-top: 3px;
        }

        @media (max-width: 768px) {
          .page-about .comparison-cell.traditional-val::before {
            content: 'Traditional Agency: ';
            font-weight: 600;
            color: #94a3b8;
          }
          .page-about .comparison-cell.ivah-val::before {
            content: 'Ivah Media: ';
            font-weight: 600;
            color: #27ae60;
          }
        }

        /* ---------------------------------------------------- */
        /* INDUSTRIES SERVED                                    */
        /* ---------------------------------------------------- */
        .page-about .industries-section {
          background-color: #0b0d11;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-about .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .page-about .industry-card {
          background: rgba(30, 41, 59, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 28px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .page-about .industry-card:hover {
          transform: translateY(-6px);
          border-color: rgba(39, 174, 96, 0.3);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .page-about .industry-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          z-index: 2;
        }

        .page-about .industry-icon-wrapper {
          padding: 10px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          color: #94a3b8;
          transition: all 0.3s;
        }
        .page-about .industry-card:hover .industry-icon-wrapper {
          background: rgba(39, 174, 96, 0.1);
          color: #27ae60;
        }

        .page-about .industry-card h4 {
          font-size: 1.15rem;
          font-weight: 600;
          margin: 0;
          color: #ffffff;
        }

        .page-about .industry-card-body {
          font-size: 0.85rem;
          line-height: 1.5;
          color: #94a3b8;
          z-index: 2;
          transition: opacity 0.3s ease;
        }
        .page-about .industry-card:hover .industry-card-body {
          opacity: 0;
        }

        .page-about .industry-playbook-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(8, 10, 13, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 3;
          border-radius: 16px;
        }
        .page-about .industry-card:hover .industry-playbook-layer {
          opacity: 1;
        }

        .page-about .playbook-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          color: #27ae60;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .page-about .playbook-text {
          font-size: 0.85rem;
          line-height: 1.4;
          color: #f1f5f9;
        }

        /* ---------------------------------------------------- */
        /* LEADERSHIP CIRCLE                                    */
        /* ---------------------------------------------------- */
        .page-about .leadership-section {
          background-color: #080a0d;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-about .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .page-about .team-card {
          background: rgba(30, 41, 59, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 36px 28px;
          position: relative;
          transition: all 0.3s ease;
        }
        .page-about .team-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .page-about .team-card-header {
          margin-bottom: 20px;
        }
        .page-about .team-card h3 {
          font-size: 1.4rem;
          margin-bottom: 4px;
          color: #ffffff;
        }
        .page-about .team-role {
          font-size: 0.85rem;
          font-weight: 600;
          color: #27ae60;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .page-about .team-exp {
          font-size: 0.75rem;
          font-family: monospace;
          color: #94a3b8;
        }

        .page-about .team-focus {
          display: inline-block;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: #c0392b;
          background: rgba(192, 57, 43, 0.08);
          border: 1px solid rgba(192, 57, 43, 0.15);
          padding: 4px 12px;
          border-radius: 4px;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        .page-about .team-bio {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #cbd5e1;
        }

        /* ---------------------------------------------------- */
        /* CTA BLOCK                                            */
        /* ---------------------------------------------------- */
        .page-about .cta-section {
          background: linear-gradient(135deg, #0b0d11 0%, #161a22 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .page-about .cta-section .hero-glow {
          background: rgba(39, 174, 96, 0.04);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .page-about .cta-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }
        .page-about .cta-content h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 16px;
          color: #ffffff;
        }
        .page-about .cta-content p {
          font-size: 1.15rem;
          color: #94a3b8;
          margin-bottom: 32px;
          line-height: 1.6;
        }
` }} />

      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="hero-glow glow-red" />
        <div className="hero-glow glow-green" />
        
        <div className="section-container">
          <div className="hero-grid">
            <div className="hero-left">
              <span className="hero-tag">
                <Sparkles size={14} /> Creative & Strategic Consultancy
              </span>
              <h1 className="hero-headline">
                We construct plans that <br />
                <span>bring brands to life.</span>
              </h1>
              <p className="hero-bio">
                Ivah Media is an elite full-service marketing consultancy and outdoor advertising specialist. Based in the UAE, we enable growth-minded brands to launch, capture attention, and scale through disciplined strategic planning and premium creative storytelling.
              </p>
              <button 
                className="hero-cta-btn" 
                onClick={() => {
                  document.getElementById('how-we-do-it')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Our Methodology <ArrowRight size={16} />
              </button>
            </div>

            <div className="hero-right">
              <div className="compass-card">
                <div className="compass-header">Core Operational Tenets</div>
                <div className="compass-tabs">
                  {coreValues.map((v) => (
                    <div 
                      key={v.id}
                      className={`compass-tab ${activeValue === v.id ? 'active' : ''}`}
                      onMouseEnter={() => setActiveValue(v.id)}
                      onClick={() => setActiveValue(v.id)}
                    >
                      <span>{v.title}</span>
                      <ChevronRight size={16} style={{ 
                        transform: activeValue === v.id ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                        color: activeValue === v.id ? '#27ae60' : '#475569'
                      }} />
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeValue}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="compass-display"
                  >
                    <div className="compass-icon-box">
                      <ValueIcon size={20} />
                    </div>
                    <div className="compass-display-tagline">{activeValueDetail.tagline}</div>
                    <p className="compass-display-desc">{activeValueDetail.desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS PERFORMANCE DASHBOARD */}
      <section className="stats-dashboard section-container">
        <div className="dashboard-grid">
          {dashboardStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="stat-bento-card">
                <div className="stat-icon-wrapper">
                  <Icon size={22} />
                </div>
                <div className="stat-number-wrapper">
                  <h3>
                    <Counter to={s.value} />
                    {s.unit && <span className="unit">{s.unit}</span>}
                  </h3>
                </div>
                <h4>{s.label}</h4>
                <p>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. METHODOLOGY ROADMAP */}
      <section className="roadmap-section" id="how-we-do-it">
        <div className="section-container">
          <div className="section-header">
            <span className="hero-tag" style={{ color: '#27ae60', background: 'rgba(39, 174, 96, 0.08)', borderColor: 'rgba(39, 174, 96, 0.15)' }}>
              Proven Roadmap
            </span>
            <h2>10-Step Guide for UAE OOH Entry</h2>
            <p>Our structured, tactical process to launch high-fidelity offline campaigns in the competitive GCC landscape.</p>
          </div>

          <div className="roadmap-container">
            {/* Steps Left List */}
            <div className="timeline-track">
              <div className="timeline-line" />
              <div 
                className="timeline-progress-line"
                style={{ 
                  height: `${(activeStep / (roadmapSteps.length - 1)) * 90 + 5}%` 
                }}
              />

              {roadmapSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className={`timeline-step-btn ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="step-dot" />
                  <div style={{ flex: 1 }}>
                    <div className="step-number">Step {String(idx + 1).padStart(2, '0')}</div>
                    <div className="step-title">{step.title}</div>
                    <div className="step-summary">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Step Detail Right Panel */}
            <div className="blueprint-wrapper">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="blueprint-card"
                >
                  <div className="blueprint-header">
                    <div>
                      <span>Stage Blueprint {String(activeStep + 1).padStart(2, '0')}</span>
                      <h3>{roadmapSteps[activeStep].title}</h3>
                    </div>
                  </div>

                  <div className="blueprint-photo-preview" style={{
                    width: '100%',
                    height: '160px',
                    borderRadius: '12px',
                    backgroundImage: `url(${roadmapSteps[activeStep].photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginBottom: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }} />

                  <div className="blueprint-list-title">Core Activities</div>
                  <div className="blueprint-list">
                    {roadmapSteps[activeStep].details.map((detail, index) => (
                      <div key={index} className="blueprint-item">
                        <CheckCircle2 size={16} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="blueprint-insight">
                    <div className="blueprint-insight-title">UAE Market Insight</div>
                    <p className="blueprint-insight-text">{roadmapSteps[activeStep].insight}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARATIVE DIFFERENTIATORS */}
      <section className="diff-section" id="why-us">
        <div className="section-container">
          <div className="section-header">
            <span className="hero-tag" style={{ color: '#c0392b', background: 'rgba(192, 192, 192, 0.08)', borderColor: 'rgba(192, 192, 192, 0.15)' }}>
              The Ivah Advantage
            </span>
            <h2>Why Choose Ivah Media?</h2>
            <p>How we differ from legacy agencies that prioritize basic placements over commercial ROI and client partnership.</p>
          </div>

          <table className="comparison-table">
            <thead>
              <tr className="comparison-header-row">
                <th>Capability / Feature</th>
                <th>Traditional Agency</th>
                <th>Ivah Media Collective</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr key={index} className="comparison-row">
                  <td className="comparison-cell feature-name">{row.feature}</td>
                  <td className="comparison-cell traditional-val">
                    <XCircle size={16} /> <span>{row.traditional}</span>
                  </td>
                  <td className="comparison-cell ivah-val">
                    <CheckCircle2 size={16} /> <span>{row.ivah}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

      {/* 5. INDUSTRIES PLAYBOOKS */}
      <section className="industries-section" id="industries-we-serve">
        <div className="section-container">
          <div className="section-header">
            <span className="hero-tag" style={{ color: '#27ae60', background: 'rgba(39, 174, 96, 0.08)', borderColor: 'rgba(39, 174, 96, 0.15)' }}>
              Sectors We Empower
            </span>
            <h2>Industries We Serve</h2>
            <p>Our strategic framework translates across major commercial sectors, delivering targeted offline and digital channels for each.</p>
          </div>

          <div className="industries-grid">
            {industrySectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div 
                  key={index} 
                  className="industry-card"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(11, 13, 17, 0.65) 0%, rgba(11, 13, 17, 0.85) 100%), url(${sector.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="industry-card-header">
                    <div className="industry-icon-wrapper">
                      <Icon size={20} />
                    </div>
                    <h4>{sector.name}</h4>
                  </div>
                  
                  <p className="industry-card-body">{sector.desc}</p>
                  
                  <div className="industry-playbook-layer">
                    <div className="playbook-title">OOH & Digital Playbook</div>
                    <p className="playbook-text">{sector.playbook}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SENIOR LEADERSHIP CIRCLE */}
      <section className="leadership-section" id="leadership">
        <div className="section-container">
          <div className="section-header">
            <span className="hero-tag" style={{ color: '#c0392b', background: 'rgba(192, 192, 192, 0.08)', borderColor: 'rgba(192, 192, 192, 0.15)' }}>
              Elite Collective
            </span>
            <h2>Our Leadership Circle</h2>
            <p>Direct access to fractional executive advisors with extensive histories executing successful campaigns in the GCC region.</p>
          </div>

          <div className="team-grid">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-header">
                  <div className="team-role">{member.role}</div>
                  <h3>{member.name}</h3>
                  <div className="team-exp">{member.exp}</div>
                </div>
                <div className="team-focus">Focus: {member.focus}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="cta-section">
        <div className="hero-glow" />
        <div className="section-container" style={{ padding: '100px 24px' }}>
          <div className="cta-content">
            <h2>Ready to map out your strategic roadmap?</h2>
            <p>Contact our fractional executive leads today to construct an omni-channel media campaign that converts attention into sustainable growth.</p>
            <a href="/contact" className="hero-cta-btn">
              Get Started With Us <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
