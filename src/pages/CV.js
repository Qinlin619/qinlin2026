import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const cvData = {
  en: {
    title: 'CV',
    name: 'Qinlin Liu',
    role: 'UX Designer',
    personalInfo: {
      email: 'qinlinliu619@gmail.com',
      phone: '+31 617785667',
      location: 'Barcelona, Spain'
    },
    intro: 'Specialized in creating high-engagement products, with deep expertise in user research, design systems, data analysis, and gamified applications. Full-stack transition background with strong technical efficiency, enabling cross-platform development and seamless alignment with engineering teams.',
    honorsAwards: [
      {
        dates: '2026',
        title: 'MWC Nokia Hackathon - Bronze',
        achievement: 'Designed a disaster escape product using Nokia API & AI under 24 hours.'
      }
    ],
    workHistory: [
      {
        dates: '06/2024 – Present',
        role: 'Co-Founder & UI/UX Lead',
        company: 'EuroStay',
        summary: 'Led product design and operations for a social platform targeting European backpackers, collaborating closely with development and marketing teams.',
        description: [
          'Architecture: Led 0-to-1 architecture design and launch, defining core membership business logic. Achieved 20,000+ active users within 3 months of the July 2025 launch through precise cold-start strategies.',
          'Conversion: Analyzed funnel drop-offs and addressed payment friction through multiple usability tests (including 4 surveys with 3,000+ participants and 300+ interviews). Increased conversion by 80% by streamlining validation and payment paths.',
          'Growth Strategy: Managed Rednote content acquisition, producing 3 videos with 1M+ views and 10+ with 10k+ likes. Achieved 3M+ brand impressions and significantly increased public-to-private traffic conversion.',
          'Community: Managed 40+ private domain communities (500 members each). Tracked real-time user feedback to drive continuous UI/UX logic iterations.'
        ]
      },
      {
        dates: '08/2024 – 02/2025',
        role: 'Philips Hue & WiZ UX Designer',
        company: 'Signify (Philips Lighting)',
        summary: 'Participated in global digital ecosystem construction for Signify\'s dual brands (Philips Hue & WiZ), covering B2C strategy, major campaigns, and website reconstruction.',
        description: [
          'Amazon Strategy: Analyzed 50,000+ user reviews to identify key purchase drivers. Led the A+ page architecture restructure for 200+ products, translating insights into high-conversion visual assets.',
          'Global Campaigns: Redesigned the marketing visual system for the entire product line based on drop-off points. Highlighted "smart linkage" selling points, boosting cross-functional efficiency by 30%.',
          'Website Reconstruction: Optimized the conversion funnel for the WiZ global site. Established a Figma-based modular Design System to ensure brand consistency across multi-continental sites.'
        ]
      },
      {
        dates: '10/2025 – 01/2026',
        role: 'Human-AI Interaction System Researcher',
        company: 'HKUST',
        summary: 'Led user research and full-stack development for the "CoBrush" human-machine collaborative painting system.',
        description: [
          'Research & Data: Conducted 300+ hours of qualitative and quantitative research with 45+ participants. Analyzed cognitive load to rapidly iterate system design via code, increasing user satisfaction by 65%.',
          'Full-Stack: Developed the Franka robot arm interactive console using AI-assisted programming. Decoupled complex human-AI logic and explored high-frequency real-time data visualization.'
        ]
      }
    ],
    projects: [
      {
        dates: '2025',
        title: 'Smart Induction Hob System Redesign',
        company: 'ATAG',
        summary: 'Designed the next-gen interaction system for ATAG, a top Dutch kitchen brand; optimized touch experience hierarchy through prototype validation.',
        description: [
          'Implemented Figma workflows that reduced first-time user learning time by 80%, increased task accuracy by 60%, and boosted hidden feature usage by 75%.'
        ]
      }
    ],
    education: [
      {
        dates: '09/2023 – 08/2025',
        degree: 'M.Sc. Design for Interaction | GPA: 8.2/10.0 (Thesis: 9.5/10)',
        university: 'TU Delft, Netherlands'
      },
      {
        dates: '2020 – 2022',
        degree: 'B.Eng. Industrial Design | GPA: 3.64/4.0',
        university: 'University of Liverpool, United Kingdom'
      }
    ],
    skills: [
      'Design & Strategy: Service Blueprinting, UCD, Design Systems, Wireframing, Rapid Prototyping, Brand Narrative',
      'Research & Validation: Qualitative & Quantitative Research, User Interviews, Journey Mapping, Usability Testing, A/B Testing, Data Analysis',
      'Technical & AI: Figma, AI Workflow, HTML/CSS, React.js, Framer, Adobe Creative Suite'
    ],
    languages: [
      { name: 'Mandarin', level: 'Native' },
      { name: 'English', level: 'Proficient' },
      { name: 'Cantonese', level: 'Proficient' },
      { name: 'Spanish', level: 'Intermediate' },
      { name: 'Dutch', level: 'Beginner' },
      { name: 'Japanese', level: 'Beginner' }
    ],
    hobbies: [
      'Drawing',
      'Musical Instruments',
      'Movies',
      'Reading',
      'Travel',
      'Gaming (600+ titles on Steam/Epic/Mobile/Web; passionate about unique interactions and visually stunning puzzle games)'
    ],
    sections: {
      personalInfo: 'Personal Information',
      honorsAwards: 'Honors & Awards',
      workHistory: 'Professional Experience',
      projects: 'Selected Project',
      education: 'Education',
      skills: 'Core Skills',
      languages: 'Languages',
      hobbies: 'Hobby/Interest',
      contact: 'CONTACT',
      cv: 'CV',
      viewDownload: 'Download'
    }
  },
  zh: {
    title: '简历',
    name: 'Qinlin Liu',
    role: '用户体验设计师',
    personalInfo: {
      email: 'qinlinliu619@gmail.com',
      phone: '+31 617785667',
      location: '西班牙, 巴塞罗那'
    },
    intro: '专注于创建高参与度产品，在用户研究、设计系统、数据分析和游戏化应用方面拥有深厚专业知识。具备全栈转型背景，技术效率高，能够实现跨平台开发并与工程团队无缝对接。',
    honorsAwards: [
      {
        dates: '2026',
        title: 'MWC 诺基亚黑客松 - 铜奖',
        achievement: '在24小时内利用诺基亚 API 和人工智能设计了一款灾难逃生产品。'
      }
    ],
    workHistory: [
      {
        dates: '2024.06 - 至今',
        role: '联合创始人 & UI/UX 设计主管',
        company: 'EuroStay',
        summary: '领导了一款针对欧洲背包客的社交平台的产品设计和运营，与开发和营销团队紧密合作。',
        description: [
          '架构设计：主导 0 到 1 的架构设计与发布，定义核心会员业务逻辑。通过精准的冷启动策略，在 2025 年 7 月上线后的 3 个月内实现了 20,000+ 活跃用户。',
          '转化优化：分析漏斗流失点，通过多次可用性测试（包括 4 次调研、3,000+ 参与者和 300+ 访客访谈）解决支付摩擦。通过简化验证和支付路径，使转化率提高了 80%。',
          '增长策略：负责小红书（Rednote）内容获客，制作了 3 个播放量破百万、10+ 点赞破万的视频。实现了 300万+ 的品牌曝光，显著提升了公域到私域的流量转化。',
          '社群管理：管理 40+ 个私域社群（每个 500 人）。实时追踪用户反馈，驱动 UI/UX 逻辑的持续迭代。'
        ]
      },
      {
        dates: '2024.08 - 2025.02',
        role: 'Philips Hue & WiZ 用户体验设计师',
        company: 'Signify (飞利浦照明)',
        summary: '参与了飞利浦全球数字生态系统建设（Philips Hue & WiZ 双品牌），涵盖 B2C 策略、大型营销活动以及网站重构。',
        description: [
          '亚马逊策略：分析了 50,000+ 条用户评论以识别关键购买驱动因素。主导了 200+产品的 A+ 页面架构重组，将洞察转化为高转化率的视觉资产。',
          '全球营销活动：基于流失点重新设计了全线产品的营销视觉系统。突出“智能联动”卖点，使跨职能协作效率提升了 30%。',
          '网站重构：优化了 WiZ 全球站点的转化漏斗。建立了基于 Figma 的模块化设计系统，确保多洲站点的品牌一致性。'
        ]
      },
      {
        dates: '2025.10 - 2026.01',
        role: '人机 AI 交互系统研究员',
        company: '香港科技大学 (HKUST)',
        summary: '主导了 "CoBrush" 人机协作绘画系统的用户研究和全栈开发。',
        description: [
          '研究与数据：对 45+ 名参与者进行了 300+ 小时的定性和定量研究。分析认知负荷，通过代码快速迭代系统设计，使用户满意度提升了 65%。',
          '全栈开发：利用 AI 辅助编程开发了 Franka 机械臂交互控制台。解耦复杂的 AI 交互逻辑，并探索了高频实时数据可视化。'
        ]
      }
    ],
    projects: [
      {
        dates: '2025',
        title: '智能电磁灶系统再设计',
        company: 'ATAG',
        summary: '为荷兰顶尖厨房品牌 ATAG 设计了下一代交互系统；通过原型验证优化了触控体验层级。',
        description: [
          '实施了 Figma 工作流，使首次用户学习时间减少了 80%，任务准确率提升了 60%，并使隐藏功能的使用率提升了 75%。'
        ]
      }
    ],
    education: [
      {
        dates: '2023.09 - 2025.08',
        degree: '交互设计，理学硕士 | GPA: 8.2/10.0 (论文: 9.5/10)',
        university: '代尔夫特理工大学 (TU Delft), 荷兰'
      },
      {
        dates: '2020 - 2022',
        degree: '工业设计，工程学士 | GPA: 3.64/4.0',
        university: '利物浦大学, 英国'
      }
    ],
    skills: [
      '设计与策略: 服务蓝图, 以用户为中心的设计, 设计系统, 线框图, 快速原型, 品牌叙事',
      '研究与验证: 定性与定量研究, 用户访谈, 旅程地图, 可用性测试, A/B 测试, 数据分析',
      '技术与 AI: Figma, AI 工作流, HTML/CSS, React.js, Framer, Adobe Creative Suite'
    ],
    languages: [
      { name: '普通话', level: '母语' },
      { name: '英语', level: '精通' },
      { name: '粤语', level: '精通' },
      { name: '西班牙语', level: '中级' },
      { name: '荷兰语', level: '初级' },
      { name: '日语', level: '初级' }
    ],
    hobbies: [
      '绘画',
      '乐器',
      '电影',
      '看书',
      '旅行',
      '玩游戏 (Steam/Epic/手机/网页游戏共 600+；热爱体验各种交互与画风精良的解谜游戏)'
    ],
    sections: {
      personalInfo: '个人信息',
      honorsAwards: '荣誉与奖项',
      workHistory: '职业经历',
      projects: '精选项目',
      education: '教育背景',
      skills: '核心技能',
      languages: '语言能力',
      hobbies: '兴趣爱好',
      contact: '联系方式',
      cv: '简历',
      viewDownload: '下载'
    }
  }
};

function CV() {
  const { language } = useLanguage();
  const data = cvData[language] || cvData.en;
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [copyToastMessage, setCopyToastMessage] = useState('');

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyToastMessage(message);
      setShowCopyToast(true);
      setTimeout(() => {
        setShowCopyToast(false);
      }, 2000);
    }).catch(() => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyToastMessage(message);
      setShowCopyToast(true);
      setTimeout(() => {
        setShowCopyToast(false);
      }, 2000);
    });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'qinlinliu619@gmail.com';
    const message = language === 'zh'
      ? `已复制邮件地址 ${email}`
      : `Email address copied ${email}`;
    copyToClipboard(email, message);
  };

  return (
    <div className="page-content cv-page">
      <div className="cv-top-header">
        <div className="cv-name-role">
          <h1>{data.name}</h1>
          <p className="cv-role-text">{data.role}</p>
        </div>
        <div className="cv-header-links">
          <div className="cv-header-link-item">
            <span className="cv-header-link-label">{data.sections.contact}:</span>
            <a
              href="#"
              className="cv-header-email-link"
              onClick={handleEmailClick}
            >
              {data.personalInfo.email}
            </a>
          </div>
          <div className="cv-header-link-item">
            <span className="cv-header-link-label">{data.sections.cv}:</span>
            <a href={`${process.env.PUBLIC_URL}/CV_Qinlin_Liu.pdf?v=${new Date().getTime()}`} className="cv-header-download-link" download>
              {data.sections.viewDownload}
            </a>
          </div>
        </div>
      </div>

      <div className="cv-intro-section">
        <p className="cv-intro-text">{data.intro}</p>
        <p className="cv-location-text">📍 {data.personalInfo.location}</p>
      </div>

      <section className="cv-section">
        <h2>{data.sections.honorsAwards}</h2>
        {data.honorsAwards.map((award, index) => (
          <div key={index} className="cv-item">
            <div className="cv-item-header">
              <strong>{award.title}</strong>
              <span className="cv-dates">{award.dates}</span>
            </div>
            <p className="cv-company">{award.achievement}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>{data.sections.workHistory}</h2>
        {data.workHistory.map((work, index) => (
          <div key={index} className="cv-item">
            <div className="cv-item-header">
              <strong>{work.role}</strong>
              <span className="cv-dates">{work.dates}</span>
            </div>
            <p className="cv-company">{work.company}</p>
            {work.summary && <p className="cv-item-summary"><em>{work.summary}</em></p>}
            {Array.isArray(work.description) ? (
              <ul className="cv-item-list">
                {work.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{work.description}</p>
            )}
          </div>
        ))}
      </section>

      {data.projects && data.projects.length > 0 && (
        <section className="cv-section">
          <h2>{data.sections.projects}</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <strong>{project.title}</strong>
                <span className="cv-dates">{project.dates}</span>
              </div>
              <p className="cv-company">{project.company}</p>
              {project.summary && <p className="cv-item-summary"><em>{project.summary}</em></p>}
              {Array.isArray(project.description) ? (
                <ul className="cv-item-list">
                  {project.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      <section className="cv-section">
        <h2>{data.sections.education}</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="cv-item">
            <div className="cv-item-header">
              <strong>{edu.degree}</strong>
              <span className="cv-dates">{edu.dates}</span>
            </div>
            <p className="cv-company">{edu.university}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>{data.sections.skills}</h2>
        <ul className="cv-list">
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="cv-section">
        <h2>{data.sections.languages}</h2>
        <ul className="cv-list">
          {data.languages.map((lang, index) => (
            <li key={index}>{lang.name} - {lang.level}</li>
          ))}
        </ul>
      </section>

      <section className="cv-section">
        <h2>{data.sections.hobbies}</h2>
        <ul className="cv-list">
          {data.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </section>

      {showCopyToast && (
        <div className="copy-toast">
          {copyToastMessage}
        </div>
      )}
    </div>
  );
}

export default CV;
