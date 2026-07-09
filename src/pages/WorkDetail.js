import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getWorksListByYear } from '../components/WorkGrid';
import CategoryIcons from '../components/CategoryIcons';

function getYoutubeEmbedUrl(url) {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  const watchMatch = trimmed.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  const shortMatch = trimmed.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  return null;
}

function PrototypeEmbed() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const targetWidth = 414; // Width of device-frame + fake padding/shadows
        if (containerWidth < targetWidth) {
          setScale(containerWidth / targetWidth);
        } else {
          setScale(1);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let resizeObserver;
    if (window.ResizeObserver && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem 0',
        height: `${868 * scale}px`,
        overflow: 'visible',
        position: 'relative'
      }}
    >
      <div
        className="app-showcase-hover-container"
        style={{
          width: '414px',
          height: '868px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          position: 'absolute'
        }}
      >
        <div className="app-showcase-device-lift" style={{ width: '100%', height: '100%' }}>
          <iframe
            src={`${process.env.PUBLIC_URL}/work/2026/TripUp/tripup_prototype.html`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '40px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
            }}
            title="TripUp Interactive Prototype"
          />
        </div>
      </div>
    </div>
  );
}

function AppPromotionalShowcase() {
  const { language } = useLanguage();
  
  const en = {
    badge: "Interactive App Demo",
    title: "Experience TripUp",
    desc: "Interact with the live prototype to explore collaborative travel planning:",
    features: [
      { icon: "📍", title: "Itinerary Co-Creation", detail: "Seamless group travel planning" },
      { icon: "📊", title: "Voting Polls", detail: "Quick decision voting on trip details" },
      { icon: "💸", title: "Expense Splitter", detail: "Frictionless group bill splitting" },
      { icon: "📱", title: "iOS Dynamics", detail: "Interactive Dynamic Island popups" }
    ],
    tip: "💡 Tip: Click on any step above to automatically navigate the prototype."
  };

  const zh = {
    badge: "交互式 App 演示",
    title: "体验 TripUp 互动原型",
    desc: "在右侧模拟并操作团队协同旅行流程：",
    features: [
      { icon: "📍", title: "协同规划", detail: "多人协同设计旅行日程" },
      { icon: "📊", title: "即时投票", detail: "快速决定行程和聚餐去处" },
      { icon: "💸", title: "费用分账", detail: "清晰直观地分摊和结算开销" },
      { icon: "📱", title: "灵动岛交互", detail: "状态弹窗与消息即时反馈" }
    ],
    tip: "💡 提示：点击上方任意步骤，右侧原型会自动跳转到对应页面。"
  };

  const t = language === 'zh' ? zh : en;

  const handleFeatureClick = (stepIndex) => {
    const iframe = document.querySelector('iframe[title="TripUp Interactive Prototype"]');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'NAVIGATE_TO_STEP', step: stepIndex }, '*');
    }
  };

  return (
    <div className="app-showcase-card">
      <div className="app-showcase-grid">
        <div className="app-showcase-left">
          <div className="app-showcase-badge">
            <span className="app-showcase-badge-dot" />
            {t.badge}
          </div>
          <h3 className="app-showcase-title">{t.title}</h3>
          <p className="app-showcase-desc">{t.desc}</p>
          
          <div className="app-showcase-features">
            {t.features.map((f, idx) => (
              <div 
                key={idx} 
                className="app-showcase-feature-item"
                onClick={() => handleFeatureClick(idx + 1)}
              >
                <span className="app-showcase-feature-icon">
                  <span className="feature-number">{idx + 1}</span>
                </span>
                <div className="app-showcase-feature-text">
                  <span className="app-showcase-feature-title">{f.icon} &nbsp;{f.title}</span>
                  <span className="app-showcase-feature-detail">{f.detail}</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="app-showcase-tip">{t.tip}</p>
        </div>
        
        <div className="app-showcase-right">
          <PrototypeEmbed />
        </div>
      </div>
    </div>
  );
}

function EuroStayPrototypeEmbed() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const targetWidth = 414; // Width of device-frame + fake padding/shadows
        if (containerWidth < targetWidth) {
          setScale(containerWidth / targetWidth);
        } else {
          setScale(1);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let resizeObserver;
    if (window.ResizeObserver && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem 0',
        height: `${868 * scale}px`,
        overflow: 'visible',
        position: 'relative'
      }}
    >
      <div
        className="app-showcase-hover-container"
        style={{
          width: '414px',
          height: '868px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          position: 'absolute'
        }}
      >
        <div className="app-showcase-device-lift" style={{ width: '100%', height: '100%' }}>
          <iframe
            src={`${process.env.PUBLIC_URL}/work/2026/eurostay/eurostay_prototype.html`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '40px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
            }}
            title="EuroStay Interactive Prototype"
          />
        </div>
      </div>
    </div>
  );
}

function EuroStayPromotionalShowcase() {
  const { language } = useLanguage();
  
  const en = {
    badge: "Interactive App Demo",
    title: "Experience EuroStay",
    desc: "Interact with the live prototype to explore host matching and community flows:",
    features: [
      { icon: "✨", title: "Onboarding Flow", detail: "Fast guide to finding your perfect host swap" },
      { icon: "🔍", title: "Search & Filters", detail: "Filter listings by type & location" },
      { icon: "🏡", title: "Profile & Booking", detail: "View host profiles & submit requests" },
      { icon: "💬", title: "Notifications & Chats", detail: "Simulated messages and iOS popups" }
    ],
    tip: "💡 Tip: Click on any step above, or click on the mobile screen to navigate."
  };

  const zh = {
    badge: "交互式 App 演示",
    title: "体验 EuroStay 互动原型",
    desc: "在右侧模拟并操作核心换宿流程：",
    features: [
      { icon: "✨", title: "新手向导", detail: "快速了解互助换宿机制" },
      { icon: "🔍", title: "搜索与筛选", detail: "按国家与类型筛选房源" },
      { icon: "🏡", title: "主机与申请", detail: "浏览主机档案并提交申请表单" },
      { icon: "💬", title: "通知与消息", detail: "灵动岛即时反馈与聊天通知" }
    ],
    tip: "💡 提示：点击上方任意步骤，或直接点击手机屏幕进行切换。"
  };

  const t = language === 'zh' ? zh : en;

  const handleFeatureClick = (stepIndex) => {
    const iframe = document.querySelector('iframe[title="EuroStay Interactive Prototype"]');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'NAVIGATE_TO_STEP', step: stepIndex }, '*');
    }
  };

  return (
    <div className="app-showcase-card">
      <div className="app-showcase-grid">
        <div className="app-showcase-left">
          <div className="app-showcase-badge">
            <span className="app-showcase-badge-dot" />
            {t.badge}
          </div>
          <h3 className="app-showcase-title">{t.title}</h3>
          <p className="app-showcase-desc">{t.desc}</p>
          
          <div className="app-showcase-features">
            {t.features.map((f, idx) => (
              <div 
                key={idx} 
                className="app-showcase-feature-item"
                onClick={() => handleFeatureClick(idx + 1)}
                style={{ cursor: 'pointer' }}
              >
                <span className="app-showcase-feature-icon">{f.icon}</span>
                <div className="app-showcase-feature-text">
                  <span className="app-showcase-feature-title">{f.title}</span>
                  <span className="app-showcase-feature-detail">{f.detail}</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="app-showcase-tip">{t.tip}</p>
        </div>
        
        <div className="app-showcase-right">
          <EuroStayPrototypeEmbed />
        </div>
      </div>
    </div>
  );
}

const workData = {
  en: {
    9: {
      title: 'EuroStay',
      description: "World's #1 Chinese backpacker community in Europe",
      year: 2026,
      category: 'Branding. UI/UX. Community. Mobile App',
      heroImage: `${process.env.PUBLIC_URL}/work/2026/eurostay/banner.png`,
      images: [],
      fadeBanner: false,
      hideHeaderTitle: true,
      links: [
        { url: 'https://www.eurostay.co', text: 'Visit EuroStay Website' },
        { url: `${process.env.PUBLIC_URL}/work/2026/EuroStay.pdf`, text: 'Brand Manual (PDF)' }
      ],
      overview: (
        <div className="ux-case-study" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <EuroStayPromotionalShowcase />
          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Challenge</h3>
            <p>How can we transform a traditional forum-based community into a modern, mobile-first ecosystem that feels both premium and accessible? The challenge was to modernize a decade-old legacy platform while maintaining the deep trust and connection established within the existing Chinese backpacker community in Europe.</p>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Vision & Solution</h3>
            <p>EuroStay 2026 serves as the definitive bridge between travelers and hosts. We reimagined the digital experience to foster deeper connections and seamless travel planning, combining a modern aesthetic with the core values of authentic cultural exchange and safety.</p>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Process & Insights</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>Community-Centric Architecture:</strong> Analyzing over a decade of community interactions to identify core user needs—safety, authenticity, and ease of discovery.</li>
              <li><strong>Modernizing Legacy:</strong> Moving from a fragmented thread-based system to a streamlined, interactive app experience designed for <em>Maximum Simplicity</em>.</li>
              <li><strong>Trust & Verification:</strong> Implementing a premium design language that conveys reliability, coupled with a robust verification framework to ensure a safe ecosystem for all members.</li>
            </ul>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Design: Brand Identity & Design System</h3>
            <p style={{ marginBottom: '1rem' }}>We developed a vibrant yet professional color palette inspired by European sunsets and the spirit of exploration. The new visual language represents the bridge between travelers and the diverse cultures they explore.</p>
            <img src={`${process.env.PUBLIC_URL}/work/2026/eurostay/designsystem.png`} alt="EuroStay Brand Identity & Design System" style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0' }} />
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Design: App Experience & High-Fidelity</h3>
            <p style={{ marginBottom: '1rem' }}>The project is currently under active development. Due to confidentiality and its unreleased status, we are unable to disclose high-fidelity detailed interface designs at this stage.</p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <a href="https://apps.apple.com/es/app/eurostay/id6746250674" target="_blank" rel="noopener noreferrer" className="eurostay-appstore-text-link">
                Interested? You can download and try it out ➔
              </a>
            </div>

            <a href="https://apps.apple.com/es/app/eurostay/id6746250674" target="_blank" rel="noopener noreferrer" className="eurostay-appstore-large-image">
              <img src={`${process.env.PUBLIC_URL}/work/2026/eurostay/appstore.png`} alt="EuroStay on the App Store" />
            </a>

            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://www.eurostay.co" target="_blank" rel="noopener noreferrer" className="eurostay-appstore-text-link">
                Or visit our official website to explore online ➔
              </a>
            </div>
          </section>
          
          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Core Values</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Connection</h4>
                <p style={{ fontSize: '0.9rem' }}>Bridging travelers and hosts globally to explore life's infinite possibilities.</p>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Kindness</h4>
                <p style={{ fontSize: '0.9rem' }}>Encouraging mutual aid and genuine, sincere human interaction.</p>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Exploration</h4>
                <p style={{ fontSize: '0.9rem' }}>Supporting the curiosity to discover new cultures and ways of living.</p>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Experience</h4>
                <p style={{ fontSize: '0.9rem' }}>Prioritizing authentic, local life experiences over traditional tourism.</p>
              </div>
            </div>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Stories</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <blockquote style={{ padding: '1.5rem', borderLeft: '4px solid #000', backgroundColor: '#fff', fontStyle: 'italic' }}>
                "Sincere emotional exchange, the beginning of a beautiful journey."
              </blockquote>
              <blockquote style={{ padding: '1.5rem', borderLeft: '4px solid #000', backgroundColor: '#fff', fontStyle: 'italic' }}>
                "Cats grow on your head when you sleep! — An unforgettable exchange experience."
              </blockquote>
            </div>
          </section>

        </div>
      ),
      overviewExtra: '',
      role: 'Creative Director & UI/UX Lead',
      roleDesc: 'Responsible for leading the complete brand overhaul and digital product strategy, ensuring a cohesive and premium experience across all touchpoints.',
      process: ['Community Research', 'Brand Strategy', 'UI/UX Redesign', 'Identity Verification System', 'Interactive Prototypes'],
      insights: ['Trust-Based Social Dynamics', 'Mobile-First Community Discovery', 'Premium Visual Storytelling'],
      results: 'A comprehensive reimagining of the EuroStay ecosystem that has revitalized the community for a new generation of travelers.'
    },
    10: {
      title: 'TripUp',
      description: 'Streamlining the group travel experience through collaborative planning and real-time social dynamics.',
      year: 2026,
      category: 'Group. User Interface. User Experience. Mobile App',
      heroImage: `${process.env.PUBLIC_URL}/work/2026/TripUp/banner.png`,
      fadeBanner: false,
      hideHeaderTitle: true,
      overview: (
        <div className="ux-case-study" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <AppPromotionalShowcase />

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Challenge</h3>
            <p>Friend trips are great. Organizing a friend trip? Less great. Deciding where to go, exploring options, and keeping everyone in the loop can get frustrating, fast. The challenge was to transform the fragmented group travel planning process into a unified, seamless experience.</p>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Vision & Solution</h3>
            <p>TripUp serves as an all-in-one platform for organizing seamless group travel. Whether it’s a weekend getaway or a music festival abroad, users can collaboratively build itineraries, vote on decisions, and settle expenses—reducing planning friction and amplifying the fun.</p>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Process & Insights</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>The Organizer vs Participants:</strong> Built around the dynamic of a proactive organizer and involved participants. The architecture is designed for <em>Maximum Simplicity</em>.</li>
              <li><strong>Spontaneous Decisions:</strong> Most choices happen mid-trip. The app must support quick interactions and a collective voice. The contextual goal is <em>Rapid Decisions via diverse displays</em>.</li>
              <li><strong>Frictionless Finance:</strong> Users prefer quick polls over chats and need easy ways to manage and settle group expenses. The priority is <em>Interactive Status Sync and Payment</em>.</li>
            </ul>
          </section>

          <hr className="case-divider" />
          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Scenario Logic Flow</h3>
            <p style={{ marginBottom: '1rem' }}>Visualizing the end-to-end user journey, from initiating a quick group dinner poll to concluding with a frictionless expense settlement. It translates abstract user needs into actionable interface events.</p>
            <img src={`${process.env.PUBLIC_URL}/work/2026/TripUp/Flow.png`} alt="TripUp Scenario Logic Flow" style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0' }} />
          </section>

          <hr className="case-divider" />
          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Design: Wireflow & Architecture</h3>
            <p style={{ marginBottom: '1rem' }}>Mapping out the navigation and interaction architecture to ensure a low-friction journey across all key features.</p>
            <img src={`${process.env.PUBLIC_URL}/work/2026/TripUp/Wireflow.png`} alt="TripUp Wireflow" style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0' }} />
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Design: Visual System & High-Fidelity</h3>
            <p style={{ marginBottom: '1rem' }}>Developing a vibrant, premium visual identity using modern typography. The final high-fidelity screens showcase real-time social dynamics, collaborative planning, and seamless expense splitting.</p>
            <img src={`${process.env.PUBLIC_URL}/work/2026/TripUp/Designsystem.png`} alt="TripUp Design System" style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }} />
            <img src={`${process.env.PUBLIC_URL}/work/2026/TripUp/Highfi.png`} alt="TripUp High Fidelity UI" style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0' }} />
          </section>
        </div>
      ),
      overviewExtra: '',
      role: 'UX/UI Designer',
      roleDesc: 'Responsible for end-to-end redesign, translating abstract user needs into concrete, actionable interface events to map out a seamless and intuitive functional flow.',
      process: ['User Behavioral Intelligence', 'Scenario Logic Flow', 'Wireflow & Navigation', 'Design System', 'High-Fidelity Screens'],
      insights: ['Contextual Goal Setting', 'Rapid Decisions via Diverse Displays', 'Interactive Status Sync and Payment'],
      outcome: (
        <div className="outcome-wrapper">
          <h3 className="outcome-title">Outcome: Planning That Feels Like Part of the Journey</h3>
          <p className="outcome-intro">This interactive application transformed fragmented travel planning into a seamless, collaborative social experience:</p>
          <ul className="outcome-list">
            <li>Groups made faster, collective decisions without endless chat threads</li>
            <li>Organizers reduced planning friction and coordinated effortlessly</li>
            <li>Travelers stayed synced in real-time through context-aware status updates</li>
          </ul>
          <p className="outcome-summary">The work demonstrated how intuitive UX/UI and micro-interactions (like Dynamic Island integration) can turn a stressful logistics task into an exciting, shared pre-trip ritual—delivering value by maximizing active user participation and satisfaction in group coordination.</p>
        </div>
      ),
      results: 'A comprehensive mobile app redesign that streamlines the group travel experience.'
    },

    1: {
      title: 'Pixelated Adventures',
      description: 'A board game design offering a novel way for people to share their travel memories.',
      year: 2024,
      category: 'Individual. User Experience. Product',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/0.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/0.png`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/Pixelated Adventures.pdf`, text: 'Full Project (PDF)' }
      ],
      overview: (
        <>
          <p>Pixelated Adventures - a board game design on my Exploring Interaction course, offering a novel way for people to share their travel memories. I began by examining the challenges of souvenir selection, delving deeper into the inadequacies of traditional storytelling, and exploring innovative methods to enhance these experiences with interactivity and appeal.</p>
          <div className="featured-photos-grid" style={{ marginBottom: '2rem' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <img
                key={num}
                src={`${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/${num}.png`}
                alt={`Pixelated Adventures featured ${num}`}
                className="featured-photo-placeholder"
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/Pixelated Adventures.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Pixelated Adventures Project PDF"
            />
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'Designer',
      roleDesc: 'In this project, I was responsible for the complete design process from research and ideation to prototyping and testing, creating an engaging board game experience that transforms how people share travel memories.',
      process: ['Research & Analysis', 'Concept Development', 'Prototyping', 'User Testing', 'Refinement'],
      insights: ['Gamification in Storytelling', 'Physical Product Design', 'User Experience Innovation'],
      results: 'The design successfully transforms traditional travel memory sharing into an interactive and engaging board game experience.'
    },
    2: {
      title: 'E.C.H.O.',
      description: 'A community robot that interacts with residents, collects stories, and explores the role of robots in future neighborhoods.',
      year: 2024,
      category: 'Group. Programming. Artificial Intelligence. Product',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/6.jpg`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/6.jpg`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/E.C.H.O-poster.pdf`, text: 'Project Poster (PDF)' },
        { url: 'https://www.youtube.com/watch?v=nBapYYWg-BI', text: 'Exhibition Video (YouTube)' },
        { url: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/Meet E.C.H.O.mp4`, text: 'Final Project Video (MP4)' },
        { url: 'https://github.com/Qinlin619/E.C.H.O.git', text: 'Source Code (GitHub)' }
      ],
      overview: (
        <>
          <p>E.C.H.O. is a robot in the community that interacts with residents, collects their stories, and records them. With the introduction of ECHO we wanted to ask questions considering the role of the robot (or robots) in the neighbourhoods of the future.</p>
          <div className="featured-photos-grid" style={{ marginBottom: '2rem' }}>
            {[2, 3, 4, 5, 6, 7].map(num => {
              let ext = 'png';
              if (num === 2 || num === 4) ext = 'jpeg';
              if (num === 6 || num === 7) ext = 'jpg';
              return (
                <img
                  key={num}
                  src={`${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/${num}.${ext}`}
                  alt={`E.C.H.O. featured ${num}`}
                  className="featured-photo-placeholder"
                  style={{ objectFit: 'cover' }}
                />
              );
            })}
          </div>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/E.C.H.O-poster.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="E.C.H.O. Project Poster PDF"
            />
          </div>
        </>
      ),
      youtubeUrl: '',
      videoUrl: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/Meet E.C.H.O.mp4`,
      overviewExtra: '',
      role: 'Designer & Developer',
      roleDesc: 'In this group project, I contributed to the design and development of E.C.H.O., exploring how robots can become part of community life and facilitate social interactions.',
      process: ['Research & Concept', 'Prototyping', 'Development', 'Community Testing', 'Refinement'],
      insights: ['Human-Robot Interaction', 'Community Engagement', 'AI in Social Context'],
      results: 'The project successfully explores the potential role of robots as community members and raises important questions about future neighborhoods.'
    },
    3: {
      title: 'Lambanana Tour',
      description: 'A guide map and souvenir for the Museum of Liverpool designed to encourage children to be more active and knowledgeable when visiting.',
      year: 2023,
      category: 'Individual. Child Play. Museum',
      heroImage: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/LambananaTour.pdf`, text: 'Project Details (PDF)' }
      ],
      overview: (
        <>
          <p>Created as a specialized guide for the Museum of Liverpool, the Lambanana Tour project aimed to gamify the museum experience for children. The illustrated map and interactive souvenir set encourage young visitors to explore specific exhibits and engage with Liverpool's rich history in a playful, memorable way.</p>
          <div className="featured-photos-grid" style={{ marginBottom: '2rem' }}>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <img
                key={num}
                src={`${process.env.PUBLIC_URL}/work/2023/1LambananaTour/${num}.png`}
                alt={`Lambanana Tour featured ${num}`}
                className="featured-photo-placeholder"
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2023/1LambananaTour/LambananaTour.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Lambanana Tour Project PDF"
            />
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'Project Designer & Illustrator',
      roleDesc: 'Responsible for the entire design cycle, from initial research on child-museum interaction to the final illustration and production of the physical guide materials.',
      process: ['Museum Context Research', 'Child Engagement Study', 'Illustration & Map Design', 'Prototyping'],
      insights: ['Gamification in Education', 'Visual Communication for Children', 'Public Space Navigation'],
      results: 'The final guide received positive feedback from museum educators for its ability to hold children\'s attention and facilitate deeper learning.'
    },
    4: {
      title: 'Lemur Go',
      description: 'A device designed for people to interact remotely with lemurs in the zoo, helping animals during lockdowns and assisting zoos recoup financial losses.',
      year: 2023,
      category: 'Individual. Well-being. Zoo. Installation',
      heroImage: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/LemurGo.pdf`, text: 'Project Details (PDF)' }
      ],
      overview: (
        <>
          <p>Lemur Go is a telepresence installation designed to bridge the gap between people and zoo animals during periods of isolation. The system allows remote users to interact with lemurs through digital interfaces, providing mental stimulation for the animals and a unique conservation-focused experience for the users.</p>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2023/2LemurGo/LemurGo.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Lemur Go Project PDF"
            />
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'Lead Designer & Researcher',
      roleDesc: 'Led the research into animal-computer interaction (ACI) and developed the hardware/software prototype for the remote engagement system.',
      process: ['ACI Research', 'System Architecture', 'Installation Prototyping', 'User Interaction Design'],
      insights: ['Non-Human User Experience', 'Remote Presence Technology', 'Animal Enrichment'],
      results: 'Successfully demonstrated how remote technology can support animal welfare and zoo sustainability in crisis conditions.'
    },
    5: {
      title: 'Doozi',
      description: 'A set of wheelchair accessories for children with disabilities, featuring a domino cart for multi-skill learning and a musical puzzle carpet for interactive entertainment.',
      year: 2022,
      category: 'Group. Well-being. Child Play. Programming',
      heroImage: `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2022/1Doozi/Doozi.pdf`, text: 'Project Details (PDF)' }
      ],
      overview: (
        <>
          <p>Doozi is an innovative set of wheelchair accessories designed specifically for children with physical disabilities. The project includes a robotic domino-laying cart that helps children practice motor skills and spatial reasoning, and a musical puzzle carpet that provides tactile and auditory feedback. Our goal was to transform the wheelchair from just a mobility aid into a platform for play and social integration.</p>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2022/1Doozi/Doozi.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Doozi Project Details PDF"
            />
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'Interaction Designer & Developer',
      roleDesc: 'Led the interaction design and programmed the robotic components, ensuring the technology was accessible, safe, and engaging for children with varying levels of mobility.',
      process: ['Inclusive Design Research', 'Electronic Prototyping', 'User Interaction Logic', 'Co-design with Children'],
      insights: ['Designing for Accessibility', 'Play as Therapy', 'Assistive Robotics Interaction'],
      results: 'A working prototype that demonstrated the potential of "playful rehabilitation," received warmly by special education specialists.'
    },
    6: {
      title: 'Happy Little Pill',
      description: 'An inclusive banded pill box designed for elderly people with Alzheimer\'s to help them with daily medication needs, raising awareness of the importance of inclusive design.',
      year: 2022,
      category: 'Group. Well-being. User Experience. User Interface',
      heroImage: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/HappyLittlePill.pdf`, text: 'Project Details (PDF)' }
      ],
      overview: (
        <>
          <p>Happy Little Pill is an inclusive medication management system specifically designed for elderly individuals living with Alzheimer's. The product utilizes tactile and visual cues (color-coding and embossed patterns) to help users identify their medication schedule independently, reducing the anxiety and risk associated with daily pill intake.</p>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/HappyLittlePill.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Happy Little Pill Project Details PDF"
            />
          </div>
        </>
      ),
      overviewExtra: 'The project emphasizes "Dignity in Design," focusing on how everyday objects can be modified to empower those with cognitive impairments.',
      role: 'UX Designer & Visual Designer',
      roleDesc: 'Conducted user journey mapping for elderly patients and designed the visual language and tactile feedback system for the pill box and companion app interface.',
      process: ['Elderly User Research', 'Ergonomic Testing', 'High-fidelity UI Design', 'Tactile Feedback Prototyping'],
      insights: ['Cognitive Load Management', 'Inclusive Design Principles', 'Health & Well-being UX'],
      results: 'A highly intuitive design that significantly reduced medication errors in simulated user testing environments.'
    },
    7: {
      title: 'Atag Induction Hob',
      description: 'Redesign the Atag Induction Hob for enhanced usability, targeting a dependable and convenient cooking experience at home.',
      year: 2024,
      category: 'Group. User Interface. User Experience. Redesign',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/banner.png`,
      images: [],
      hideBanner: false,
      hideHeaderTitle: true,
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/AtagInductionHob-report1.pdf`, text: 'Phase 1 Report (PDF)' },
        { url: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/AtagInductionHob-report2.pdf`, text: 'Phase 2 Report (PDF)' },
        { url: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/AtagInductionHob-report3.pdf`, text: 'Phase 3 Final Report (PDF)' },
        { url: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/poster.pdf`, text: 'Project Poster (PDF)' }
      ],
      overview: (
        <>
          <p>The project focuses on redesigning the interface and physical interaction of the Atag induction hob to reduce cognitive load and improve user safety. We analyzed user pain points in modern kitchens and proposed a more intuitive layout and feedback system.</p>
          <div className="featured-photos-grid" style={{ marginBottom: '2rem' }}>
            {['1.png', '2.png', '3.png', '4.jpg'].map(file => (
              <img
                key={file}
                src={`${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/${file}`}
                alt="Atag Induction Hob featured"
                className="featured-photo-placeholder"
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/poster.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Atag Induction Hob Project Poster PDF"
            />
          </div>
        </>
      ),
      videoUrl: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/UxadFinalPrototype.mp4`,
      overviewExtra: '',
      role: 'UX/UI Designer',
      roleDesc: 'Responsible for user research, prototype design, and usability testing, ensuring a seamless bridge between user needs and technical functionality.',
      process: ['Requirement Analysis', 'User Journey Mapping', 'Interaction Prototyping', 'Usability Testing', 'Final Refinement'],
      insights: ['Intuitive Interaction Design', 'Safety in Home Appliances', 'Human-Centered Ergonomics'],
      results: 'The redesigned hob proved to be significantly more intuitive in user tests, reducing operational errors and enhancing the overall cooking experience.'
    },
    14: {
      title: 'Intimate Relationship',
      description: 'An immersive experience exploring Klimt\'s "The Kiss" using graphic processing technology.',
      year: 2024,
      category: 'Individual. Digital Artwork. Programming Modelling',
      heroImage: '',
      images: [],
      overview: (
        <>
          <p>This project is an immersive digital reinterpretation of Gustav Klimt's masterpiece "The Kiss". By utilizing advanced graphic processing and 3D modeling, we decomposed the original painting into layered textures and patterns, allowing viewers to "step inside" the artwork and experience the intimacy of the moment from a new perspective.</p>
          <div className="work-detail-iframe-container" style={{ margin: '2rem 0', width: '100%', aspectRatio: '16/9' }}>
            <iframe
              src="https://editor.p5js.org/Qinlin619/full/RqFTk8dEs"
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Intimate Relationship Interactive"
            />
          </div>
        </>
      ),
      overviewExtra: 'The project focuses on how digital technology can enhance our emotional connection to classical art, transforming a 2D surface into a 3D space of sensory experience.',
      role: 'Digital Artist & Developer',
      roleDesc: 'Responsible for the entire creative and technical process, including digital asset creation, shader programming, and interactive environment design.',
      process: ['Artistic Analysis', 'Digital Layering', '3D Scene Reconstruction', 'Interactive Shader Design'],
      insights: ['Digitalizing Classical Art', 'Spatial Storytelling', 'Emotional Computing'],
      results: 'A compelling immersive installation that offers a modern perspective on one of Art Nouveau\'s most iconic works.'
    },
    11: {
      title: 'Cobrush',
      description: 'A collaborative system that enables humans and robots to paint together through multi-turn interactions.',
      year: 2025,
      category: 'Group. Human-Computer Interaction. Programming',
      heroImage: `${process.env.PUBLIC_URL}/work/2025/Cobrush/1.png`,
      youtubeUrl: '',
      images: [
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/2.JPEG`,
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/1.png`,
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/6.JPEG`
      ],
      videoUrl: `${process.env.PUBLIC_URL}/work/2025/Cobrush/demo.mp4`,
      links: [
        { url: 'https://drive.google.com/file/d/1BobzI21AxCLVOF8Xc_KllsoJ6xXeGM8-/view?usp=drivesdk', text: 'Watch Original Video (850MB)' }
      ],
      achievements: (
        <div className="project-achievements" style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600, color: '#000' }}>Achievements & Publications</h3>
          <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
            <li>
              <strong>Academic Publication (Graduation Thesis Project):</strong> 3rd Author, "A Hierarchical Planning Framework for Human–Robot Co-Painting", 2026 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) (Accepted)
            </li>
            <li>
              <strong>Artistic Exhibition:</strong> Visual art piece "The Eye - Human robot collaborating painting" selected and exhibited at AIART Gallery 2026 (Accepted)
            </li>
          </ul>
        </div>
      ),
      overview: (
        <>
          <p>With the rapid advancement of generative AI, digital image generation has become highly automated. While efficiency increases, bodily engagement and sensory interaction diminish, leaving people more detached and often relegated to passive oversight. This shift has motivated the development of painting robots that reintroduce physical action and shared control between humans and machines. However, most existing systems prioritize single-turn output quality and overlook process-oriented aspects such as rhythm, control, and interaction. To bridge this gap, we propose CoBrush, which combines generative AI with robotic arms to enable human painters and AI to interact on a physical canvas. A user study demonstrates that CoBrush improved users’ sense of control by predicting and decomposing the painting process, enhanced creative engagement with human-like gestures and brushstroke expressions, and provided greater artistic satisfaction via an interactive, embodied co-creation experience.</p>
          <div style={{ marginTop: '1.5rem', color: '#666', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Submission is currently under discussion. Full project report is not available for display at this moment.
          </div>
        </>
      ),
      overviewExtra: '',
      role: 'Designer & Developer',
      roleDesc: 'In this team project, I contributed to the design and development of the collaborative painting system, focusing on interaction design and multi-turn dialogue between user and robot.',
      process: ['Research & Concept', 'Interaction Design', 'Prototyping', 'Robot Integration', 'User Testing'],
      insights: ['Human-Robot Collaboration', 'Creative AI', 'Multi-turn Interaction'],
      results: 'The system successfully enables co-creative painting sessions between humans and robots, opening possibilities for collaborative art and assistive creativity.'
    },
    261: {
      title: 'Flavorblocks',
      description: 'A small game designed for my parents to pass the time.',
      year: 2026,
      overview: (
        <>
          <p>A small game designed for my parents to pass the time.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map(num => `${process.env.PUBLIC_URL}/side/GameDesign-Flavorblocks/${num}.png`).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Flavorblocks screenshot ${idx + 1}`}
                style={{ width: '100%', maxWidth: '800px', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <a
              href="https://qinlin619.github.io/FlavorBlocks/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <span>Play Game: Flavorblocks</span>
              <span style={{ fontSize: '0.85em', textDecoration: 'none' }}>➔</span>
            </a>
          </div>
        </>
      )
    },
    262: {
      title: 'Color&Color',
      description: 'A simple "match" game featuring socks, planned to evolve into various derivative matching games.',
      year: 2026,
      category: 'Individual. Game Dev & Design',
      overview: (
        <>
          <p>A simple "match" game featuring socks, planned to evolve into various derivative matching games.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
            {[1, 2, 3, 4].map(num => (
              <img
                key={num}
                src={`${process.env.PUBLIC_URL}/side/GameDesign-Color&Color/${num}.png`}
                alt={`Color&Color screenshot ${num}`}
                style={{ width: '100%', maxWidth: '800px', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <a
              href="https://qinlin619.github.io/Color-Color/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              Play Game: Color&Color
            </a>
          </div>
        </>
      )
    }
  },
  zh: {
    9: {
      title: '欧洲换宿EuroStay',
      description: '世界第一的欧洲华人背包客社区',
      year: 2026,
      category: '品牌设计. UI/UX. 社区. 移动应用',
      heroImage: `${process.env.PUBLIC_URL}/work/2026/eurostay/banner.png`,
      images: [],
      fadeBanner: false,
      hideHeaderTitle: true,
      links: [
        { url: 'https://www.eurostay.co', text: '访问 EuroStay 官网' },
        { url: `${process.env.PUBLIC_URL}/work/2026/EuroStay.pdf`, text: '品牌手册 (PDF)' }
      ],
      overview: (
        <div className="ux-case-study" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <EuroStayPromotionalShowcase />
          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>挑战 (The Challenge)</h3>
            <p>我们如何将传统的基于论坛的社区转变为一个现代的、移动优先的生态系统，既让年轻旅行者感到高端，又具有亲和力？挑战在于在保持现有欧洲华人背包客社区多年建立的深厚信任和连接的同时，对这个已有十年历史的传统平台进行现代化改造。</p>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>愿景与解决方案 (The Vision & Solution)</h3>
            <p>EuroStay 2026 是旅行者和主机之间的核心桥梁。我们重新构思了数字体验，以促进更深层次的连接和无缝的旅行规划，将现代美学与真实文化交流和安全的核心价值相结合。</p>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>思考过程与洞察 (Process & Insights)</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>以社区为核心的架构：</strong> 分析了十多年的社区互动，以确定核心用户需求——安全、真实和易于发现。</li>
              <li><strong>现代化传统平台：</strong> 从碎片化的基于帖子的系统转变为流线型的、交互式的应用体验，旨在实现<em>极致的简约 (Maximum Simplicity)</em>。</li>
              <li><strong>信任与验证：</strong> 采用了传达可靠性的高级设计语言，结合强大的验证框架，为所有成员确保一个安全的生态系统。</li>
            </ul>
          </section>



          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>设计：应用体验与高保真 (App Experience & High-Fidelity)</h3>
            <p style={{ marginBottom: '1rem' }}>该项目目前仍处于开发与迭代阶段。应保密与未发布协议要求，现阶段暂不方便展示过多高保真（Hi-Fi）界面设计细节图。</p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <a href="https://apps.apple.com/es/app/eurostay/id6746250674" target="_blank" rel="noopener noreferrer" className="eurostay-appstore-text-link">
                感兴趣可以去下载试试看 ➔
              </a>
            </div>

            <a href="https://apps.apple.com/es/app/eurostay/id6746250674" target="_blank" rel="noopener noreferrer" className="eurostay-appstore-large-image">
              <img src={`${process.env.PUBLIC_URL}/work/2026/eurostay/appstore.png`} alt="EuroStay App Store" />
            </a>

            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://www.eurostay.co" target="_blank" rel="noopener noreferrer" className="eurostay-appstore-text-link">
                您也可以访问我们的官方网站，在线探索完整的社区平台 ➔
              </a>
            </div>
          </section>
          
          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>核心价值 (Core Values)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>连接与分享</h4>
                <p style={{ fontSize: '0.9rem' }}>连接世界各地的旅行者，探索生活的无限可能性。</p>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>传递善意</h4>
                <p style={{ fontSize: '0.9rem' }}>鼓励互助和真诚的人际互动，让善意在旅途中传递。</p>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>探索与好奇</h4>
                <p style={{ fontSize: '0.9rem' }}>支持发现新文化和新生活方式的好奇心。</p>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>深度体验</h4>
                <p style={{ fontSize: '0.9rem' }}>优先考虑真实的当地生活体验，而非传统的走马观花。</p>
              </div>
            </div>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>社区故事 (The Stories)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <blockquote style={{ padding: '1.5rem', borderLeft: '4px solid #000', backgroundColor: '#fff', fontStyle: 'italic' }}>
                “真诚的情感交换，美好旅程的开始。”
              </blockquote>
              <blockquote style={{ padding: '1.5rem', borderLeft: '4px solid #000', backgroundColor: '#fff', fontStyle: 'italic' }}>
                “睡觉时头上会长猫耶！—— 一段令人难忘的换宿经历。”
              </blockquote>
            </div>
          </section>

        </div>
      ),
      overviewExtra: '',
      role: '创意总监 & UI/UX 主导',
      roleDesc: '负责领导整个品牌重塑和数字产品战略，确保所有触点上都有一致且高端的体验。',
      process: ['社区研究', '品牌战略', 'UI/UX 重构', '身份验证系统', '交互原型'],
      insights: ['基于信任的社交动态', '移动优先的社区发现', '高端视觉叙事'],
      results: '对 EuroStay 生态系统的全面重构，使社区为新一代旅行者焕发了活力。'
    },
    10: {
      title: 'TripUp',
      description: '通过协作规划和实时社交动态，简化团队旅行体验的移动应用重构。',
      year: 2026,
      category: '团队. 用户界面. 用户体验. 移动应用',
      heroImage: `${process.env.PUBLIC_URL}/work/2026/TripUp/banner.png`,
      fadeBanner: false,
      hideHeaderTitle: true,
      overview: (
        <div className="ux-case-study" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <AppPromotionalShowcase />

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>挑战 (The Challenge)</h3>
            <p>和朋友一起旅行固然美好，但组织一场朋友旅行却往往没那么顺利。决定去哪里、探索各种选项，并让每个人都保持信息同步——这些过程很容易让人感到挫败。我们的挑战在于将碎片化的群组旅行规划过程转变为一个统一、无缝的体验。</p>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>愿景与解决方案 (The Vision & Solution)</h3>
            <p>TripUp 是一个用于组织无缝团队旅行的一站式平台。无论是周末度假还是国外的音乐节，用户都可以协同制定行程、进行决策投票以及结算费用——这大大减少了规划过程中的摩擦，让旅行更加有趣。</p>
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>思考过程与洞察 (Process & Insights)</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>组织者 vs 参与者：</strong> 围绕积极的组织者和热情的参与者之间的动态进行构建。整体架构旨在实现<em>极致的简约 (Maximum Simplicity)</em>。</li>
              <li><strong>自发性决策：</strong> 大多数选择都是在旅途中即兴作出的。应用必须支持快速互动和集体发声。我们的情境目标是<em>通过多样化展示实现快速决策 (Rapid Decisions)</em>。</li>
              <li><strong>无摩擦的财务管理：</strong> 用户更喜欢快速投票而不是冗长的聊天，并且需要简单的方法来管理和结算群组费用。我们的首要任务是<em>交互式状态同步与支付 (Interactive Status Sync and Payment)</em>。</li>
            </ul>
          </section>

          <hr className="case-divider" />
          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>场景逻辑流 (Scenario Logic Flow)</h3>
            <p style={{ marginBottom: '1rem' }}>可视化端到端的用户旅程，从发起一个快速的群组晚餐投票到最终完成无摩擦的费用结算。它将抽象的用户需求转化为具体的、可操作的界面事件。</p>
            <img src={`${process.env.PUBLIC_URL}/work/2026/TripUp/Flow.png`} alt="TripUp Scenario Logic Flow" style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0' }} />
          </section>

          <hr className="case-divider" />
          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>设计：线框流与架构 (Wireflow & Architecture)</h3>
            <p style={{ marginBottom: '1rem' }}>梳理导航和交互架构，以确保所有关键功能都能提供低阻力的用户体验。</p>
            <img src={`${process.env.PUBLIC_URL}/work/2026/TripUp/Wireflow.png`} alt="TripUp Wireflow" style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0' }} />
          </section>

          <section className="case-section">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>设计：视觉系统与高保真 (Visual System & High-Fidelity)</h3>
            <p style={{ marginBottom: '1rem' }}>使用现代排版开发出充满活力、具有高级感的视觉系统。最终的高保真屏幕展示了实时的社交动态、协作规划以及无缝的费用分摊体验。</p>
            <img src={`${process.env.PUBLIC_URL}/work/2026/TripUp/Designsystem.png`} alt="TripUp Design System" style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }} />
            <img src={`${process.env.PUBLIC_URL}/work/2026/TripUp/Highfi.png`} alt="TripUp High Fidelity UI" style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0' }} />
          </section>
        </div>
      ),
      overviewExtra: '',
      role: 'UX/UI 设计师',
      roleDesc: '负责端到端的应用重构，将抽象的用户需求转化为具体、可操作的界面事件，从而规划出无缝、直观的功能流程。',
      process: ['用户行为分析', '场景逻辑流', '线框图与导航', '设计系统', '高保真界面'],
      insights: ['情景目标设定', '通过多样化展示快速决策', '交互式状态同步与支付'],
      outcome: (
        <div className="outcome-wrapper">
          <h3 className="outcome-title">成果：让规划本身成为旅程的起点</h3>
          <p className="outcome-intro">这款交互式应用将零碎复杂的团队旅行规划转变为无缝、协同的社交体验：</p>
          <ul className="outcome-list">
            <li>团队无需冗长的聊天就能快速达成集体决策</li>
            <li>组织者显著减少了协调摩擦，轻松完成行程安排</li>
            <li>旅行者通过即时上下文状态同步在旅途中保持完美同频</li>
          </ul>
          <p className="outcome-summary">本项目展示了直观的 UX/UI 设计与微交互（例如灵动岛的整合）如何将繁琐的物流协调转变为令人兴奋的行前共享仪式——通过最大化团队协作中的用户参与度和满意度来创造深层价值。</p>
        </div>
      ),
      results: '一次全面的移动应用重构，显著简化了团队旅行的体验。'
    },

    1: {
      title: 'Pixelated Adventures',
      description: '一款桌面实体互动游戏，为人们分享旅行回忆提供了一种新颖的方式。',
      year: 2024,
      category: '个人项目. 用户体验. 产品',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/0.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/0.png`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/Pixelated Adventures.pdf`, text: '查看完整项目 (PDF)' }
      ],
      overview: (
        <>
          <p>Pixelated Adventures - 我在探索交互课程中设计的桌面实体互动游戏，为人们分享旅行回忆提供了一种新颖的方式。我从研究纪念品选择的挑战开始，深入探讨传统叙事的不足，并探索创新方法，通过互动性和吸引力来增强这些体验。</p>
          <div className="featured-photos-grid" style={{ marginBottom: '2rem' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <img
                key={num}
                src={`${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/${num}.png`}
                alt={`Pixelated Adventures featured ${num}`}
                className="featured-photo-placeholder"
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2024/1PixelatedAdventures/Pixelated Adventures.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Pixelated Adventures Project PDF"
            />
          </div>
        </>
      ),
      overviewExtra: '',
      role: '设计师',
      roleDesc: '在这个项目中，我负责从研究和构思到原型制作和测试的完整设计过程，创造了一个引人入胜的棋盘游戏体验，改变了人们分享旅行回忆的方式。',
      process: ['研究与分析', '概念开发', '原型制作', '用户测试', '优化改进'],
      insights: ['叙事中的游戏化', '实体产品设计', '用户体验创新'],
      results: '该设计成功地将传统的旅行回忆分享转变为互动且引人入胜的棋盘游戏体验。'
    },
    2: {
      title: 'E.C.H.O.',
      description: '一个社区机器人，与居民互动、收集故事，探索机器人在未来社区中的角色。',
      year: 2024,
      category: '团队. 编程. 人工智能. 产品',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/6.jpg`,
      images: [
        `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/6.jpg`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/E.C.H.O-poster.pdf`, text: '项目海报 (PDF)' },
        { url: 'https://www.youtube.com/watch?v=nBapYYWg-BI', text: '展览视频 (YouTube)' },
        { url: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/Meet E.C.H.O.mp4`, text: '最终成品视频 (MP4)' },
        { url: 'https://github.com/Qinlin619/E.C.H.O.git', text: '项目代码库 (GitHub)' }
      ],
      overview: (
        <>
          <p>E.C.H.O.是一个社区机器人，与居民互动、收集他们的故事并记录下来。通过引入ECHO，我们想要探讨机器人在未来社区中的角色。</p>
          <div className="featured-photos-grid" style={{ marginBottom: '2rem' }}>
            {[2, 3, 4, 5, 6, 7].map(num => {
              let ext = 'png';
              if (num === 2 || num === 4) ext = 'jpeg';
              if (num === 6 || num === 7) ext = 'jpg';
              return (
                <img
                  key={num}
                  src={`${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/${num}.${ext}`}
                  alt={`E.C.H.O. 精选照片 ${num}`}
                  className="featured-photo-placeholder"
                  style={{ objectFit: 'cover' }}
                />
              );
            })}
          </div>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/E.C.H.O-poster.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="E.C.H.O. Project Poster PDF"
            />
          </div>
        </>
      ),
      youtubeUrl: '',
      videoUrl: `${process.env.PUBLIC_URL}/work/2024/2E.C.H.O/Meet E.C.H.O.mp4`,
      overviewExtra: '',
      role: '设计师 & 开发者',
      roleDesc: '在这个团队项目中，我参与了E.C.H.O.的设计和开发，探索机器人如何成为社区生活的一部分并促进社交互动。',
      process: ['研究与概念', '原型制作', '开发实现', '社区测试', '优化改进'],
      insights: ['人机交互', '社区参与', 'AI在社会场景中的应用'],
      results: '该项目成功探索了机器人作为社区成员的潜在角色，并提出了关于未来社区的重要问题。'
    },
    3: {
      title: 'Lambanana Tour',
      description: '为利物浦博物馆设计的导览地图和纪念品，鼓励儿童在参观博物馆时更加积极和知识丰富。',
      year: 2023,
      category: '个人项目. 儿童游戏. 博物馆',
      heroImage: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/1.png`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2023/1LambananaTour/LambananaTour.pdf`, text: '作品详情 (PDF)' }
      ],
      overview: (
        <>
          <p>该项目是为利物浦博物馆专门设计的导览系统，旨在平衡儿童的娱乐性与教育性。通过插画地图和互动纪念品，鼓励年轻观众探索特定展品，以一种游戏化且难忘的方式了解利物浦丰富的历史。</p>
          <div className="featured-photos-grid" style={{ marginBottom: '2rem' }}>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <img
                key={num}
                src={`${process.env.PUBLIC_URL}/work/2023/1LambananaTour/${num}.png`}
                alt={`Lambanana Tour 精选照片 ${num}`}
                className="featured-photo-placeholder"
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2023/1LambananaTour/LambananaTour.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Lambanana Tour Project PDF"
            />
          </div>
        </>
      ),
      overviewExtra: '',
      role: '项目设计师 & 插画师',
      roleDesc: '负责整个设计周期，从最初关于儿童与博物馆互动的研究，到最终插画绘制及实体导览材料的制作。',
      process: ['博物馆语境研究', '儿童参与度研究', '插画与地图设计', '原型制作'],
      insights: ['教育游戏化', '面向儿童的视觉传达', '公共空间导航'],
      results: '最终的导览系统获得了博物馆教育人员的积极反馈，认为其能有效吸引儿童注意力并促进更深入的学习。'
    },
    4: {
      title: 'Lemur Go',
      description: '为人们设计的远程与动物园狐猴互动的装置，帮助封锁期间的动物，并协助动物园挽回部分财务损失。',
      year: 2023,
      category: '个人项目. 健康福祉. 动物园. 装置',
      heroImage: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2023/2LemurGo/1.png`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2023/2LemurGo/LemurGo.pdf`, text: '作品详情 (PDF)' }
      ],
      overview: (
        <>
          <p>Lemur Go 是一项远程呈现装置，旨在疫情隔离期间搭建人与动物园动物之间的桥梁。该系统允许远程用户通过数字界面与狐猴进行交互，为动物提供心理刺激，同时也为用户提供独特的以保护为导向的体验。</p>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2023/2LemurGo/LemurGo.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Lemur Go Project PDF"
            />
          </div>
        </>
      ),
      overviewExtra: '',
      role: '主设计师 & 研究员',
      roleDesc: '领导了动物与计算机交互 (ACI) 的研究，并开发了远程参与系统的硬件和软件原型。',
      process: ['ACI 研究', '系统架构', '装置原型制作', '用户交互设计'],
      insights: ['非人类用户体验', '远程呈现技术', '动物行为丰富化'],
      results: '成功展示了远程技术如何在危机条件下支持动物福利和动物园的可持续发展。'
    },
    5: {
      title: 'Doozi',
      description: '为残疾儿童设计的一套轮椅配件，包括用于多技能学习的多功能小车和用于交互娱乐的音乐解谜地毯。',
      year: 2022,
      category: '团队项目. 健康福祉. 儿童游戏. 编程',
      heroImage: `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2022/1Doozi/1.png`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2022/1Doozi/Doozi.pdf`, text: '作品详情 (PDF)' }
      ],
      overview: (
        <>
          <p>Doozi 是一套专门为肢体残疾儿童设计的创新轮椅配件。该项目包括一个能自动摆放多米诺骨牌的机器人小车（帮助儿童锻炼运动技能和空间推理能力），以及一个提供触觉 and 听觉反馈的音乐解谜地毯。我们的目标是将轮椅从单纯的移动辅助工具转变为一个促进玩耍和社交融合的平台。</p>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2022/1Doozi/Doozi.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Doozi Project Details PDF"
            />
          </div>
        </>
      ),
      overviewExtra: '',
      role: '交互设计师 & 开发者',
      roleDesc: '领导了交互设计并编写了机器人组件的程序，确保技术方案对于不同运动能力等级的儿童都是无障碍、安全且有趣的。',
      process: ['包容性设计研究', '电子原型制作', '用户交互逻辑', '儿童参与式设计'],
      insights: ['为无障碍而设计', '玩耍即治疗', '辅助机器人交互'],
      results: '一个展示了“趣味康复”潜力的可工作原型，受到了特殊教育专家的好评。'
    },
    6: {
      title: 'Happy Little Pill',
      description: '一款为阿兹海默症老年人设计的包容性药盒，帮助其日常生活中的服药需求，提高人们对包容性设计重要性的认识。',
      year: 2022,
      category: '团队项目. 健康福祉. 用户体验. 用户界面',
      heroImage: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`,
      images: [
        `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/1.png`
      ],
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/HappyLittlePill.pdf`, text: '作品详情 (PDF)' }
      ],
      overview: (
        <>
          <p>Happy Little Pill 是一款专为阿兹海默症老年患者设计的包容性药物管理系统。该产品利用触觉和视觉提示（色彩编码和浮雕图案）帮助用户独立识别服药时间表，减少日常服药带来的焦虑 and 风险。</p>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2022/2HappyLittlePill/HappyLittlePill.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Happy Little Pill Project Details PDF"
            />
          </div>
        </>
      ),
      overviewExtra: '该项目强调“尊严设计”，关注如何通过改造日常物品来赋能认知障碍群体。',
      role: 'UX 设计师 & 视觉设计师',
      roleDesc: '为老年患者进行了用户旅程映射，并为药盒以及配套 App 界面设计了视觉语言 and 触觉反馈系统。',
      process: ['老年用户研究', '人机工程学测试', '高保真 UI 设计', '触觉反馈原型制作'],
      insights: ['认知负荷管理', '包容性设计原则', '数字健康与福祉 UX'],
      results: '一种高度直觉化的设计，在模拟用户测试环境中显著降低了服药错误率。'
    },
    7: {
      title: 'Atag Induction Hob',
      description: '重新设计Atag感应炉，提升可用性，旨在提供可靠且便捷的家庭烹饪体验。',
      year: 2024,
      category: '团队. 用户界面. 用户体验. 重新设计',
      heroImage: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/banner.png`,
      images: [],
      hideBanner: false,
      hideHeaderTitle: true,
      links: [
        { url: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/AtagInductionHob-report1.pdf`, text: '第一阶段报告 Phase 1 (PDF)' },
        { url: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/AtagInductionHob-report2.pdf`, text: '第二阶段报告 Phase 2 (PDF)' },
        { url: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/AtagInductionHob-report3.pdf`, text: '第三阶段最终报告 Phase 3 (PDF)' },
        { url: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/poster.pdf`, text: '项目海报 (PDF)' }
      ],
      overview: (
        <>
          <p>该项目专注于重新设计 Atag 感应炉的界面和物理交互，以降低用户的认知负荷并提高安全性。我们分析了现代厨房中的用户痛点，并提出了更直观的布局和反馈系统。</p>
          <div className="featured-photos-grid" style={{ marginBottom: '2rem' }}>
            {['1.png', '2.png', '3.png', '4.jpg'].map(file => (
              <img
                key={file}
                src={`${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/${file}`}
                alt="Atag Induction Hob 精选照片"
                className="featured-photo-placeholder"
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
          <div className="work-pdf-embed-container">
            <iframe
              src={`${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/poster.pdf#toolbar=0&view=FitH`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Atag Induction Hob Project Poster PDF"
            />
          </div>
        </>
      ),
      videoUrl: `${process.env.PUBLIC_URL}/work/2024/3AtagInductionHob/UxadFinalPrototype.mp4`,
      overviewExtra: '',
      role: 'UX/UI 设计师',
      roleDesc: '负责用户研究、原型设计、可用性测试，确保在用户需求与技术功能之间建立无缝衔接。',
      process: ['需求分析', '用户旅程图', '交互原型设计', '可用性测试', '最终优化'],
      insights: ['直观交互设计', '家电安全性', '以人为本的工效学设计'],
      results: '重新设计的感应炉在用户测试中被证明更为直观，显著减少了操作错误，提升了整体烹饪体验。'
    },
    14: {
      title: 'Intimate Relationship',
      description: '使用图形处理技术探索克林姆特《吻》的沉浸式体验。',
      year: 2024,
      category: '个人项目. 数字化艺术. 编程建模',
      heroImage: '',
      images: [],
      overview: (
        <>
          <p>该项目是对古斯塔夫·克林姆特名作《吻》的沉浸式数字化重新诠释。通过利用先进的图形处理 and 3D 建模技术，我们将原作分解为多层纹理和图案，使观众能够“走进”作品内部，从全新的视角体验瞬间的亲密感。</p>
          <div className="work-detail-iframe-container" style={{ margin: '2rem 0', width: '100%', aspectRatio: '16/9' }}>
            <iframe
              src="https://editor.p5js.org/Qinlin619/full/RqFTk8dEs"
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Intimate Relationship Interactive"
            />
          </div>
        </>
      ),
      overviewExtra: '项目重点探讨了数字技术如何增强我们与古典艺术的情感联系，将 2D 平面转化为感官体验的 3D 空间。',
      role: '数字艺术家 & 开发者',
      roleDesc: '负责整个创意和技术过程，包括数字资产创建、着色器编程以及交互式环境设计。',
      process: ['艺术分析', '数字分层', '3D 场景重建', '交互式着色器设计'],
      insights: ['古典艺术数字化', '空间叙事', '情感计算'],
      results: '一个引人入胜的沉浸式装置，为工艺美术运动最具标志性的作品之一提供了现代视角。'
    },
    11: {
      title: 'Cobrush',
      description: '一个让人和机器人能够通过多轮交互一起画画的协同系统。',
      year: 2025,
      category: '团队. 人机交互. 编程',
      heroImage: `${process.env.PUBLIC_URL}/work/2025/Cobrush/1.png`,
      youtubeUrl: '',
      images: [
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/2.JPEG`,
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/1.png`,
        `${process.env.PUBLIC_URL}/work/2025/Cobrush/6.JPEG`
      ],
      videoUrl: `${process.env.PUBLIC_URL}/work/2025/Cobrush/demo.mp4`,
      links: [
        { url: 'https://drive.google.com/file/d/1BobzI21AxCLVOF8Xc_KllsoJ6xXeGM8-/view?usp=drivesdk', text: '查看原画视频 (850MB)' }
      ],
      achievements: (
        <div className="project-achievements" style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600, color: '#000' }}>学术成果与展览</h3>
          <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
            <li>
              <strong>学术发表（毕业设计项目）：</strong> 第三作者，"A Hierarchical Planning Framework for Human–Robot Co-Painting", 2026 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) (Accepted)
            </li>
            <li>
              <strong>艺术展览：</strong> 视觉艺术作品 "The Eye - Human robot collaborating painting" 入选并展出毕于 AIART Gallery 2026 (Accepted)
            </li>
          </ul>
        </div>
      ),
      overview: (
        <>
          <p>随着生成式人工智能的飞速发展，数字图像生成已经高度自动化。虽然效率有所提高，但身体参与感和感官交互却在减少，使人们感到疏离，往往只能处于被动监督的状态。这种转变促使了绘画机器人的发展，它们重新引入了身体动作以及人机之间的共享控制。然而，大多数现有系统优先考虑单次输出的质量，而忽视了节奏、控制和交互等面向过程的方面。为了弥补这一差距，我们提出了 CoBrush，它将生成式 AI 与机械臂相结合，使人类画家 and AI 能够物理画布上进行交互。一项用户研究表明，CoBrush 通过预测和分解绘画过程，提高了用户的控制感；通过类人姿态 and 笔触表达，增强了创作参与感；并通过交互式、具身化的共同创作体验，提供了更高极的艺术满意度。</p>
          <div style={{ marginTop: '1rem', color: '#666', fontStyle: 'italic' }}>
            作品正在商议投稿中，不方便进行展示，请见谅
          </div>
        </>
      ),
      overviewExtra: '',
      role: '设计师 & 开发者',
      roleDesc: '在这个团队项目中，我参与了协同绘画系统的设计与开发，侧重交互设计与用户和机器人之间的多轮对话。',
      process: ['研究与概念', '交互设计', '原型制作', '机器人集成', '用户测试'],
      insights: ['人机协同创作', '创意 AI', '多轮交互'],
      results: '系统成功实现了人与机器人的共同绘画会话，为协同艺术与辅助创作提供了可能。'
    },
    261: {
      title: 'Flavorblocks',
      description: '想为爸爸妈妈设计一些打磨时间的小游戏。',
      year: 2026,
      overview: (
        <>
          <p>想为爸爸妈妈设计一些打磨时间的小游戏。</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map(num => `${process.env.PUBLIC_URL}/side/GameDesign-Flavorblocks/${num}.png`).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Flavorblocks 截图 ${idx + 1}`}
                style={{ width: '100%', maxWidth: '800px', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <a
              href="https://qinlin619.github.io/FlavorBlocks/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <span>游玩链接：Flavorblocks</span>
              <span style={{ fontSize: '0.85em', textDecoration: 'none' }}>➔</span>
            </a>
          </div>
        </>
      )
    },
    262: {
      title: 'Color&Color',
      description: '想做一个袜子对对碰的小游戏，这个是简易版本的match，之后会做很多衍生的match。',
      year: 2026,
      category: '个人项目. 游戏开发与设计',
      overview: (
        <>
          <p>想做一个袜子对对碰的小游戏，这个是简易版本的match，之后会做很多衍生的match。</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
            {[1, 2, 3, 4].map(num => (
              <img
                key={num}
                src={`${process.env.PUBLIC_URL}/side/GameDesign-Color&Color/${num}.png`}
                alt={`Color&Color 截图 ${num}`}
                style={{ width: '100%', maxWidth: '800px', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <a
              href="https://qinlin619.github.io/Color-Color/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-pdf-link"
            >
              游玩链接：Color&Color
            </a>
          </div>
        </>
      )
    }
  }
};

const sectionLabels = {
  en: {
    back: '← Back to Work',
    overview: 'Project Overview',
    role: 'My Role',
    process: 'Development Process',
    images: 'Project Images',
    insights: 'Key Insights',
    featuredPhotos: 'Featured Photos',
    moreProjects: 'More Projects',
    prevProject: 'Previous project',
    nextProject: 'Next project',
    notFound: 'Project Not Found',
    notFoundDesc: 'Under construction.',
    loading: 'Loading',
    loadingDesc: 'Project content is being prepared.'
  },
  zh: {
    back: '← 返回作品',
    overview: '项目概述',
    role: '我的角色',
    process: '开发流程',
    images: '项目图片',
    insights: '关键洞察',
    featuredPhotos: '精选照片',
    moreProjects: '更多作品',
    prevProject: '上一个项目',
    nextProject: '下一个项目',
    notFound: '项目未找到',
    notFoundDesc: '正在建设中',
    loading: '加载中',
    loadingDesc: '项目内容正在准备中。'
  }
};

const PREMIUM_PROJECTS = [];

function WorkDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const numericId = parseInt(id, 10);
  const work = workData[language]?.[numericId] || workData.en[numericId];
  const labels = sectionLabels[language] || sectionLabels.en;
  const [isVisible, setIsVisible] = useState(false);

  const worksList = useMemo(() => getWorksListByYear(language), [language]);
  const otherProjects = useMemo(() => {
    return worksList.filter((w) => w.id !== numericId);
  }, [numericId, worksList]);

  const workFromList = useMemo(() => {
    if (work) return null;
    return worksList.find((w) => w.id === numericId) || null;
  }, [work, worksList, numericId]);

  const currentIndex = useMemo(() => worksList.findIndex((w) => w.id === numericId), [worksList, numericId]);
  const prevProject = currentIndex > 0 ? worksList[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < worksList.length - 1 ? worksList[currentIndex + 1] : null;

  const moreScrollRef = useRef(null);
  const ARROW_SCROLL = 600;

  const scrollBy = useCallback((delta) => {
    const el = moreScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [id, language]);

  const isPremium = PREMIUM_PROJECTS.includes(numericId);

  const moreSection = (
    <section className={`work-detail-more ${isPremium ? 'premium-more' : 'work-detail-more-desktop'}`} aria-label={labels.moreProjects}>
      <h2 className="work-detail-more-title">{labels.moreProjects}</h2>
      <div className="work-detail-more-row">
        <button type="button" className="work-detail-more-arrow work-detail-more-arrow-left" aria-label="Previous" onClick={() => scrollBy(-ARROW_SCROLL)} />
        <div className="work-detail-more-scroll-wrap">
          <div className="work-detail-more-scroll" ref={moreScrollRef}>
            <div className="work-detail-more-list">
              {otherProjects.map((w) => (
                <Link key={w.id} to={`/work/${w.id}`} className="work-detail-more-item">
                  <div className="work-detail-more-item-image-wrap">
                    <img src={w.image} alt={w.title} className="work-detail-more-item-image" />
                    <div className="work-detail-more-item-overlay" aria-hidden />
                    <div className="work-detail-more-item-caption">
                      <span className="work-detail-more-item-title">{w.title}</span>
                      <span className="work-detail-more-item-year">{w.year}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <button type="button" className="work-detail-more-arrow work-detail-more-arrow-right" aria-label="Next" onClick={() => scrollBy(ARROW_SCROLL)} />
      </div>
    </section>
  );

  const prevNextSection = (prevProject || nextProject) ? (
    <nav className="work-detail-prev-next-nav" aria-label="Previous / Next project">
      <div className="work-detail-prev-next-inner">
        {prevProject ? (
          <Link to={`/work/${prevProject.id}`} className="work-prev-next-btn work-prev-btn">
            <span className="arrow-left" />
            <div className="btn-text">
              <span className="btn-label">{labels.prevProject}</span>
              <span className="btn-title">{prevProject.title}</span>
            </div>
          </Link>
        ) : (
          <div className="work-prev-next-btn work-prev-btn disabled" />
        )}
        {nextProject ? (
          <Link to={`/work/${nextProject.id}`} className="work-prev-next-btn work-next-btn">
            <div className="btn-text">
              <span className="btn-label">{labels.nextProject}</span>
              <span className="btn-title">{nextProject.title}</span>
            </div>
            <span className="arrow-right" />
          </Link>
        ) : (
          <div className="work-prev-next-btn work-next-btn disabled" />
        )}
      </div>
    </nav>
  ) : null;

  if (!work) {
    const notFoundTitle = workFromList ? workFromList.title : labels.notFound;
    return (
      <>
        <div className="page-content work-detail-loading">
          <h1>{notFoundTitle}</h1>
          <p>{labels.notFoundDesc}</p>
          <Link to="/">{labels.back}</Link>
        </div>
        {moreSection}
        {prevNextSection}
      </>
    );
  }

  // Premium Layout inspired by manana.today
  if (isPremium) {
    return (
      <div className={`premium-detail ${isVisible ? 'visible' : ''}`}>
        <div className="premium-hero">
          <div className="premium-hero-inner">
            <img src={work.heroImage} alt={work.title} className="premium-hero-img" />
          </div>
        </div>

        <header className="premium-header">
          <Link to="/" className="work-detail-back" style={{ position: 'relative', top: 'auto', left: 'auto', marginBottom: '2rem', display: 'inline-block' }}>{labels.back}</Link>
          <h1 className="premium-title">{work.title}</h1>
          
          <div className="premium-meta-grid">
            <div className="premium-meta-item">
              <h4>Role</h4>
              <p>{work.role}</p>
            </div>
            <div className="premium-meta-item">
              <h4>Client</h4>
              <p>{work.client}</p>
            </div>
            <div className="premium-meta-item">
              <h4>Deadline</h4>
              <p>{work.deadline}</p>
            </div>
            <div className="premium-meta-item">
              <h4>Category</h4>
              <div>
                {work.category.split('.').map((cat, i) => (
                  <span key={i} className="premium-label">{cat.trim()}</span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="premium-content-section">
          <div className="premium-grid-2">
            <div>
              <h3 className="premium-section-title">Introduction</h3>
              <p className="premium-text-block">{work.intro}</p>
            </div>
            <div>
              <h3 className="premium-section-title">The Challenge</h3>
              <p className="premium-text-block">{work.challenge}</p>
            </div>
          </div>
        </section>

        {work.sections && work.sections.map((section, idx) => (
          <section key={idx} className="premium-content-section">
            <h3 className="premium-section-title">{section.title}</h3>
            <p className="premium-text-block" style={{ marginBottom: '3rem' }}>{section.text}</p>
            <div className="premium-grid-2">
              {section.images && section.images.map((img, i) => (
                <div key={i} className="premium-img-wrap">
                  <img src={img} alt={`${section.title} ${i}`} />
                </div>
              ))}
            </div>
          </section>
        ))}

        <nav className="premium-footer-nav">
          {prevProject ? (
            <Link to={`/work/${prevProject.id}`} className="premium-footer-link">
              ← Prev
            </Link>
          ) : <div />}
          {nextProject ? (
            <Link to={`/work/${nextProject.id}`} className="premium-footer-link">
              Next →
            </Link>
          ) : <div />}
        </nav>
      </div>
    );
  }

  const bannerImages = work.hideBanner ? [] : (work.images && work.images.length > 0 ? work.images : (work.heroImage ? [work.heroImage] : []));

  return (
    <>
      <div className={`page-content work-detail ${isVisible ? 'visible' : ''}`}>
        {bannerImages.length > 0 && (
          <div className={`work-detail-banner ${bannerImages.length === 1 ? 'is-single' : ''} ${work.fadeBanner ? 'banner-fade-out' : ''}`} aria-hidden>
            {bannerImages.map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </div>
        )}
        {work.links && work.links.length > 0 && (
          <div className="work-banner-below-links">
            {work.links.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="work-pdf-link">
                {link.text} ➔
              </a>
            ))}
          </div>
        )}
        <header className="work-detail-header">
          <Link to="/" className="work-detail-back">{labels.back}</Link>
          <div className="work-meta">
            <span className="work-year">{work.year}</span>
            {work.category && (
              <CategoryIcons category={work.category} className="work-category-tags" />
            )}
          </div>
          {!work.hideHeaderTitle && (
            <>
              <h1 className="work-detail-title">{work.title}</h1>
              <p className="work-description">{work.description}</p>
            </>
          )}
        </header>
        <div className="work-content">
          {work.role && (
            <section className="work-section-block">
              <h2>{labels.role}</h2>
              <div className="role-content">
                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{work.role}</p>
                <p className="text-content">{work.roleDesc}</p>
              </div>
            </section>
          )}

          <section className="work-section-block">
            {parseInt(id, 10) !== 8 && <h2>{labels.overview}</h2>}
            {work.achievements && (
              <div className="work-achievements-wrapper" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                {work.achievements}
              </div>
            )}
            {((work.youtubeUrl && getYoutubeEmbedUrl(work.youtubeUrl)) || work.videoUrl) && (
              <div className="work-detail-video-wrap" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                <div className="video-browser-mockup">
                  <div className="browser-header-bar">
                    <div className="browser-dots">
                      <span className="browser-dot red" />
                      <span className="browser-dot yellow" />
                      <span className="browser-dot green" />
                    </div>
                    <div className="browser-url-bar">
                      {work.youtubeUrl ? work.youtubeUrl : (
                        <>
                          {numericId === 7 && 'https://qinlin619.github.io/Atag-Induction-Hob/'}
                          {numericId === 2 && 'https://qinlin619.github.io/E.C.H.O/'}
                          {numericId === 11 && 'https://qinlin619.github.io/CoBrush/'}
                          {![2, 7, 11].includes(numericId) && 'https://qinlin619.github.io/Portfolio/'}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="work-detail-video">
                    {work.youtubeUrl ? (
                      <iframe
                        title={work.title}
                        src={getYoutubeEmbedUrl(work.youtubeUrl)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={work.videoUrl}
                        controls
                        style={{ width: '100%', height: '100%', display: 'block' }}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
            <div className="text-content">
              {typeof work.overview === 'string' ? <p>{work.overview}</p> : work.overview}
              {work.overviewExtra && <p>{work.overviewExtra}</p>}
            </div>
          </section>

          {work.outcome ? (
            <section className="work-section-block">
              {work.outcome}
            </section>
          ) : (
            work.insights && work.insights.length > 0 && (
              <section className="work-section-block">
                <h2>{labels.insights}</h2>
                <div className="insights-grid">
                  {work.insights.map((item, idx) => (
                    <div key={idx} className="insight-card">{item}</div>
                  ))}
                </div>
              </section>
            )
          )}


        </div>
        {prevNextSection}
      </div>
      {moreSection}
    </>
  );
}

export default WorkDetail;
